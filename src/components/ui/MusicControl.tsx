"use client";

import { wedding } from "@/config/wedding";
import { useInvitation } from "@/context/InvitationContext";

export function MusicControl() {
  const { isOpen, musicOn, toggleMusic, canPlayMusic } = useInvitation();

  if (!isOpen || !canPlayMusic) return null;

  return (
    <button
      type="button"
      className="music-control"
      onClick={toggleMusic}
      aria-pressed={musicOn}
      disabled={!canPlayMusic}
      aria-label={musicOn ? "Pause music" : "Play music"}
    >
      <span className="music-note" aria-hidden="true">
        ♪
      </span>
      <span>{musicOn ? "Pause" : wedding.music.label}</span>
    </button>
  );
}
