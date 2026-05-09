import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import posts from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/servicii/debitare-laser", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/servicii/prelucrare-abkant", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/portofoliu", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/despre-noi", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/cere-oferta", priority: 0.8, changeFrequency: "yearly" as const },
  ];

  const postEntries = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.datePublished),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages.map((p) => ({
      url: `${site.url}${p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...postEntries,
  ];
}
