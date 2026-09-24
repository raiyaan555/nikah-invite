"use client";

import Image from "next/image";
import { wedding } from "@/config/wedding";

type ImageSlotProps = {
  src?: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export function ImageSlot({
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 480px",
  priority = false,
  className = "",
}: ImageSlotProps) {
  return (
    <div className={`image-slot ${className}`.trim()}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
        />
      ) : (
        <div className="image-slot-fallback" role="img" aria-label={alt}>
          <FloralMini />
          <span>{wedding.copy.photographPlaceholder}</span>
        </div>
      )}
    </div>
  );
}

function FloralMini() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true">
      <circle cx="21" cy="21" r="9" stroke="currentColor" strokeWidth="1" />
      <path d="M21 8V12M21 30V34M8 21H12M30 21H34" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
