"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useInvitation } from "@/context/InvitationContext";
import { useWedding } from "@/context/WeddingConfigContext";

export function FloatingNavigation() {
  const wedding = useWedding();
  const { isOpen } = useInvitation();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!isOpen) return null;

  return (
    <>
      <div className="float-nav">
        <button
          type="button"
          className="icon-btn"
          aria-expanded={open}
          aria-label="Open invitation menu"
          onClick={() => setOpen(true)}
        >
          <MenuGlyph />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav-panel"
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            aria-label="Invitation"
          >
            <button
              type="button"
              className="icon-btn nav-close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <CloseGlyph />
            </button>
            {wedding.navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

function MenuGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 5.5H15M3 9H15M3 12.5H15" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function CloseGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M5 5L13 13M13 5L5 13" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
