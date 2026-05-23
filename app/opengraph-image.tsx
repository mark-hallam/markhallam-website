import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

// Default OG image for the site — used when any URL without its own OG is shared.
// Renders to 1200x630 (the standard og:image size for LinkedIn, X, Slack, etc.)

export const runtime = "nodejs";
export const alt = "Mark Hallam — AI Transformation Advisor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const audiowide = fs.readFileSync(
    path.join(process.cwd(), "public/fonts/Audiowide-Regular.ttf"),
  );
  const inter = fs.readFileSync(
    path.join(process.cwd(), "public/fonts/Inter-SemiBold.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#ffffff",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Top gradient bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background:
              "linear-gradient(90deg, #8B5CF6 0%, #EC4899 50%, #0891B2 100%)",
          }}
        />

        {/* Top-left eyebrow */}
        <div
          style={{
            display: "flex",
            fontFamily: "Inter",
            fontSize: 22,
            color: "#6b7280",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Melbourne · Australia
        </div>

        {/* Centred wordmark + tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            flex: 1,
            marginTop: 40,
          }}
        >
          <div
            style={{
              fontFamily: "Audiowide",
              fontSize: 156,
              lineHeight: 1.05,
              letterSpacing: "0.02em",
              backgroundImage: "linear-gradient(90deg, #8B5CF6, #EC4899)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: 28,
            }}
          >
            Mark Hallam
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Inter",
              fontSize: 38,
              color: "#0f1419",
              fontWeight: 600,
              letterSpacing: "-0.015em",
            }}
          >
            AI Transformation Advisor · Founder of Skycot
          </div>
        </div>

        {/* Bottom-right URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            fontFamily: "Inter",
            fontSize: 24,
            color: "#9ca3af",
            fontWeight: 600,
          }}
        >
          markhallam.com.au
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Audiowide", data: audiowide, style: "normal", weight: 400 },
        { name: "Inter", data: inter, style: "normal", weight: 600 },
      ],
    },
  );
}
