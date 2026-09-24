"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type OpeningAnimationProps = {
  show: boolean;
  opening: boolean;
  children: ReactNode;
};

export function OpeningAnimation({ show, opening, children }: OpeningAnimationProps) {
  const reduce = useReducedMotion();

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="cover"
          role="dialog"
          aria-label="Wedding invitation cover"
          initial={false}
          animate={
            opening && !reduce
              ? { opacity: 0, y: -36 }
              : { opacity: 1, y: 0 }
          }
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -52 }}
          transition={{ duration: reduce ? 0.18 : 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
