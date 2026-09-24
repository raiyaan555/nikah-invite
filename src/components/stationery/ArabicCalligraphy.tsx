import { weddingConfig } from "@/config/invitation";

export function ArabicCalligraphy() {
  const calligraphy = weddingConfig.arabic.calligraphy.trim();
  if (!calligraphy) return null;

  return (
    <p className="stationery-calligraphy" lang="ar" dir="rtl">
      {calligraphy}
    </p>
  );
}
