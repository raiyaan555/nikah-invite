import { wedding } from "@/config/wedding";

export function SectionHeading({ label }: { label: string }) {
  return (
    <div className="section-heading">
      <p className="label">{label}</p>
    </div>
  );
}
