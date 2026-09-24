import { InvitationComposition } from "@/components/stationery/InvitationComposition";
import { weddingConfig } from "@/config/invitation";

export function WeddingInvitation() {
  return <InvitationComposition events={[weddingConfig.wedding]} />;
}
