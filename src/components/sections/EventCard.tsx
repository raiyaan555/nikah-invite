"use client";

import type { WeddingEvent } from "@/config/wedding";
import { EventGlyph } from "@/components/decorative/Ornaments";
import { CalendarButton } from "@/components/ui/CalendarButton";
import { MapButton } from "@/components/ui/MapButton";

export function EventCard({ event }: { event: WeddingEvent }) {
  const address = [event.address, event.city].filter(Boolean).join(", ");

  return (
    <article className="event-card">
      <EventGlyph type={event.icon} />
      <h3 className="event-name">{event.name}</h3>
      <div className="event-meta">
        <p>{event.dateLabel}</p>
        <p>{event.timeLabel}</p>
      </div>
      <p className="event-venue">{event.venue}</p>
      {event.description ? <p className="event-meta">{event.description}</p> : null}
      <div className="event-actions">
        <MapButton address={address} mapUrl={event.mapUrl} />
        {event.addToCalendar !== false ? <CalendarButton event={event} /> : null}
      </div>
    </article>
  );
}
