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
    image: `${site.url}/opengraph-image`,
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
    sameAs: [site.socials.facebook, site.socials.linkedin, site.maps],
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
      "Debitare aluminiu laser",
      "Confecții metalice la comandă",
      "Elemente decorative din metal",
      "Piese industriale la comandă",
      "Inox 304 316 industria alimentară",
      "Tablă inox HoReCa bucătărie profesională",
      "Balustrade inox la comandă",
      "Panouri tablă balustrade scări",
      "Piese schimb utilaje agricole tablă CNC",
      "Componente combine tractoare semănători",
      "Carcase tablouri electrice la comandă",
      "Dulapuri metalice automatizări industriale",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicii prelucrare metal CNC",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Debitare Laser CNC",
            description: "Tăiere laser CO2 CNC pentru oțel, inox și aluminiu. Mitsubishi ML3015EX 4.5kW, toleranță ±0.05mm, de la 1 bucată.",
            url: `${site.url}/servicii/debitare-laser`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Prelucrare Abkant CNC",
            description: "Îndoire tablă CNC cu presă de 160T, 4 axe. Oțel, inox, aluminiu până la 12mm, repetabilitate ±0.1°.",
            url: `${site.url}/servicii/prelucrare-abkant`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Confecții Metalice la Comandă",
            description: "Dulapuri metalice, rafturi industriale, structuri din tablă la comandă. De la 1 bucată, dimensiuni custom.",
            url: `${site.url}/servicii/confectii-metalice`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Piese Industriale la Comandă",
            description: "Piese de schimb și componente industriale din tablă CNC. Inginerie inversă, de la 1 bucată, urgențe prioritizate.",
            url: `${site.url}/servicii/piese-industriale-la-comanda`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Elemente Decorative din Metal",
            description: "Garduri Corten, panouri perforat, litere și semnalistică din tablă. Orice pattern DXF/AI, de la 1 bucată.",
            url: `${site.url}/servicii/elemente-decorative-metal`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Inox pentru Industria Alimentară și HoReCa",
            description: "Tablă inox 304 și 316 tăiată laser CNC la comandă. Mese de lucru, rafturi, carcase echipamente, tăvi pentru bucătării profesionale și procesare alimente.",
            url: `${site.url}/servicii/inox-industria-alimentara`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Balustrade și Scări Inox la Comandă",
            description: "Componente pentru balustrade și scări din inox, oțel și Corten: panouri infill tăiate laser, profile îndoite CNC, mâini curente plate, trepte din tablă.",
            url: `${site.url}/servicii/balustrade-scari-inox`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Piese Utilaje Agricole la Comandă",
            description: "Piese de schimb din tablă CNC pentru utilaje agricole în Iași și Moldova. Combine, tractoare, semănători. Inginerie inversă inclusă, urgențe prioritizate, de la 1 bucată.",
            url: `${site.url}/servicii/piese-utilaje-agricole`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tablouri Electrice și Carcase Metalice la Comandă",
            description: "Carcase pentru tablouri electrice, dulapuri de automatizare și carcase tehnice din tablă CNC. Dimensiuni personalizate, decupaje precise, de la 1 bucată.",
            url: `${site.url}/servicii/tablouri-electrice-carcase`,
          },
        },
      ],
    },
    vatID: site.cui,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  );
}
