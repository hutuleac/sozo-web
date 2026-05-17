import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { PortfolioGrid, type PortfolioItem } from "@/components/sections/PortfolioGrid";
import { CtaSection } from "@/components/sections/CtaSection";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portofoliu — Lucrări debitare laser și abkant",
  description:
    "Galerie cu lucrări de debitare laser și prelucrare abkant CNC realizate de SOZO PROJECT Iași. Construcții, automotive, mobilă industrială, echipamente agricole, prototipuri.",
  alternates: { canonical: "/portofoliu" },
  openGraph: {
    title: "Portofoliu | SOZO PROJECT",
    description: "Lucrări reprezentative — debitare laser și abkant CNC, Iași.",
    url: `${site.url}/portofoliu`,
  },
};

const items: PortfolioItem[] = [
  { id: "1",  src: images.portfolio1,    alt: "Firmă luminoasă Depobox din tablă tăiată laser CNC — semnalistică metalică la comandă Iași",                          title: "Firmă luminoasă la comandă",    material: "Oțel",   service: "Laser",           industry: "Semnalistică" },
  { id: "2",  src: images.precisionEdge, alt: "Suporți din inox 304 tăiați laser CNC — precizie ±0.1mm, debitare tablă inox Iași",                                    title: "Suporți inox 304",              material: "Inox",   service: "Laser",           industry: "Industrial" },
  { id: "3",  src: images.portfolio3,    alt: "Panou decorativ cu portret tăiat laser din tablă oțel — element decorativ metal la comandă Iași",                      title: "Panou decorativ portret",       material: "Oțel",   service: "Laser",           industry: "Decorativ" },
  { id: "4",  src: images.portfolio4,    alt: "Grătar metalic decorativ din inox 304 tăiat laser CNC — panou perforat la comandă Iași",                               title: "Grătar metalic inox",           material: "Inox",   service: "Laser",           industry: "Decorativ" },
  { id: "5",  src: images.finishedParts, alt: "Suporți din oțel debitați laser și îndoiți abkant CNC — serie scurtă piese metalice la comandă Iași",                 title: "Suporți oțel laser + abkant",   material: "Oțel",   service: "Laser + Abkant",  industry: "Industrial" },
  { id: "6",  src: images.portfolio6,    alt: "Piesă din tablă oțel debitată laser CNC și îndoită abkant — profil metalic personalizat la comandă",                  title: "Profil tablă îndoit",           material: "Oțel",   service: "Laser + Abkant",  industry: "Construcții" },
  { id: "7",  src: images.portfolio7,    alt: "Serie suporți U din oțel executați prin debitare laser și îndoire abkant CNC — producție repetabilă Iași",             title: "Serie suporți U oțel",          material: "Oțel",   service: "Laser + Abkant",  industry: "Industrial" },
  { id: "8",  src: images.portfolio8,    alt: "Suport din oțel executat prin debitare laser CNC și îndoire abkant — piesă metalică la comandă Iași",                 title: "Suport oțel la comandă",        material: "Oțel",   service: "Laser + Abkant",  industry: "Industrial" },
  { id: "9",  src: images.portfolio9,    alt: "Firmă metalică patinată pentru spațiu HoReCa — tablă tăiată laser CNC, finisaj Corten Iași",                          title: "Firmă HoReCa din tablă",        material: "Corten", service: "Laser",           industry: "HoReCa" },
  { id: "10", src: images.steelSheet,    alt: "Tablă perforată din inox 304 debitată laser CNC — panouri decorative serie la comandă Iași",                          title: "Tablă perforată inox 304",      material: "Inox",   service: "Laser",           industry: "Decorativ" },
  { id: "11", src: images.portfolio2,    alt: "Panou decorativ floral din tablă tăiată laser CNC — element decorativ metal la comandă Iași",                         title: "Panou decorativ floral",        material: "Oțel",   service: "Laser",           industry: "Decorativ" },
  { id: "12", src: images.portfolio5,    alt: "Producție serie rondele din oțel tăiate laser CNC — piese industriale la comandă Iași",                               title: "Serie rondele oțel",            material: "Oțel",   service: "Laser",           industry: "Industrial" },
  { id: "13", src: images.portfolioSemnMetal, alt: "Semn decorativ laser cut din tablă metalică — inscripție decorativă cu text tăiat laser CNC, finisaj industrial", title: "Semn decorativ metalic",        material: "Oțel",   service: "Laser",           industry: "Decorativ" },
];

export default function PortofoliuPage() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: "Acasă", href: "/" }, { label: "Portofoliu" }]} />
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mt-6 mb-4">
            <span className="w-8 h-px bg-accent" />
            Portofoliu
          </div>
          <h1 className="text-h1 text-text-primary mb-4 max-w-3xl">
            Lucrări reprezentative
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            O selecție din proiectele realizate — de la piese unice de prototip până la serii de
            câteva sute de bucăți. Fără nume de clienți (B2B confidențial), dar cu specificații reale.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <PortfolioGrid items={items} />
        </div>
      </section>

      <CtaSection
        title="Ai un proiect similar?"
        subtitle="Trimite-ne fișierul. Ofertă în aceeași zi."
      />

      <BreadcrumbSchema
        items={[
          { name: "Acasă", href: "/" },
          { name: "Portofoliu", href: "/portofoliu" },
        ]}
      />
    </>
  );
}
