import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import posts from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const roPages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/servicii/debitare-laser", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/servicii/prelucrare-abkant", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/servicii/confectii-metalice", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/servicii/elemente-decorative-metal", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/servicii/piese-industriale-la-comanda", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/servicii/inox-industria-alimentara", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/servicii/balustrade-scari-inox", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/servicii/piese-utilaje-agricole", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/servicii/tablouri-electrice-carcase", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/portofoliu", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/despre-noi", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/cere-oferta", priority: 0.8, changeFrequency: "yearly" as const },
  ];

  const enPages = [
    { path: "/en", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/en/services/laser-cutting", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/en/services/press-brake", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/en/contact", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/en/get-a-quote", priority: 0.8, changeFrequency: "yearly" as const },
  ];

  const postEntries = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.dateModified ?? p.datePublished),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [
    ...roPages.map((p) => ({
      url: `${site.url}${p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...enPages.map((p) => ({
      url: `${site.url}${p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...postEntries,
  ];
}
