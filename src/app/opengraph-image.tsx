import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Aryan Kaushik — Smart Contract Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#080808",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "monospace",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(57,255,20,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            left: "-200px",
            width: "800px",
            height: "800px",
            background:
              "radial-gradient(circle, rgba(57,255,20,0.06) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Top label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#39ff14",
              boxShadow: "0 0 12px #39ff14",
            }}
          />
          <span
            style={{
              color: "#39ff14",
              fontSize: "14px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              opacity: 0.8,
            }}
          >
            Available for Opportunities
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#f0f0f0",
            lineHeight: 1,
            marginBottom: "16px",
            letterSpacing: "-2px",
          }}
        >
          Aryan Kaushik
        </div>

        {/* Title row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <span
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#39ff14",
            }}
          >
            Smart Contract Engineer
          </span>
          <span style={{ color: "#444", fontSize: "28px" }}>·</span>
          <span style={{ fontSize: "24px", color: "#888" }}>
            Backend &amp; Data Systems
          </span>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {["Solidity", "Foundry", "EVM", "Python", "Web3", "DeFi"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: "6px 16px",
                  borderRadius: "6px",
                  background: "rgba(57,255,20,0.07)",
                  border: "1px solid rgba(57,255,20,0.2)",
                  color: "#39ff14",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            color: "#444",
            fontSize: "18px",
            letterSpacing: "1px",
          }}
        >
          aryankaushik.com
        </div>

        {/* Right border accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "4px",
            height: "100%",
            background:
              "linear-gradient(180deg, transparent, #39ff14, transparent)",
            opacity: 0.4,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
