import { projects, blogPosts } from "@/lib/data";

export async function GET() {
  const baseUrl = "https://markhallam.com.au";

  const staticPages = [
    { url: "/", changefreq: "weekly", priority: "1.0" },
    { url: "/projects", changefreq: "weekly", priority: "0.9" },
    { url: "/blog", changefreq: "daily", priority: "0.9" },
    { url: "/learn", changefreq: "monthly", priority: "0.8" },
    { url: "/about", changefreq: "monthly", priority: "0.7" },
  ];

  const projectPages = projects.map((p) => ({
    url: `/projects/${p.slug}`,
    changefreq: "monthly",
    priority: "0.7",
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `/blog/${p.slug}`,
    changefreq: "monthly",
    priority: "0.8",
  }));

  const allPages = [...staticPages, ...projectPages, ...blogPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemap.trim(), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
