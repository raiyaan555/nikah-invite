"use client";

import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { withBasePath } from "@/lib/base-path";

export function StationeryCard({
  id,
  children,
  wide = false,
  className = "",
}: {
  id: string;
  children: ReactNode;
  wide?: boolean;
  className?: string;
}) {
  return (
    <Section id={id} className={`stationery-card${className ? ` ${className}` : ""}`}>
      <div className="cover-botanical is-tr" aria-hidden="true">
        <img src={withBasePath("/images/decorations/floral-tr.png")} alt="" />
      </div>
      <div className="cover-botanical is-bl" aria-hidden="true">
        <img src={withBasePath("/images/decorations/floral-bl.png")} alt="" />
      </div>
      <div className={`card-body${wide ? " is-wide" : ""}`}>{children}</div>
    </Section>
  );
}

export function DiamondRule() {
  return (
    <div className="diamond-rule" aria-hidden="true">
      <span />
      <i />
      <span />
    </div>
  );
}
