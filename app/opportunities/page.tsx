import type { Metadata } from "next";

export default function OpportunitiesPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
        Opportunities
      </p>

      <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
        Find opportunities.
        <br />
        Build your edge.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
        Airdrop, testnet và những cách mình tìm kiếm cơ hội trong thị trường
        crypto.
      </p>
    </main>
  );
}


// app/opportunities/page.tsx

export const metadata: Metadata = {
  title: "Cơ hội",
  description:
    "Airdrop, testnet và những cơ hội kiếm tiền trong thị trường crypto.",
};