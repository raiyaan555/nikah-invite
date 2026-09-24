"use client";

import { Monogram } from "@/components/decorative/Monogram";
import { monogramMarks, wedding } from "@/config/wedding";

export function Footer() {
  const mark = monogramMarks();

  return (
    <footer className="site-footer">
      <Monogram
        initialOne={mark.one}
        initialTwo={mark.two}
        joiner={mark.joiner}
        size="sm"
      />
      <p>{wedding.copy.footerNote}</p>
      <p className="place-line">{wedding.date.display.fullLine}</p>
    </footer>
  );
}
