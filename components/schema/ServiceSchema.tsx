import { site } from "@/lib/site";
import { safeJsonLd } from "@/lib/schema";

type Props = {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string;
};

export function ServiceSchema({ name, description, url, serviceType, areaServed = "Iași, România" }: Props) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${site.url}/#business`,
      name: site.legalName,
      url: site.url,
    },
    areaServed: { "@type": "City", name: areaServed },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  );
}
