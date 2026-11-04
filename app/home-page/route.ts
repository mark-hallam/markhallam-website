import fs from "node:fs";
import path from "node:path";
import { personJsonLd } from "@/lib/agent";

// The homepage is the hand-built page public/home.html. "/" is rewritten here (next.config.ts) so that
// at build time it gets the same structured data (JSON-LD) as every other page, from content/profile.json.
export const dynamic = "force-static";

export function GET() {
  const page = fs.readFileSync(path.join(process.cwd(), "public", "home.html"), "utf8");
  const data = JSON.stringify(personJsonLd()).replace(/</g, "\\u003c");
  const head = `<script type="application/ld+json">${data}</script>\n</head>`;
  return new Response(page.replace("</head>", head), {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
