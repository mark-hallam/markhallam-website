import { essayMarkdown } from "@/lib/agent";
import { getEssaySlugs } from "@/lib/essays";

// Each essay as Markdown, served at /writing/<slug>.md (a rewrite in next.config.ts points here).
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getEssaySlugs().map((slug) => ({ slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const md = essayMarkdown(slug);
  if (!md) return new Response("Not found\n", { status: 404 });
  return new Response(md, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
