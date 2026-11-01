// Approved copy shared by the homepage and the About page (job 4, 1 Nov 2026).
// Edit wording here so both pages stay in step.

export const SITE_TITLE = "Mark Hallam: first-principles builder";

export const SITE_DESCRIPTION =
  "Founder of SKYCOT. I solve problems from first principles and ship real products with AI agents. Building for agents first, in public, from Melbourne.";

export const ABOUT_PARAGRAPHS = [
  "I'm Mark Hallam, founder and CEO of Curble, which trades as SKYCOT. I'm not a developer. I spent twenty years in operations, growth and product, finding where complicated systems leak value and fixing them.",
  "Now I use the same method with AI. I start by stripping a problem back to what's actually true, then write it down so clearly that an agent can't misread it. Then I let a team of AI agents build it while I check the results like an engineer would.",
  "That's how a non-coder ships production software. The bottleneck isn't code any more. It's clear thinking and asking the right question. I'm doing all of this in public, from Melbourne.",
];

export type BuiltItem = {
  title: string;
  body: string;
  links: string[]; // shown exactly as written in the approved copy
};

export const BUILT: BuiltItem[] = [
  {
    title: "SKYCOT, the kids app.",
    body: "A Mac app where kids describe the app they want and AI builds it, with a parent in the loop. Took it from first beta to production through 39 beta releases.",
    links: ["https://skycot.com"],
  },
  {
    title: "SKYCOT Business (in progress).",
    body: "A Mac app that takes the computer admin off a small-business owner's plate, using their own AI plan. Built by Claude Code working on its own overnight.",
    links: [],
  },
  {
    title: "An AI dev team run through GitHub issues.",
    body: "A job board where I write the brief, and AI agents pick up the work, ask me questions, and report back done or blocked. A non-developer running a software team.",
    links: [],
  },
  {
    title: "GYSOM, now DAC.",
    body: "An open-source (MIT licence) prompt compiler that turns a plain-English idea into a plan many agents can run in parallel.",
    links: [
      "https://github.com/mark-hallam/DAC-Declarative-Agent-Compilation",
      "https://gysom.com",
    ],
  },
];

export const HOW_I_THINK = {
  lead: "First principles, then the right question.",
  body: "Most failures with AI aren't execution failures. They're clever answers to the wrong problem. So before anything gets built, I ask what's actually true, what the real constraint is, and what 'done' looks like. Then I treat the work like engineering: small steps I can check, tests that prove it works, and fixing the root cause instead of patching symptoms. Agents are fast and literal. The person who frames the problem well gets the leverage.",
  href: "https://www.markhallam.com.au/writing/first-principles-before-second-principles",
};

export const CONTACT_HEADING = "Say hello.";

export const CONTACT_BODY =
  "Building something with agents, or want to compare notes on first-principles problem solving? Email is the most reliable way to reach me.";

export const CONTACT_TOPICS = [
  "Conversations about building with AI agents",
  "Podcasts and interviews about building in public",
  "Other builders comparing notes",
];
