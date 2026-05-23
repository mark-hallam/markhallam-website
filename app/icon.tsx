import { ImageResponse } from "next/og";

// Favicon — the small brand mark that appears in browser tabs.
// 32x32 PNG, gradient square matching the wordmark gradient. Replaces the
// default Next.js favicon.

export const runtime = "nodejs";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
          borderRadius: 6,
        }}
      />
    ),
    { ...size },
  );
}
