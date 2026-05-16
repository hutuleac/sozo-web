import { site } from "@/lib/site";
import { safeJsonLd } from "@/lib/schema";

export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/og-default.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.postal,
      addressCountry: "RO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "20:00",
      },
    ],
    sameAs: [site.socials.facebook],
    areaServed: [
      { "@type": "City", name: "Iași" },
      { "@type": "AdministrativeArea", name: "Moldova, România" },
      { "@type": "Country", name: "România" },
    ],
    knowsAbout: [
      "Debitare laser CNC",
      "Prelucrare abkant CNC",
      "Inginerie inversă piese metalice",
      "Mitsubishi ML3015EX",
    ],
    vatID: site.cui,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  );
}
