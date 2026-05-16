import { site } from "@/lib/site";
import { safeJsonLd } from "@/lib/schema";

type Props = {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image: string;
};

export function ArticleSchema({ title, description, slug, datePublished, dateModified, image }: Props) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [image.startsWith("http") ? image : `${site.url}${image}`],
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${site.url}/#business`,
      name: site.legalName,
      url: site.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/blog/${slug}`,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  );
}
