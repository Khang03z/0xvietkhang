import CategoryPage from "@/components/article/CategoryPage";
import { getPostsByCategory } from "@/lib/posts";
import type { Metadata } from "next";

export default async function PropFirmsPage() {
  const posts = await getPostsByCategory("prop-firms");

  return (
    <CategoryPage
      label="Prop Firms"
      headline={
        <>
          Trade with capital.
          <br />
          Protect your risk.
        </>
      }
      description="Kiến thức, đánh giá và trải nghiệm thực tế của mình với các quỹ cấp vốn."
      posts={posts}
    />
  );
}

// app/prop-firms/page.tsx

export const metadata: Metadata = {
  title: "Quỹ cấp vốn",
  description:
    "Kiến thức, đánh giá và trải nghiệm thực tế với các quỹ cấp vốn.",
};