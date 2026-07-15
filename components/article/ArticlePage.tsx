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