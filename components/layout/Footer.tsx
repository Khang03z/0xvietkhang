import Link from "next/link";

const footerLinks = [
  { name: "Trading", href: "/trading" },
  { name: "Prop Firms", href: "/prop-firms" },
  { name: "Crypto", href: "/crypto" },
  { name: "Opportunities", href: "/opportunities" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tight"
            >
              0xVietKhang
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-600">
              Chia sẻ kiến thức, trải nghiệm và hành trình cá nhân trong
              trading, quỹ cấp vốn và crypto.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-black"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-neutral-200 pt-6 text-sm text-neutral-500 md:flex-row">
          <p>© 2026 0xVietKhang. All rights reserved.</p>

          <p>Trade. Learn. Build.</p>
        </div>
      </div>
    </footer>
  );
}