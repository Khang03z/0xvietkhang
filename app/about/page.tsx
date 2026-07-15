import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            About
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Xin chào,
            <br />
            mình là Khang.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-neutral-600">
            Mình quan tâm đến trading, crypto và công nghệ. 0xVietKhang là
            nơi mình ghi lại những kiến thức, trải nghiệm và bài học trên
            hành trình của mình.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              My Story
            </p>
          </div>

          <div className="space-y-6 text-lg leading-8 text-neutral-700">
            <p>
              Mình bắt đầu tìm hiểu thị trường tài chính và crypto với mong
              muốn xây dựng thêm kiến thức, kỹ năng và những nguồn thu nhập
              cho bản thân.
            </p>

            <p>
              Trong trading, mình tập trung vào phương pháp Follow Trend,
              quản lý rủi ro và quá trình giao dịch với các quỹ cấp vốn.
            </p>

            <p>
              Với crypto, mình quan tâm đến blockchain, Web3, airdrop và
              những cơ hội mới xuất hiện trong một thị trường luôn thay đổi.
            </p>

            <p>
              Website này không phải nơi mình cố gắng tỏ ra biết tất cả.
              Đây là nơi mình chia sẻ những gì mình đã học, đang làm và
              trải nghiệm thực tế trên hành trình của chính mình.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Explore my journey.
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-neutral-600">
            Đọc những bài viết mới nhất về trading, crypto và hành trình
            cá nhân của mình.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Đọc Blog
            </Link>

            <Link
              href="/trading"
              className="rounded-lg border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold transition hover:bg-neutral-100"
            >
              Khám phá Trading
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}