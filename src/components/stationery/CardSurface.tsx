"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BotanicalArt } from "@/components/stationery/BotanicalArt";
import type { InvitationType } from "@/types/guest";

export function CardSurface({
  type,
  children,
  busy = false,
}: {
  type: InvitationType;
  children: React.ReactNode;
  busy?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <div className="stationery-stage">
      <article className="stationery-card" aria-busy={busy}>
        <motion.div
          className={`botanical-slot botanical-slot-${type}`}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduce ? 0 : 1.6, ease: "easeOut" }}
        >
          <BotanicalArt type={type} />
        </motion.div>
        {children}
      </article>
    </div>
  );
}
