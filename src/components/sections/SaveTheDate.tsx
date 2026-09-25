"use client";

import { Bismillah } from "@/components/decorative/Arabic";
import { personName, venueFullAddress, type Person } from "@/config/wedding";
import { DiamondRule, StationeryCard } from "@/components/ui/StationeryCard";
import { useWedding } from "@/context/WeddingConfigContext";

export function SaveTheDate() {
  const wedding = useWedding();

  return (
    <StationeryCard id="date" className={wedding.parents ? "is-bride-front" : ""}>
      <Bismillah />
      <p className="card-kicker is-lead">{wedding.copy.delighted}</p>
      {wedding.parents ? (
        <div className="couple-with-parents">
          <span className="couple-line-name">{displayName(wedding.couple.person1)}</span>
          <span className="couple-line-amp">{wedding.couple.monogramJoiner}</span>
          <span className="couple-line-name">{displayName(wedding.couple.person2)}</span>
          <span className="couple-parent">{wedding.parents.bride}</span>
          <span className="couple-parent-gap" aria-hidden="true" />
          <span className="couple-parent">{wedding.parents.groom}</span>
        </div>
      ) : (
        <p className="couple-line">
          <span className="couple-line-name">{displayName(wedding.couple.person1)}</span>
          <span className="couple-line-amp">{wedding.couple.monogramJoiner}</span>
          <span className="couple-line-name">{displayName(wedding.couple.person2)}</span>
        </p>
      )}
      <DiamondRule />
      {wedding.parents ? null : (
        <>
          <p className="card-italic">{wedding.copy.blessing}</p>
          <DiamondRule />
        </>
      )}
      <div className="invite-facts">
        <div>
          <p className="card-meta">{wedding.date.display.month}</p>
          <p className="card-serif is-date">{renderDay(wedding.date.display.day)}</p>
          <p className="card-meta">{wedding.date.display.year}</p>
        </div>
        <div className="invite-place">
          <p className="card-place">{wedding.venue.name}</p>
          <p className="card-meta">{wedding.venue.city}</p>
          <p className="card-address">{venueFullAddress()}</p>
        </div>
      </div>
      <span className="visually-hidden">
        {personName(wedding.couple.person1)} & {personName(wedding.couple.person2)}
      </span>
    </StationeryCard>
  );
}

function displayName(person: Person) {
  return [person.firstName, person.lastName].filter(Boolean).join(" ");
}

function renderDay(day: string) {
  const pieces = day.split(/(\s*&\s*)/);
  if (pieces.length === 1) return withOrdinal(day);

  return pieces.map((piece, index) =>
    /^\s*&\s*$/.test(piece) ? (
      <span key={index}>{piece}</span>
    ) : (
      <span key={index}>{withOrdinal(piece.trim())}</span>
    ),
  );
}

function withOrdinal(day: string) {
  const match = /^(\d+)(st|nd|rd|th)?$/i.exec(day);
  if (!match) return day;

  return (
    <>
      {match[1]}
      <span className="date-ordinal">{(match[2] ?? "th").toLowerCase()}</span>
    </>
  );
}
