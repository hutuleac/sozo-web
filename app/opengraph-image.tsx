import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SOZO PROJECT — Debitare Laser & Abkant CNC Iași";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0A0A0F",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#FF6B00",
            }}
          />
          <span style={{ color: "#FF6B00", fontSize: 14, letterSpacing: 4, textTransform: "uppercase" }}>
            sozoproject.eu
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 4, height: 72, background: "#FF6B00", borderRadius: 2 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ color: "#FFFFFF", fontSize: 64, fontWeight: 700, lineHeight: 1, letterSpacing: -1 }}>
                SOZO PROJECT
              </span>
              <span style={{ color: "#A0A0B0", fontSize: 28, fontWeight: 400 }}>
                Debitare Laser & Abkant CNC — Iași
              </span>
            </div>
          </div>
        </div>

        {/* Bottom specs */}
        <div style={{ display: "flex", gap: 32 }}>
          {["Mitsubishi ML3015EX", "Fibră 4.5 kW", "±0.05 mm", "Ofertă aceeași zi"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "#1A1A24",
                border: "1px solid #2A2A38",
                borderRadius: 6,
                padding: "8px 18px",
                color: "#C0C0D0",
                fontSize: 16,
                fontFamily: "monospace",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
