"use client";

import { wedding } from "@/config/wedding";
import { StationeryCard } from "@/components/ui/StationeryCard";

export function OurStory() {
  return (
    <StationeryCard id="story">
      <h2 className="card-title">{wedding.copy.ourStory}</h2>
      <div className="story-title-rule" aria-hidden="true" />
      <div className="story-layout">
        <img
          className="story-art"
          src="/images/decorations/story-floral.png?v=2"
          alt=""
        />
        <div className="story-copy">
          {wedding.copy.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </StationeryCard>
  );
}
