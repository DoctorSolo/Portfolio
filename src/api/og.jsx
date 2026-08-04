import { ImageResponse } from "@vercel/og";

export default async function GET() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 40,
        color: "black",
        background: "white",
        width: "100%",
        height: "100%",
        padding: "50px 200px",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      👋 Dr. Solo
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
