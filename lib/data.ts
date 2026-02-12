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
    nomlie: string;
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
    nomlie: "https://nomlie.com",
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
    slug: "nomlie",
    title: "Nomlie",
    description: "AI-powered health, fitness & longevity platform. Nutrition tracking, workout plans, meal planning, toxin analysis, and longevity insights — all personalised by AI.",
    status: "live",
    url: "https://nomlie.com",
    keyStat: "Launched today",
    body: `Nomlie is an AI-powered health, fitness and longevity platform that learns your goals, tracks your nutrition and fitness, plans your meals, detects hidden toxins, and guides your longevity journey — all personalised by AI.

## The Problem

The average health-conscious person juggles 4+ apps for calories, workouts, recipes, and tracking. None of them talk to each other. Most apps completely ignore what's actually in your food — over 3,000 chemical additives approved in US food are banned in Europe, Japan, and Canada. And zero personalisation: generic meal plans and cookie-cutter workouts that don't know your goals, your body, or how your nutrition and fitness connect.

## What Nomlie Does

One AI platform covering every dimension of your health:

- **Nutrition Intelligence** — AI-powered food logging, calorie and macro tracking, and nutrient analysis personalised to your body and goals
- **Fitness & Workouts** — Workout plans, tracking, and AI coaching that adapts to your fitness level, recovery, and schedule
- **Meal Planning** — AI-generated weekly meal plans, recipes, and shopping lists based on your preferences, allergies, and targets
- **Toxin Analysis** — Scan any product to detect 500+ toxins, banned additives, artificial colourings, GMOs, and harmful chemicals
- **Longevity Dashboard** — Track your health trajectory over time with AI-driven longevity recommendations linked to your workouts, nutrition, and habits

## How it was built

Built with the same AI-first approach as every other project — described, not hand-coded. The entire platform went from concept to live product through conversation with AI.`,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "OpenAI API", "Resend", "Vercel"],
    features: [
      "AI-powered nutrition tracking and analysis",
      "Personalised fitness plans and workout coaching",
      "AI-generated meal plans and shopping lists",
      "Product scanner for 500+ toxins and banned additives",
      "Longevity dashboard with health trajectory tracking",
      "Early access waitlist with 2,000+ signups",
    ],
    learned: "Health is fragmented across dozens of apps. The opportunity is in connecting everything into one intelligent platform that actually knows you.",
    order: 2,
  },
  {
    slug: "markhallam-website",
    title: "markhallam.com.au",
    description: "This website. A digital magazine for builders — built entirely with AI, open-sourced as proof that anyone can ship.",
    status: "live",
    url: "https://markhallam.com.au",
    keyStat: "Live — built with AI",
    body: `This very website is itself a project. Built entirely through conversation with AI, it serves as both a home base and living proof that you don't need a dev team to ship a professional web presence.

## How it was built

Every line of code on this site was generated through natural language conversation with Claude. From the design system to the CMS integration to the deployment pipeline — all of it described, not hand-coded.

The site went from zero to a fully deployed, production-grade website with CMS, email integration, RSS feeds, SEO, and a custom domain — all through AI-assisted development.

## The stack

Next.js 16 with the App Router handles the frontend, Sanity CMS powers the content, Resend handles transactional email for the waitlist, and the whole thing deploys automatically to Vercel on every git push. Tailwind CSS v4 with a custom dark-first design system, Framer Motion for page transitions, and full SEO with OpenGraph, Twitter Cards, and JSON-LD structured data.

## Why it matters

This site is the message. If I can build a polished, production-grade website by describing what I want, so can you. That's the whole point of the "Learn to Build" mission.`,
    techStack: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS", "Framer Motion", "Resend", "Vercel"],
    features: [
      "Responsive dark-first design system",
      "Sanity CMS with embedded Studio",
      "Blog with category filtering and RSS feed",
      "Project showcase with live status tracking",
      "Waitlist with Resend email integration",
      "SEO optimised with OpenGraph, Twitter Cards, and JSON-LD",
      "Auto-deploy via GitHub to Vercel",
    ],
    learned: "The best portfolio is one that demonstrates its own creation story. Meta? Maybe. Effective? Absolutely.",
    order: 3,
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "markhallam-com-au-is-live",
    title: "markhallam.com.au Is Live",
    excerpt: "From zero to a fully deployed website with CMS, email integration, and custom domain — built entirely through conversation with AI.",
    category: "build-log",
    body: `Today I shipped markhallam.com.au. The site you're reading this on went from an empty folder to a fully deployed, production-grade website — and every line of code was generated through conversation with AI.

## What got built

This isn't a template or a drag-and-drop site. It's a custom Next.js 16 application with:

- **Sanity CMS** with an embedded Studio for content management
- **Resend** for waitlist email integration
- **Full SEO** — OpenGraph, Twitter Cards, JSON-LD structured data
- **RSS feed** for cross-posting to other platforms
- **Framer Motion** page transitions throughout
- **Auto-deploy** — push to GitHub, Vercel builds and deploys automatically

The whole thing runs on a custom dark-first design system built with Tailwind CSS v4.

## How it was deployed

The deployment pipeline is straightforward: code lives on GitHub, Vercel watches for pushes to main, builds automatically, and serves from the edge. Domain DNS was pointed from GoDaddy to Vercel, and SSL certificates were provisioned automatically.

Environment variables for Sanity, Resend, and analytics are managed through Vercel's dashboard — nothing sensitive in the repo.

## What's next

The site is live but the content is just getting started. Next steps: seed real content through Sanity Studio, add Google Analytics, and set up automated cross-posting with Zapier and Buffer.

This is the starting line, not the finish line. Building in public means you get to watch it evolve.`,
    publishedAt: "2026-02-12",
    readTime: 3,
    featured: true,
  },
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
    slug: "announcing-nomlie",
    title: "Announcing Nomlie: AI-Powered Health, Fitness & Longevity",
    excerpt: "Nomlie is live — an AI health platform that tracks nutrition, plans workouts, generates meal plans, scans for toxins, and guides your longevity journey.",
    category: "announcement",
    body: `Nomlie is live. An AI-powered health, fitness and longevity platform that does what no single app has managed to do: connect every dimension of your health into one intelligent system.

## The problem

The average health-conscious person juggles 4+ separate apps — one for calories, one for workouts, one for recipes, one for tracking. None of them talk to each other. And most of them completely ignore what's actually in your food.

Over 3,000 chemical additives approved in US food are banned in Europe, Japan, and Canada. Most health apps pretend this problem doesn't exist.

## What Nomlie does

Nomlie brings it all together: nutrition tracking, fitness plans, AI-generated meal plans, a product toxin scanner, and a longevity dashboard. Everything is personalised by AI that learns your goals, your body, and your habits.

Scan any product barcode to instantly detect harmful additives. Get workout plans that adapt to your recovery. Receive meal plans that match your allergies, preferences, and nutrition targets.

## Built the same way

Like every project on this site, Nomlie was built through conversation with AI. Described, not hand-coded. From concept to live product, shipped by a solo builder.

## Try it

Visit nomlie.com to get early access or try the free product scanner.`,
    publishedAt: "2026-02-12",
    readTime: 2,
    featured: true,
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

LunarPDF, a complete PDF editor, was built in 2 days. Nomlie, an AI-powered health and longevity platform, launched today. This website was built entirely through conversation with Claude. Every project is proof that the barriers to building have collapsed.`,
  philosophy: `I believe we're in the early days of a fundamental shift. The ability to build software is no longer gated by technical skill, capital, or connections. It's gated by clarity of thought and willingness to ship.

My mission is to help people realise this. If you can describe an idea clearly, you can build it. Not in theory — in practice, today, with tools that already exist.

This isn't about replacing developers. It's about empowering everyone else. The world has more good ideas than it has people to build them. AI closes that gap.`,
  currentFocus: [
    "Growing Nomlie (AI-powered health, fitness & longevity)",
    "Growing markhallam.com.au — now live and deployed",
    "Developing the Learn to Build curriculum",
    "Writing about the solo builder journey",
  ],
};

// Stats derived from project data
export function getHomeStats() {
  const total = projects.length;
  const live = projects.filter((p) => p.status === "live").length;
  const building = projects.filter((p) => p.status === "building").length;
  return [
    { value: String(total), label: "Products Shipped" },
    { value: String(live), label: "Live Now" },
    { value: String(building), label: "Building" },
    { value: "2 Days", label: "Fastest Ship" },
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
