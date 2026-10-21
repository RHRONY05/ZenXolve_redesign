import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "XenZolve — Software your business runs on";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#121110",
        }}
      >
        {/* Cobalt glow + the bolt, drawn with SVG */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            backgroundImage: "radial-gradient(circle at 78% 42%, rgba(47,75,255,0.55), rgba(47,75,255,0) 55%)",
          }}
        />
        <svg viewBox="-1 -1.4 2 2.8" width="420" height="590" style={{ position: "absolute", right: 90, top: 20 }}>
          <polygon points="0.05,-1 0.6,-1 0.2,-0.2 0.65,-0.2 -0.3,1 -0.05,0.1 -0.55,0.1" fill="#2F4BFF" stroke="#8C9BFF" strokeWidth="0.1" strokeLinejoin="round" />
        </svg>

        {/* Content container */}
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 80px",
          }}
        >
          {/* Top brand row */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: "#F2EEE6",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <svg viewBox="0 0 100 60" width="32" height="19" fill="none">
                <path d="M2 2H98L30 34H70L2 58L40 30H6Z" fill="#2F4BFF" />
              </svg>
              <span>XenZolve</span>
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 16,
                color: "#A8A29E",
                fontFamily: "monospace",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Dhaka · Available Worldwide
            </div>
          </div>

          {/* Headline block */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              maxWidth: 960,
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                fontSize: 64,
                lineHeight: 1.15,
                color: "#F2EEE6",
              }}
            >
              <span>Software your business&nbsp;</span>
              <span style={{ color: "#2F4BFF", fontStyle: "italic" }}>runs on.</span>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 24,
                lineHeight: 1.4,
                color: "#D6D3D1",
              }}
            >
              Websites, intelligent AI systems, and custom software. Built, shipped, running.
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
