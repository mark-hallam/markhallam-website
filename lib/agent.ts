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

export function essayMarkdown(slug: string): string | null {
  const file = path.join(process.cwd(), "content", "essays", `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  const lines = [
    `# ${data.title}`,
    "",
    `By ${profile.name}, ${new Date(data.date).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}. ${data.readMinutes} minute read.`,
    `Web page: ${essayUrl(slug)}`,
    "",
  ];
  if (data.dek) lines.push(`> ${data.dek}`, "");
  return lines.join("\n") + content.trim() + `\n\n---\nContact ${profile.name}: ${profile.email}\n`;
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
    p.summary,
    "",
    `Contact: ${p.email} (${p.contact}) LinkedIn: ${p.sameAs.find((s) => s.label === "LinkedIn")?.url}`,
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
    ...p.hardProblems.map((h) => `- ${h.title} ${h.where} ${h.story}${"source" in h && h.source ? " Source: " + h.source : ""}`),
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
    "",
  ];
  return out.join("\n");
}

export function llmsFullTxt(): string {
  const essays = getEssayMetaList();
  return [llmsTxt(), "", "# Essays in full", "", ...essays.map((e) => essayMarkdown(e.slug) + "\n")].join("\n");
}

/** schema.org Person, the structured data search engines and agents read. */
export function personJsonLd() {
  const p = profile;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE}/#mark`,
    name: p.name,
    url: `${SITE}/`,
    email: `mailto:${p.email}`,
    description: `${p.positioning.join(" ")} ${p.summary}`,
    address: { "@type": "PostalAddress", addressLocality: "Melbourne", addressRegion: "VIC", addressCountry: "AU" },
    jobTitle: ["Project Manager", "Founder"],
    worksFor: [
      { "@type": "Organization", name: "Airservices Australia" },
      { "@type": "Organization", name: "SKYCOT", url: "https://skycot.com" },
    ],
    alumniOf: { "@type": "CollegeOrUniversity", name: "RMIT University" },
    hasCredential: p.credentials.map((c) => ({ "@type": "EducationalOccupationalCredential", name: c.name, recognizedBy: c.issuer })),
    knowsAbout: ["AI agents", "First-principles problem solving", "Aviation engineering", "Project management", "Airworthiness and regulatory approvals"],
    sameAs: p.sameAs.map((s) => s.url),
    subjectOf: p.builds
      .filter((b) => b.links.length)
      .map((b) => ({ "@type": "CreativeWork", name: b.name, description: b.summary, url: b.links[0] })),
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
