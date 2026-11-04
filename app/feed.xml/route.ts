import { SITE, profile } from "@/lib/agent";
import { getEssayMetaList } from "@/lib/essays";

// /feed.xml: every essay as an RSS feed, for feed readers and agents that follow new writing.
export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function GET() {
  const items = getEssayMetaList()
    .map(
      (e) => `    <item>
      <title>${esc(e.title)}</title>
      <link>${SITE}/writing/${e.slug}</link>
      <guid>${SITE}/writing/${e.slug}</guid>
      <pubDate>${new Date(e.date).toUTCString()}</pubDate>
      <description>${esc(e.dek ?? "")}</description>
    </item>`,
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${esc(profile.name)}: writing</title>
    <link>${SITE}/writing</link>
    <description>Notes from building real software with AI agents.</description>
    <language>en-au</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
