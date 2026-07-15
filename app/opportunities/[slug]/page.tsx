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

  if (!postExists("opportunities", slug)) {
    return {};
  }

  const post = await getPostBySlug("opportunities", slug);

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function OpportunityPostPage({
  params,
}: Props) {
  const { slug } = await params;

  if (!postExists("opportunities", slug)) {
    notFound();
  }

  const post = await getPostBySlug("opportunities", slug);

  return <ArticlePage post={post} />;
}