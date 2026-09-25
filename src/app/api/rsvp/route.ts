import { NextResponse } from "next/server";
import { appendGroomRsvp, SheetAppendError, SheetConfigError } from "@/lib/google-sheets";
import type { RsvpPayload } from "@/lib/rsvp";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const defaultOrigins = [
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "https://raiyaan555.github.io",
];

function allowedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return null;

  const configured = (process.env.RSVP_ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  const allowed = new Set([...defaultOrigins, ...configured]);
  return allowed.has(origin) ? origin : null;
}

function withCors(response: NextResponse, request: Request) {
  const origin = allowedOrigin(request);
  if (!origin) return response;

  response.headers.set("Access-Control-Allow-Origin", origin);
  response.headers.set("Vary", "Origin");
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}

export function OPTIONS(request: Request) {
  return withCors(new NextResponse(null, { status: 204 }), request);
}

function isPayload(value: unknown): value is RsvpPayload {
  if (!value || typeof value !== "object") return false;
  const body = value as Record<string, unknown>;
  return (
    typeof body.attending === "boolean" &&
    typeof body.name === "string" &&
    typeof body.guestCount === "number" &&
    Array.isArray(body.events) &&
    typeof body.dietary === "string" &&
    typeof body.message === "string" &&
    typeof body.submittedAt === "string"
  );
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return withCors(NextResponse.json({ ok: false, error: "Invalid reply." }, { status: 400 }), request);
  }

  if (!isPayload(payload) || !payload.name.trim()) {
    return withCors(
      NextResponse.json({ ok: false, error: "Please complete the required fields." }, { status: 400 }),
      request,
    );
  }

  if (payload.invitationSource === "groom") {
    return withCors(await saveGroomRsvp(payload), request);
  }

  const webhook = process.env.RSVP_SHEET_WEBHOOK;

  if (!webhook) {
    return NextResponse.json(
      {
        ok: false,
        error: "Google Sheet is not connected yet. Add RSVP_SHEET_WEBHOOK to .env.local.",
      },
      { status: 503 },
    );
  }

  const sheetRow = {
    timestamp: payload.submittedAt,
    name: payload.name.trim(),
    attending: payload.attending ? "Yes" : "No",
    guests: payload.guestCount,
    events: payload.events.join(", "),
    dietary: payload.dietary || "",
    message: payload.message.trim(),
  };

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sheetRow),
      redirect: "follow",
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, error: "Google Sheet did not accept the reply. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not reach the Google Sheet. Please try again." },
      { status: 502 },
    );
  }
}

async function saveGroomRsvp(payload: RsvpPayload) {
  try {
    await appendGroomRsvp({
      timestamp: payload.submittedAt,
      name: payload.name.trim(),
      attending: payload.attending ? "Yes" : "No",
      guests: payload.guestCount,
      events: payload.events.join(", "),
      dietary: payload.dietary || "",
      message: payload.message.trim(),
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof SheetConfigError) {
      return NextResponse.json(
        { ok: false, error: "Google Sheet is not connected yet." },
        { status: 503 },
      );
    }

    console.error(
      error instanceof SheetAppendError
        ? "Groom RSVP sheet append failed"
        : "Groom RSVP sheet append failed unexpectedly",
    );

    return NextResponse.json(
      { ok: false, error: "Could not reach the Google Sheet. Please try again." },
      { status: 502 },
    );
  }
}
