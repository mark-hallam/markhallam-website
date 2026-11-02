import type { NextConfig } from "next";

// Essays moved to content/essays-unpublished/ send visitors to the Writing page
// instead of a "not found" page. Temporary redirects, so they can be republished.
const UNPUBLISHED_ESSAYS = [
  "why-most-enterprise-ai-pilots-die-in-committee",
  "the-moat-is-not-your-model",
  "first-principles-before-second-principles",
];

const nextConfig: NextConfig = {
  // The homepage is a hand-built static page (public/home.html) with its own motion and styles.
  async rewrites() {
    return { beforeFiles: [{ source: "/", destination: "/home.html" }], afterFiles: [], fallback: [] };
  },
  async redirects() {
    return UNPUBLISHED_ESSAYS.map((slug) => ({
      source: `/writing/${slug}`,
      destination: "/writing",
      permanent: false,
    }));
  },
};

export default nextConfig;
