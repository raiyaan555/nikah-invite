import { InvitationComposition } from "@/components/stationery/InvitationComposition";
import { weddingConfig } from "@/config/invitation";

export function ReceptionInvitation() {
  return <InvitationComposition events={[weddingConfig.reception]} />;
}
