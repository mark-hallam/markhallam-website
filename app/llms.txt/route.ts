import { llmsTxt } from "@/lib/agent";

// /llms.txt: the plain text page an AI agent reads first (llmstxt.org).
export const dynamic = "force-static";

export function GET() {
  return new Response(llmsTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
