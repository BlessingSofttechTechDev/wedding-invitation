import { ImageResponse } from "next/og";

export const alt = "Tarush & Sanjana — A Wedding Celebration";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #2d1616 0%, #3f1e1e 40%, #2d1616 100%)",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse 65% 55% at 50% 45%, rgba(139,26,26,0.12), transparent 70%)",
          }}
        />

        {/* Top ornamental line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 80,
              height: 1,
              background: "linear-gradient(to right, transparent, rgba(212,175,55,0.4))",
            }}
          />
          <div
            style={{
              width: 8,
              height: 8,
              transform: "rotate(45deg)",
              border: "1px solid rgba(212,175,55,0.5)",
            }}
          />
          <div
            style={{
              width: 80,
              height: 1,
              background: "linear-gradient(to left, transparent, rgba(212,175,55,0.4))",
            }}
          />
        </div>

        {/* शुभ विवाह */}
        <span
          style={{
            fontSize: 22,
            color: "rgba(212,175,55,0.55)",
            letterSpacing: 3,
            marginBottom: 20,
          }}
        >
          शुभ विवाह
        </span>

        {/* Names */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
          }}
        >
          <span
            style={{
              fontSize: 96,
              color: "#f5efe6",
              lineHeight: 1,
              letterSpacing: -1,
              textShadow: "0 2px 40px rgba(0,0,0,0.4)",
            }}
          >
            Tarush
          </span>
          <span
            style={{
              fontSize: 42,
              fontStyle: "italic",
              color: "#d4af37",
              lineHeight: 1.2,
            }}
          >
            &amp;
          </span>
          <span
            style={{
              fontSize: 96,
              color: "#f5efe6",
              lineHeight: 1,
              letterSpacing: -1,
              textShadow: "0 2px 40px rgba(0,0,0,0.4)",
            }}
          >
            Sanjana
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginTop: 28,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 60,
              height: 1,
              background: "linear-gradient(to right, transparent, rgba(212,175,55,0.3))",
            }}
          />
          <div
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              backgroundColor: "rgba(212,175,55,0.35)",
            }}
          />
          <div
            style={{
              width: 60,
              height: 1,
              background: "linear-gradient(to left, transparent, rgba(212,175,55,0.3))",
            }}
          />
        </div>

        {/* Date & venue */}
        <span
          style={{
            fontSize: 18,
            color: "rgba(245,239,230,0.7)",
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          April 2026 · Udaipur, Rajasthan
        </span>
      </div>
    ),
    { ...size }
  );
}
