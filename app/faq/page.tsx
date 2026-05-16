import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQAccordion, type FAQItem } from "@/components/ui/FAQAccordion";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { CtaSection } from "@/components/sections/CtaSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Întrebări Frecvente — Debitare Laser & Abkant CNC",
  description:
    "Răspunsuri la întrebările frecvente despre debitarea laser CNC și prelucrarea abkant: materiale, toleranțe, formate fișiere, termene, comenzi minime.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Întrebări frecvente | SOZO PROJECT",
    description: "Materiale, toleranțe, formate fișiere, termene, comenzi minime — răspunsuri directe.",
    url: `${site.url}/faq`,
  },
};

const groupLaser: FAQItem[] = [
  { q: "Ce materiale pot fi debitate cu laserul?", a: "Tăiem oțel carbon (OL37, OL52), inox 304 și 316, și aluminiu. Grosimea maximă depinde de material: oțel până la 20mm, inox și aluminiu până la 10mm." },
  { q: "Care este grosimea maximă pentru debitarea laser?", a: "Oțel carbon: 20mm. Inox 304/316: 10mm. Aluminiu: 10mm. Toate cu Mitsubishi ML3015EX, fibră 4.5kW." },
  { q: "Ce toleranță de precizie oferă debitarea laser?", a: "Echipamentul nostru Mitsubishi ML3015EX oferă o precizie pozițională de ±0.05mm/500mm și repetabilitate ±0.02mm — de 3 ori mai bună decât media mașinilor din categorie inferioară." },
  { q: "Ce formate de fișiere acceptați?", a: "DXF și DWG (AutoCAD), STEP/STP pentru modele 3D, PDF cu dimensiuni înscrise. De asemenea, putem lucra din piese fizice prin serviciul de inginerie inversă." },
  { q: "Pot să vă trimit un desen PDF pentru ofertă?", a: "Da. Un PDF cu dimensiunile marcate clar este suficient pentru a calcula oferta. Pentru producție ulterioară este nevoie de DXF sau echivalent CAD." },
  { q: "Puteți face inginerie inversă după o piesă fizică?", a: "Da. Aduceți piesa fizică (sau trimiteți fotografii cu dimensiuni), o măsurăm și creăm noi fișierul de producție. Serviciu inclus în comandă fără cost suplimentar pentru piese simple." },
];

const groupAbkant: FAQItem[] = [
  { q: "Ce grosimi de tablă pot fi îndoite la abkant?", a: "Lucrăm cu tabla de la 0.5mm până la 12mm (oțel carbon), 8mm (inox) și 10mm (aluminiu) cu presa noastră de 160T." },
  { q: "Care este raza minimă de îndoire?", a: "Depinde de material și grosime. Regula standard: raza minimă = 1× grosimea materialului pentru oțel moale, 2× pentru inox." },
  { q: "Lucrați și cu comenzi mici (sub 10 bucăți)?", a: "Da. Acceptăm comenzi de la 1 bucată în sus. Suntem specializați în serii mici de precizie unde complexitatea este ridicată." },
];

const groupOrders: FAQItem[] = [
  { q: "Care este termenul de livrare?", a: "Pentru comenzi standard: 2–5 zile lucrătoare. Pentru urgențe: livrare în aceeași zi (sub rezerva capacității disponibile). Ne contactezi și stabilim împreună." },
  { q: "Cum primesc oferta?", a: "Trimiți fișierul și detaliile pe WhatsApp, email sau formularul de ofertă. Fișier clar și piesă standard: de obicei în 2–4h. Proiecte cu consultanță, iterații de design sau specificații incomplete: 24–48h. Program L–S, 07:00–20:00." },
  { q: "Care este comanda minimă?", a: "Nu există comandă minimă ca număr de bucăți. Acceptăm și piese unice. Valoarea minimă de facturat este de 50 RON + TVA." },
  { q: "Livrați în toată România?", a: "Da, prin servicii de curierat rapid. Ridicarea de la sediu (Strada Aviației 9, Iași) este gratuită." },
];

const allFaqs = [...groupLaser, ...groupAbkant, ...groupOrders];

const groups = [
  { title: "Debitare laser", id: "laser", items: groupLaser },
  { title: "Prelucrare abkant", id: "abkant", items: groupAbkant },
  { title: "Comenzi și livrare", id: "comenzi", items: groupOrders },
];

export default function FAQPage() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: "Acasă", href: "/" }, { label: "FAQ" }]} />
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mt-6 mb-4">
            <span className="w-8 h-px bg-accent" />
            Întrebări frecvente
          </div>
          <h1 className="text-h1 text-text-primary mb-4 max-w-3xl">
            Răspunsuri directe la cele mai frecvente întrebări
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            Grupate pe debitare laser, prelucrare abkant și comenzi/livrare. Lipsește o întrebare?
            Scrie-ne pe WhatsApp — răspundem în program de lucru.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Quick nav */}
          <nav className="flex flex-wrap gap-2 mb-12">
            {groups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="px-4 py-2 text-xs font-mono uppercase tracking-wider bg-bg-elevated border border-border text-text-secondary hover:text-accent hover:border-accent rounded transition-colors"
              >
                {g.title}
              </a>
            ))}
          </nav>

          {groups.map((g) => (
            <div key={g.id} id={g.id} className="mb-16 scroll-mt-24">
              <h2 className="text-h3 text-text-primary mb-6 flex items-baseline gap-3">
                <span className="font-mono text-xs text-accent">0{groups.indexOf(g) + 1}</span>
                {g.title}
              </h2>
              <FAQAccordion items={g.items} />
            </div>
          ))}
        </div>
      </section>

      <CtaSection
        title="Nu ai găsit răspuns?"
        subtitle="Scrie-ne direct — răspundem în aceeași zi în program de lucru."
      />

      <FAQSchema items={allFaqs} />
      <BreadcrumbSchema
        items={[
          { name: "Acasă", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      />
    </>
  );
}
