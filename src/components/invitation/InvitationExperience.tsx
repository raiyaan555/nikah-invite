"use client";

import { Closing } from "@/components/sections/Closing";
import { EventsSection } from "@/components/sections/EventsSection";
import { KindRequest } from "@/components/sections/KindRequest";
import { OurStory } from "@/components/sections/OurStory";
import { RSVP } from "@/components/sections/RSVP";
import { SaveTheDate } from "@/components/sections/SaveTheDate";
import { VenueSection } from "@/components/sections/VenueSection";
import { InvitationCover } from "@/components/invitation/InvitationCover";
import { FloatingNavigation } from "@/components/ui/FloatingNavigation";
import { MusicControl } from "@/components/ui/MusicControl";
import { defaultInvitation, resolveInvitation, type InvitationVariant } from "@/config/invitationVariants";
import { InvitationProvider } from "@/context/InvitationContext";
import { WeddingConfigProvider } from "@/context/WeddingConfigContext";

export function InvitationExperience({
  variant,
  startOpen = false,
  scrollTo,
}: {
  variant?: InvitationVariant;
  startOpen?: boolean;
  scrollTo?: string;
}) {
  const config = variant ? resolveInvitation(variant) : defaultInvitation();

  return (
    <WeddingConfigProvider value={config}>
      <InvitationProvider startOpen={startOpen} scrollTo={scrollTo}>
        <div className="stage">
          <InvitationCover />
          <div className="paper">
            <FloatingNavigation />
            <MusicControl />
            <main className="invitation-main">
              <SaveTheDate />
              <EventsSection />
              <OurStory />
              <VenueSection />
              <KindRequest />
              {config.showRsvp ? <RSVP /> : null}
              <Closing />
            </main>
          </div>
        </div>
      </InvitationProvider>
    </WeddingConfigProvider>
  );
}
