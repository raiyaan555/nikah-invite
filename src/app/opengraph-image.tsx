import { ImageResponse } from "next/og";
import { coupleNames, wedding } from "@/config/wedding";

export const dynamic = "force-static";
export const alt = wedding.site.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f3ebe0",
          color: "#2c241b",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 48,
            right: 48,
            bottom: 48,
            left: 48,
            border: "1px solid #d4c2a0",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 42,
            marginTop: 8,
            letterSpacing: 1,
            color: "#b08d3e",
            whiteSpace: "nowrap",
          }}
        >
          {coupleNames("  &  ")}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            marginTop: 24,
            color: "#8a7358",
          }}
        >
          {wedding.date.display.fullLine}
        </div>
      </div>
    ),
    size,
  );
}
