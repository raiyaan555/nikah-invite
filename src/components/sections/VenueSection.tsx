"use client";

import { MapButton } from "@/components/ui/MapButton";
import { StationeryCard } from "@/components/ui/StationeryCard";
import { venueFullAddress, wedding } from "@/config/wedding";
import { withBasePath } from "@/lib/base-path";

export function VenueSection() {
  return (
    <StationeryCard id="venue">
      <h2 className="card-title">{wedding.copy.venueHeading}</h2>
      <div className="story-title-rule" aria-hidden="true" />
      <img
        className="venue-art"
        src={withBasePath("/images/decorations/venue-line.png?v=2")}
        alt=""
      />
      <p className="card-place">{wedding.venue.name}</p>
      <p className="card-meta">{wedding.venue.city}</p>
      <p className="card-address">{venueFullAddress()}</p>
      <div className="card-action">
        <MapButton />
      </div>
    </StationeryCard>
  );
}
