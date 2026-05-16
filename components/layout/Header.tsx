"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";

const navRO = [
  {
    label: "Servicii", href: "/servicii", children: [
      { label: "Debitare Laser CNC", href: "/servicii/debitare-laser" },
      { label: "Prelucrare Abkant CNC", href: "/servicii/prelucrare-abkant" },
    ],
  },
  { label: "Portofoliu", href: "/portofoliu" },
  { label: "Despre noi", href: "/despre-noi" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const navEN = [
  {
    label: "Services", href: "/en", children: [
      { label: "CNC Laser Cutting", href: "/en/services/laser-cutting" },
      { label: "CNC Press Brake", href: "/en/services/press-brake" },
    ],
  },
  { label: "Portfolio", href: "/portofoliu" },
  { label: "Contact", href: "/en/contact" },
];

// Bidirectional pairs [ro, en]
const routePairs: [string, string][] = [
  ["/", "/en"],
  ["/servicii/debitare-laser", "/en/services/laser-cutting"],
  ["/servicii/prelucrare-abkant", "/en/services/press-brake"],
  ["/contact", "/en/contact"],
  ["/cere-oferta", "/en/get-a-quote"],
  ["/despre-noi", "/en"],
  ["/faq", "/en"],
  ["/portofoliu", "/portofoliu"],
  ["/blog", "/blog"],
];

function getAltHref(pathname: string, isEn: boolean): string {
  for (const [ro, en] of routePairs) {
    if (isEn && pathname === en) return ro;
    if (!isEn && pathname === ro) return en;
  }
  return isEn ? "/" : "/en";
}

export function Header() {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const altHref = getAltHref(pathname, isEn);
  const nav = isEn ? navEN : navRO;
  const quoteHref = isEn ? "/en/get-a-quote" : "/cere-oferta";
  const quoteLabel = isEn ? "Get a quote" : "Cere ofertă";

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
              {isEn ? "Services" : "Servicii"}
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

          {isEn ? (
            <>
              <Link href="/portofoliu" className="text-text-secondary hover:text-text-primary text-sm transition-colors">
                Portfolio
              </Link>
              <Link href="/en/contact" className="text-text-secondary hover:text-text-primary text-sm transition-colors">
                Contact
              </Link>
            </>
          ) : (
            <>
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
            </>
          )}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div className="hidden md:flex items-center gap-0.5 text-xs font-mono border border-border rounded px-2 py-1.5">
            {!isEn ? (
              <span className="px-1.5 text-text-primary font-semibold">RO</span>
            ) : (
              <Link href={altHref} className="px-1.5 text-text-muted hover:text-text-secondary transition-colors">RO</Link>
            )}
            <span className="text-border">|</span>
            {isEn ? (
              <span className="px-1.5 text-text-primary font-semibold">EN</span>
            ) : (
              <Link href={altHref} className="px-1.5 text-text-muted hover:text-text-secondary transition-colors">EN</Link>
            )}
          </div>

          <Link
            href={quoteHref}
            className="hidden md:inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold text-sm px-5 py-2.5 rounded transition-colors"
          >
            {quoteLabel}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? (isEn ? "Close menu" : "Închide meniul") : (isEn ? "Open menu" : "Deschide meniul")}
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
              {isEn ? "Services" : "Servicii"}
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

            {isEn ? (
              <>
                <Link href="/portofoliu" onClick={() => setOpen(false)} className="text-text-primary py-3 border-b border-border-subtle mt-4">
                  Portfolio
                </Link>
                <Link href="/en/contact" onClick={() => setOpen(false)} className="text-text-primary py-3 border-b border-border-subtle">
                  Contact
                </Link>
              </>
            ) : (
              <>
                <Link href="/portofoliu" onClick={() => setOpen(false)} className="text-text-primary py-3 border-b border-border-subtle mt-4">
                  Portofoliu
                </Link>
                <Link href="/despre-noi" onClick={() => setOpen(false)} className="text-text-primary py-3 border-b border-border-subtle">
                  Despre noi
                </Link>
                <Link href="/faq" onClick={() => setOpen(false)} className="text-text-primary py-3 border-b border-border-subtle">
                  FAQ
                </Link>
                <Link href="/blog" onClick={() => setOpen(false)} className="text-text-primary py-3 border-b border-border-subtle">
                  Blog
                </Link>
                <Link href="/contact" onClick={() => setOpen(false)} className="text-text-primary py-3 border-b border-border-subtle">
                  Contact
                </Link>
              </>
            )}

            {/* Mobile language toggle */}
            <div className="flex items-center gap-3 py-4 border-b border-border-subtle">
              <span className="text-text-muted text-xs font-mono uppercase tracking-wider">Language</span>
              <Link
                href={isEn ? altHref : pathname}
                onClick={() => setOpen(false)}
                className={`text-sm font-mono px-3 py-1 rounded transition-colors ${!isEn ? "bg-accent text-white" : "border border-border text-text-secondary hover:text-text-primary"}`}
              >
                RO
              </Link>
              <Link
                href={isEn ? pathname : altHref}
                onClick={() => setOpen(false)}
                className={`text-sm font-mono px-3 py-1 rounded transition-colors ${isEn ? "bg-accent text-white" : "border border-border text-text-secondary hover:text-text-primary"}`}
              >
                EN
              </Link>
            </div>

            <Link
              href={quoteHref}
              onClick={() => setOpen(false)}
              className="bg-accent hover:bg-accent-hover text-white font-semibold text-center px-5 py-3 rounded mt-6"
            >
              {quoteLabel}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
