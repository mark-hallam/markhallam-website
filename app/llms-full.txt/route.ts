import { llmsFullTxt } from "@/lib/agent";

// /llms-full.txt: everything in llms.txt plus every essay in full, in one plain text file.
export const dynamic = "force-static";

export function GET() {
  return new Response(llmsFullTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
