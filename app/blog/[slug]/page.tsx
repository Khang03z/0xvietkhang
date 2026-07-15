import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ArticlePage from "@/components/article/ArticlePage";
import {
  getPostBySlug,
  postExists,
} from "@/lib/posts";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  if (!postExists("blog", slug)) {
    return {};
  }

  const post = await getPostBySlug("blog", slug);

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: Props) {
  const { slug } = await params;

  if (!postExists("blog", slug)) {
    notFound();
  }

  const post = await getPostBySlug("blog", slug);

  return <ArticlePage post={post} />;
}