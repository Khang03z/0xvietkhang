import type { Metadata } from "next";
import ArticlePage from "@/components/article/ArticlePage";
import { getPostBySlug } from "@/lib/posts";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug("trading", slug);

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function TradingPostPage({
  params,
}: Props) {
  const { slug } = await params;
  const post = await getPostBySlug("trading", slug);

  return <ArticlePage post={post} />;
}