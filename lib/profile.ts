import profile from "@/content/profile.json";

// Site copy shared by the Next.js pages (the facts themselves live in content/profile.json).
// Approved positioning (1 Nov 2026); edit wording here so pages stay in step.
// House style: no dashes as punctuation, no "CEO" title, no advisory pitch.

export const POSITIONING = [
  "Solving hard problems from first principles and shipping with agents.",
  "Building for agents first.",
] as const;

export const SITE_TITLE = "Mark Hallam: solving hard problems and shipping with agents";

export const SITE_DESCRIPTION =
  "Solving hard problems from first principles and shipping with agents. Ten A320s into Australia, a hydrogen drone program up and flying, and now software built by AI agents. Melbourne.";

export const EMAIL = profile.email;

export const BELIEFS = [
  {
    h: "Question the requirement first.",
    p: "Most projects fail at the requirement, not the delivery. If something doesn't make sense, raise it before anything gets built.",
  },
  {
    h: "Done means checked.",
    p: "An agent saying it's finished isn't evidence. A passing test, a screenshot or a live check is.",
  },
  {
    h: "Fix the root cause.",
    p: "Patching symptoms is how complicated systems drift. Find the real cause and fix it once.",
  },
  {
    h: "Build for agents first.",
    p: "Write every brief, document and interface so an agent can't misread it. People benefit too.",
  },
  {
    h: "Ship the eighty percent solution.",
    p: "Working software that real people use teaches you more than a perfect plan that arrives late.",
  },
];

export const CONTACT_HEADING = "Say hello.";

export const CONTACT_BODY = `${profile.contact} Email is the most reliable way to reach me.`;

export const CONTACT_TOPICS = [
  "Roles and projects building with, or for, AI agents",
  "Conversations about building with AI agents",
  "Podcasts and interviews about building in public",
  "Other builders comparing notes",
];
