import type { NextConfig } from "next";

// Essays moved to content/essays-unpublished/ send visitors to the Writing page
// instead of a "not found" page. Temporary redirects, so they can be republished.
const UNPUBLISHED_ESSAYS = [
  "why-most-enterprise-ai-pilots-die-in-committee",
  "the-moat-is-not-your-model",
  "first-principles-before-second-principles",
];

const nextConfig: NextConfig = {
  async redirects() {
    return UNPUBLISHED_ESSAYS.map((slug) => ({
      source: `/writing/${slug}`,
      destination: "/writing",
      permanent: false,
    }));
  },
};

export default nextConfig;
