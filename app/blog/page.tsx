import type { Metadata } from "next";

export default function BlogPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
        Blog
      </p>

      <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
        Notes from
        <br />
        my journey.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
        Những câu chuyện, trải nghiệm, bài học và suy nghĩ trong hành trình
        của mình.
      </p>
    </main>
  );
}

// app/blog/page.tsx

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Những câu chuyện, trải nghiệm và bài học trên hành trình của 0xVietKhang.",
};