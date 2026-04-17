import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  lastModified: string;
  author: string;
  mevzuatRef?: string;
  tags: string[];
}

export interface Post extends PostFrontmatter {
  slug: string;
  readingTime: string;
  content: string;
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, f), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        content,
        readingTime: readingTime(content).text,
        ...(data as PostFrontmatter),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
