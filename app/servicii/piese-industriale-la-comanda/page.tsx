import type { Metadata } from "next";
import { Check, Clock, Wrench, Cog, Zap } from "lucide-react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { FAQAccordion, type FAQItem } from "@/components/ui/FAQAccordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

const URL_PATH = "/servicii/piese-industriale-la-comanda";

export const metadata: Metadata = {
  title: "Piese Industriale la Comandă Iași — Tablă CNC, Piese de Schimb",
  description:
    "Piese de schimb și componente industriale la comandă în Iași. Benzi transportoare, conveioare, echipamente. Debitare laser CO2 + îndoire CNC. De la 1 bucată, ofertă în aceeași zi. ☎ +40 732 034 386",
  alternates: {
    canonical: URL_PATH,
    languages: { "ro": URL_PATH, "x-default": URL_PATH },
  },
  openGraph: {
    title: "Piese Industriale la Comandă Iași | SOZO PROJECT",
    description:
      "Componente din tablă CNC pentru echipamente industriale. Inginerie inversă inclusă. De la 1 bucată.",
    url: `${site.url}${URL_PATH}`,
  },
};

const applications = [
  { t: "Benzi transportoare", d: "Ghidaje, suporți laterali, plăci de uzură, console de prindere" },
  { t: "Conveioare înclinate", d: "Carcase, flanșe, plăci de direcționare, suporți structurali" },
  { t: "Linie transport materie primă", d: "Componente structurale, elemente de ghidaj, capace de protecție" },
  { t: "Echipamente industriale", d: "Plăci de montaj, suporți motoare, carcase tablouri, console" },
  { t: "Prototipuri și unicate", d: "Piese unice pentru mașini speciale, adaptări la utilaje existente" },
  { t: "Piese de schimb urgente", d: "Replici după piesa uzată — aduceți piesa veche, o replicăm rapid" },
];

const materials = [
  { name: "Oțel carbon (OL37, OL52)", thick: "20 mm", tol: "±0.1 mm", note: "Rezistență mecanică ridicată — cel mai comun pentru industriale" },
  { name: "Inox 304", thick: "10 mm", tol: "±0.1 mm", note: "Medii umede sau cu coroziune ușoară" },
  { name: "Inox 316", thick: "10 mm", tol: "±0.1 mm", note: "Rezistență chimică superioară — medii agresive" },
  { name: "Aluminiu 5052 / 6061", thick: "10 mm", tol: "±0.1 mm", note: "Greutate redusă — aplicații unde masa contează" },
];

const benefits = [
  { icon: Clock, title: "Livrare rapidă", text: "Piesă simplă cu fișier gata: 1–2 zile. Urgențe industriale: aceeași zi la confirmare. Nu așteptați 3–6 săptămâni ca la turnătorie." },
  { icon: Wrench, title: "De la 1 bucată", text: "Fără cantitate minimă. Comandați o singură piesă de schimb — nu există lot minim." },
  { icon: Cog, title: "Inginerie inversă", text: "Nu aveți fișier? Aduceți piesa veche sau uzată. O măsurăm, creăm fișierul de producție și tăiem replica." },
  { icon: Zap, title: "Precizie ±0.05mm", text: "Mitsubishi ML3015EX CO2 4.5kW — toleranțe industriale din prima bucată, fără iterații costisitoare." },
];

const process = [
  { n: 1, t: "Trimiți piesa sau fișierul", d: "DXF / DWG / STEP via WhatsApp, email sau formularul de ofertă. Sau aduceți direct piesa fizică pentru inginerie inversă." },
  { n: 2, t: "Primești oferta", d: "Fișier clar și piesă standard: 2–4h. Inginerie inversă sau proiecte complexe: 24–48h. Program L–S, 07:00–20:00." },
  { n: 3, t: "Consultanță", d: "Verificăm fișierul și semnalăm orice problemă de fabricabilitate înainte de tăiere." },
  { n: 4, t: "Confirmi comanda", d: "Acord pe preț, cantitate și termen. Avans sau credit pentru clienți recurenți." },
  { n: 5, t: "Producem", d: "Programare CNC → debitare laser → îndoire (dacă e necesar) → control dimensional." },
  { n: 6, t: "Ridici sau livrăm", d: "Strada Aviației 9, Iași — sau curier rapid în toată România." },
];

const faqs: FAQItem[] = [
  { q: "Acceptați piese fizice pentru inginerie inversă?", a: "Da. Aduceți sau trimiteți piesa uzată — o măsurăm, creăm fișierul de producție și executăm replica. Serviciu inclus fără cost adițional pentru piese simple." },
  { q: "Care este termenul de execuție pentru o piesă urgentă?", a: "Piesă simplă cu fișier DXF gata: aceeași zi, la confirmarea disponibilității. Standard: 1–3 zile lucrătoare. Contactați-ne direct pe WhatsApp pentru urgențe industriale." },
  { q: "Ce componente pentru benzi transportoare și conveioare puteți executa?", a: "Ghidaje laterale, suporți de prindere, plăci de uzură, flanșe, console, carcase de protecție, plăci de montaj motoare — orice componentă structurală sau de ghidaj care poate fi executată din tablă." },
  { q: "Faceți și găuri filetate, sudură sau alte operații?", a: "Ne specializăm în debitare laser CNC și îndoire abkant. Pentru filetare, sudură sau tratamente de suprafață, colaborăm cu parteneri locali și putem coordona procesul complet la cerere." },
  { q: "Există cantitate minimă de comandă?", a: "Nu. Acceptăm și o singură piesă. Valoare minimă facturabilă: 50 RON + TVA (~€10)." },
  { q: "Puteți livra piese de urgență pentru o linie de producție oprită?", a: "Da. Clienții industriali cu urgențe au prioritate în programul de producție. Contactați-ne imediat pe WhatsApp cu foto și dimensiunile piesei — răspundem în câteva minute." },
  { q: "Cum se calculează prețul pentru o piesă unică față de o serie?", a: "Prețul include material, timp de tăiere și programare CNC. La piese unice, costul de programare se repartizează pe o singură bucată — piesele simple rămân accesibile. Pentru serii repetitive, prețul pe bucată scade semnificativ." },
];

const breadcrumbs = [
  { label: "Acasă", href: "/" },
  { label: "Servicii", href: "/servicii" },
  { label: "Piese Industriale la Comandă" },
];

export default function PieseIndustrialePage() {
  return (
    <>
      <ServiceHero
        eyebrow="Serviciu · Piese Industriale"
        title="Piese industriale la comandă — Iași"
        intro="Bandă transportoare oprită? Piesă uzată fără stoc? SOZO PROJECT execută piese de schimb și componente industriale din tablă CNC în Iași — de la 1 bucată, cu sau fără fișier. Aduceți piesa veche, o replicăm. Ofertă în aceeași zi."
        badges={["De la 1 buc", "Inginerie inversă", "±0.05mm", "Urgențe"]}
        image={images.portfolioIndustrialPart}
        imageAlt="Piesă industrială din tablă oțel executată prin debitare laser CNC"
        crumbs={breadcrumbs}
      />

      {/* Applications */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Aplicații"
            heading="Pentru ce echipamente lucrăm"
            subheading="Orice componentă structurală sau de ghidaj executabilă din tablă — o facem."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((a) => (
              <div key={a.t} className="bg-bg-elevated border border-border rounded-lg p-6 hover:border-border-strong transition-colors">
                <h4 className="text-text-primary font-semibold text-base mb-2">{a.t}</h4>
                <p className="text-text-secondary text-sm">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-24 bg-bg-elevated border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader eyebrow="Beneficii" heading="De ce tablă CNC față de turnătorie sau piesă standard" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="bg-bg-base border border-border rounded-lg p-7">
                  <div className="w-12 h-12 rounded bg-accent-muted text-accent flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-h4 text-text-primary mb-3">{b.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader eyebrow="Materiale" heading="Materiale disponibile și grosimi maxime" />
          <div className="bg-bg-elevated border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-bg-surface">
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Material</th>
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Grosime max</th>
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Toleranță</th>
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Aplicație tipică</th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map((m) => (
                    <tr key={m.name} className="border-b border-border-subtle last:border-0">
                      <td className="text-text-primary py-4 px-6 font-medium">{m.name}</td>
                      <td className="font-mono text-tech py-4 px-6">{m.thick}</td>
                      <td className="font-mono text-text-primary py-4 px-6">{m.tol}</td>
                      <td className="text-text-secondary py-4 px-6">{m.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Debitare laser CO2 CNC — Mitsubishi ML3015EX 4.5kW",
              "Îndoire abkant CNC — presă 160T, 4 axe",
              "Precizie pozițională ±0.05mm/500mm",
              "Suprafață curată, fără slag, fără bavuri",
            ].map((f) => (
              <div key={f} className="flex items-start gap-3 bg-bg-elevated border border-border rounded-lg px-5 py-4">
                <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-text-secondary text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-24 bg-bg-elevated border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader eyebrow="Proces" heading="De la piesă uzată la componentă nouă" />
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {process.map((step) => (
              <div key={step.n} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-11 h-11 rounded-full border border-accent text-accent font-mono font-medium flex items-center justify-center">
                  {step.n}
                </div>
                <div>
                  <h4 className="text-h4 text-text-primary mb-2">{step.t}</h4>
                  <p className="text-text-secondary leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader eyebrow="FAQ" heading="Întrebări frecvente — piese industriale" align="center" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CtaSection
        title="Piesă de schimb sau componentă industrială?"
        subtitle="Trimite foto sau fișier — ofertă în aceeași zi. Lucrăm și fără desen."
      />

      <ServiceSchema
        name="Piese Industriale la Comandă"
        description="Piese de schimb și componente industriale din tablă CNC în Iași. Benzi transportoare, conveioare, echipamente. Debitare laser CO2 + îndoire. De la 1 bucată."
        url={`${site.url}${URL_PATH}`}
        serviceType="Custom industrial parts fabrication"
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Acasă", href: "/" },
          { name: "Servicii", href: "/servicii" },
          { name: "Piese Industriale la Comandă", href: URL_PATH },
        ]}
      />
    </>
  );
}
