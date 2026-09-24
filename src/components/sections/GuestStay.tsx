"use client";

import { DecorativeDivider } from "@/components/decorative/Ornaments";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { wedding } from "@/config/wedding";

export function GuestStay() {
  return (
    <Section id="stay">
      <SectionHeading label={wedding.copy.stayHeading} />
      <div style={{ marginTop: "0.2rem" }}>
        <DecorativeDivider />
      </div>
      <p className="invite-copy">{wedding.copy.stayNote}</p>
    </Section>
  );
}
