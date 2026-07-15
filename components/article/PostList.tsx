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
    <div className="divide-y divide-neutral-200">
      {posts.map((post) => (
        <Link
          key={`${post.section}-${post.slug}`}
          href={`/${post.section}/${post.slug}`}
          className="group block py-8"
        >
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <div>
              <p className="text-sm font-medium text-neutral-500">
                {post.category}
              </p>

              <h3 className="mt-2 text-2xl font-bold tracking-tight transition-colors group-hover:text-neutral-600">
                {post.title}
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-neutral-600">
                {post.description}
              </p>
            </div>

            <div className="shrink-0 text-sm text-neutral-500">
              {formatDate(post.date)} · {post.readingTime}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}