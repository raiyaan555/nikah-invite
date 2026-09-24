"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { wedding, type GalleryImage } from "@/config/wedding";
import { withBasePath } from "@/lib/base-path";

export function Gallery() {
  const images = [...wedding.gallery] as GalleryImage[];
  const [active, setActive] = useState<number | null>(null);

  if (!wedding.showPhotography || !images.length) return null;

  return (
    <Section id="gallery">
      <p className="label section-heading">{wedding.copy.galleryHeading}</p>
      <div className="album">
        {images.map((image, index) => (
          <button
            type="button"
            key={image.id}
            className={`album-item is-${image.orientation}`}
            onClick={() => setActive(index)}
            aria-label={`Open ${image.alt}`}
          >
            <ImageSlot src={image.src} alt={image.alt} />
          </button>
        ))}
      </div>
      <Lightbox images={images} index={active} onClose={() => setActive(null)} onIndex={setActive} />
    </Section>
  );
}

function Lightbox({
  images,
  index,
  onClose,
  onIndex,
}: {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onIndex: (index: number) => void;
}) {
  const reduce = useReducedMotion();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );
  const image = index === null ? null : images[index];

  const go = useCallback(
    (direction: number) => {
      if (index === null) return;
      const next = (index + direction + images.length) % images.length;
      onIndex(next);
    },
    [images.length, index, onIndex],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.classList.add("is-locked");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("is-locked");
    };
  }, [go, index, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {image && index !== null && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={image.alt}
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button type="button" className="lightbox-close" onClick={onClose}>
            Close
          </button>
          <div
            className="lightbox-frame"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={(event) => {
              const startX = event.changedTouches[0]?.clientX ?? 0;
              const target = event.currentTarget;
              const handleEnd = (endEvent: TouchEvent) => {
                const endX = endEvent.changedTouches[0]?.clientX ?? startX;
                const delta = endX - startX;
                if (Math.abs(delta) > 48) go(delta < 0 ? 1 : -1);
                target.removeEventListener("touchend", handleEnd);
              };
              target.addEventListener("touchend", handleEnd);
            }}
          >
            {image.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="lightbox-image" src={withBasePath(image.src)} alt={image.alt} />
            ) : (
              <div
                className="image-slot"
                style={{ aspectRatio: image.orientation === "landscape" ? "16 / 10" : "3 / 4" }}
              >
                <div className="image-slot-fallback">
                  <span>{image.alt}</span>
                </div>
              </div>
            )}
            <button type="button" className="lightbox-nav is-prev" onClick={() => go(-1)} aria-label="Previous photograph">
              ‹
            </button>
            <button type="button" className="lightbox-nav is-next" onClick={() => go(1)} aria-label="Next photograph">
              ›
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
