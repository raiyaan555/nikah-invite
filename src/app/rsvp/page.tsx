import { InvitationExperience } from "@/components/invitation/InvitationExperience";

export const dynamic = "force-static";

export default function RsvpPage() {
  return <InvitationExperience startOpen scrollTo="rsvp" />;
}
