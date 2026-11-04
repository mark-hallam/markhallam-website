import type { NextConfig } from "next";

// Essays moved to content/essays-unpublished/ send visitors to the Writing page
// instead of a "not found" page. Temporary redirects, so they can be republished.
const UNPUBLISHED_ESSAYS = [
  "why-most-enterprise-ai-pilots-die-in-committee",
  "the-moat-is-not-your-model",
  "first-principles-before-second-principles",
];

const nextConfig: NextConfig = {
  // The homepage is a hand-built static page (public/home.html) with its own motion and styles,
  // served through app/home-page, which adds the structured data for agents at build time.
  async rewrites() {
    // Each essay is also served as Markdown for agents, at /writing/<slug>.md.
    return {
      beforeFiles: [
        { source: "/", destination: "/home-page" },
        { source: "/writing/:slug.md", destination: "/writing-md/:slug" },
        { source: "/argo.md", destination: "/argo-md" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  async redirects() {
    return [
      ...UNPUBLISHED_ESSAYS.map((slug) => ({
        source: `/writing/${slug}`,
        destination: "/writing",
        permanent: false,
      })),
      // Browsers, crawlers and some agents ask for /favicon.ico by default; the brand icon is at /icon.
      { source: "/favicon.ico", destination: "/icon", permanent: true },
    ];
  },
};

export default nextConfig;
