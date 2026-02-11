import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { codeInput } from "@sanity/code-input";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "markhallam",
  title: "Mark Hallam",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.documentTypeListItem("project").title("Projects"),
            S.documentTypeListItem("blogPost").title("Blog Posts"),
            S.divider(),
            S.listItem()
              .title("Site Settings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.listItem()
              .title("Learn Page")
              .child(
                S.document()
                  .schemaType("learnPage")
                  .documentId("learnPage")
              ),
            S.divider(),
            S.documentTypeListItem("subscriber").title("Subscribers"),
          ]),
    }),
    visionTool({ defaultApiVersion: "2024-01-01" }),
    codeInput(),
  ],
  schema: {
    types: schemaTypes,
  },
});
