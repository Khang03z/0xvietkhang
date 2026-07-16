"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Trading", href: "/trading" },
  { name: "Prop Firms", href: "/prop-firms" },
  { name: "Crypto", href: "/crypto" },
  { name: "Opportunities", href: "/opportunities" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight transition-opacity hover:opacity-70"
        >
          0xVietKhang
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  active
  ? "font-semibold text-black"
  : "font-medium text-neutral-500 hover:text-black"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right spacer */}
        <div className="hidden w-24 md:block" />
      </div>
    </header>
  );
}