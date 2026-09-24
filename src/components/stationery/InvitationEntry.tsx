"use client";

import { useEffect, useState } from "react";
import { CardSurface } from "@/components/stationery/CardSurface";
import { GuestForm } from "@/components/stationery/GuestForm";
import { InvitationCard } from "@/components/stationery/InvitationCard";
import type { Guest, InvitationType } from "@/types/guest";

function storageKey(type: InvitationType) {
  return `invitation-guest:${type}`;
}

function readSavedGuest(type: InvitationType): Guest | null {
  try {
    const saved = sessionStorage.getItem(storageKey(type));
    if (!saved) return null;
    const guest = JSON.parse(saved) as Guest;
    if (!guest?.id || !guest.name || guest.invitationType !== type) return null;
    return guest;
  } catch {
    return null;
  }
}

export function InvitationEntry({ type }: { type: InvitationType }) {
  const [phase, setPhase] = useState<"pending" | "form" | "open">("pending");

  useEffect(() => {
    const saved = readSavedGuest(type);
    setPhase(saved ? "open" : "form");
  }, [type]);

  function onOpened(guest: Guest) {
    sessionStorage.setItem(storageKey(type), JSON.stringify(guest));
    setPhase("open");
  }

  return (
    <CardSurface type={type} busy={phase === "pending"}>
      {phase === "form" ? <GuestForm type={type} onOpened={onOpened} /> : null}
      {phase === "open" ? <InvitationCard type={type} /> : null}
    </CardSurface>
  );
}
