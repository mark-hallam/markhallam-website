import { client } from "./sanity";
import type { ProjectStatus, PostCategory } from "./data";

// ──── Project Queries ────

export async function getSanityProjects() {
  return client.fetch(`
    *[_type == "project"] | order(order asc) {
      title,
      "slug": slug.current,
      description,
      status,
      url,
      keyStat,
      body,
      techStack,
      features,
      learned,
      screenshots,
      order
    }
  `);
}

export async function getSanityProject(slug: string) {
  return client.fetch(
    `
    *[_type == "project" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      description,
      status,
      url,
      keyStat,
      body,
      techStack,
      features,
      learned,
      screenshots,
      order
    }
  `,
    { slug }
  );
}

export async function getSanityProjectSlugs() {
  return client.fetch(`
    *[_type == "project"]{ "slug": slug.current }
  `);
}

// ──── Blog Post Queries ────

export async function getSanityPosts() {
  return client.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      excerpt,
      category,
      publishedAt,
      readTime,
      featured
    }
  `);
}

export async function getSanityPost(slug: string) {
  return client.fetch(
    `
    *[_type == "blogPost" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      excerpt,
      category,
      body,
      publishedAt,
      readTime,
      featured
    }
  `,
    { slug }
  );
}

export async function getSanityPostSlugs() {
  return client.fetch(`
    *[_type == "blogPost"]{ "slug": slug.current }
  `);
}

export async function getLatestSanityPost() {
  return client.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc)[0] {
      title,
      "slug": slug.current,
      excerpt,
      category,
      publishedAt,
      readTime,
      featured
    }
  `);
}

// ──── Site Settings ────

export async function getSanitySettings() {
  return client.fetch(`
    *[_type == "siteSettings"][0] {
      heroTagline,
      heroSubtitle,
      socialLinks,
      projectLinks,
      learnCTA,
      waitlistEnabled
    }
  `);
}

// ──── Learn Page ────

export async function getSanityLearnPage() {
  return client.fetch(`
    *[_type == "learnPage"][0] {
      headline,
      valueProp,
      pillars,
      faqItems
    }
  `);
}
