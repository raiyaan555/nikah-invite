import { NextResponse } from "next/server";
import type { RsvpPayload } from "@/lib/rsvp";

export const runtime = "nodejs";

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

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid reply." }, { status: 400 });
  }

  if (!isPayload(payload) || !payload.name.trim()) {
    return NextResponse.json({ ok: false, error: "Please complete the required fields." }, { status: 400 });
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
