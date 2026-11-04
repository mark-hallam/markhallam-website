import { argoMarkdown } from "@/lib/argo-md";

// /argo.md (rewritten here in next.config.ts): the Argo story as Markdown, for agents.
export const dynamic = "force-static";

export function GET() {
  return new Response(argoMarkdown(), { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
