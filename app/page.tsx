import Link from "next/link";
import PostList from "@/components/article/PostList";
import { getAllPosts } from "@/lib/posts";
import Image from "next/image";
const categories = [
  {
    title: "Trading",
    description:
      "Kiến thức về Follow Trend, quản lý rủi ro và tâm lý giao dịch.",
    href: "/trading",
  },
  {
    title: "Prop Firms",
    description:
      "Kiến thức, đánh giá và trải nghiệm thực tế với các quỹ cấp vốn.",
    href: "/prop-firms",
  },
  {
    title: "Crypto",
    description:
      "Kiến thức nền tảng về blockchain, DeFi, ví và bảo mật.",
    href: "/crypto",
  },
  {
    title: "Opportunities",
    description:
      "Airdrop, testnet và những cơ hội kiếm tiền trong thị trường crypto.",
    href: "/opportunities",
  },
];

export default async function Home() {
  const allPosts = await getAllPosts();
  const latestPosts = allPosts.slice(0, 3);

  return (
    <main>
      {/* HERO */}
      {/* HERO */}
<section className="border-b border-neutral-200">
  <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
    {/* HERO CONTENT */}
    <div>
      <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
        Welcome to 0xVietKhang
      </p>

      <h1 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-7xl">
        Trade the trend.
        <br />
        Explore crypto.
        <br />
        Build freedom.
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
        Nơi mình chia sẻ kiến thức, trải nghiệm và hành trình cá nhân
        trong trading, quỹ cấp vốn và thế giới crypto.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/trading"
          className="rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          Bắt đầu học
        </Link>

        <Link
          href="/blog"
          className="rounded-lg border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold transition hover:bg-neutral-100"
        >
          Đọc Blog
        </Link>
      </div>
    </div>

    {/* HERO IMAGE */}
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-200">
      <Image
        src="/images/hero/hero-trading.jpg"
        alt="0xVietKhang - Trading and Crypto"
        fill
        priority
        className="object-cover grayscale"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      <div className="absolute bottom-6 left-6 rounded-full border border-white/30 bg-black/50 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
        Trading · Crypto · Building
      </div>
    </div>
  </div>
</section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Explore
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Khám phá 0xVietKhang
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group rounded-xl border border-neutral-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">
                {category.title}
              </h3>

              <p className="mt-3 min-h-24 text-sm leading-6 text-neutral-600">
                {category.description}
              </p>

              <span className="mt-6 inline-block text-sm font-semibold">
                Khám phá{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* LATEST POSTS */}
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex items-end justify-between border-b border-neutral-200 pb-6">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Latest
              </p>

              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Bài viết mới nhất
              </h2>
            </div>

            <Link
              href="/blog"
              className="hidden text-sm font-semibold md:block"
            >
              Xem thêm →
            </Link>
          </div>

          <PostList posts={latestPosts} />
        </div>
      </section>
    </main>
  );
}