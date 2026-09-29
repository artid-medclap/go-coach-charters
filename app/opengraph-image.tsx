import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a2a66 0%, #0b5fff 60%, #ff6a3d 140%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "rgba(255,255,255,0.15)",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            GC
          </div>
          <div style={{ fontSize: 44, fontWeight: 700 }}>{SITE_NAME}</div>
        </div>
        <div style={{ marginTop: 40, fontSize: 56, fontWeight: 800, maxWidth: 900, lineHeight: 1.15 }}>
          {SITE_TAGLINE}
        </div>
      </div>
    ),
    { ...size }
  );
}
