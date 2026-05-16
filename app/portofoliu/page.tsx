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
  { id: "1", src: images.portfolio1, alt: "Componentă mecanică debitată laser", title: "Componentă structurală", material: "Oțel", service: "Laser", industry: "Construcții" },
  { id: "2", src: images.precisionEdge, alt: "Margine debitată pe inox", title: "Detaliu margine debitare", material: "Inox", service: "Laser", industry: "Prototipuri" },
  { id: "3", src: images.portfolio3, alt: "Piese metalice diverse", title: "Set componente schimb", material: "Oțel", service: "Laser + Abkant", industry: "Echipamente agricole" },
  { id: "4", src: images.portfolio4, alt: "Profil U metalic", title: "Profil U îndoit", material: "Oțel", service: "Abkant", industry: "Construcții" },
  { id: "5", src: images.finishedParts, alt: "Piese finisate aliniate", title: "Serie scurtă piese auto", material: "Oțel", service: "Laser + Abkant", industry: "Automotive" },
  { id: "6", src: images.portfolio6, alt: "Componentă inox lustruit", title: "Detaliu inox 304", material: "Inox", service: "Laser", industry: "Mobilă industrială" },
  { id: "7", src: images.portfolio7, alt: "Carcasă metalică pliată", title: "Carcasă metalică", material: "Oțel", service: "Abkant", industry: "Mobilă industrială" },
  { id: "8", src: images.portfolio8, alt: "Suport metalic complex", title: "Suport multifuncțional", material: "Aluminiu", service: "Laser + Abkant", industry: "Prototipuri" },
  { id: "9", src: images.portfolio9, alt: "Set rame metalice", title: "Rame structurale", material: "Oțel", service: "Abkant", industry: "Mobilă industrială" },
  { id: "10", src: images.steelSheet, alt: "Tablă oțel pregătită", title: "Tablă pregătită debitare", material: "Oțel", service: "Laser", industry: "Construcții" },
  { id: "11", src: images.portfolio2, alt: "Cutie metalică finisată", title: "Cutie tehnică", material: "Oțel", service: "Laser + Abkant", industry: "Echipamente agricole" },
  { id: "12", src: images.portfolio5, alt: "Componente prototipuri R&D", title: "Prototip R&D", material: "Aluminiu", service: "Laser", industry: "Prototipuri" },
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
