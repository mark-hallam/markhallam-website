// Static data — will be replaced by Sanity CMS in Phase 2
// For now, all content is managed here for fast iteration

export type ProjectStatus = "live" | "building" | "coming-soon";
export type PostCategory = "build-log" | "insight" | "announcement";

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

export interface SiteSettings {
  heroTagline: string;
  heroSubtitle: string;
  socialLinks: {
    x: string;
    linkedin: string;
    email: string;
  };
  projectLinks: {
    lunarpdf: string;
    curble: string;
  };
}

export const siteSettings: SiteSettings = {
  heroTagline: "The only skill you need today is the ability to communicate your idea.",
  heroSubtitle: "Solo builder. Shipping real products with AI. Teaching others to do the same.",
  socialLinks: {
    x: "https://x.com/MarkHallam",
    linkedin: "https://www.linkedin.com/in/mark-hallam/",
    email: "mailto:mark@markhallam.com.au",
  },
  projectLinks: {
    lunarpdf: "https://lunarpdf.com",
    curble: "https://curble.com",
  },
};

export const projects: Project[] = [
  {
    slug: "lunarpdf",
    title: "LunarPDF",
    description: "A full Adobe Acrobat alternative. Edit, merge, split, and annotate PDFs — entirely in the browser.",
    status: "live",
    url: "https://lunarpdf.com",
    keyStat: "Built in 2 days",
    body: `LunarPDF started as a frustration with overpriced PDF software. Adobe charges $20/month for features most people use once a week. I built a complete alternative in 2 days using AI.

The app handles everything you'd expect from a PDF editor — merging documents, splitting pages, adding annotations, filling forms, and converting between formats. It runs entirely in the browser with no file uploads required, meaning your documents never leave your device.

## How it was built

I used Claude as my development partner, describing each feature I needed and iterating on the implementation. The entire product went from idea to live deployment in 48 hours. No backend servers, no complex infrastructure — just a clean frontend application that processes everything client-side.

## What I learned

Speed kills perfectionism in the best way. By shipping fast, I got real user feedback within days instead of months. The features users actually wanted were different from what I would have built if I'd spent 6 months planning.`,
    techStack: ["Next.js", "TypeScript", "PDF.js", "Tailwind CSS", "Vercel"],
    features: [
      "Merge multiple PDFs into one",
      "Split PDFs by page range",
      "Add text annotations and highlights",
      "Fill and sign PDF forms",
      "Convert between PDF and image formats",
      "100% client-side — files never leave your device",
    ],
    learned: "Speed kills perfectionism in the best way. Ship fast, get real feedback, iterate. The features users actually wanted were different from what I would have planned.",
    order: 1,
  },
  {
    slug: "curble",
    title: "Curble",
    description: "AI-powered health and longevity tracking. Understand your body, extend your healthspan.",
    status: "building",
    url: "https://curble.com",
    keyStat: "Currently in development",
    body: `Curble is an AI-powered health and longevity platform that helps you understand and optimize your healthspan. It takes the complexity out of health data by connecting your wearables, blood work, and daily habits into one intelligent dashboard.

## The Problem

Health data is fragmented. Your Apple Watch tracks activity, your blood tests sit in a PDF somewhere, and your sleep data lives in another app. Nobody connects the dots. Curble does.

## What it will do

Curble uses AI to analyze patterns across all your health data sources, giving you actionable insights rather than raw numbers. Think of it as having a health analyst that knows your complete picture and can tell you exactly what to focus on.

## Current status

In active development. The core data integration layer is built, and I'm working on the AI analysis engine. Expected to launch in early 2026.`,
    techStack: ["Next.js", "TypeScript", "Python", "OpenAI API", "Supabase", "Tailwind CSS"],
    features: [
      "Wearable data integration (Apple Health, Garmin, Whoop)",
      "Blood work analysis and tracking",
      "AI-powered health insights",
      "Longevity score and recommendations",
      "Daily habit tracking and correlation",
      "Personalised health protocols",
    ],
    learned: undefined,
    order: 2,
  },
  {
    slug: "markhallam-website",
    title: "markhallam.com.au",
    description: "This website. A digital magazine for builders — built with AI, open-sourced as proof.",
    status: "building",
    url: "https://markhallam.com.au",
    keyStat: "Built with Claude Code",
    body: `This very website is itself a project. Built entirely through conversation with AI, it serves as both a home base and living proof that you don't need a dev team to ship a professional web presence.

## How it was built

Every line of code on this site was generated through natural language conversation with Claude. From the design system to the responsive layouts to the SEO optimization — all of it described, not hand-coded.

## Why it matters

This site is the message. If I can build a polished, production-grade website by describing what I want, so can you. That's the whole point of the "Learn to Build" mission.`,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    features: [
      "Responsive dark-first design",
      "Blog with category filtering",
      "Project showcase with status tracking",
      "RSS feed for cross-posting",
      "SEO optimised with structured data",
    ],
    learned: "The best portfolio is one that demonstrates its own creation story. Meta? Maybe. Effective? Absolutely.",
    order: 3,
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "i-built-a-pdf-editor-in-two-days",
    title: "I Built a Full PDF Editor in 2 Days",
    excerpt: "Adobe charges $20/month for PDF editing. I built a complete alternative in a weekend using AI. Here's exactly how.",
    category: "build-log",
    body: `Adobe charges $20/month for PDF editing. I built a complete alternative in a weekend using AI. Here's exactly how.

## The frustration

Every time I needed to merge two PDFs or add a signature, I'd hit a paywall. Adobe Acrobat, Smallpdf, iLovePDF — they all want your money for basic operations. And most of them upload your files to their servers, which is a privacy nightmare for sensitive documents.

## The decision

Instead of paying another subscription, I decided to build my own. With AI, I figured I could ship something usable in a weekend. I was right.

## Day 1: Core functionality

I started by describing to Claude what I wanted: a browser-based PDF editor that processes everything client-side. No uploads, no servers, no subscriptions. Within hours, I had a working prototype that could:

- Open and render PDFs
- Merge multiple files
- Split by page range

The key insight was using PDF.js for rendering and pdf-lib for manipulation. Claude suggested this architecture, and it turned out to be exactly right.

## Day 2: Polish and ship

Day two was about adding the features that make it feel complete: annotations, form filling, format conversion. Then I built the landing page, set up the domain, and deployed to Vercel.

By Sunday evening, LunarPDF was live at lunarpdf.com.

## The lesson

You don't need months. You don't need a team. You need a clear idea and the ability to describe what you want. The tools exist now to turn conversation into software. Stop planning, start building.`,
    publishedAt: "2026-01-15",
    readTime: 4,
    featured: true,
  },
  {
    slug: "the-builder-era",
    title: "The Builder Era: Why Everyone Can Ship Now",
    excerpt: "The barriers to building software have collapsed. No funding required. No dev team. No excuses. Here's what changed.",
    category: "insight",
    body: `The barriers to building software have collapsed. Not gradually — they fell off a cliff.

## What changed

Two years ago, turning an idea into a working product required one of three things: the ability to code, money to hire someone who could, or a technical co-founder willing to work for equity. Those were your options.

Today? You need the ability to describe what you want. That's it.

## The new stack

The builder stack in 2026 looks like this:

1. **An idea** — Something that solves a real problem
2. **An AI coding partner** — Claude, GPT, or similar
3. **A deployment platform** — Vercel, Netlify, Railway
4. **A domain name** — $12/year

Total monthly cost to run a production web app: somewhere between $0 and $20.

Compare that to the old model: $150k-$500k for an MVP, 6-18 months of development, a team of 3-5 people. That model isn't just expensive — it's obsolete for a huge category of products.

## What this means

It means the bottleneck is no longer technical skill. It's not capital. It's not connections. The bottleneck is now **clarity of thought** and **willingness to ship**.

Can you clearly describe what you want to build? Can you articulate the problem it solves? Can you iterate on feedback? Then you can build software in 2026.

## The proof

I built LunarPDF — a complete PDF editor — in 2 days. Not a prototype. Not a mockup. A live product that people use. And I did it by describing what I wanted to an AI.

This isn't an anomaly. This is the new normal. Welcome to the builder era.`,
    publishedAt: "2026-02-01",
    readTime: 3,
    featured: true,
  },
  {
    slug: "announcing-curble",
    title: "Announcing Curble: AI-Powered Health Tracking",
    excerpt: "I'm building Curble — an AI health platform that connects your wearables, blood work, and habits into one intelligent dashboard.",
    category: "announcement",
    body: `I'm excited to share what I've been working on: Curble, an AI-powered health and longevity tracking platform.

## The problem

Your health data is everywhere. Apple Watch tracks your steps, your blood tests are in a PDF from the lab, your sleep data is in another app, and your supplement stack is in a spreadsheet. Nobody connects the dots.

## What Curble does

Curble brings all your health data into one intelligent dashboard. It connects to your wearables, imports your blood work, tracks your daily habits, and uses AI to find patterns and give you actionable insights.

Instead of raw numbers, you get answers: "Your sleep quality drops when you exercise after 7pm" or "Your HRV trends suggest you need more recovery days."

## Current status

Curble is in active development. The core data integration layer is built, and I'm working on the AI analysis engine. I'm building it the same way I built LunarPDF — describing what I want, iterating fast, and shipping as soon as it's ready.

## Follow along

I'll be documenting the entire build process here on my blog. If you're interested in health optimization or want to see how a solo builder ships an AI product, follow along on X (@MarkHallam) or subscribe to the RSS feed.

More updates coming soon.`,
    publishedAt: "2026-02-10",
    readTime: 2,
    featured: false,
  },
];

export const learnPageData = {
  headline: "You Have Ideas. Learn to Ship Them.",
  valueProp: "The tools have changed. You no longer need a technical co-founder, a dev team, or a six-figure budget. You need the ability to communicate your idea clearly. I'll teach you the rest.",
  pillars: [
    {
      title: "Think Like a Builder",
      description: "Learn to break down any idea into buildable pieces. No coding knowledge required — just clear thinking and the ability to describe what you want.",
    },
    {
      title: "Ship With AI",
      description: "Master the art of working with AI to turn descriptions into working software. From your first prompt to your first deployment.",
    },
    {
      title: "Launch and Iterate",
      description: "Shipping is just the start. Learn how to get your product in front of users, collect feedback, and improve fast.",
    },
    {
      title: "Build in Public",
      description: "Document your journey, attract an audience, and create opportunities by sharing what you build and how you build it.",
    },
  ],
  faqItems: [
    {
      question: "Do I need to know how to code?",
      answer: "No. That's the whole point. The only skill you need is the ability to clearly describe what you want to build. AI handles the technical implementation. You handle the vision.",
    },
    {
      question: "What tools will I learn to use?",
      answer: "You'll learn to work with AI coding assistants (like Claude), deployment platforms (like Vercel), and the modern builder stack. Everything you need to go from idea to live product.",
    },
    {
      question: "Is this just for web apps?",
      answer: "We start with web apps because they're the fastest to ship and the easiest to share. But the principles apply to mobile apps, browser extensions, APIs, and more.",
    },
    {
      question: "How is this different from a coding bootcamp?",
      answer: "Coding bootcamps teach you to write code. This teaches you to build products. The difference is focus: we care about shipping, not syntax. You'll learn enough technical context to be dangerous, but your primary skill is communication, not code.",
    },
    {
      question: "When does it launch?",
      answer: "I'm building the curriculum now. Join the waitlist to get early access and updates. The first cohort will be small and hands-on.",
    },
  ],
};

export const aboutData = {
  name: "Mark Hallam",
  title: "Builder. Maker. Teacher.",
  bio: `I build real products with AI and teach others how to do the same.

I'm a solo builder based in Australia, shipping live products using AI as my development partner. I don't write code in the traditional sense — I describe what I want to build, iterate on the output, and ship.

LunarPDF, a complete PDF editor, was built in 2 days. This website was built entirely through conversation with Claude. Curble, an AI health platform, is in active development. Every project is proof that the barriers to building have collapsed.`,
  philosophy: `I believe we're in the early days of a fundamental shift. The ability to build software is no longer gated by technical skill, capital, or connections. It's gated by clarity of thought and willingness to ship.

My mission is to help people realise this. If you can describe an idea clearly, you can build it. Not in theory — in practice, today, with tools that already exist.

This isn't about replacing developers. It's about empowering everyone else. The world has more good ideas than it has people to build them. AI closes that gap.`,
  currentFocus: [
    "Shipping Curble (AI-powered health tracking)",
    "Building this website as proof of the AI builder workflow",
    "Developing the Learn to Build curriculum",
    "Writing about the solo builder journey",
  ],
};

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
