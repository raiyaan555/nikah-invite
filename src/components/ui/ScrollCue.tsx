"use client";

import { useEffect, useState } from "react";
import { useInvitation } from "@/context/InvitationContext";

export function ScrollCue() {
  const { isOpen } = useInvitation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setVisible(false);
      return;
    }

    const update = () => setVisible(window.scrollY < 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [isOpen]);

  if (!visible) return null;

  return (
    <div className="scroll-cue">
      <span>Scroll</span>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M4 7L9 12L14 7" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    </div>
  );
}
