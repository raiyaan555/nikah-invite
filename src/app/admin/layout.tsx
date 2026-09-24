import type { Metadata } from "next";
import { StationeryBody } from "@/components/stationery/StationeryBody";
import "../invitation-card.css";

export const metadata: Metadata = {
  title: "Guests",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="stationery-root">
      <StationeryBody />
      {children}
    </div>
  );
}
