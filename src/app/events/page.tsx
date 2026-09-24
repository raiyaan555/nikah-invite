import { InvitationExperience } from "@/components/invitation/InvitationExperience";

export const dynamic = "force-static";

export default function EventsPage() {
  return <InvitationExperience startOpen scrollTo="events" />;
}
