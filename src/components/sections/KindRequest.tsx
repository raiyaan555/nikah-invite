"use client";

import { ClockIcon, GuestsIcon, PlateIcon } from "@/components/decorative/LineIcons";
import { StationeryCard } from "@/components/ui/StationeryCard";
import { useWedding } from "@/context/WeddingConfigContext";

export function KindRequest() {
  const wedding = useWedding();
  const icons =
    wedding.copy.requests.length > 2
      ? [GuestsIcon, ClockIcon, PlateIcon]
      : [GuestsIcon, PlateIcon];

  return (
    <StationeryCard id="request">
      <div className="reception-frame">
        <h2 className="card-title">{wedding.copy.kindRequest}</h2>
        <div className="story-title-rule" aria-hidden="true" />
        <ul className="request-list">
          {wedding.copy.requests.map((item, index) => {
            const Icon = icons[index] ?? GuestsIcon;
            return (
              <li key={item}>
                <Icon />
                <p>{item}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </StationeryCard>
  );
}
