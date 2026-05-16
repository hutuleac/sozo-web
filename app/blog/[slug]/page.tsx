import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { ArticleSchema } from "@/components/schema/ArticleSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PostRenderer } from "@/components/blog/PostRenderer";
import { CtaSection } from "@/components/sections/CtaSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import posts, { getPostBySlug, getAllSlugs } from "@/lib/posts";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Articol negăsit" };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${site.url}/blog/${slug}`,
      type: "article",
      publishedTime: post.datePublished,
      images: [{ url: post.hero, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image" },
  };
}

const formatter = new Intl.DateTimeFormat("ro-RO", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = posts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 border-b border-border overflow-hidden">
        <Image
          src={post.hero}
          alt={post.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-base via-bg-base/95 to-bg-base/60" />
        <div className="absolute inset-0 bg-grid opacity-25" aria-hidden />

        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
          <Breadcrumbs
            items={[
              { label: "Acasă", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
          <div className="flex flex-wrap gap-3 text-xs font-mono text-text-muted mt-6 mb-5">
            <span className="text-accent uppercase tracking-wider">{post.category}</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3" /> {formatter.format(new Date(post.datePublished))}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" /> {post.readMin} min citire
            </span>
          </div>
          <h1 className="text-h1 text-text-primary mb-5">{post.title}</h1>
          <p className="text-lg text-text-secondary leading-relaxed">{post.description}</p>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
          <PostRenderer blocks={post.body} />
        </div>
      </section>

      {/* FAQ */}
      {post.faqs && post.faqs.length > 0 && (
        <section className="py-16 md:py-20 bg-bg-elevated border-y border-border">
          <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
            <SectionHeader eyebrow="FAQ" heading="Întrebări frecvente" align="center" />
            <FAQAccordion items={post.faqs} />
          </div>
        </section>
      )}

      {/* Related */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-h3 text-text-primary">Articole conexe</h2>
            <Link href="/blog" className="text-sm text-text-secondary hover:text-accent transition-colors inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Toate articolele
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group bg-bg-elevated border border-border hover:border-accent rounded-lg overflow-hidden transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.hero}
                    alt={p.heroAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-accent font-mono text-xs uppercase tracking-wider">{p.category}</span>
                  <h3 className="text-h4 text-text-primary mt-2 group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Ai o întrebare specifică?"
        subtitle="Scrie-ne pe WhatsApp sau trimite-ne fișierul direct. Răspuns în aceeași zi."
      />

      <ArticleSchema
        title={post.title}
        description={post.description}
        slug={post.slug}
        datePublished={post.datePublished}
        image={post.hero}
      />
      <BreadcrumbSchema
        items={[
          { name: "Acasă", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />
      {post.faqs && post.faqs.length > 0 && <FAQSchema items={post.faqs} />}
    </>
  );
}
