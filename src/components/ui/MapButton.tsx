"use client";

import { wedding } from "@/config/wedding";
import { directionsUrl, mapsSearchUrl } from "@/lib/maps";
import { venueFullAddress } from "@/config/wedding";

type MapButtonProps = {
  address?: string;
  mapUrl?: string;
  directions?: boolean;
};

export function MapButton({
  address = venueFullAddress(),
  mapUrl = wedding.venue.mapUrl,
  directions = false,
}: MapButtonProps) {
  const fallback = directions
    ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const label = directions ? wedding.copy.getDirections : wedding.copy.viewOnMaps;

  return (
    <a
      className="btn"
      href={fallback}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        const preferred = directions
          ? directionsUrl(address)
          : mapsSearchUrl(address, mapUrl);
        if (preferred !== fallback) {
          event.preventDefault();
          window.open(preferred, "_blank", "noopener,noreferrer");
        }
      }}
    >
      {label}
    </a>
  );
}
