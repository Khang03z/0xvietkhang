import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "0xVietKhang",
    template: "%s | 0xVietKhang",
  },
  description:
    "Chia sẻ kiến thức, trải nghiệm và hành trình cá nhân về Trading, Prop Firms và Crypto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={geist.className}>
  <Header />
  {children}
  <Footer />
</body>
    </html>
  );
}