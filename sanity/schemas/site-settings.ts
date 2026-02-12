import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "heroTagline",
      title: "Hero Tagline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        defineField({ name: "x", title: "X (Twitter)", type: "url" }),
        defineField({ name: "linkedin", title: "LinkedIn", type: "url" }),
        defineField({ name: "email", title: "Email", type: "string" }),
      ],
    }),
    defineField({
      name: "projectLinks",
      title: "Project Links",
      type: "object",
      fields: [
        defineField({ name: "lunarpdf", title: "LunarPDF URL", type: "url" }),
        defineField({ name: "nomlie", title: "Nomlie URL", type: "url" }),
      ],
    }),
    defineField({
      name: "learnCTA",
      title: "Learn to Build CTA Text",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "waitlistEnabled",
      title: "Waitlist Enabled",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
