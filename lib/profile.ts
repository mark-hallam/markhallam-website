// Site copy shared by the homepage, About and Contact pages.
// Approved positioning (1 Nov 2026); edit wording here so pages stay in step.
// House style: no dashes as punctuation, no "CEO" title, no advisory pitch.

export const POSITIONING = [
  "Solving problems from first principles and shipping with agents.",
  "Building for agents first.",
] as const;

export const SITE_TITLE = "Mark Hallam: first-principles builder";

export const SITE_DESCRIPTION =
  "Solving problems from first principles and shipping with agents. Building for agents first. Founder of SKYCOT, aerospace background, building in public from Melbourne.";

export const EMAIL = "markhallam@skycot.com";

export const HERO_BODY =
  "I don't write the code. I work out the problem, and AI agents build it. I strip every problem back to what's actually true, question each assumption, then explain it so clearly an agent can't get it wrong. Founder of SKYCOT, with a background in aerospace and aviation, building in public from Melbourne.";

export const ABOUT_PARAGRAPHS = [
  "I'm Mark Hallam, founder of SKYCOT, based in Melbourne. I'm not a developer. My background is aerospace and aviation: project management on national air navigation technology, clean propulsion research for drones and air taxis, aerospace and defence consulting, and airline operations. In every role the job was the same: find where a complicated system isn't working, work out what's actually true, and fix the cause.",
  "Now I use the same method with AI. I start by stripping a problem back to what's actually true, then write it down so clearly that an agent can't misread it. Then I let a team of AI agents build it while I check the results like an engineer would.",
  "That's how a non-coder ships production software. The bottleneck isn't code any more. It's clear thinking and asking the right question. I'm doing all of this in public, from Melbourne.",
  "I also write about where AI is heading: alignment as systems start to improve themselves, and why countries need reliable access to frontier models.",
];

export type BuiltItem = {
  title: string;
  body: string;
  links: string[]; // shown as the full web address, per approved copy
};

export const BUILT: BuiltItem[] = [
  {
    title: "SKYCOT, the kids app.",
    body: "A Mac app where kids describe the app they want and AI builds it, with a parent in the loop. 39 beta builds in eight days, about 25 of them published for download.",
    links: ["https://skycot.com"],
  },
  {
    title: "SKYCOT Business (in progress).",
    body: "A Mac app that handles the admin busywork for business owners. It runs on the owner's own AI subscription and asks for approval before anything leaves the Mac.",
    links: [],
  },
  {
    title: "My agent job board.",
    body: "I post jobs on GitHub. Claude and Codex pick them up, do the work, ask me when something is unclear, and report back done or blocked. A non-developer running a software team of AI agents.",
    links: [],
  },
  {
    title: "DAC (Declarative Agent Compilation).",
    body: "An open-source prompt compiler, MIT licensed, that turns a plain-English idea into a plan many agents can run in parallel. It started life as GYSOM.",
    links: [
      "https://github.com/mark-hallam/DAC-Declarative-Agent-Compilation",
      "https://gysom.com",
    ],
  },
];

export const HOW_I_THINK = {
  lead: "First principles, then the right question.",
  body: "Most failures with AI aren't execution failures. They're clever answers to the wrong problem. So before anything gets built, I ask what's actually true, what the real constraint is, and what 'done' looks like. Then I treat the work like engineering: small steps I can check, tests that prove it works, and fixing the root cause instead of patching symptoms. Agents are fast and literal. The person who frames the problem well gets the leverage.",
  href: "https://www.markhallam.com.au/writing/the-path-of-least-resistance-for-agents",
};

export const HOW_I_WORK: { step: string; body: string }[] = [
  {
    step: "Strip it back.",
    body: "What's actually true, what the real constraint is, and what done looks like.",
  },
  {
    step: "Write it for agents.",
    body: "A brief so clear an agent can't misread it: the goal, the limits, and how the result will be checked.",
  },
  {
    step: "Let agents build.",
    body: "Claude and Codex work in small steps that can each be checked on their own.",
  },
  {
    step: "Check it like an engineer.",
    body: "A passing test, a screenshot or a live check. An agent saying it's finished isn't proof.",
  },
];

export type Role = { role: string; where?: string; when: string };

export const BACKGROUND: Role[] = [
  {
    role: "Project manager, national air navigation technology programmes",
    when: "2023 to now",
  },
  {
    role: "Project leader, clean propulsion for drones and advanced air mobility",
    where: "Aerostructures Innovation Research Hub, Swinburne University of Technology",
    when: "2022 to 2023",
  },
  {
    role: "Aerospace, aviation and defence consultant",
    when: "2020 to 2022",
  },
  {
    role: "Account manager, military and general aviation",
    where: "PPG Aerospace",
    when: "2019 to 2020",
  },
  {
    role: "Airline operations",
    when: "Earlier",
  },
];

export const BACKGROUND_NOTE =
  "SKYCOT and the builds on this site are my own projects, separate from my day job.";

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

export const CONTACT_BODY =
  "Building something with agents, or want to compare notes on first-principles problem solving? Email is the most reliable way to reach me.";

export const CONTACT_TOPICS = [
  "Roles and projects building with, or for, AI agents",
  "Conversations about building with AI agents",
  "Podcasts and interviews about building in public",
  "Other builders comparing notes",
];
