import type { MetadataRoute } from "next";
import { SITE } from "@/lib/agent";
import { getEssayMetaList } from "@/lib/essays";

export default function sitemap(): MetadataRoute.Sitemap {
  const essays = getEssayMetaList();
  const latest = essays[0]?.date;
  return [
    { url: `${SITE}/`, lastModified: latest, priority: 1 },
    { url: `${SITE}/writing`, lastModified: latest, priority: 0.8 },
    { url: `${SITE}/about`, priority: 0.6 },
    { url: `${SITE}/contact`, priority: 0.6 },
    ...essays.map((e) => ({ url: `${SITE}/writing/${e.slug}`, lastModified: e.date, priority: 0.7 })),
    { url: `${SITE}/llms.txt`, priority: 0.5 },
  ];
}
