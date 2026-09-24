import { ImageResponse } from "next/og";
import { wedding } from "@/config/wedding";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          fontSize: 54,
          letterSpacing: 6,
          border: "6px solid #c4a15a",
          borderRadius: 999,
        }}
      >
        {wedding.couple.person1.initial}·{wedding.couple.person2.initial}
      </div>
    ),
    size,
  );
}
