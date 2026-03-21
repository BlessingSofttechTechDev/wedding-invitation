import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "linear-gradient(145deg, #1a0a0a 0%, #2e1212 50%, #3d1515 100%)",
          borderRadius: 36,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <span
          style={{
            fontFamily: "serif",
            fontSize: 52,
            fontWeight: 700,
            color: "#d4af37",
            letterSpacing: -1,
            lineHeight: 1,
          }}
        >
          T&amp;S
        </span>
        <div
          style={{
            width: 56,
            height: 1,
            background: "linear-gradient(to right, transparent, rgba(212,175,55,0.5), transparent)",
            marginTop: 6,
          }}
        />
        <span
          style={{
            fontFamily: "serif",
            fontSize: 11,
            color: "rgba(212,175,55,0.6)",
            letterSpacing: 4,
            marginTop: 4,
            textTransform: "uppercase",
          }}
        >
          WEDDING
        </span>
      </div>
    ),
    { ...size }
  );
}
