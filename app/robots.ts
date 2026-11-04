import type { MetadataRoute } from "next";
import { SITE } from "@/lib/agent";

// Every person, search engine and AI agent is welcome to read the whole site.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${SITE}/sitemap.xml`, host: SITE };
}
