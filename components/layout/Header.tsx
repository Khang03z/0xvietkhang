import Link from "next/link";

const navItems = [
  { name: "Trading", href: "/trading" },
  { name: "Prop Firms", href: "/prop-firms" },
  { name: "Crypto", href: "/crypto" },
  { name: "Opportunities", href: "/opportunities" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          0xVietKhang
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-black"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}