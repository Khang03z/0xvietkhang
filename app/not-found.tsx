import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-20">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
          404
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
          Trang này không tồn tại.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
          Có thể đường dẫn đã thay đổi hoặc nội dung bạn đang tìm kiếm
          không còn tồn tại.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          Về trang chủ
        </Link>
      </div>
    </main>
  );
}