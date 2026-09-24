"use client";

import { useEffect, useRef, useState } from "react";
import type { WeddingEvent } from "@/config/wedding";
import { wedding } from "@/config/wedding";
import { downloadIcs, googleCalendarUrl } from "@/lib/calendar";

export function CalendarButton({ event }: { event: WeddingEvent }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="calendar-menu" ref={rootRef}>
      <button type="button" className="btn is-ghost" onClick={() => setOpen((v) => !v)}>
        {wedding.copy.addToCalendar}
      </button>
      {open && (
        <div className="calendar-pop" role="menu">
          <a
            href={googleCalendarUrl(event)}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            Google Calendar
          </a>
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              downloadIcs(event);
              setOpen(false);
            }}
          >
            Apple / ICS
          </button>
        </div>
      )}
    </div>
  );
}
