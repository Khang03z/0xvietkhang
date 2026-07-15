import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const baseUrl = "https://0xvietkhang.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/${post.section}/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/trading`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/prop-firms`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/crypto`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/opportunities`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}