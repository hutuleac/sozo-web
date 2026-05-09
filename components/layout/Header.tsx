"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { label: "Servicii", href: "/servicii", children: [
    { label: "Debitare Laser CNC", href: "/servicii/debitare-laser" },
    { label: "Prelucrare Abkant CNC", href: "/servicii/prelucrare-abkant" },
  ]},
  { label: "Portofoliu", href: "/portofoliu" },
  { label: "Despre noi", href: "/despre-noi" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-bg-base/85 backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-text-secondary hover:text-text-primary text-sm transition-colors"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              Servicii
              <ChevronDown className="w-4 h-4" />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-3">
                <div className="bg-bg-elevated border border-border rounded-lg p-2 min-w-[240px] shadow-2xl">
                  {nav[0].children!.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-bg-overlay rounded transition-colors"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/portofoliu" className="text-text-secondary hover:text-text-primary text-sm transition-colors">
            Portofoliu
          </Link>
          <Link href="/despre-noi" className="text-text-secondary hover:text-text-primary text-sm transition-colors">
            Despre noi
          </Link>
          <Link href="/faq" className="text-text-secondary hover:text-text-primary text-sm transition-colors">
            FAQ
          </Link>
          <Link href="/blog" className="text-text-secondary hover:text-text-primary text-sm transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-text-secondary hover:text-text-primary text-sm transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/cere-oferta"
            className="hidden md:inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold text-sm px-5 py-2.5 rounded transition-colors"
          >
            Cere ofertă
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            className="md:hidden text-text-primary p-2 -mr-2"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-bg-base border-t border-border">
          <nav className="flex flex-col p-6 gap-1">
            <div className="text-text-muted text-xs uppercase tracking-wider font-mono mb-2 mt-2">
              Servicii
            </div>
            {nav[0].children!.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                onClick={() => setOpen(false)}
                className="text-text-primary py-3 border-b border-border-subtle"
              >
                {c.label}
              </Link>
            ))}
            <Link
              href="/portofoliu"
              onClick={() => setOpen(false)}
              className="text-text-primary py-3 border-b border-border-subtle mt-4"
            >
              Portofoliu
            </Link>
            <Link
              href="/despre-noi"
              onClick={() => setOpen(false)}
              className="text-text-primary py-3 border-b border-border-subtle"
            >
              Despre noi
            </Link>
            <Link
              href="/faq"
              onClick={() => setOpen(false)}
              className="text-text-primary py-3 border-b border-border-subtle"
            >
              FAQ
            </Link>
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="text-text-primary py-3 border-b border-border-subtle"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-text-primary py-3 border-b border-border-subtle"
            >
              Contact
            </Link>
            <Link
              href="/cere-oferta"
              onClick={() => setOpen(false)}
              className="bg-accent hover:bg-accent-hover text-white font-semibold text-center px-5 py-3 rounded mt-6"
            >
              Cere ofertă
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
