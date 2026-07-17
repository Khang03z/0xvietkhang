import type { Metadata } from "next";
import PostList from "@/components/article/PostList";
import { getAllPosts } from "@/lib/posts";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      {/* Hero */}
      <section className="border-b border-neutral-200 pb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
          Blog
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
          
Thoughts, insights
          <br />
          and experiences.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
          Chia sẻ kiến thức, kinh nghiệm và góc nhìn của mình về
Trading, Prop Firms và Crypto.
        </p>

        <p className="mt-8 text-sm text-neutral-500">
          {posts.length} {posts.length === 1 ? "article" : "articles"}
        </p>
      </section>

      {/* Posts */}
      <section className="py-16">
        <PostList posts={posts} />
      </section>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Những câu chuyện, trải nghiệm và bài học trên hành trình của 0xVietKhang.",
};