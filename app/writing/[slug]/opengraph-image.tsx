import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";
import { getEssayBySlug } from "@/lib/essays";

// Per-essay OG image. When an essay URL is shared (LinkedIn, X, Slack, iMessage),
// the platform fetches this and shows a card with the essay's title.

export const alt = "An essay by Mark Hallam";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Params = { slug: string };

export default async function EssayOG({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const essay = await getEssayBySlug(slug);

  const audiowide = fs.readFileSync(
    path.join(process.cwd(), "public/fonts/Audiowide-Regular.ttf"),
  );
  const inter = fs.readFileSync(
    path.join(process.cwd(), "public/fonts/Inter-SemiBold.ttf"),
  );

  const title = essay?.title ?? "An essay by Mark Hallam";
  const dateLabel = essay
    ? new Date(essay.date).toLocaleDateString("en-AU", {
        month: "long",
        year: "numeric",
      })
    : "";
  const minutes = essay?.readMinutes;

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
        <div
          style={{
            display: "flex",
            fontFamily: "Inter",
            fontSize: 22,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 600,
            backgroundImage: "linear-gradient(90deg, #8B5CF6, #EC4899)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Essay · markhallam.com.au
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            fontFamily: "Inter",
            fontSize: title.length > 60 ? 56 : title.length > 40 ? 64 : 72,
            lineHeight: 1.1,
            color: "#0f1419",
            fontWeight: 600,
            letterSpacing: "-0.025em",
            marginTop: 40,
            marginBottom: 40,
            maxWidth: "1040px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontFamily: "Audiowide",
              fontSize: 36,
              letterSpacing: "0.02em",
              backgroundImage: "linear-gradient(90deg, #8B5CF6, #EC4899)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            By Mark Hallam
          </div>
          {minutes != null && (
            <div
              style={{
                display: "flex",
                fontFamily: "Inter",
                fontSize: 22,
                color: "#9ca3af",
                fontWeight: 600,
              }}
            >
              {dateLabel} · {minutes} min read
            </div>
          )}
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
