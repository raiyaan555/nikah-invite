"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bismillah } from "@/components/decorative/Arabic";
import { CoverBotanicals, PaperGrain } from "@/components/decorative/Ornaments";
import { OpeningAnimation } from "@/components/invitation/OpeningAnimation";
import { personName } from "@/config/wedding";
import { useInvitation } from "@/context/InvitationContext";
import { useWedding } from "@/context/WeddingConfigContext";

export function InvitationCover() {
  const wedding = useWedding();
  const { isOpen, isOpening, openInvitation } = useInvitation();
  const reduce = useReducedMotion();
  const dateLine = wedding.date.display.coverLine;

  return (
    <OpeningAnimation show={!isOpen} opening={isOpening}>
      <div className="cover-inner">
        <PaperGrain />
        <CoverBotanicals />
        <div className="cover-content">
          <motion.div
            animate={isOpening && !reduce ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Bismillah />
          </motion.div>

          <p className="cover-wish">{wedding.copy.coverWish}</p>
          <p className="cover-date">{dateLine}</p>

          <motion.button
            type="button"
            className="cover-open"
            onClick={openInvitation}
            animate={isOpening && !reduce ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {wedding.copy.openInvitation}
          </motion.button>
          <p className="cover-hint">Tap to open</p>
          <span className="visually-hidden">
            {personName(wedding.couple.person1)} & {personName(wedding.couple.person2)}
          </span>
        </div>
      </div>
    </OpeningAnimation>
  );
}
