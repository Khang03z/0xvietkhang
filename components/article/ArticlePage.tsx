import Image from "next/image";

import type { PostDetail } from "@/lib/posts";
import { formatDate } from "@/lib/formatDate";

type ArticlePageProps = {
  post: PostDetail;
};

export default function ArticlePage({
  post,
}: ArticlePageProps) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <article>
        <header className="border-b border-neutral-200 pb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            {post.category}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            {post.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            {post.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-neutral-500">
            <time dateTime={post.date}>
              {formatDate(post.date)}
            </time>

            <span>·</span>

            <span>{post.readingTime}</span>
          </div>
        </header>

        {post.coverImage && (
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-xl bg-neutral-100">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        )}

        <div
          className="article-content py-10"
          dangerouslySetInnerHTML={{
            __html: post.contentHtml,
          }}
        />
      </article>
    </main>
  );
}