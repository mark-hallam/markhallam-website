import { defineField, defineType } from "sanity";

export const subscriber = defineType({
  name: "subscriber",
  title: "Subscriber",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      options: {
        list: [
          { title: "Learn Page", value: "learn-page" },
          { title: "Blog", value: "blog" },
          { title: "Footer", value: "footer" },
        ],
      },
    }),
    defineField({
      name: "subscribedAt",
      title: "Subscribed At",
      type: "datetime",
    }),
    defineField({
      name: "welcomeEmailSent",
      title: "Welcome Email Sent",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "email",
      subtitle: "source",
    },
  },
});
