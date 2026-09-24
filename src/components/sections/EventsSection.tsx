"use client";

import { venueFullAddress } from "@/config/wedding";
import { StationeryCard } from "@/components/ui/StationeryCard";
import { useWedding } from "@/context/WeddingConfigContext";

function ReceptionRule() {
  return <div className="reception-rule" aria-hidden="true" />;
}

export function EventsSection() {
  const wedding = useWedding();
  if (!wedding.events.length) return null;

  return (
    <StationeryCard id="events">
      <div className="reception-frame">
        <h2 className="card-title">{wedding.copy.eventsHeading}</h2>
        <ReceptionRule />
        {wedding.events.map((event) => (
          <div className="reception-event" key={event.id}>
            <p className="card-event">{event.name}</p>
            <p className="card-meta">{event.dateLabel}</p>
            {event.timeLabel ? <p className="card-meta">{event.timeLabel}</p> : null}
          </div>
        ))}
        <ReceptionRule />
        <p className="card-kicker">Venue</p>
        <p className="card-place">{wedding.venue.name}</p>
        <p className="card-meta">{wedding.venue.city}</p>
        <p className="card-address">{venueFullAddress()}</p>
      </div>
    </StationeryCard>
  );
}
