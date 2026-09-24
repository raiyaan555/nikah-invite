import { wedding } from "@/config/wedding";

type ArabicTextProps = {
  children: string;
  className?: string;
};

export function ArabicText({ children, className = "" }: ArabicTextProps) {
  return (
    <p className={`arabic ${className}`.trim()} lang="ar" dir="rtl">
      {children}
    </p>
  );
}

export function Bismillah({ className = "" }: { className?: string }) {
  return (
    <ArabicText className={`arabic-bismillah ${className}`.trim()}>
      {wedding.arabic.bismillah}
    </ArabicText>
  );
}

export function AllahMark({ className = "" }: { className?: string }) {
  return (
    <p
      className={`arabic arabic-allah ${className}`.trim()}
      lang="ar"
      dir="rtl"
      aria-label="Allah"
    >
      {wedding.arabic.allah}
    </p>
  );
}

export function Salaam({ className = "" }: { className?: string }) {
  if (!wedding.arabic.enabled) return null;

  return (
    <ArabicText className={`arabic-salaam ${className}`.trim()}>
      {wedding.arabic.salaam}
    </ArabicText>
  );
}

export function ArabicCoupleNames({ className = "" }: { className?: string }) {
  if (!wedding.arabic.enabled) return null;

  const { person1, person2 } = wedding.couple;

  return (
    <p className={`arabic arabic-names ${className}`.trim()} lang="ar" dir="rtl">
      {person1.arabicName}
      <span className="arabic-names-join">{wedding.arabic.joiner}</span>
      {person2.arabicName}
    </p>
  );
}
