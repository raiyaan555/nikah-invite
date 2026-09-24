import { ImageResponse } from "next/og";
import { wedding } from "@/config/wedding";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f4e7d2",
          color: "#c4a15a",
          fontSize: 13,
          letterSpacing: 1,
          borderRadius: 999,
          border: "1px solid #c4a15a",
        }}
      >
        {wedding.couple.person1.initial}·{wedding.couple.person2.initial}
      </div>
    ),
    size,
  );
}
