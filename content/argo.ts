// The Argo story: one source for the /argo page, its Markdown copy for agents (/argo.md) and llms.txt.
// Every fact comes from Argo's own records: its git history and GitHub pull requests, its verified state record
// (23 June 2026, a code plus live production check), its voice hand-off notes, and the case study on this site.
// Other companies' launch dates come from the press sources listed in `sources`. No dashes in Mark's voice.

export const ARGO = {
  title: "Six months ago I started building a platform so I could talk to my team of AI agents and get tasks done for me",
  titleAccent: "Now we have Grok Bot, Muse and Dots.",
  story: [
    "I love building with AI. From the start I could see where it was heading, and I wanted to build towards it.",
    "I don't write strict specs and long lists of requirements. I build the foundation and set the outcome I want, then I let the agents work out the best way to get there. I want them to question me and put forward better ways of doing things. On Argo the agents wrote their own plans, and I checked what came back.",
    "I want you to feel the joy I feel when I'm building. I wonder about it too. Once we can just ask for something and it appears, will we lose that joy? I think part of the joy is the journey to get there.",
    "Building with AI, I've found you can only be about six months ahead of what's coming. Whatever you build ends up in the next model or the next update eventually. Argo was like that.",
    "I build the things I want to see, and I've been building for a long time. SKYCOT alone has been an app builder, a payments app, a personal team of AI agents and then Argo's teammates. But I kept most of what I built private. I think now is the time to build in public, share what I make, and maybe inspire others to do the same.",
    "I don't come from a software or developer background. I'm an engineer and I think like one.",
    "I dream of working at a frontier AI company, and I think a lot of people share that dream. So I built LVLme, a tool that measures my chances. It started me at a very low baseline. I hope I can raise it.",
  ],
  lede:
    "Here's what happened. My first commit on Argo was on 29 April 2026. By 23 June it was live in production. You described a teammate in plain English and Argo built it. A person approved anything sensitive, and every action went into an audit log nobody could quietly change. I also built role templates, a lead teammate that hands work to the others, and voice teammates you could talk to. The templates and the lead teammate weren't part of the production check. Voice was, and it was switched off in production. Seven weeks later, on 11 August, xAI opened Grok Bot's public beta with AI teammates. It added voice on 17 September.",
  voiceLine:
    "I built and tuned the voice teammates between 25 May and 10 June 2026. From 1 June you could talk to them in real time, and both sides of every conversation went into the audit log. I never switched voice on in production because I couldn't pay for the voice service.",
  ownLine: "I'm better at building than at go to market. Argo had no paying customers, so I shut it down and wrote up why.",
  stats: [
    { n: "57", l: "days, 29 April to 24 June 2026" },
    { n: "2,901", l: "merged pull requests" },
    { n: "1", l: "person directing Claude and Codex agents" },
  ],
  statsNote:
    "Counts come from Argo's git history and GitHub pull requests. There were 13,803 commits in all. About 9,000 were ledger updates and about 2,160 touched the Rust core. Apart from the agents and automated checks I ran, every change is under my GitHub account. No one else worked on it. The code is now open source on GitHub under the MIT licence, with its commits dated from 29 April 2026.",

  what: [
    "A business could hire an AI teammate the way it hires a person. You picked one of 37 role templates, like receptionist, recruiter or executive assistant, or you described the job in plain English. Argo's builder, Genesis, then wrote the teammate with its role, instructions and safety rules. Anything sensitive had to wait for a person's approval, and Genesis wouldn't let a teammate skip that.",
    "Every action went into a hash chained audit log, so nobody could quietly change the record. Teammates could run on Anthropic, Amazon Bedrock or OpenAI compatible models, and production ran on Anthropic. They connected to 17 business tools. A lead teammate could hand work to the rest of the team, though that wasn't part of the production check. It ran on AWS in Sydney as SKYCOT AI Teammates, with sign up, hiring and payment all working.",
  ],

  shots: [
    { src: "/assets/argo/approvals.jpg", alt: "Argo's Approvals inbox, where decisions AI teammates queued wait for a person, sorted by risk, with Approve and Refuse buttons", caption: "Approvals. Sensitive work waits for a person." },
    { src: "/assets/argo/genesis.jpg", alt: "Argo's Genesis screen, where you describe a role in plain English and Genesis drafts the teammate", caption: "Genesis. Describe a teammate in plain English." },
    { src: "/assets/argo/audit.jpg", alt: "Argo's Audit screen, listing every action hash chained, such as approval asked, policy evaluated, tool call and teammate hired", caption: "Audit. Every action is hash chained." },
  ],
  shotsNote: "These are Argo's own screens from its 29 May 2026 walkthrough. They show a test workspace with sample data, two weeks before the first production deployment. Argo ran under the SKYCOT name.",

  timeline: [
    { date: "29 Apr 2026", who: "Argo", what: "First commit, with the core, permissions and command line." },
    { date: "30 Apr 2026", who: "Argo", what: "Hash chained audit log." },
    { date: "3 May 2026", who: "Argo", what: "First role template." },
    { date: "6 May 2026", who: "Argo", what: "Genesis turns a plain English description into a teammate. Every sensitive action has to wait for approval." },
    { date: "11 May 2026", who: "Argo", what: "Delegation contracts set what one teammate can hand to another." },
    { date: "1 to 2 Jun 2026", who: "Argo", what: "Voice teammates you could talk to in real time, built and tested in development, with both sides of each conversation saved to the audit log. Not switched on in production." },
    { date: "12 Jun 2026", who: "Argo", what: "First production deployment passes its checks, on AWS in Sydney." },
    { date: "23 Jun 2026", who: "Argo", what: "My own verification agents check it live in production. Sign up, hiring through Genesis, the audit log and payment all work. The record is private." },
    { date: "24 Jun 2026", who: "Argo", what: "Last change merged. Argo is retired and production torn down in late June." },
    { date: "11 Aug 2026", who: "xAI", what: "Grok Bot opens its public beta after an internal prototype. AI teammates you can give real work to, each on its own cloud computer.", source: 0 },
    { date: "8 Sep 2026", who: "Meta", what: "Muse, a personal AI agent that asks permission before sensitive actions.", source: 2 },
    { date: "17 Sep 2026", who: "xAI", what: "Grok Bot adds voice.", source: 1 },
    { date: "29 Sep 2026", who: "OpenAI", what: "Dots, always on agents that need your approval for actions that affect your accounts.", source: 3 },
  ] as { date: string; who: string; what: string; source?: number }[],
  timelineNote:
    "These are other companies' products and they go further than Argo did. Their agents act on their own, on their own computers. Argo built that but kept it switched off. What overlaps is dated. Genesis, approvals and the audit log were live in Argo's production by 23 June 2026, and templates and voice were built in May and June. Approvals and audit logs for AI agents weren't new in 2026. What I'm showing is that one person directing agents built a working version in 57 days.",

  status: [
    { item: "Genesis, plain English to a working teammate", state: "Live", note: "Checked in production with a real AI model by my own verification agents on 23 June 2026." },
    { item: "Approvals and permissions", state: "Live", note: "Deny by default. New teammates start read only." },
    { item: "Hash chained audit log", state: "Live", note: "Verify and export worked in production." },
    { item: "Sign up, workspaces and payment", state: "Live", note: "Email sign in, separate workspaces for each business and Stripe payment." },
    { item: "Business tool connectors", state: "Live", note: "17 tools connected with access tokens. Sign in for Gmail, calendar and CRMs was built but never registered." },
    { item: "37 role templates", state: "Built", note: "In the app as starting points for hiring." },
    { item: "Lead teammate handing out work", state: "Built", note: "In the app but not part of the 23 June production check." },
    { item: "Voice teammates", state: "Built and tuned", note: "Built and tuned in development. I never switched it on in production because I couldn't pay for the voice service." },
    { item: "Letting teammates act on their own", state: "Built, off", note: "Switched off in production on purpose, behind three separate locks." },
    { item: "Merge gate and second agent checker", state: "Built, off", note: "Shipped switched off and I never turned them on." },
  ],

  how: [
    "I'm not a developer. I directed a swarm of AI coding agents. Between one and four Claude workers did the building, Codex workers joined through May, and a conductor agent wrote the briefs and reviewed and merged the pull requests. The conductor wasn't allowed to write feature code.",
    "It all ran off a written protocol. One ledger listed every piece of work, and each row pointed to a brief saying what to change, which files it could touch and which tests proved it was done. There were nearly 2,000 briefs. Every call I made went into a numbered decision record, 60 by the end, so an agent couldn't reopen it later.",
    "On 24 May I set the no theatre rule. Nothing gets called done or running without evidence from that same turn, like a log line or a passing test. That rule and the tools I built to run agents around the clock became mStack, my open source skills for people and their AI agents. It's also how I build LVLme.",
  ],

  wrong: [
    "Argo had no paying customers. In late June I had agents argue the business case against me. They said a general platform for governing AI teammates was a losing position, because the big AI companies were shipping the same building blocks. They were right, and go to market is my weakest skill.",
    "I built the checks too late. I built a merge gate that stopped an agent calling work done until the checks passed, and a second agent to check every change. Both shipped switched off.",
    "Work that looked done wasn't always done. The test meant to run on a new teammate before it could be hired stamped a pass without running. A voice feature was called live before production had its key. That's where the no theatre rule came from.",
  ],
  learned: [
    "Start with one customer and one painful job, and test the market before building the platform.",
    "Turn the checking on from day one and measure how often done really means done.",
    "Know your gaps and cover them. Mine is go to market.",
  ],
  learnedLead:
    "This is a program manager's lesson more than a coder's. Getting agents to produce work is the easy part. The real job is knowing which of it is real.",

  wants:
    "I'm looking for a technical program manager role in AI deployment or safety operations, getting AI agents to do real work safely with evidence that it's real.",
} as const;

export const ARGO_SOURCES = [
  { label: "xAI, Introducing Grok Bot (11 August 2026)", short: "xAI announcement", url: "https://x.ai/news/introducing-grok-bot" },
  { label: "Grok Bot voice, 17 September 2026 (Tesla North, press report, 18 September 2026)", short: "press report", url: "https://teslanorth.com/2026/09/18/grok-bot-voice-mode-desktop-mobile" },
  { label: "Meta, Introducing Muse (8 September 2026)", short: "Meta announcement", url: "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/" },
  { label: "OpenAI, Introducing dots (29 September 2026)", short: "OpenAI announcement", url: "https://openai.com/index/introducing-dots/" },
];

export const ARGO_PROOF = [
  { label: "Argo's code on GitHub, open source under the MIT licence", url: "https://github.com/mark-hallam/argo" },
  { label: "The case study, eight weeks running a swarm of AI coding agents", url: "/writing/eight-weeks-running-a-swarm-of-ai-coding-agents" },
  { label: "mStack, the open source skills that came out of Argo", url: "https://github.com/mark-hallam/mstack" },
  { label: "LVLme, built the same way, with every release on GitHub", url: "https://github.com/mark-hallam/lvlme/releases" },
];

export const ARGO_RECORDS =
  "Argo's verified state record from 23 June 2026 was a check of the code and the live production system by five of my verification agents. It confirmed Genesis, sign up, separate workspaces, the hash chained audit log, the tool connectors and payment were live. It also listed what wasn't. Voice ran a stand in without the paid key, sign in for Gmail and CRMs wasn't registered, and teammates acting on their own was switched off. Argo's code is now open source on GitHub, with its commits dated from 29 April 2026.";
