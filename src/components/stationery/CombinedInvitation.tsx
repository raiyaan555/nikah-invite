import { InvitationComposition } from "@/components/stationery/InvitationComposition";
import { weddingConfig } from "@/config/invitation";

export function CombinedInvitation() {
  return (
    <InvitationComposition events={[weddingConfig.wedding, weddingConfig.reception]} />
  );
}
