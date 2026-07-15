import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import readingTime from "reading-time";

const contentDirectory = path.join(process.cwd(), "content");

export const categories = [
  "trading",
  "prop-firms",
  "crypto",
  "opportunities",
  "blog",
] as const;

export type Category = (typeof categories)[number];

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  section: Category;
  readingTime: string;
  coverImage?: string;
};

export type PostDetail = Post & {
  contentHtml: string;
};

export async function getPostsByCategory(
  category: Category
): Promise<Post[]> {
  const categoryDirectory = path.join(contentDirectory, category);

  if (!fs.existsSync(categoryDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(categoryDirectory);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(categoryDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        category: data.category,
        section: category,
        readingTime: `${Math.ceil(stats.minutes)} phút đọc`,
        coverImage: data.coverImage,
      };
    });

  return posts.sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(
  category: Category,
  slug: string
): Promise<PostDetail> {
  const fullPath = path.join(
    contentDirectory,
    category,
    `${slug}.md`
  );

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    category: data.category,
    section: category,
    contentHtml: processedContent.toString(),
    readingTime: `${Math.ceil(stats.minutes)} phút đọc`,
    coverImage: data.coverImage,
  };
}

export function postExists(
  category: Category,
  slug: string
): boolean {
  const fullPath = path.join(
    contentDirectory,
    category,
    `${slug}.md`
  );

  return fs.existsSync(fullPath);
}

export async function getAllPosts(): Promise<Post[]> {
  const allPosts = await Promise.all(
    categories.map((category) =>
      getPostsByCategory(category)
    )
  );

  return allPosts
    .flat()
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}