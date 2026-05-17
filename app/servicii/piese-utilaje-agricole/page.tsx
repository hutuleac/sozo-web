import type { Metadata } from "next";
import { Check, Clock, Wrench, Cog, Shield } from "lucide-react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { FAQAccordion, type FAQItem } from "@/components/ui/FAQAccordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

const URL_PATH = "/servicii/piese-utilaje-agricole";

export const metadata: Metadata = {
  title: "Piese Utilaje Agricole la Comandă Iași — Tablă CNC, Piese de Schimb",
  description:
    "Piese de schimb și componente din tablă CNC pentru utilaje agricole în Iași și Moldova: combine, tractoare, semănători, irigații. Debitare laser + îndoire abkant. De la 1 bucată, inginerie inversă, urgențe prioritizate. ☎ +40 732 034 386",
  alternates: {
    canonical: URL_PATH,
    languages: { "ro": URL_PATH, "x-default": URL_PATH },
  },
  openGraph: {
    title: "Piese Utilaje Agricole la Comandă Iași | SOZO PROJECT",
    description:
      "Componente tablă CNC pentru utilaje agricole. Inginerie inversă inclusă. De la 1 bucată, urgențe în aceeași zi.",
    url: `${site.url}${URL_PATH}`,
  },
};

const applications = [
  { t: "Combine și echipamente de recoltare", d: "Carcase de protecție, deflectoare, palete transportor, ghidaje boabe, capace compartiment — orice componentă din tablă uzată sau lipsă" },
  { t: "Tractoare și utilaje autopropulsate", d: "Apărători roți, capace motor, panouri laterale, suporți echipamente montate, plăci de montaj" },
  { t: "Semănători și echipamente de lucrat solul", d: "Cutii de distribuție, scut protecție, suporți discuri, carcase transmisie, plăci de uzură" },
  { t: "Instalații de irigat și pompare", d: "Carcase pompe, suporți conducte, console de prindere, capace protecție motoare și panouri de comandă" },
  { t: "Remorcă și echipamente de transport", d: "Obloane, aripi de roată, protecții față/spate, console de prindere, podele din tablă striată" },
  { t: "Silozuri și echipamente de depozitare", d: "Piese de schimb pentru transportoare elicoidale, elevatoare cu cupe, instalații de uscare cereale" },
];

const benefits = [
  { icon: Clock, title: "Urgențe în sezon", text: "O combină oprită în recoltare costă mii de euro pe zi. Piesele simple cu fișier gata: aceeași zi. Inginerie inversă urgentă: 24–48h. Prioritizăm comenzile blocante de utilaj." },
  { icon: Wrench, title: "Inginerie inversă inclusă", text: "Nu aveți fișier? Aduceți piesa uzată sau ruginită. O măsurăm, creăm fișierul de producție și replicăm piesa. Serviciu inclus fără cost adițional pentru piese simple." },
  { icon: Cog, title: "De la 1 bucată", text: "Fără cantitate minimă. O singură piesă de schimb — acceptăm. Producătorul original cere lot minim de 50? La noi comandați exact câte aveți nevoie." },
  { icon: Shield, title: "Oțel rezistent la uzură", text: "Executăm și din oțeluri rezistente la uzură (Hardox 400/450, AR400) pentru piese expuse la uzură abrazivă — dinți grapă, plăci de uzură, lame." },
];

const materials = [
  { name: "Oțel carbon OL37 / OL52", thick: "20 mm", note: "Standard pentru structuri și carcase — rezistență mecanică bună, sudabil, disponibil imediat" },
  { name: "Oțel rezistent la uzură (AR/Hardox)", thick: "12 mm", note: "Plăci de uzură, lame, dinți — duritate 400–500 HB, durată de viață 3–5× față de OL" },
  { name: "Inox 304", thick: "10 mm", note: "Piese în contact cu produse alimentare sau în medii umede (instalații irigat, silozuri)" },
  { name: "Aluminiu 5052 / 6061", thick: "10 mm", note: "Capace și apărători ușoare — unde masa echipamentului contează" },
];

const process = [
  { n: 1, t: "Trimiți piesa sau fișierul", d: "DXF / DWG / STEP via WhatsApp, email sau formularul de ofertă. Sau aduceți direct piesa fizică — o măsurăm și creăm fișierul." },
  { n: 2, t: "Primești oferta", d: "Fișier clar: 2–4h. Inginerie inversă sau piese complexe: 24–48h. Urgențe de sezon: răspundem în câteva minute pe WhatsApp." },
  { n: 3, t: "Verificare fabricabilitate", d: "Controlăm fișierul și semnalăm orice problemă înainte de tăiere — grosimi, raze, toleranțe." },
  { n: 4, t: "Confirmi comanda", d: "Acord pe preț, cantitate și termen. Avans sau credit pentru clienți recurenți." },
  { n: 5, t: "Producem", d: "Debitare laser CNC → îndoire abkant (dacă e necesar) → control dimensional. Piesele ies debavurate, gata de asamblare sau sudură." },
  { n: 6, t: "Ridici sau livrăm", d: "Strada Aurel Vlaicu 77, Iași — sau curier rapid în toată Moldova și România." },
];

const faqs: FAQItem[] = [
  { q: "Puteți replica o piesă uzată fără fișier tehnic?", a: "Da. Aduceți sau trimiteți piesa uzată — chiar și dacă e deformată sau ruginită. O măsurăm cu instrumentele de precizie, creăm fișierul de producție și executăm replica. Serviciu inclus fără cost adițional pentru piese simple (forme 2D)." },
  { q: "Cât durează execuția unei piese urgente în sezon?", a: "Piesă simplă cu fișier DXF gata: aceeași zi, la confirmarea disponibilității. Inginerie inversă piesă simplă: 24h. Inginerie inversă piesă complexă: 48h. Contactați-ne direct pe WhatsApp cu foto și dimensiunile — răspundem în câteva minute." },
  { q: "Faceți și piese din oțel rezistent la uzură (Hardox, AR400)?", a: "Da, executăm din oțeluri rezistente la uzură cu duritate 400–500 HB. Potrivit pentru plăci de uzură, lame, dinți de grapă și orice componentă expusă la uzură abrazivă. Specificați cerința la comandă." },
  { q: "Acceptați comenzi de o singură piesă?", a: "Da, fără cantitate minimă. Valoare minimă facturabilă: 50 RON + TVA (~€10). Nu există lot minim." },
  { q: "Faceți și găuri filetate, sudură sau tratamente termice?", a: "Ne specializăm în debitare laser CNC și îndoire abkant. Pentru filetare, sudură, tratamente termice sau acoperiri anticorozive, colaborăm cu parteneri locali din Iași și putem coordona procesul complet la cerere." },
  { q: "Livrați și în localitățile din județul Iași sau Moldova?", a: "Da, livrăm prin curier rapid în toată Moldova și România. Pentru comenzi urgente mari, organizăm transport dedicat. Ridicarea din atelier (Strada Aurel Vlaicu 77, Iași) e disponibilă oricând în program." },
  { q: "Ce format de fișier trebuie să trimit?", a: "DXF sau DWG (recomandat), STEP, IGES, PDF cu cote sau schiță foto cu dimensiunile principale. Dacă nu aveți fișier digital, o fotografie clară a piesei cu cotele scrise manual e suficientă pentru ofertă orientativă." },
];

const breadcrumbs = [
  { label: "Acasă", href: "/" },
  { label: "Servicii", href: "/servicii" },
  { label: "Piese Utilaje Agricole" },
];

export default function PieseUtilageAgricolePage() {
  return (
    <>
      <ServiceHero
        eyebrow="Serviciu · Utilaje Agricole"
        title="Piese utilaje agricole la comandă — Iași & Moldova"
        intro="SOZO PROJECT execută piese de schimb și componente din tablă CNC pentru utilaje agricole în Iași și toată Moldova. Combine oprite, tractoare, semănători, instalații de irigat — aduceți piesa uzată sau trimiteți fișierul, replicăm rapid. De la 1 bucată, urgențe prioritizate în sezon."
        badges={["Inginerie inversă", "Urgențe aceeași zi", "De la 1 buc", "Moldova"]}
        image={images.portfolioIndustrialPart}
        imageAlt="Piesă din tablă oțel executată prin debitare laser CNC — componentă utilaj agricol la comandă Iași"
        crumbs={breadcrumbs}
      />

      {/* Applications */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Aplicații"
            heading="Pentru ce utilaje și echipamente lucrăm"
            subheading="Orice componentă structurală sau de protecție executabilă din tablă — o facem, cu sau fără fișier."
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
          <SectionHeader eyebrow="Beneficii" heading="De ce tablă CNC față de piesă originală sau turnătorie" />
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
          <SectionHeader eyebrow="Materiale" heading="Materiale disponibile" />
          <div className="bg-bg-elevated border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-bg-surface">
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Material</th>
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Grosime max</th>
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Aplicație tipică</th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map((m) => (
                    <tr key={m.name} className="border-b border-border-subtle last:border-0">
                      <td className="text-text-primary py-4 px-6 font-medium">{m.name}</td>
                      <td className="font-mono text-tech py-4 px-6">{m.thick}</td>
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
              "Îndoire abkant CNC — presă 160T, toleranță ±0.1°",
              "Precizie ±0.05mm — piese identice de la prima bucată",
              "Inginerie inversă inclusă pentru piese fără fișier",
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
          <SectionHeader eyebrow="Proces" heading="De la piesă uzată la componentă nouă — rapid" />
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
          <SectionHeader eyebrow="FAQ" heading="Întrebări frecvente — piese utilaje agricole" align="center" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CtaSection
        title="Utilaj oprit? Piesă uzată fără stoc?"
        subtitle="Trimite foto pe WhatsApp — răspundem în câteva minute. Urgențele agricole au prioritate."
      />

      <ServiceSchema
        name="Piese Utilaje Agricole la Comandă"
        description="Piese de schimb și componente din tablă CNC pentru utilaje agricole în Iași și Moldova. Combine, tractoare, semănători, instalații irigat. Inginerie inversă inclusă, de la 1 bucată."
        url={`${site.url}${URL_PATH}`}
        serviceType="Custom agricultural equipment parts fabrication"
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Acasă", href: "/" },
          { name: "Servicii", href: "/servicii" },
          { name: "Piese Utilaje Agricole", href: URL_PATH },
        ]}
      />
    </>
  );
}
