"use client";

import { useEffect, useState } from "react";
import { wedding } from "@/config/wedding";
import { getCountdown } from "@/lib/countdown";
import { pad } from "@/lib/format";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const parts = getCountdown(wedding.date.iso, now ?? 0);
  const ready = now !== null;

  const cells = [
    { value: ready ? pad(parts.days, parts.days > 99 ? 3 : 2) : "—", label: "Days" },
    { value: ready ? pad(parts.hours) : "—", label: "Hours" },
    { value: ready ? pad(parts.minutes) : "—", label: "Minutes" },
    { value: ready ? pad(parts.seconds) : "—", label: "Seconds" },
  ];

  return (
    <Section id="countdown">
      <SectionHeading label={wedding.copy.countdownLabel} />
      <div className="countdown" aria-live="polite">
        {cells.map((cell) => (
          <div className="countdown-cell" key={cell.label}>
            <p className="countdown-value">{cell.value}</p>
            <p className="countdown-unit">{cell.label}</p>
          </div>
        ))}
      </div>
      {ready && parts.complete && (
        <p className="countdown-complete">The celebration has begun.</p>
      )}
    </Section>
  );
}
