import fs from "node:fs";
import path from "node:path";
import { personJsonLd } from "@/lib/agent";
import { getEssayMetaList } from "@/lib/essays";

// The homepage is the hand-built page public/home.html. "/" is rewritten here (next.config.ts) so that at
// build time it gets the same structured data (JSON-LD) as every other page, and its essay list is built
// from the essay files (title, date and summary), so it can never fall out of step with /writing.
export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const month = (iso: string) => new Date(iso).toLocaleDateString("en-AU", { month: "long", year: "numeric" });
const CHEV = '<svg class="chev" viewBox="0 0 8 14" aria-hidden="true"><path d="M1.5 1.5 6.5 7l-5 5.5"/></svg>';

function posts() {
  const rows = getEssayMetaList().map(
    (e) =>
      `      <li data-reveal><a href="/writing/${e.slug}"><span class="post-text"><span class="post-title">${esc(e.title)}</span>` +
      `<span class="post-meta"><time datetime="${e.date}">${month(e.date)}</time>${e.dek ? ". " + esc(e.dek) : ""}</span></span>${CHEV}</a></li>`,
  );
  return `<ul class="posts">\n${rows.join("\n")}\n    </ul>`;
}

export function GET() {
  let page = fs.readFileSync(path.join(process.cwd(), "public", "home.html"), "utf8");
  page = page.replace(/<ul class="posts">[\s\S]*?<\/ul>(\s*<!-- posts:end -->)/, `${posts()}$1`);
  page = page.replace(/<!--[\s\S]*?-->\n?/g, ""); // design notes in the source are for the repository, not for readers or agents
  const data = JSON.stringify(personJsonLd()).replace(/</g, "\\u003c");
  page = page.replace("</head>", `<script type="application/ld+json">${data}</script>\n</head>`);
  return new Response(page, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
