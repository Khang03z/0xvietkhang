import type { Post } from "@/lib/posts";
import PostList from "@/components/article/PostList";

type CategoryPageProps = {
  label: string;
  headline: React.ReactNode;
  description: string;
  posts: Post[];
};

export default function CategoryPage({
  label,
  headline,
  description,
  posts,
}: CategoryPageProps) {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-20">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
          {label}
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
          {headline}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
          {description}
        </p>
      </section>

      <section className="mt-20">
        <div className="border-b border-neutral-200 pb-6">
          <h2 className="text-2xl font-bold">Bài viết mới nhất</h2>
        </div>

        <PostList posts={posts} />
      </section>
    </main>
  );
}