import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const ESSAYS_DIR = path.join(process.cwd(), "content", "essays");

export type EssayFrontmatter = {
  title: string;
  date: string; // ISO date — YYYY-MM-DD
  dek?: string;
  readMinutes: number;
  category?: string;
  draft?: boolean;
  number?: number;
};

export type EssayMeta = EssayFrontmatter & {
  slug: string;
};

export type Essay = EssayMeta & {
  body: string; // rendered HTML
};

function readEssayFile(slug: string) {
  const filePath = path.join(ESSAYS_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  return matter(raw);
}

export function getEssayMetaList(): EssayMeta[] {
  if (!fs.existsSync(ESSAYS_DIR)) return [];
  const files = fs.readdirSync(ESSAYS_DIR).filter((f) => f.endsWith(".md"));
  const essays = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const { data } = readEssayFile(slug);
    return {
      slug,
      ...(data as EssayFrontmatter),
    } satisfies EssayMeta;
  });
  return essays
    .filter((e) => !e.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getEssayBySlug(slug: string): Promise<Essay | null> {
  const filePath = path.join(ESSAYS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const { data, content } = readEssayFile(slug);
  const processed = await remark().use(html, { sanitize: false }).process(content);
  return {
    slug,
    ...(data as EssayFrontmatter),
    body: processed.toString(),
  };
}

export function getEssaySlugs(): string[] {
  if (!fs.existsSync(ESSAYS_DIR)) return [];
  return fs
    .readdirSync(ESSAYS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
