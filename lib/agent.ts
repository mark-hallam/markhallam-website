// What agents read: llms.txt, llms-full.txt, the essays as Markdown and the structured data (JSON-LD)
// on every page. All of it is built from content/profile.json and the essay files, so a person and an
// agent always see the same facts.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import profile from "@/content/profile.json";
import { getEssayMetaList, type EssayMeta } from "@/lib/essays";

export const SITE = profile.url; // https://www.markhallam.com.au, the address the site is served from

export type Profile = typeof profile;
export { profile };

const essayUrl = (slug: string) => `${SITE}/writing/${slug}`;

/** An "at a glance" box written as HTML in an essay becomes a plain Markdown list. */
function asideToMarkdown(md: string): string {
  return md.replace(/<aside[^>]*>([\s\S]*?)<\/aside>/g, (_m, inner: string) => {
    const title = /<div[^>]*>([\s\S]*?)<\/div>/.exec(inner)?.[1]?.trim();
    const pairs = [...inner.matchAll(/<dt[^>]*>([\s\S]*?)<\/dt>\s*<dd[^>]*>([\s\S]*?)<\/dd>/g)];
    const head = title ? `**${title.charAt(0) + title.slice(1).toLowerCase()}**\n\n` : "";
    return head + pairs.map((p) => `- **${p[1].trim()}:** ${p[2].trim()}`).join("\n");
  });
}

export function essayMarkdown(slug: string): string | null {
  const file = path.join(process.cwd(), "content", "essays", `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  const date = new Date(data.date).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
  const parts = [
    `# ${data.title}`,
    `By ${profile.name}, ${date}. ${data.readMinutes} minute read.`,
    `Web page: ${essayUrl(slug)}`,
  ];
  if (data.dek) parts.push(`> ${data.dek}`);
  // Highlighted phrases are HTML spans in the essay files; agents get them as bold Markdown.
  const body = asideToMarkdown(content.trim()).replace(/<span class="accent">([\s\S]*?)<\/span>/g, "**$1**");
  parts.push(body, "---", `Contact ${profile.name}: ${profile.email}`);
  return parts.join("\n\n") + "\n";
}

function essayLine(e: EssayMeta) {
  return `- [${e.title}](${essayUrl(e.slug)}.md): ${e.dek ?? ""} (${e.date})`;
}

export function llmsTxt(): string {
  const essays = getEssayMetaList();
  const p = profile;
  const out = [
    `# ${p.name}`,
    "",
    `> ${p.positioning.join(" ")} ${p.location}.`,
    "",
    `Updated: ${new Date().toISOString().slice(0, 10)}`,
    "",
    p.summary,
    "",
    `Now: ${p.now}`,
    "",
    `Contact: ${p.email} (${p.contact}) LinkedIn: ${p.sameAs.find((s) => s.label === "LinkedIn")?.url} GitHub: ${p.sameAs.find((s) => s.label === "GitHub")?.url}`,
    "",
    "Every fact below is also on the web pages; nothing here is extra. The full text, essays included, is at",
    `${SITE}/llms-full.txt, and the same facts as JSON are at ${SITE}/profile.json.`,
    "",
    "## Things I've made",
    "",
    ...p.builds.map((b) => `- ${b.name} (${b.status}): ${b.summary}${b.links.length ? " " + b.links.join(" ") : ""}`),
    "",
    "## Hard problems I've solved",
    "",
    "Figures are from Mark's own records unless a source is given.",
    "",
    ...p.hardProblems.map((h) => `- ${h.title} ${h.where} ${h.story}${"source" in h && h.source ? " Reported at: " + h.source : ""}${"register" in h && h.register ? " CASA register: " + h.register : ""}${"video" in h && h.video ? " Program video: " + h.video : ""}`),
    "",
    "## Career",
    "",
    ...p.career.map((c) => `- ${c.when}: ${c.role}, ${c.org}.${c.detail ? " " + c.detail : ""}`),
    "",
    "## Credentials",
    "",
    ...p.credentials.map((c) => `- ${c.name}, ${c.issuer}`),
    "",
    "## Writing",
    "",
    ...essays.map(essayLine),
    "",
    "## Pages",
    "",
    `- [Home](${SITE}/): hard problems, things I've made, career, credentials, writing, about and contact on one page`,
    `- [Writing](${SITE}/writing): every essay`,
    `- [About](${SITE}/about): background and how I work`,
    `- [Contact](${SITE}/contact): email and links`,
    `- [DAC](${SITE}/dac): what DAC is and where its code and documentation live`,
    `- [RSS feed](${SITE}/feed.xml): new essays`,
    "",
  ];
  return out.join("\n");
}

export function llmsFullTxt(): string {
  const essays = getEssayMetaList();
  return [llmsTxt(), "", "# Essays in full", "", ...essays.map((e) => essayMarkdown(e.slug) + "\n")].join("\n");
}

/** schema.org structured data: the person, and each thing he made, with him as its creator. */
export function personJsonLd() {
  const p = profile;
  const me = { "@id": `${SITE}/#mark` };
  const orgs = new Set(["Project Management Institute", "Southpac Aerospace", "Amazon Web Services", "RMIT University", "HBA Learning Centres", "Civil Aviation Safety Authority"]);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        ...me,
        name: p.name,
        url: `${SITE}/`,
        email: `mailto:${p.email}`,
        description: `${p.positioning.join(" ")} ${p.summary}`,
        address: { "@type": "PostalAddress", addressLocality: "Melbourne", addressRegion: "VIC", addressCountry: "AU" },
        jobTitle: ["Project Manager, CMATS Service Processes", "Founder"],
        worksFor: [
          { "@type": "Organization", name: "Airservices Australia" },
          { "@type": "Organization", name: "SKYCOT", url: "https://skycot.com" },
        ],
        alumniOf: { "@type": "CollegeOrUniversity", name: "RMIT University" },
        hasCredential: p.credentials.map((c) => {
          const org = c.issuer.split(",")[0];
          return {
            "@type": "EducationalOccupationalCredential",
            name: c.name,
            description: c.issuer,
            ...(orgs.has(org) ? { recognizedBy: { "@type": "Organization", name: org } } : {}),
          };
        }),
        knowsAbout: ["AI agents", "Aviation engineering", "Aircraft maintenance", "Project management", "Regulatory approvals"],
        sameAs: p.sameAs.map((s) => s.url),
      },
      ...p.builds.map((b) => ({
        "@type": b.links.some((l) => l.includes("github.com")) ? "SoftwareSourceCode" : "CreativeWork",
        name: b.name,
        description: b.summary,
        creativeWorkStatus: b.status,
        // A team project credits Mark as a contributor; his own builds as their creator.
        ...(b.status.startsWith("Team project") ? { contributor: me } : { creator: me }),
        ...(b.links.length ? { url: b.links[0], sameAs: b.links.slice(1) } : {}),
      })),
    ],
  };
}

export function articleJsonLd(e: EssayMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: e.title,
    description: e.dek,
    datePublished: e.date,
    url: essayUrl(e.slug),
    author: { "@id": `${SITE}/#mark`, "@type": "Person", name: profile.name, url: `${SITE}/` },
  };
}

/** Metadata for a page: its own canonical address and Open Graph card, and the llms.txt link for agents. */
export function pageMeta(pathname: string, title: string, description: string, extraTypes: Record<string, string> = {}) {
  return {
    title,
    description,
    alternates: { canonical: pathname, types: { "text/plain": "/llms.txt", ...extraTypes } },
    openGraph: {
      title: `${title} | ${profile.name}`,
      description,
      url: `${SITE}${pathname}`,
      type: "website" as const,
      locale: "en_AU",
      images: [{ url: `${SITE}/opengraph-image`, width: 1200, height: 630, alt: `${profile.name}: ${profile.positioning[0]}` }],
    },
    twitter: { card: "summary_large_image" as const, site: "@MarkHallam" },
  };
}
