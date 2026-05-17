import type { Metadata } from "next";
import { Check, Ruler, Layers, Package, Pen } from "lucide-react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { FAQAccordion, type FAQItem } from "@/components/ui/FAQAccordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

const URL_PATH = "/servicii/balustrade-scari-inox";

export const metadata: Metadata = {
  title: "Balustrade și Scări Inox la Comandă Iași — Tablă CNC, Panouri, Profile",
  description:
    "Componente pentru balustrade și scări din inox, oțel și Corten la comandă în Iași: panouri infill tăiate laser, profile tablă îndoite, mână curentă plată, trepte din tablă. Orice dimensiune, de la 1 bucată. ☎ +40 732 034 386",
  alternates: {
    canonical: URL_PATH,
    languages: { "ro": URL_PATH, "x-default": URL_PATH },
  },
  openGraph: {
    title: "Balustrade și Scări Inox la Comandă Iași | SOZO PROJECT",
    description:
      "Panouri infill, profile tablă, mână curentă și trepte din inox, oțel și Corten. Tăiere laser + îndoire CNC, dimensiuni exacte, de la 1 bucată.",
    url: `${site.url}${URL_PATH}`,
  },
};

const applications = [
  { t: "Panouri infill balustradă", d: "Panouri din tablă perforată, laser cut decorativ sau plină pentru umplerea cadrului de balustradă — orice pattern DXF, orice dimensiune" },
  { t: "Profile tablă pentru balustradă", d: "Profile U, L sau custom îndoite din tablă pentru cadrul structural al balustradei — repetabilitate CNC pentru serii identice" },
  { t: "Mână curentă plată (flat bar)", d: "Benzi plate din inox sau oțel îndoite la curbura scării — alternativă modernă la profilele rotunde, aspect minimal" },
  { t: "Trepte și podeste din tablă", d: "Trepte din tablă striată sau perforată pentru scări industriale, exterioare sau de acces tehnic — rezistente la alunecare" },
  { t: "Panouri parapet terasă", d: "Panouri de parapet din tablă pentru terase, balcoane și acoperișuri — Corten, inox sau oțel vopsit, la dimensiunile exacte din proiect" },
  { t: "Protecții și borduri scări", d: "Borduri laterale, protecții frontale trepte, elemente de acoperire pentru structura metalică a scărilor" },
];

const materials = [
  { name: "Inox 304", finish: "Periat / satinat / lustruit", use: "Scări interioare, balustrade rezidențiale și comerciale de interior", note: "Standard premium fără întreținere" },
  { name: "Inox 316", finish: "Periat / satinat", use: "Exterior marin, piscine, zone cu umiditate ridicată sau coroziune", note: "Rezistență superioară în exterior agresiv" },
  { name: "Oțel carbon (OL37)", finish: "Zincare + vopsire pulbere RAL", use: "Scări industriale, balustrade exterioare rezidențiale", note: "Raport optim preț/durabilitate" },
  { name: "Oțel Corten (S355J2W)", finish: "Patinat natural (fără finisaj)", use: "Balustrade exterioare, parapeți terasă, design contemporan", note: "30–50 ani fără întreținere" },
  { name: "Aluminiu 5052 / 6061", finish: "Eloxat sau vopsit pulbere", use: "Porți batante, balustrade ușoare, construcții cu cerință de masă redusă", note: "Greutate redusă, rezistent la coroziune" },
];

const benefits = [
  { icon: Ruler, title: "Dimensiuni exact din proiect", text: "Fiecare panou sau profil se taie la cotele din fișierul tău — fără adaptări pe șantier, fără pierderi de material." },
  { icon: Pen, title: "Orice pattern DXF/AI", text: "Perforații geometrice, motive decorative, logo, litere — dacă e în fișier, îl tăiem. Panourile infill devin element de design, nu doar umplutură." },
  { icon: Layers, title: "Laser + îndoire în una", text: "Tăiem și îndoim în aceeași comandă. Profile, cadre, mâini curente plate — fără transport intermediar, un singur punct de contact." },
  { icon: Package, title: "De la 1 bucată", text: "Înlocuiești un panou spart sau completezi o comandă cu o singură piesă lipsă — fără lot minim, la prețul piesei." },
];

const process = [
  { n: 1, t: "Trimiți planul sau fișierul", d: "DXF, DWG, PDF cu cote sau schiță cu dimensiunile. Specificați materialul, grosimea și finisajul dorit." },
  { n: 2, t: "Primești oferta", d: "Fișier clar și dimensiuni standard: 2–4h. Proiecte cu consultanță sau mai multe tipodimensiuni: 24h. Program L–S, 07:00–20:00." },
  { n: 3, t: "Verificare fișier", d: "Controlăm fabricabilitatea — raze minime de îndoire, grosimi compatibile, contururi închise. Semnalăm orice problemă înainte de tăiere." },
  { n: 4, t: "Confirmi comanda", d: "Acord pe preț, cantitate, termen și finisaj. Avans sau credit pentru clienți recurenți." },
  { n: 5, t: "Producem", d: "Debitare laser CNC → îndoire abkant (pentru profile) → control dimensional. Piesele ies debavurate, gata de asamblare sau finisare." },
  { n: 6, t: "Ridici sau livrăm", d: "Strada Aurel Vlaicu 77, Iași — sau curier în toată România. Piesele din inox sunt ambalate protectiv." },
];

const faqs: FAQItem[] = [
  { q: "Faceți balustrade complete cu montaj sau doar componentele?", a: "Executăm componentele din tablă: panouri infill, profile, mâini curente plate, trepte. Sudura de asamblare și montajul pe șantier nu sunt în portofoliul nostru direct, dar colaborăm cu echipe specializate din Iași și putem coordona la cerere pentru un produs gata de instalare." },
  { q: "Ce grosime de inox recomandați pentru panouri de balustradă?", a: "Panouri infill fără rol structural: 1.5–2 mm inox 304. Panouri cu rol structural parțial sau expuse la vânt pe înălțime: 2–3 mm. Profile portante: 3–5 mm în funcție de deschidere. Dacă aveți calculul de rezistență, îl respectăm; dacă nu, recomandăm și justificăm grosimea." },
  { q: "Puteți tăia panouri cu pattern decorativ pentru o balustradă de design?", a: "Da. Orice pattern vectorial — geometric, organic, cu motive florale, text sau logo — se taie cu laserul la precizie ±0.1mm. Trimiteți fișierul DXF sau AI și verificăm fabricabilitatea gratuit înainte de ofertă." },
  { q: "Care e dimensiunea maximă a unui panou dintr-o singură bucată?", a: "3050 × 1525 mm — dimensiunea maximă a tablei procesate. Panouri mai mari se execută din bucăți cu îmbinare — specificați dimensiunile și propunem soluția." },
  { q: "Faceți și finisaj periat sau lustruit pe inox?", a: "Inoxul iese din laser cu margine curată. Finisajul periat (satinat Ra 0.8–1.6μm) sau lustruit oglindă se realizează de parteneri locali verificați din Iași — coordonăm la cerere, primiți piesa gata de montaj." },
  { q: "Pot comanda o singură piesă de înlocuire pentru o balustradă existentă?", a: "Da, fără cantitate minimă. Trimiteți dimensiunile sau fișierul panoului/profilului de înlocuit — tăiem exact același produs. Valoare minimă facturabilă: 50 RON + TVA." },
  { q: "Livrați și în afara Iașului?", a: "Da, livrăm în toată România prin curier sau transport dedicat pentru piese mari. Piesele din inox sunt ambalate cu folie de protecție pentru suprafața finisată." },
];

const breadcrumbs = [
  { label: "Acasă", href: "/" },
  { label: "Servicii", href: "/servicii" },
  { label: "Balustrade și Scări Inox" },
];

export default function BalustradeScariPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Serviciu · Balustrade & Scări"
        title="Balustrade și scări inox la comandă — Iași"
        intro="SOZO PROJECT execută componente pentru balustrade și scări din inox, oțel și Corten la comandă în Iași: panouri infill tăiate laser, profile tablă îndoite CNC, mâini curente plate și trepte din tablă. Orice dimensiune, orice pattern, de la 1 bucată. Ofertă în aceeași zi."
        badges={["Inox · Oțel · Corten", "Orice pattern DXF", "De la 1 buc", "Iași"]}
        image={images.portfolioPerforated}
        imageAlt="Panouri perforate din tablă inox tăiate laser CNC — componente pentru balustrade la comandă Iași"
        crumbs={breadcrumbs}
      />

      {/* Applications */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Componente"
            heading="Ce executăm pentru balustrade și scări"
            subheading="Componente din tablă pentru orice sistem de balustradă — rezidențial, comercial sau industrial."
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
          <SectionHeader eyebrow="Beneficii" heading="De ce componente tăiate laser față de produse standard" />
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
          <SectionHeader eyebrow="Materiale" heading="Materiale disponibile pentru balustrade și scări" />
          <div className="bg-bg-elevated border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-bg-surface">
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Material</th>
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Finisaj tipic</th>
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Aplicație recomandată</th>
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Notă</th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map((m) => (
                    <tr key={m.name} className="border-b border-border-subtle last:border-0">
                      <td className="text-text-primary py-4 px-6 font-medium">{m.name}</td>
                      <td className="text-text-secondary py-4 px-6">{m.finish}</td>
                      <td className="text-text-secondary py-4 px-6">{m.use}</td>
                      <td className="font-mono text-tech py-4 px-6 text-xs">{m.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Debitare laser CO2 CNC — toleranță ±0.05mm pe contur",
              "Îndoire abkant CNC — repetabilitate ±0.1°, serii identice",
              "Tablă max 3050 × 1525 mm dintr-o singură bucată",
              "Gaz N₂ pe inox — margine curată, fără oxidare",
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
          <SectionHeader eyebrow="Proces" heading="De la plan la componentă gata de asamblare" />
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
          <SectionHeader eyebrow="FAQ" heading="Întrebări frecvente — balustrade și scări" align="center" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CtaSection
        title="Ai un proiect de balustradă sau scară?"
        subtitle="Trimite planul sau fișierul DXF — ofertă în aceeași zi. Lucrăm și de pe schiță cu cote."
      />

      <ServiceSchema
        name="Balustrade și Scări Inox la Comandă"
        description="Componente pentru balustrade și scări din inox, oțel și Corten la comandă în Iași. Panouri infill tăiate laser, profile îndoite CNC, mâini curente plate, trepte din tablă. De la 1 bucată."
        url={`${site.url}${URL_PATH}`}
        serviceType="Custom stainless steel railing and staircase components"
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Acasă", href: "/" },
          { name: "Servicii", href: "/servicii" },
          { name: "Balustrade și Scări Inox", href: URL_PATH },
        ]}
      />
    </>
  );
}
