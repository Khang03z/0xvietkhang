import CategoryPage from "@/components/article/CategoryPage";
import { getPostsByCategory } from "@/lib/posts";
import type { Metadata } from "next";

export default async function TradingPage() {
  const posts = await getPostsByCategory("trading");
  return (
    <CategoryPage
      label="Trading"
      headline={
        <>
          Follow the trend.
          <br />
          Manage the risk.
        </>
      }
      description="Kiến thức và góc nhìn của mình về Follow Trend, quản lý rủi ro và tâm lý giao dịch."
      posts={posts}
    />
  );
}

export const metadata: Metadata = {
  title: "Trading",
  description:
    "Kiến thức về Follow Trend, quản lý rủi ro và tâm lý giao dịch.",
};

