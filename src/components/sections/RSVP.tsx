"use client";

import { FormEvent, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { ArabicText } from "@/components/decorative/Arabic";
import { StationeryCard } from "@/components/ui/StationeryCard";
import { useWedding } from "@/context/WeddingConfigContext";
import { isGroomInvitationPath, submitRsvp, type DietaryChoice } from "@/lib/rsvp";

export function RSVP() {
  const pathname = usePathname();
  const wedding = useWedding();
  const [attending, setAttending] = useState<boolean | null>(null);
  const [name, setName] = useState("");
  const [guestCount, setGuestCount] = useState(1);
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
  const [dietary, setDietary] = useState<DietaryChoice | "">("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const guestOptions = useMemo(
    () => Array.from({ length: wedding.rsvp.maxGuests }, (_, i) => i + 1),
    [],
  );

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (attending === null) return;
    if (attending && selectedEvents.length === 0) {
      setError("Please choose at least one event.");
      return;
    }
    if (attending && !dietary) {
      setError("Please choose veg or non-veg.");
      return;
    }

    setError("");
    setPending(true);
    const result = await submitRsvp({
      attending,
      name: name.trim(),
      guestCount: attending ? Math.min(guestCount, wedding.rsvp.maxGuests) : 0,
      events: attending ? selectedEvents : [],
      dietary: attending ? dietary : "",
      message: message.trim(),
      submittedAt: new Date().toISOString(),
      ...(isGroomInvitationPath(pathname) ? { invitationSource: "groom" as const } : {}),
    });
    setPending(false);

    if (!result.ok) {
      setError(result.error ?? "We could not save your reply. Please try again.");
      return;
    }

    setSubmitted(true);
  }

  return (
    <StationeryCard id="rsvp">
      <div className="reception-frame is-rsvp">
        <h2 className="card-title">{wedding.copy.rsvpHeading}</h2>
        <div className="story-title-rule" aria-hidden="true" />
        <p className="invite-copy">{wedding.copy.rsvpQuestion}</p>

      {submitted ? (
        <>
          <ArabicText className="arabic-quiet">{wedding.arabic.mashaAllah}</ArabicText>
          <p className="rsvp-thanks">{wedding.copy.rsvpThankYou}</p>
        </>
      ) : (
        <>
          <div className="rsvp-choices">
            <button
              type="button"
              className="btn is-full"
              aria-pressed={attending === true}
              onClick={() => setAttending(true)}
            >
              {wedding.copy.rsvpYes}
            </button>
            <button
              type="button"
              className="btn is-ghost is-full"
              aria-pressed={attending === false}
              onClick={() => setAttending(false)}
            >
              {wedding.copy.rsvpNo}
            </button>
          </div>

          {attending !== null && (
            <form className="rsvp-form" onSubmit={onSubmit} autoComplete="off">
              <div className="field">
                <label htmlFor="rsvp-name">Name</label>
                <input
                  id="rsvp-name"
                  name="name"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {attending && wedding.rsvp.showGuestCount && (
                <div className="field">
                  <label htmlFor="rsvp-guests">Number of guests</label>
                  <select
                    id="rsvp-guests"
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                  >
                    {guestOptions.map((count) => (
                      <option key={count} value={count}>
                        {count}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {attending && wedding.rsvp.showEventSelection && (
                <fieldset className="field choice-field">
                  <legend>Events</legend>
                  <div className="choice-list">
                    {wedding.events.map((item) => {
                      const checked = selectedEvents.includes(item.id);
                      return (
                        <label key={item.id} className={`choice-card ${checked ? "is-checked" : ""}`}>
                          <input
                            className="visually-hidden"
                            type="checkbox"
                            checked={checked}
                            onChange={(e) => {
                              setSelectedEvents((current) =>
                                e.target.checked
                                  ? [...current, item.id]
                                  : current.filter((id) => id !== item.id),
                              );
                            }}
                          />
                          <span className="choice-tick" aria-hidden="true">
                            <TickMark />
                          </span>
                          <span className="choice-label">{item.name}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
              )}

              {attending && wedding.rsvp.showDietary && (
                <fieldset className="field choice-field">
                  <legend>Dietary preference</legend>
                  <div className="choice-list is-split">
                    {(
                      [
                        { value: "veg", label: "Veg" },
                        { value: "non-veg", label: "Non-veg" },
                      ] as const
                    ).map((option) => {
                      const checked = dietary === option.value;
                      return (
                        <label
                          key={option.value}
                          className={`choice-card ${checked ? "is-checked" : ""}`}
                        >
                          <input
                            className="visually-hidden"
                            type="radio"
                            name="dietary"
                            checked={checked}
                            onChange={() => setDietary(option.value)}
                          />
                          <span className="choice-tick" aria-hidden="true">
                            <TickMark />
                          </span>
                          <span className="choice-label">{option.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
              )}

              {wedding.rsvp.showMessage && (
                <div className="field">
                  <label htmlFor="rsvp-message">Message</label>
                  <textarea
                    id="rsvp-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              )}

              {error ? <p className="rsvp-error">{error}</p> : null}

              <button className="btn is-full" type="submit" disabled={pending}>
                {pending ? "Sending" : "Send Reply"}
              </button>
            </form>
          )}
        </>
      )}
      </div>
    </StationeryCard>
  );
}

function TickMark() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M2.2 6.2L4.7 8.7L9.8 3.3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
