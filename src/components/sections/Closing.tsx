"use client";

import { ArabicText } from "@/components/decorative/Arabic";
import { StationeryCard } from "@/components/ui/StationeryCard";
import { useWedding } from "@/context/WeddingConfigContext";

export function Closing() {
  const wedding = useWedding();

  const closing = wedding.closing;

  return (
    <StationeryCard id="closing">
      {closing ? (
        <>
          <ArabicText className="arabic-ayah is-closing">{closing.arabic}</ArabicText>
          <p className="card-italic closing-verse closing-dua">{closing.transliteration}</p>
        </>
      ) : (
        <>
          <ArabicText className="arabic-ayah">{wedding.arabic.ayah}</ArabicText>
          <p className="card-italic closing-verse">{wedding.copy.closingVerse}</p>
          <p className="card-meta closing-ref">{wedding.arabic.ayahRef}</p>
        </>
      )}
      <p className="card-kicker is-foot">{wedding.copy.withLove}</p>
      {closing ? (
        <p className="closing-names is-family">{closing.withLoveNames}</p>
      ) : (
        <p className="closing-names">
          <span>{wedding.couple.person1.firstName}</span>
          <span className="card-amp is-script">{wedding.couple.monogramJoiner}</span>
          <span>{wedding.couple.person2.firstName}</span>
        </p>
      )}
    </StationeryCard>
  );
}
