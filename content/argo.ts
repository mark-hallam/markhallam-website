// The Argo story: one source for the /argo page, its Markdown copy for agents (/argo.md) and llms.txt.
// Every fact comes from Argo's own records: its git history and GitHub pull requests, its verified state record
// (23 June 2026, a code plus live production check), its voice hand-off notes, and the case study on this site.
// Other companies' launch dates come from the press sources listed in `sources`. No dashes in Mark's voice.

export const ARGO = {
  title: "Argo: AI teammates, built by one person directing AI agents",
  lede:
    "Between April and June 2026 I built Argo, a platform where a business hires AI teammates from a template or a plain English description. A person approves anything sensitive, and every action goes into a tamper evident log. It ran live. It had no paying customers. This page is the evidence, with what worked, what didn't and what I learned.",
  stats: [
    { n: "57", l: "days, 29 April to 24 June 2026" },
    { n: "13,803", l: "commits, about 9,000 of them ledger updates" },
    { n: "2,901", l: "merged pull requests" },
    { n: "1", l: "person directing Claude and Codex agents" },
  ],
  statsNote:
    "Counts from Argo's git history and GitHub pull requests. Apart from the agents and automated checks I ran, every change is under my GitHub account; no one else worked on it. The code is private for now.",

  what: [
    "A business could hire an AI teammate the way it hires a person. Pick one of 37 role templates, such as receptionist, recruiter or executive assistant, or describe the job in plain English, and Argo's builder, Genesis, wrote the teammate: its role, its instructions and its safety rules. Anything sensitive was set to wait for a person's approval, and Genesis would not let a sensitive action skip that.",
    "Every action went into a hash chained audit log, so nobody could quietly change the record. Teammates worked with any AI model, connected to business tools, and a lead teammate could hand work out to the rest of the team. It ran hosted on AWS in Sydney as SKYCOT AI Teammates, with sign up, hiring and payment working.",
  ],

  shots: [
    { src: "/assets/argo/approvals.jpg", alt: "Argo's Approvals inbox: decisions AI teammates queued for a person, sorted by risk, with Approve and Refuse buttons", caption: "Approvals: sensitive work waits for a person." },
    { src: "/assets/argo/genesis.jpg", alt: "Argo's Genesis screen: describe the role in plain English and Genesis drafts a real teammate, with persona, charter and skills", caption: "Genesis: describe a teammate in plain English." },
    { src: "/assets/argo/audit.jpg", alt: "Argo's Audit screen: every action hash chained and replayable, such as approval asked, policy evaluated, tool call and teammate hired", caption: "Audit: every action, hash chained." },
  ],
  shotsNote: "Argo's own screens from its 29 May 2026 walkthrough, in a sample workspace. It ran under the SKYCOT name.",

  timeline: [
    { date: "29 Apr 2026", who: "Argo", what: "First commit: the core, permissions and command line." },
    { date: "30 Apr 2026", who: "Argo", what: "Hash chained audit log." },
    { date: "3 May 2026", who: "Argo", what: "First role template." },
    { date: "6 May 2026", who: "Argo", what: "Genesis: a plain English description becomes a teammate, with a safety check on every action." },
    { date: "11 May 2026", who: "Argo", what: "Delegation contracts: what one teammate may hand to another." },
    { date: "1 to 2 Jun 2026", who: "Argo", what: "Voice teammates you could talk to in real time, built and tested in development, with both sides of each conversation saved to the audit log; not switched on in production." },
    { date: "23 Jun 2026", who: "Argo", what: "Verified live in production: sign up, hiring through Genesis, the audit log and payment." },
    { date: "24 Jun 2026", who: "Argo", what: "Last change merged; retired, production torn down in late June." },
    { date: "11 Aug 2026", who: "xAI", what: "Grok Bot beta: AI teammates you can give real work to, each on its own cloud computer.", source: 0 },
    { date: "8 Sep 2026", who: "Meta", what: "Muse, a personal AI agent that asks permission before sensitive actions.", source: 2 },
    { date: "17 Sep 2026", who: "xAI", what: "Grok Bot adds voice.", source: 1 },
    { date: "29 Sep 2026", who: "OpenAI", what: "dots: always on agents, with approval needed for actions that affect your accounts.", source: 3 },
  ] as { date: string; who: string; what: string; source?: number }[],
  timelineNote:
    "These are other companies' products with their own scope, and they go further than Argo did: their agents act on their own, on their own computers, which Argo built but kept switched off. The overlap is the dated part: Genesis, approvals and the audit log were live in Argo's production by 23 June 2026; templates and voice were built in May and June but were not part of that production check.",

  status: [
    { item: "Genesis: plain English to a working teammate", state: "Live", note: "Verified in production with a real AI model, 23 June 2026." },
    { item: "Approvals and permissions", state: "Live", note: "Deny by default; new teammates start read only." },
    { item: "Hash chained audit log", state: "Live", note: "Verify and export worked in production." },
    { item: "Sign up, workspaces and payment", state: "Live", note: "Email sign in, tenant isolation, Stripe subscription." },
    { item: "Business tool connectors", state: "Live", note: "17 token based tools; Gmail, calendar and CRM sign in were built but not registered." },
    { item: "37 role templates", state: "Built", note: "In the app as starting points for hiring." },
    { item: "Lead teammate handing out work", state: "Built", note: "In the app; not part of the 23 June production check." },
    { item: "Voice teammates", state: "Built and tuned", note: "Built and tuned in development; not switched on in production because I couldn't pay for the voice service." },
    { item: "Letting teammates act on their own", state: "Built, off", note: "Deliberately switched off in production behind three separate locks." },
    { item: "Merge gate and second agent checker", state: "Built, off", note: "Shipped switched off; I never turned them on." },
  ],

  how: [
    "I'm not a developer. I directed a swarm of AI coding agents: between one and four Claude workers, with Codex workers joining through May, and a conductor agent that wrote briefs, reviewed and merged pull requests but wasn't allowed to write feature code.",
    "It all ran off a written protocol. One ledger listed every piece of work, each row pointing to a brief: what to change, which files it could touch and the tests that proved it was done. Nearly 2,000 briefs in all. Every call I made went into a numbered decision record, 60 by the end, so an agent couldn't reopen it later.",
    "On 24 May I set the no theatre rule: nothing gets called done or running without evidence from that same turn, a log line or a passing test. That rule, and the tools I built to run agents around the clock, became mStack, my open source skills for people and their AI agents, and the way I build LVLme.",
  ],

  wrong: [
    "No paying customers. In late June I had agents argue the business case against me. The verdict: a general platform for governing AI teammates was a losing position, because the big AI companies were shipping the same building blocks. They were right, and go to market is my weakest skill.",
    "I built the checks too late. A merge gate that wouldn't let an agent call work done until the checks passed, and a second agent to check every change, both shipped switched off.",
    "Work that looked done wasn't always done. A safety check stamped a pass without running; a voice feature was called live before production had its key. The no theatre rule came from those moments.",
  ],
  learned: [
    "Build from one customer with one painful job, and test the market before the platform.",
    "Switch the checking on from day one, and measure how often done is really done.",
    "Know your gaps and cover them. Mine is go to market.",
  ],
  learnedLead:
    "This is a program manager's lesson more than a coder's: the work agents produce is the easy part. The job is knowing which of it is real.",

  wants:
    "I'm looking for a technical program manager role in AI deployment or safety operations: getting AI agents to do real work safely, with evidence that it's real.",
} as const;

export const ARGO_SOURCES = [
  { label: "xAI, Introducing Grok Bot (11 August 2026)", short: "xAI announcement", url: "https://x.ai/news/introducing-grok-bot" },
  { label: "Grok Bot voice, 17 September 2026 (Tesla North, press report, 18 September 2026)", short: "press report", url: "https://teslanorth.com/2026/09/18/grok-bot-voice-mode-desktop-mobile" },
  { label: "Meta, Introducing Muse (8 September 2026)", short: "Meta announcement", url: "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/" },
  { label: "OpenAI, Introducing dots (29 September 2026)", short: "OpenAI announcement", url: "https://openai.com/index/introducing-dots/" },
];

export const ARGO_PROOF = [
  { label: "The case study: eight weeks running a swarm of AI coding agents", url: "/writing/eight-weeks-running-a-swarm-of-ai-coding-agents" },
  { label: "mStack, the open source skills that came out of Argo", url: "https://github.com/mark-hallam/mstack" },
  { label: "LVLme, built the same way, with every release on GitHub", url: "https://github.com/mark-hallam/lvlme/releases" },
];

export const ARGO_RECORDS =
  "Argo's verified state record (23 June 2026) was a check of the code and the live production system by five verification agents. It confirmed Genesis, sign up, tenant isolation, the hash chained audit log, the tool connectors and payment were live and real, and listed honestly what was not: voice ran a stand in without the paid key, sign in for Gmail and CRMs wasn't registered, and autonomy was switched off. Argo's code is private for now; I'm preparing it to publish as open source with its full history.";
