import { profile } from "@/lib/agent";

// /profile.json: the same facts as the web pages, as data an agent can use without parsing HTML.
export const dynamic = "force-static";

export function GET() {
  const { _about, ...facts } = profile; // eslint-disable-line @typescript-eslint/no-unused-vars
  return Response.json(facts);
}
