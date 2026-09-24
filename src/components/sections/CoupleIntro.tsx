"use client";

import { personName, wedding } from "@/config/wedding";
import { ArabicText } from "@/components/decorative/Arabic";
import { DecorativeDivider } from "@/components/decorative/Ornaments";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CoupleIntro() {
  const { person1, person2 } = wedding.couple;

  return (
    <Section id="story">
      <SectionHeading label={wedding.copy.ourStory} />
      <div className="couple-names">
        <p className="name">{personName(person1)}</p>
        <span className="star-join">*</span>
        <p className="name">{personName(person2)}</p>
      </div>
      <ArabicText className="arabic-dua">{wedding.arabic.dua}</ArabicText>
      <div style={{ marginTop: "1.6rem" }}>
        <DecorativeDivider />
      </div>
      <ArabicText className="arabic-ayah">{wedding.arabic.ayah}</ArabicText>
      <ArabicText className="ayah-ref">{wedding.arabic.ayahRef}</ArabicText>
      <p className="invite-copy">{wedding.copy.romanticLine}</p>
    </Section>
  );
}
