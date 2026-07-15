import CategoryPage from "@/components/article/CategoryPage";
import { getPostsByCategory } from "@/lib/posts";
import type { Metadata } from "next";

export default async function CryptoPage() {
  const posts = await getPostsByCategory("crypto");

  return (
    <CategoryPage
      label="Crypto"
      headline={
        <>
          Explore the
          <br />
          decentralized world.
        </>
      }
      description="Kiến thức về blockchain, ví crypto, DeFi, bảo mật và những thứ mình học được trong thị trường."
      posts={posts}
    />
  );
}

// app/crypto/page.tsx

export const metadata: Metadata = {
  title: "Crypto",
  description:
    "Kiến thức nền tảng về blockchain, ví crypto, DeFi và bảo mật.",
};