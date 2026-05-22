// Centralised social-account URLs. Edit in one place; consumed by SiteHeader
// (mobile drawer), FollowMe (writing index footer), homepage contact section,
// and the contact page.

export const SOCIAL = {
  x: {
    label: "X",
    handle: "@MarkHallam",
    url: "https://x.com/MarkHallam",
  },
  linkedin: {
    label: "LinkedIn",
    handle: "linkedin.com/in/mark-hallam",
    url: "https://www.linkedin.com/in/mark-hallam/",
  },
  youtube: {
    label: "YouTube",
    handle: "@markhallam-ai",
    url: "https://www.youtube.com/@markhallam-ai",
  },
} as const;

export type SocialKey = keyof typeof SOCIAL;
