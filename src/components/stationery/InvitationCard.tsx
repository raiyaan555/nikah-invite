import { CombinedInvitation } from "@/components/stationery/CombinedInvitation";
import { ReceptionInvitation } from "@/components/stationery/ReceptionInvitation";
import { WeddingInvitation } from "@/components/stationery/WeddingInvitation";
import type { InvitationType } from "@/types/guest";

export function InvitationCard({ type }: { type: InvitationType }) {
  if (type === "wedding") return <WeddingInvitation />;
  if (type === "reception") return <ReceptionInvitation />;
  return <CombinedInvitation />;
}
