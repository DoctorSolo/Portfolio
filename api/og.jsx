// api/og.jsx
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default async function handler() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        padding: "60px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            fontSize: "80px",
            fontWeight: "bold",
            background: "linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)",
            backgroundClip: "text",
            color: "transparent",
            WebkitBackgroundClip: "text",
          }}
        >
          Dr. Solo
        </div>
        <div
          style={{
            fontSize: "36px",
            color: "#9ca3af",
            fontWeight: "300",
          }}
        >
          ⚡ Full Stack Developer ⚡
        </div>
        <div
          style={{
            width: "200px",
            height: "3px",
            background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
            borderRadius: "2px",
          }}
        />
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "30px",
            fontSize: "24px",
            color: "#d1d5db",
          }}
        >
          <span>💻 42+ Commits</span>
          <span>📦 12 Projetos</span>
          <span>📜 20 Certificados</span>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
