import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { CtaSection } from "@/components/sections/CtaSection";
import posts from "@/lib/posts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — Ghiduri tehnice debitare laser & abkant CNC",
  description:
    "Articole tehnice despre debitarea laser, prelucrarea abkant, materiale, toleranțe și pregătire fișiere DXF. Resurse practice pentru ingineri și producători.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | SOZO PROJECT",
    description: "Ghiduri tehnice pentru debitare laser și abkant CNC.",
    url: `${site.url}/blog`,
  },
};

const formatter = new Intl.DateTimeFormat("ro-RO", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.datePublished.localeCompare(a.datePublished));

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: "Acasă", href: "/" }, { label: "Blog" }]} />
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mt-6 mb-4">
            <span className="w-8 h-px bg-accent" />
            Blog · Ghiduri tehnice
          </div>
          <h1 className="text-h1 text-text-primary mb-4 max-w-3xl">
            Resurse tehnice pentru ingineri și producători
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            Comparații între tehnologii, ghiduri de toleranțe, recomandări de materiale și
            instrucțiuni practice de pregătire fișiere — scrise pentru cei care iau decizii
            tehnice, nu pentru SEO.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {sorted.map((p, idx) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className={`group flex flex-col bg-bg-elevated border border-border hover:border-accent rounded-lg overflow-hidden transition-all ${idx === 0 ? "md:col-span-2" : ""}`}
              >
                <div className={`relative overflow-hidden ${idx === 0 ? "aspect-[2/1]" : "aspect-[16/10]"}`}>
                  <Image
                    src={p.hero}
                    alt={p.heroAlt}
                    fill
                    sizes={idx === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated/85 via-bg-elevated/30 to-transparent" />
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-3 text-xs font-mono text-text-muted mb-4">
                    <span className="text-accent uppercase tracking-wider">{p.category}</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" /> {formatter.format(new Date(p.datePublished))}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" /> {p.readMin} min
                    </span>
                  </div>
                  <h2 className={`${idx === 0 ? "text-h3" : "text-h4"} text-text-primary mb-3 group-hover:text-accent transition-colors`}>
                    {p.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-6 flex-1">
                    {p.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                    Citește articolul <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Ai un proiect tehnic?"
        subtitle="Trimite-ne specificațiile — ofertă în aceeași zi. Consultanță inclusă."
      />

      <BreadcrumbSchema
        items={[
          { name: "Acasă", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />
    </>
  );
}
