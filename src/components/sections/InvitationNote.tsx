"use client";

import { PinIcon } from "@/components/decorative/LineIcons";
import { venueFullAddress, wedding } from "@/config/wedding";
import { DiamondRule, StationeryCard } from "@/components/ui/StationeryCard";

export function InvitationNote() {
  return (
    <StationeryCard id="invite">
      <p className="card-kicker is-lead">{wedding.copy.delighted}</p>
      <div className="script-names couple-line">
        <p className="card-script">{wedding.couple.person1.firstName}</p>
        <span className="card-amp is-script">{wedding.couple.monogramJoiner}</span>
        <p className="card-script">{wedding.couple.person2.firstName}</p>
      </div>
      <DiamondRule />
      <p className="card-italic">{wedding.copy.blessing}</p>
      <DiamondRule />
      <div className="invite-facts">
        <div>
          <p className="card-meta">{wedding.date.display.month}</p>
          <p className="card-serif is-date">{wedding.date.display.day}</p>
          <p className="card-meta">{wedding.date.display.year}</p>
        </div>
        <div className="invite-place">
          <PinIcon />
          <p className="card-place">{wedding.venue.name}</p>
          <p className="card-meta">{wedding.venue.city}</p>
          <p className="card-address">{venueFullAddress()}</p>
        </div>
      </div>
    </StationeryCard>
  );
}
