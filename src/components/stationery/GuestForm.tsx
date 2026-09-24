"use client";

import { useState } from "react";
import { weddingConfig } from "@/config/invitation";
import type { Guest, InvitationType } from "@/types/guest";

export function GuestForm({
  type,
  onOpened,
}: {
  type: InvitationType;
  onOpened: (guest: Guest) => void;
}) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const trimmed = name.trim();
    if (!trimmed) {
      setError(weddingConfig.entry.prompt);
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/guests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmed, invitationType: type }),
      });
      const payload = (await response.json().catch(() => null)) as
        | { guest?: Guest; error?: string }
        | null;

      if (!response.ok || !payload?.guest) {
        setError(payload?.error || "Please try again.");
        setSubmitting(false);
        return;
      }

      onOpened(payload.guest);
    } catch {
      setError("Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <form className="stationery-copy is-entry" onSubmit={onSubmit} noValidate>
      <label className="stationery-kicker" htmlFor="guest-name">
        {weddingConfig.entry.prompt}
      </label>
      <input
        id="guest-name"
        name="name"
        className="stationery-input"
        placeholder={weddingConfig.entry.placeholder}
        autoComplete="name"
        autoCapitalize="words"
        enterKeyHint="done"
        maxLength={80}
        spellCheck={false}
        value={name}
        aria-invalid={error ? true : undefined}
        onChange={(event) => {
          setName(event.target.value);
          if (error) setError("");
        }}
      />
      {error ? (
        <p className="stationery-note" role="alert">
          {error}
        </p>
      ) : null}
      <button className="stationery-action" type="submit" disabled={submitting} aria-busy={submitting}>
        {weddingConfig.entry.action}
      </button>
    </form>
  );
}
