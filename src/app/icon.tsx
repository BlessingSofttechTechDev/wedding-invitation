import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "linear-gradient(145deg, #2d1616 0%, #3f1e1e 60%, #4d2222 100%)",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          border: "1px solid rgba(212,175,55,0.25)",
        }}
      >
        <span
          style={{
            fontFamily: "serif",
            fontSize: 14,
            fontWeight: 700,
            color: "#e2c25a",
            letterSpacing: -0.5,
            lineHeight: 1,
          }}
        >
          T&amp;S
        </span>
      </div>
    ),
    { ...size }
  );
}
