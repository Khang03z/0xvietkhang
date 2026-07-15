import Image from "next/image";
import Link from "next/link";

import type { Post } from "@/lib/posts";
import { formatDate } from "@/lib/formatDate";

type PostListProps = {
  posts: Post[];
};

export default function PostList({
  posts,
}: PostListProps) {
  if (posts.length === 0) {
    return (
      <p className="py-10 text-neutral-500">
        Chưa có bài viết nào.
      </p>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link
          key={`${post.section}-${post.slug}`}
          href={`/${post.section}/${post.slug}`}
          className="group overflow-hidden rounded-xl border border-neutral-200 bg-white transition duration-200 hover:-translate-y-1 hover:shadow-lg"
        >
          {post.coverImage && (
            <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}

          <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">
              {post.category}
            </p>

            <h3 className="mt-3 text-xl font-bold tracking-tight">
              {post.title}
            </h3>

            <p className="mt-3 line-clamp-3 text-sm leading-6 text-neutral-600">
              {post.description}
            </p>

            <div className="mt-6 text-sm text-neutral-500">
              {formatDate(post.date)} · {post.readingTime}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}