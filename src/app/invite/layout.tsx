import { StationeryBody } from "@/components/stationery/StationeryBody";
import "../invitation-card.css";

export default function InviteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="stationery-root">
      <StationeryBody />
      {children}
    </div>
  );
}
