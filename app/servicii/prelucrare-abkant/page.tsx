import type { Metadata } from "next";
import { Check, CornerUpRight, Boxes, Ruler, Repeat } from "lucide-react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { FAQAccordion, type FAQItem } from "@/components/ui/FAQAccordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

const URL_PATH = "/servicii/prelucrare-abkant";

export const metadata: Metadata = {
  title: "Prelucrare Abkant CNC Iași — Îndoire Tablă Precizie",
  description:
    "Servicii prelucrare abkant CNC în Iași. Presă 160T, 4 axe, oțel/inox/aluminiu. Toleranță ±0.1°. Serii mici, consultanță inclusă. ☎ +40 732 034 386",
  alternates: {
    canonical: URL_PATH,
    languages: { "ro": URL_PATH, "en": "/en/services/press-brake", "x-default": URL_PATH },
  },
  openGraph: {
    title: "Prelucrare Abkant CNC Iași | SOZO PROJECT",
    description:
      "Presă 160T, 4 axe CNC. Profile complexe cu toleranță ±0.1° din prima.",
    url: `${site.url}${URL_PATH}`,
  },
};

const materials = [
  { name: "Oțel carbon", min: "0.5 mm", max: "12 mm", radius: "1× grosimea" },
  { name: "Inox 304/316", min: "0.5 mm", max: "8 mm", radius: "2× grosimea" },
  { name: "Aluminiu", min: "0.5 mm", max: "10 mm", radius: "1× grosimea" },
];

const equipmentSpecs = [
  { k: "Tip", v: "CNC Hidraulic" },
  { k: "Capacitate", v: "160 Ton" },
  { k: "Axe", v: "4-axis CNC" },
  { k: "Repetabilitate unghi", v: "±0.1°" },
  { k: "Back gauge", v: "CNC programabil" },
  { k: "Tooling", v: "V-die · Radius" },
];

const profiles = [
  { t: "Profil L", d: "Corniere simple, console, suporți" },
  { t: "Profil U / C", d: "Ghidaje, rame, carcase" },
  { t: "Profil Z", d: "Plăci de prindere, structuri de susținere" },
  { t: "Hat profile", d: "Tablouri electrice, elemente de rigidizare" },
  { t: "Cutii", d: "Carcase metalice cu mai multe îndoiri" },
  { t: "Multi-bend", d: "Profile complexe cu 3+ îndoiri pe aceeași piesă" },
];

const benefits = [
  { icon: CornerUpRight, title: "Unghiuri 0–180°", text: "Orice unghi din specificație, repetabilitate ±0.1° critic pentru serii." },
  { icon: Boxes, title: "Profile complexe", text: "U, Z, L, hat, cutii, multi-bend. Lucrăm și piese cu 3+ îndoiri pe aceeași comandă." },
  { icon: Ruler, title: "Back gauge CNC", text: "Poziționare automată — fiecare piesă din serie e identică, nu doar prima." },
  { icon: Repeat, title: "Serii mici", text: "De la 1 bucată. Specializați tocmai în loturi mici de complexitate ridicată." },
];

const process = [
  { n: 1, t: "Trimiți fișierul sau schița", d: "Cu unghiul și dimensiunile clare. Acceptăm DXF, DWG, STEP, PDF cu cote." },
  { n: 2, t: "Primești oferta", d: "Fișier pregătit și specificații clare: de obicei 2–4h. Proiecte complexe sau cu consultanță: 24–48h. Program L–S, 07:00–20:00." },
  { n: 3, t: "Confirmi", d: "Acord pe preț, cantitate și termen." },
  { n: 4, t: "Producem", d: "Programare CNC → debitare (dacă e cazul) → îndoire → control unghi/dimensiune." },
  { n: 5, t: "Ridici sau livrăm", d: "Sediul Strada Aviației 9, Iași — sau curier rapid în toată România." },
];

const faqs: FAQItem[] = [
  { q: "Ce grosimi pot fi îndoite?", a: "Oțel carbon: până la 12mm. Inox: până la 8mm. Aluminiu: până la 10mm — cu presa noastră de 160T." },
  { q: "Care este raza minimă de îndoire?", a: "Depinde de material și grosime. Regulă generală: raza minimă = 1× grosimea materialului pentru oțel carbon, 2× pentru inox." },
  { q: "Lucrați și cu serii de 5–10 bucăți?", a: "Absolut. Suntem specializați tocmai în serii mici de complexitate ridicată. Nu avem limită minimă de bucăți." },
  { q: "Puteți îndoi și piesele tăiate de voi cu laserul?", a: "Da, și acesta este serviciul complet cel mai eficient: tăiem și îndoim în cadrul aceleiași comenzi, fără costuri de transport intermediare." },
  { q: "Care este toleranța la îndoire?", a: "Repetabilitate unghiulară ±0.1° (precizie). Toleranță dimensională ±0.1mm pentru cote critice, ±0.3mm standard." },
  { q: "Cum primesc oferta?", a: "Trimiți fișierul sau schița pe WhatsApp, email sau formularul de ofertă. Fișier clar și piesă standard: de obicei 2–4h. Proiecte cu consultanță sau iterații: 24–48h. Program L–S, 07:00–20:00." },
];

const breadcrumbs = [
  { label: "Acasă", href: "/" },
  { label: "Servicii", href: "/servicii" },
  { label: "Prelucrare Abkant CNC" },
];

export default function PrelucrareAbkantPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Serviciu · Prelucrare Abkant CNC"
        title="Prelucrare Abkant CNC în Iași"
        intro="SOZO PROJECT oferă servicii de prelucrare abkant CNC în Iași cu presă hidraulică de 160T, 4 axe CNC. Îndoim oțel carbon până la 12mm, inox până la 8mm și aluminiu până la 10mm, cu repetabilitate unghiulară de ±0.1°. Acceptăm serii mici și piese complexe cu mai multe îndoiri."
        badges={["Presă 160T", "4 axe CNC", "±0.1°", "Multi-bend"]}
        image={images.pressBrake}
        imageAlt="Presă abkant CNC îndoind tablă oțel într-un atelier de prelucrare metalică"
        crumbs={breadcrumbs}
      />

      {/* Equipment */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Echipament"
                heading="Presă Abkant 160T CNC"
                subheading="Presa hidraulică CNC cu 4 axe permite îndoiri precise pe profile complexe — nu doar drepte simple."
              />
              <ul className="space-y-3">
                {[
                  "Îndoire la orice unghi de la 0° la 180°",
                  "Profile complexe: U, Z, L, hat, cutii",
                  "Repetabilitate ±0.1° — esențial pentru serii",
                  "Back gauge CNC programabil — poziționare automată",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-text-primary">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-bg-elevated border border-border rounded-lg p-8">
              <div className="text-accent font-mono text-xs uppercase tracking-widest mb-4">Specificații</div>
              <dl className="divide-y divide-border-subtle">
                {equipmentSpecs.map((s) => (
                  <div key={s.k} className="flex justify-between py-3 text-sm">
                    <dt className="text-text-secondary">{s.k}</dt>
                    <dd className="font-mono text-tech">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 md:py-24 bg-bg-elevated border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader eyebrow="Materiale & grosimi" heading="Ce îndoim și până la ce grosime" />
          <div className="bg-bg-base border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-bg-surface">
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Material</th>
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Min</th>
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Max</th>
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Raza minimă</th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map((m) => (
                    <tr key={m.name} className="border-b border-border-subtle last:border-0">
                      <td className="text-text-primary py-4 px-6 font-medium">{m.name}</td>
                      <td className="font-mono text-text-primary py-4 px-6">{m.min}</td>
                      <td className="font-mono text-tech py-4 px-6">{m.max}</td>
                      <td className="font-mono text-text-primary py-4 px-6">{m.radius}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader eyebrow="Capabilități" heading="Profile tipice realizate" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {profiles.map((p) => (
              <div key={p.t} className="bg-bg-elevated border border-border rounded-lg p-6 hover:border-border-strong transition-colors">
                <h4 className="text-text-primary font-semibold text-base mb-2">{p.t}</h4>
                <p className="text-text-secondary text-sm">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-24 bg-bg-elevated border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader eyebrow="Beneficii" heading="Ce primești în plus față de presele simple" />
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

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader eyebrow="Proces" heading="Cum funcționează — comandă abkant" />
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
      <section className="py-20 md:py-28 bg-bg-elevated border-y border-border">
        <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader eyebrow="FAQ" heading="Întrebări frecvente — abkant CNC" align="center" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CtaSection
        title="Ai un desen sau o schiță?"
        subtitle="Ofertă în aceeași zi. Tăiem și îndoim în cadrul aceleiași comenzi."
      />

      <ServiceSchema
        name="Prelucrare Abkant CNC"
        description="Servicii prelucrare abkant CNC pe presă 160T cu 4 axe. Oțel până la 12mm, inox 8mm, aluminiu 10mm. Toleranță unghi ±0.1°."
        url={`${site.url}${URL_PATH}`}
        serviceType="CNC press brake bending"
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Acasă", href: "/" },
          { name: "Servicii", href: "/servicii" },
          { name: "Prelucrare Abkant CNC", href: URL_PATH },
        ]}
      />
    </>
  );
}
