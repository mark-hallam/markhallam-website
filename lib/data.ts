// Static data — will be replaced by Sanity CMS in Phase 2
// For now, all content is managed here for fast iteration

export type ProjectStatus = "live" | "building" | "coming-soon";
export type PostCategory = "build-log" | "insight" | "announcement";
export type LearnCategory = "ai-coding" | "ai-strategy" | "working-with-ai" | "tools";

export interface Project {
  slug: string;
  title: string;
  description: string;
  status: ProjectStatus;
  url?: string;
  keyStat: string;
  body: string;
  techStack: string[];
  features: string[];
  learned?: string;
  order: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  body: string;
  publishedAt: string;
  readTime: number;
  featured: boolean;
}

export interface LearnEntry {
  slug: string;
  title: string;
  excerpt: string;
  category: LearnCategory;
  body: string;
  publishedAt: string;
  readTime: number;
  featured: boolean;
}

export interface SiteSettings {
  heroTagline: string;
  heroSubtitle: string;
  socialLinks: {
    x: string;
    linkedin: string;
    email: string;
  };
  projectLinks: {
    nomlie: string;
    octti: string;
  };
}

export const siteSettings: SiteSettings = {
  heroTagline: "Helping organisations move from AI curiosity to AI capability.",
  heroSubtitle: "AI Transformation Advisor. Enterprise tech program delivery. Hands-on builder across Claude, Gemini, Grok & OpenAI.",
  socialLinks: {
    x: "https://x.com/MarkHallam",
    linkedin: "https://www.linkedin.com/in/mark-hallam/",
    email: "mailto:mark@markhallam.com.au",
  },
  projectLinks: {
    nomlie: "https://nomlie.com",
    octti: "https://octti.ai",
  },
};

export const projects: Project[] = [
  {
    slug: "nomlie",
    title: "Nomlie",
    description: "AI-powered health, fitness & longevity platform. Built end-to-end using AI tools to demonstrate what a solo operator can ship in weeks, not months.",
    status: "live",
    url: "https://nomlie.com",
    keyStat: "Full platform in weeks",
    body: `Nomlie is an AI-powered health, fitness and longevity platform — and a case study in what's possible when you combine domain vision with AI development tools.

## The Challenge

Health and wellness is fragmented across dozens of apps. Nutrition trackers don't talk to fitness apps. Meal planners ignore what's actually in your food. No single platform connects the dots between what you eat, how you move, and your long-term health trajectory.

## What Was Built

A comprehensive platform covering nutrition intelligence, fitness coaching, AI-generated meal plans, a product toxin scanner, and a longevity dashboard — all personalised by AI.

## Why This Matters for Organisations

This project demonstrates a pattern that applies directly to enterprise: identifying a fragmented workflow, designing an AI-augmented solution, and shipping a production-quality product without a traditional dev team. The same approach works for internal tools, customer-facing products, and operational workflows.`,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "OpenAI API", "Vercel"],
    features: [
      "AI-powered nutrition tracking and analysis",
      "Personalised fitness plans and workout coaching",
      "AI-generated meal plans and shopping lists",
      "Product scanner for 500+ toxins and banned additives",
      "Longevity dashboard with health trajectory tracking",
    ],
    learned: "Complex, multi-feature platforms can be built by a single person with AI tools — if you have clarity on the problem and disciplined execution.",
    order: 1,
  },
  {
    slug: "octti-ai",
    title: "Octti.ai",
    description: "AI-native platform exploring the intersection of automation and intelligent workflows. Built to test the boundaries of current AI capabilities.",
    status: "live",
    url: "https://octti.ai",
    keyStat: "AI-native architecture",
    body: `Octti.ai was built to explore what happens when you design a product around AI capabilities from the ground up, rather than bolting AI onto an existing workflow.

## The Approach

Rather than starting with a traditional feature list and adding AI later, Octti was designed with AI at the core — every workflow, every interaction, every decision point leverages intelligent automation.

## What This Demonstrates

Most organisations try to adopt AI by adding it to existing processes. That's like putting a jet engine on a horse cart. The real opportunity is in redesigning workflows around what AI can actually do. Octti is a working example of that approach.`,
    techStack: ["Next.js", "TypeScript", "AI APIs", "Vercel"],
    features: [
      "AI-native workflow design",
      "Intelligent automation at every decision point",
      "Built from first principles around AI capabilities",
    ],
    learned: "The biggest gains from AI come not from automation of existing workflows, but from redesigning workflows around AI's strengths.",
    order: 2,
  },
  {
    slug: "pindeo",
    title: "Pindeo",
    description: "A product built to validate a market hypothesis rapidly using AI development tools. From concept to deployed product in days.",
    status: "live",
    url: "https://pindeo.com",
    keyStat: "Concept to live in days",
    body: `Pindeo demonstrates the speed at which ideas can be validated when you use AI as your development partner.

## The Approach

Traditional product development follows a months-long cycle: research, wireframes, design, development, testing, deployment. With AI development tools, this entire cycle compressed into days.

## Why Speed Matters

For organisations evaluating AI adoption, speed-to-validation is everything. The ability to test an idea in days instead of months changes the economics of innovation. You can afford to be wrong more often because the cost of being wrong has collapsed.

## The Enterprise Lesson

Every organisation has a backlog of ideas that never get built because the cost and timeline don't justify the risk. AI development tools change that equation fundamentally. Pindeo is proof.`,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    features: [
      "Rapid concept-to-deployment pipeline",
      "AI-assisted full-stack development",
      "Production-quality output at prototype speed",
    ],
    learned: "The cost of validating ideas has collapsed. Organisations that recognise this will out-innovate those still stuck in 6-month development cycles.",
    order: 3,
  },
  {
    slug: "skycot",
    title: "Skycot",
    description: "Robotics venture exploring autonomous systems. Founded and led as CEO, navigating the intersection of hardware, software, and emerging technology.",
    status: "live",
    url: "https://skycot.com",
    keyStat: "CEO & Founder",
    body: `Skycot represents an earlier chapter in my technology journey — a robotics venture where I served as Founder and CEO.

## The Experience

Leading a robotics company required navigating complex technical challenges, managing hardware-software integration, building partnerships, and making strategic decisions under uncertainty. These are the same challenges organisations face when adopting AI — just in a different domain.

## How This Informs AI Advisory

The experience of leading a technology venture from the ground up — dealing with technical risk, managing stakeholder expectations, and making build-vs-buy decisions — directly informs how I advise organisations on AI adoption. The technology changes, but the leadership challenges are remarkably similar.`,
    techStack: ["Robotics", "Autonomous Systems", "Hardware Integration"],
    features: [
      "Autonomous systems development",
      "Hardware-software integration",
      "Strategic technology leadership",
    ],
    learned: "Leading a technology venture teaches you that adoption challenges are rarely technical — they're organisational, cultural, and strategic.",
    order: 4,
  },
  {
    slug: "markhallam-website",
    title: "markhallam.com.au",
    description: "This website — a production-grade Next.js application built with AI. Living proof that the tools work.",
    status: "live",
    url: "https://markhallam.com.au",
    keyStat: "Built with AI",
    body: `This very website is itself a case study. Built with AI, it serves as proof that production-quality software can be created without traditional development processes.

## The Stack

Next.js with the App Router for the frontend, Sanity CMS for content management, Resend for transactional email, and automatic deployment to Vercel via GitHub. Clean light-themed design system with Tailwind CSS, Framer Motion animations, and full SEO.

## What It Demonstrates

This isn't a template or a drag-and-drop site. It's a custom-built application with CMS integration, email automation, RSS feeds, and structured data — all built using AI as the primary development tool. The same approach can build internal tools, customer portals, dashboards, and operational software for any organisation.`,
    techStack: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS", "Framer Motion", "Resend", "Vercel"],
    features: [
      "Clean, professional design system",
      "Sanity CMS with embedded Studio",
      "Blog with category filtering and RSS feed",
      "Project showcase with status tracking",
      "Email integration via Resend",
      "SEO with OpenGraph, Twitter Cards, and JSON-LD",
    ],
    learned: "The best way to demonstrate AI capability is to use it to build the thing that demonstrates AI capability.",
    order: 5,
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "from-builder-to-advisor",
    title: "From Builder to Advisor: Why I'm Helping Organisations Adopt AI",
    excerpt: "After shipping multiple AI products and leading enterprise tech programs, I've seen both sides. Here's why I'm now helping organisations bridge the gap.",
    category: "insight",
    body: `I spent the last two months building. Five products across multiple AI platforms — Claude, Gemini, Grok. I built a health platform, an AI-native workflow tool, a rapid-validation product, and more. I didn't sleep much. I spent a lot on subscriptions. I learned an enormous amount.

## What I discovered

The tools are extraordinary. What took teams of engineers months to build can now be shipped by a single person in days. But here's the thing — knowing that the tools exist and knowing how to actually use them in an organisation are two completely different problems.

## The gap

Most organisations are stuck in one of three places: they know AI matters but don't know where to start, they've run a pilot that went nowhere, or they've adopted one tool but haven't changed any workflows around it. The technology isn't the blocker. The blocker is strategy, change management, and knowing which tool fits which job.

## Why I'm positioned to help

I've led complex technology programmes in defence, aerospace, and aviation — including leading programs underpinning a >$2 billion national benefits case at Airservices Australia. I understand how enterprises actually make technology decisions.

And I've now spent intensive weeks building with every major AI platform. Not reading about them. Building with them. I know which tools work for what, where they fall short, and what it actually takes to go from demo to production.

## What I offer

I help organisations move from AI curiosity to AI capability. That starts with understanding where AI will have the highest impact on your specific workflows, choosing the right tools, and implementing in a way that sticks — not as a one-off experiment, but as a fundamental shift in how your team works.

If you're a business leader who knows AI matters but isn't sure where to start — let's talk.`,
    publishedAt: "2026-03-31",
    readTime: 4,
    featured: true,
  },
  {
    slug: "what-organisations-get-wrong-about-ai",
    title: "The 3 Things Every Organisation Gets Wrong When They Start With AI",
    excerpt: "After building with AI tools daily and leading enterprise tech programmes, I see the same mistakes everywhere. Here's how to avoid them.",
    category: "insight",
    body: `I've spent the last two months building products with Claude, Gemini, Grok, and OpenAI every day. Before that, I led enterprise technology programmes in defence, aerospace, and aviation. From both perspectives, I see the same three mistakes organisations make when they start with AI.

## Mistake 1: Starting with the technology

Most organisations begin their AI journey by picking a tool. They get a ChatGPT Enterprise licence, run a few demos, and then try to figure out where to use it. This is backwards. You should start with your highest-friction workflows and then find the AI tool that addresses them. Technology-first adoption leads to expensive experiments that don't stick.

## Mistake 2: Running pilots that go nowhere

The pilot programme is where AI adoption goes to die. A small team experiments with AI for 6 weeks, produces a report, and then nothing happens. The problem isn't the pilot — it's that most pilots are designed to evaluate the technology rather than to deliver a working workflow change. A good AI implementation should deliver measurable time or cost savings within 2-4 weeks, not a PowerPoint deck.

## Mistake 3: Treating AI as a tool instead of a workflow shift

Adding AI to an existing workflow is like putting a turbo engine in a car that still has a horse harness attached. The real gains come from redesigning workflows around AI's capabilities — not from automating individual tasks within broken processes. This requires someone who understands both the technology and the organisational dynamics. That's rare.

## The path forward

Start with your most painful workflows. Pick one. Implement AI-augmented processes that deliver measurable results in weeks. Use that success to build momentum for broader adoption. That's the playbook that actually works.`,
    publishedAt: "2026-03-28",
    readTime: 4,
    featured: true,
  },
  {
    slug: "claude-vs-gemini-vs-grok-vs-openai-honest-comparison",
    title: "Claude vs Gemini vs Grok vs OpenAI: An Honest Comparison From Someone Who's Built With All Four",
    excerpt: "Not a feature comparison chart. A real-world assessment from weeks of building production products across all four platforms.",
    category: "insight",
    body: `Most AI tool comparisons are written by people who've tried each platform for an afternoon. I've spent weeks building production products across Claude, Gemini, Grok, and OpenAI. Here's what I've actually found.

## The short version

Each platform has genuine strengths, and the right choice depends entirely on what you're building. There is no single best tool — but there is a best tool for your specific use case.

## Claude (Anthropic)

Claude excels at complex, multi-step reasoning and code generation. For building software products — which is what I've been doing most — Claude has been my primary partner. It handles nuanced requirements well, maintains context over long conversations, and produces clean, production-ready code. Where it falls short: it can be overly cautious, sometimes refusing tasks that are perfectly reasonable.

## Gemini (Google)

Gemini's strength is its integration with the Google ecosystem and its ability to handle multimodal inputs. If your organisation is already in Google Workspace, the integration story is compelling. It's strong on data analysis and research tasks. Where it falls short: for pure code generation and complex technical tasks, it doesn't match Claude's depth.

## OpenAI (GPT)

OpenAI's GPT models are the most widely recognised and have the broadest ecosystem of integrations. For organisations already using Microsoft 365, the Copilot integration is a natural entry point. GPT is strong across general-purpose tasks and has the most mature plugin and API ecosystem. Where it falls short: for complex code generation and nuanced reasoning, Claude tends to outperform, and the sheer number of product tiers and options can create confusion about what you're actually paying for.

## Grok (xAI)

Grok brings real-time information access and a less filtered approach. For tasks that require current data or a more direct conversational style, it has advantages. Where it falls short: for enterprise use cases, the safety and reliability story isn't as mature.

## What this means for organisations

Don't pick one tool and standardise on it. Different teams and different workflows will benefit from different platforms. The winning strategy is to have someone who understands all four and can recommend the right tool for each job. That's a capability most organisations don't have internally yet.`,
    publishedAt: "2026-03-25",
    readTime: 5,
    featured: true,
  },
  {
    slug: "the-builder-era",
    title: "The Builder Era: Why the Rules Have Changed",
    excerpt: "The barriers to building software have collapsed. What took teams months now takes days. Here's what that means for organisations.",
    category: "insight",
    body: `The barriers to building software have collapsed. Not gradually — they fell off a cliff.

## What changed

Two years ago, turning an idea into a working product required the ability to code, money to hire someone who could, or a technical co-founder. Today, you need the ability to describe what you want clearly. That's it.

## The new economics

I built a full health and longevity platform in weeks. A complete PDF editor in 2 days. Five production products shipped rapidly. Not prototypes — live products that people use. The total infrastructure cost to run these is somewhere between $0 and $20 per month each.

Compare that to the old model: $150k-$500k for an MVP, 6-18 months of development, a team of 3-5 people.

## What this means for organisations

This isn't just about startups. Every organisation has a backlog of internal tools, workflow improvements, and customer-facing products that never get built because the cost and timeline don't justify the risk.

AI development tools change that equation. An internal dashboard that would have taken a dev team 3 months can be prototyped in a week. A customer portal that sat in the backlog for a year can be validated in days.

The organisations that recognise this shift and act on it will have a fundamental advantage over those that are still budgeting 6-month development cycles for every initiative.

## The bottleneck has moved

The bottleneck is no longer technical skill or capital. It's clarity of thought, willingness to ship, and — critically — having someone who can bridge the gap between what AI tools can do and what your organisation needs. That's the new leadership challenge.`,
    publishedAt: "2026-02-01",
    readTime: 4,
    featured: true,
  },
];

export const servicesData = {
  headline: "AI Transformation That Actually Delivers",
  valueProp: "Most AI initiatives stall at the pilot stage. I help organisations identify the highest-impact opportunities, choose the right tools, and implement AI workflows that deliver measurable results — not PowerPoint decks.",
  services: [
    {
      title: "AI Readiness Audit",
      description: "A focused assessment of your current workflows to identify the 3-5 highest-impact opportunities for AI to save time and money. You get a prioritised roadmap with specific tool recommendations and estimated ROI.",
      stat: "2-3 hours",
      statLabel: "Workshop + Report",
    },
    {
      title: "AI Implementation Sprint",
      description: "I build AI-augmented workflows directly into your team's processes over 2-4 weeks. Not recommendations — working systems with trained team members and a handover document so you're self-sufficient.",
      stat: "2-4 weeks",
      statLabel: "Concept to working",
    },
    {
      title: "Fractional AI Advisor",
      description: "Ongoing AI strategy and implementation leadership 1-2 days per week. Get the expertise of a Head of AI without the full-time salary. Tool evaluation, team training, and implementation oversight.",
      stat: "1-2 days/wk",
      statLabel: "Ongoing advisory",
    },
  ],
  proofPoints: [
    { value: ">$2B", label: "National Benefits Case" },
    { value: "4", label: "AI Platforms" },
    { value: "PMP", label: "Certified" },
  ],
  faqItems: [
    {
      question: "What size organisations do you work with?",
      answer: "I work with mid-market companies (50-500 employees) and enterprise organisations. Small enough that decisions happen fast, large enough that AI adoption has meaningful impact on operations and revenue.",
    },
    {
      question: "Do you do the technical implementation or just advise?",
      answer: "Both. I can advise on strategy and tool selection, and I can build working AI workflows directly. Most engagements start with an audit, then move to hands-on implementation.",
    },
    {
      question: "Which AI tools do you recommend?",
      answer: "It depends entirely on your use case. I've built production products across Claude, Gemini, Grok, and OpenAI. Each has genuine strengths for different tasks. I recommend based on your specific workflows, not brand loyalty.",
    },
    {
      question: "How quickly can we see results?",
      answer: "The AI Readiness Audit delivers a prioritised roadmap within a week. Implementation Sprints deliver working AI workflows in 2-4 weeks. I don't believe in 6-month pilots that produce reports instead of results.",
    },
    {
      question: "What industries do you specialise in?",
      answer: "My background is in defence, aerospace, and aviation, but the AI adoption challenges are universal. I've worked with organisations across government services, professional services, and technology. The methodology applies regardless of industry.",
    },
  ],
};

// Keep for backwards compat — maps to servicesData
export const learnPageData = {
  headline: servicesData.headline,
  valueProp: servicesData.valueProp,
  pillars: servicesData.services.map(s => ({ title: s.title, description: s.description })),
  faqItems: servicesData.faqItems,
};

export const aboutData = {
  name: "Mark Hallam",
  title: "AI Transformation Advisor",
  bio: `I help organisations move from AI curiosity to AI capability — bridging the gap between what AI tools can do and how your business can actually adopt them.

My background spans aerospace engineering, aviation, defence consulting, and enterprise technology. At Airservices Australia, I led complex technology programs underpinning a >$2 billion national benefits case. Before that, I spent years in aerospace and aviation — from freelance defence consulting to working with companies like PPG Aerospace, and a research role in clean propulsion at Swinburne. I'm PMP certified and hold an aerospace engineering degree from RMIT. I understand how large organisations actually make technology decisions: procurement, stakeholder alignment, change management, risk.

In early 2026, I went deep on AI — not just reading about it, but building with it. I shipped multiple AI-powered products using Claude, Gemini, Grok, and OpenAI — not to create startups, but to understand from the inside what these tools can actually do, where they fall short, and what it takes to go from experiment to production.`,
  philosophy: `Most AI consultants have either built things with AI or led enterprise technology programmes. I've done both. That intersection is where real value gets delivered.

The organisations I work with don't need another demo or another pilot that goes nowhere. They need someone who can assess their workflows, recommend the right AI tools for each job, implement working solutions, and manage the change required to make it stick. That's what I do.

I'm not here to sell AI hype. I'm here to help you figure out where it actually works, choose the right tools, and make it stick.`,
  currentFocus: [
    "AI Readiness Audits for mid-market and enterprise organisations",
    "Hands-on AI implementation sprints — building workflows, not slide decks",
    "Fractional AI advisory — Head of AI expertise without the full-time hire",
    "Writing about what actually works in AI adoption (and what doesn't)",
  ],
};

// Stats for homepage — verified facts only
export function getHomeStats() {
  return [
    { value: ">$2B", label: "Benefits Case Led" },
    { value: "4", label: "AI Platforms" },
    { value: "PMP", label: "Certified" },
  ];
}

// Helper functions
export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.sort((a, b) => a.order - b.order);
}

export function getLatestPost(): BlogPost | undefined {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )[0];
}

export function getPostsByCategory(category?: PostCategory): BlogPost[] {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  if (!category) return sorted;
  return sorted.filter((p) => p.category === category);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getCategoryLabel(category: PostCategory): string {
  const labels: Record<PostCategory, string> = {
    "build-log": "Build Log",
    insight: "Insight",
    announcement: "Announcement",
  };
  return labels[category];
}

export function getStatusLabel(status: ProjectStatus): string {
  const labels: Record<ProjectStatus, string> = {
    live: "Live",
    building: "Building",
    "coming-soon": "Coming Soon",
  };
  return labels[status];
}

// ──────────────────────────────────────────────────────────────────────
// /learn — AI coding techniques + working-with-AI patterns
// Populated by Mark + the markmark-site agent (Wednesdays).
// ──────────────────────────────────────────────────────────────────────

export const learnEntries: LearnEntry[] = [
  {
    slug: "optometrist-method-for-ui-design",
    title: "The Optometrist Method: How I Use AI to Design UI Fast",
    excerpt: "When asking an AI to design a screen, don't ask once. Ask for 3-5 wildly different versions in different design languages first, then narrow. It's how an optometrist finds your prescription.",
    category: "ai-coding",
    publishedAt: "2026-05-20",
    readTime: 4,
    featured: true,
    body: `When I ask an AI to design a page for me — a landing page, a workflow editor, an audit timeline — the worst thing I can do is ask once.

The first version is always plausible. It might even be good. But it's the AI's best guess at the middle of the road. And the middle of the road is exactly where every other product lives.

So instead, I ask for **3-5 wildly varied versions**. Each one pinned to a distinct design language:

- "Bold editorial / magazine cover"
- "Industrial / terminal / dev-tool"
- "Apple-clean / minimal"
- "Hand-drawn / friendly / illustrated"
- "Brutalist / statement-piece"

They should look like they came from different companies, not different days at the same studio.

Then I look at all 5. Almost always, one of them sparks something — usually NOT the version closest to what I'd have asked for. The brutalist one has a typography choice I love. The illustrated one has a friendliness the brand needs. The Apple-clean one has the right whitespace rhythm.

I pick a direction, then ask for **2-3 variants within that direction** — narrowing the prescription like an optometrist flipping lenses. "Better with the gradient or without?" "Better with the chip or the badge?"

By the time I've gone through one round of wide exploration plus one round of narrowing, I have something I'm proud of — and it took maybe 20 minutes of conversation. Without the wide round first, I'd have spent an hour iterating on a mediocre starting point.

The principle: **AI is best as a divergent generator, not a single-shot oracle.** Use it for breadth first, then narrow.`,
  },
  {
    slug: "plain-language-beats-jargon-with-ai-tools",
    title: "Why I Make AI Tools Speak Plain English to Me",
    excerpt: "I'm not a developer. When AI coding assistants throw jargon at me, the answer slows down. So I tell them to expand every abbreviation and explain every dev term inline. The output stays technical, but I can keep up.",
    category: "working-with-ai",
    publishedAt: "2026-05-19",
    readTime: 3,
    featured: true,
    body: `I run a company that builds AI workers. I work with Claude, Cursor, and other coding tools every day. But I'm not a developer. I never learned the difference between a CORS error and a 404 in school.

For a long time, this slowed me down. AI tools would tell me things like "the CORS preflight is failing on the cross-origin gateway" and I'd nod, copy that into a search, spend 10 minutes learning what each word meant, then come back.

So I gave the AI a standing instruction: **every time you use a developer term I might not know, expand the abbreviation and add a one-line plain-English summary on first use.**

Now I get this:

> CORS (Cross-Origin Resource Sharing — a browser rule that controls when a webpage can talk to a server on a different web address) preflight is failing. That means the browser asked the server "can I send you this?" and got "address not found."

The technical accuracy is the same. The vocabulary is the same. But the explanation is right there, so I don't have to context-switch to learn what each term means before I can act on the advice.

This works for every dev term: CORS, API, JWT, cookie, rewrite, proxy, fetch, regex, RBAC, migration, schema. I have it in my Claude memory as a permanent standing instruction. It's the single highest-leverage thing I've done to work faster with AI coding tools as a non-developer CEO.

The principle: **the tool should adapt to your vocabulary, not the other way around.** Tell it once; it'll keep doing it forever.`,
  },
  {
    slug: "grep-before-you-write",
    title: "Grep Before You Write: A Hard-Earned Pattern from Building With AI Agents",
    excerpt: "When an AI agent proposes adding a new type, function, or table — make it search the codebase first to check whether that thing already exists. 30 seconds of verification beats 6 hours of fighting parallel abstractions.",
    category: "ai-coding",
    publishedAt: "2026-05-18",
    readTime: 4,
    featured: false,
    body: `One of the hardest problems I've hit while running an autonomous agent swarm is **parallel abstraction drift**. The AI agent goes to add a new type called \`SessionId\` — totally reasonable. Except \`SessionId\` already exists, in a different module, with different fields. Now I have two of them.

This happens often enough that we wrote a hard rule into the swarm protocol: **grep before you write.**

Before any agent declares a new \`pub struct\`, \`pub enum\`, or \`type alias\`, it has to run:

\`\`\`bash
rg 'pub (struct|enum|type) <Name>' crates/
\`\`\`

If a same-named or near-same-named surface exists, the agent either extends it, supersedes it, or writes a one-line justification for why a parallel surface is genuinely needed.

The same pattern applies when I'm working with AI directly. Before I let it propose a new \`AuditRow\` type, I make it look first:

> "Before you add this — search the codebase for any existing AuditRow / AuditEvent / AuditRecord type. Show me what's already there."

30 seconds of that check saves hours of refactoring later. The AI is excellent at writing new code; it's weaker at noticing that the right code already exists somewhere.

The principle: **AI tools optimize for shipping, not for archaeology.** Make them check before they create.

We've extended this beyond types. Before adding a new database table, grep migrations. Before adding a new API endpoint, grep route handlers. Before adding a new config field, grep TOML files. Every "before you write" check has paid for itself ten times over in this swarm.`,
  },
];

export function getLearnEntry(slug: string): LearnEntry | undefined {
  return learnEntries.find((e) => e.slug === slug);
}

export function getLatestLearn(): LearnEntry | undefined {
  return [...learnEntries].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )[0];
}

export function getLearnByCategory(category?: LearnCategory): LearnEntry[] {
  const sorted = [...learnEntries].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  if (!category) return sorted;
  return sorted.filter((e) => e.category === category);
}

export function getLearnCategoryLabel(category: LearnCategory): string {
  const labels: Record<LearnCategory, string> = {
    "ai-coding": "AI Coding",
    "ai-strategy": "AI Strategy",
    "working-with-ai": "Working with AI",
    tools: "Tools",
  };
  return labels[category];
}
