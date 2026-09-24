import { NextResponse } from "next/server";
import { weddingConfig } from "@/config/invitation";
import { createGuest, normalizeGuestName } from "@/lib/guests";
import { isInvitationType } from "@/types/guest";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: weddingConfig.entry.prompt }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: weddingConfig.entry.prompt }, { status: 400 });
  }

  const record = body as Record<string, unknown>;
  const name = normalizeGuestName(record.name);
  const invitationType = record.invitationType;

  if (!name) {
    return NextResponse.json({ error: weddingConfig.entry.prompt }, { status: 400 });
  }

  if (typeof invitationType !== "string" || !isInvitationType(invitationType)) {
    return NextResponse.json({ error: "This invitation could not be found." }, { status: 400 });
  }

  try {
    const guest = createGuest(name, invitationType);
    return NextResponse.json({ guest });
  } catch {
    return NextResponse.json({ error: "Please try again." }, { status: 500 });
  }
}
