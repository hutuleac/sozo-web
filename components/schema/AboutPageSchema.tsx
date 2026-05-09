import { site } from "@/lib/site";

export function AboutPageSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `Despre ${site.name}`,
    url: `${site.url}/despre-noi`,
    mainEntity: {
      "@type": "Organization",
      "@id": `${site.url}/#business`,
      name: site.legalName,
      legalName: site.legalName,
      foundingDate: "2021",
      url: site.url,
      vatID: site.cui,
      taxID: site.cui,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        postalCode: site.address.postal,
        addressCountry: "RO",
      },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
