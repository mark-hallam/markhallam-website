import { defineField, defineType } from "sanity";

export const learnPage = defineType({
  name: "learnPage",
  title: "Learn Page",
  type: "document",
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "valueProp",
      title: "Value Proposition",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "pillars",
      title: "Pillars",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "faqItems",
      title: "FAQ Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "question", title: "Question", type: "string" }),
            defineField({
              name: "answer",
              title: "Answer",
              type: "text",
              rows: 4,
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Learn to Build Page" };
    },
  },
});
