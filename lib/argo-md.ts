import { ARGO, ARGO_PROOF, ARGO_RECORDS, ARGO_SOURCES } from "@/content/argo";
import { SITE, profile } from "@/lib/agent";

// The Argo story as Markdown, for agents (served at /argo.md).
export function argoMarkdown(): string {
  const link = (u: string) => (u.startsWith("/") ? SITE + u : u);
  return [
    `# ${ARGO.title}`,
    `By ${profile.name}. Web page: ${SITE}/argo`,
    ARGO.lede,
    ARGO.voiceLine,
    `> ${ARGO.ownLine}`,
    ARGO.stats.map((s) => `- **${s.n}** ${s.l}`).join("\n"),
    ARGO.statsNote,
    "## What it was",
    ...ARGO.what,
    "## The dates",
    ARGO.timeline.map((t) => `- ${t.date}, ${t.who}: ${t.what}${t.source !== undefined ? ` Source: ${ARGO_SOURCES[t.source].url}` : ""}`).join("\n"),
    ARGO.timelineNote,
    "## What was live, and what was only built",
    ARGO.status.map((r) => `- **${r.item}**: ${r.state}. ${r.note}`).join("\n"),
    ARGO_RECORDS,
    "## How I built it",
    ...ARGO.how,
    "## What went wrong, and what it taught me",
    ARGO.wrong.map((p) => `- ${p}`).join("\n"),
    ARGO.learnedLead,
    ARGO.learned.map((p, i) => `${i + 1}. ${p}`).join("\n"),
    "## Related work you can check",
    ARGO_PROOF.map((p) => `- [${p.label}](${link(p.url)})`).join("\n"),
    "## What I want next",
    `${ARGO.wants} Email: ${profile.email}`,
    "## Sources",
    ARGO_SOURCES.map((s) => `- [${s.label}](${s.url})`).join("\n"),
  ].join("\n\n") + "\n";
}

