import type { Metadata } from "next";
import { Check, Pen, Layers, Package, Maximize2 } from "lucide-react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { FAQAccordion, type FAQItem } from "@/components/ui/FAQAccordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

const URL_PATH = "/servicii/elemente-decorative-metal";

export const metadata: Metadata = {
  title: "Elemente Decorative din Metal la Comandă Iași — Garduri, Panouri, Litere",
  description:
    "Elemente decorative din metal la comandă în Iași: garduri Corten, panouri perforat, litere din tablă, semnalistică. Debitare laser CO2, orice pattern DXF/AI. De la 1 bucată, ofertă în aceeași zi. ☎ +40 732 034 386",
  alternates: {
    canonical: URL_PATH,
    languages: { "ro": URL_PATH, "x-default": URL_PATH },
  },
  openGraph: {
    title: "Elemente Decorative din Metal la Comandă Iași | SOZO PROJECT",
    description:
      "Garduri Corten, panouri perforat, litere din tablă, semnalistică. Orice pattern DXF/AI, de la 1 bucată.",
    url: `${site.url}${URL_PATH}`,
  },
};

const applications = [
  { t: "Garduri și panouri decorative", d: "Patternuri geometrice, florale sau custom pe tablă de 3–8mm. Corten, inox sau oțel zincat — pentru exterior sau interior." },
  { t: "Litere și cifre din tablă", d: "Numere de casă, litere voluminoase, logo-uri, inscripții. Oțel, inox sau aluminiu, la dimensiunile exacte din desen." },
  { t: "Panouri perforat și ecrane", d: "Separatoare de spații, fațade ventilate, ecrane decorative, grile. Orice pattern repetat sau unic dintr-un fișier vectorial." },
  { t: "Semnalistică și branding", d: "Firme (structura metalică), plăcuțe cu logo, inscripții pentru spații comerciale, HoReCa sau birouri." },
  { t: "Elemente de mobilier", d: "Picioare masă, rame metalice, suporți decorativi — oțel brut waxat, lustruit sau vopsit, la dimensiunile tale." },
  { t: "Elemente arhitecturale", d: "Balustrade, grile de ventilație decorative, capace de canal, orice element structural cu rol estetic definit în fișier." },
];

const materials = [
  { app: "Gard / panou exterior", mat: "Corten (S355J2W)", finish: "Patinat natural", note: "Rugină controlată, aspect industrial, durată >30 ani fără întreținere" },
  { app: "Gard / panou exterior zincat", mat: "Oțel carbon OL37", finish: "Zincare + vopsire pulbere", note: "Durată 15–25 ani, paleta RAL completă" },
  { app: "Panou interior sau mobilier", mat: "Oțel carbon OL37", finish: "Vopsire pulbere sau wax brut", note: "Aspect industrial, personalizabil pe culoare" },
  { app: "Litere / semnalistică premium", mat: "Inox 304 sau aluminiu", finish: "Periat, lustruit sau vopsit", note: "Rezistență la coroziune, aspect premium fără întreținere" },
  { app: "Panouri spații umede / HoReCa", mat: "Inox 304", finish: "Periat sau lustruit", note: "Fără vopsire suplimentară, ușor de curățat" },
  { app: "Aplicații cu greutate redusă", mat: "Aluminiu 5052", finish: "Eloxat sau vopsit pulbere", note: "De 3× mai ușor decât oțelul" },
];

const benefits = [
  { icon: Pen, title: "Orice formă vectorizabilă", text: "Dacă pattern-ul există ca fișier vectorial, îl tăiem. Nu suntem limitați la forme din catalog — geometric, organic, text, logo sau combinat." },
  { icon: Layers, title: "Compatibil cu orice software", text: "Illustrator, Corel, AutoCAD, Fusion 360, Inkscape. Nu trebuie să înveți un software nou — lucrăm cu fișierul pe care îl ai." },
  { icon: Package, title: "De la 1 bucată", text: "Fără cantitate minimă. Un singur panou, un singur element de semnalistică, o singură literă — același proces și același nivel de precizie." },
  { icon: Maximize2, title: "Până la 3050 × 1525mm", text: "Dimensiunea maximă a tablei dintr-o singură bucată. Panouri mai mari se execută cu îmbinare continuă — specificați dimensiunile totale." },
];

const process = [
  { n: 1, t: "Trimiți conceptul", d: "DXF, AI, SVG, PDF vectorial sau o schiță cu dimensiunile și materialul dorit. Dacă ai doar o idee, trimite și o referință vizuală." },
  { n: 2, t: "Verificăm fabricabilitatea", d: "Analizăm fișierul: contururi deschise, insule fără suport, spații prea mici — gratuit, înainte de ofertă. Îți spunem ce trebuie ajustat." },
  { n: 3, t: "Primești oferta", d: "Fișier clar: 2–4h. Proiecte cu consultanță sau materiale speciale: 24h. Program L–S, 07:00–20:00." },
  { n: 4, t: "Confirmi comanda", d: "Acord pe preț, material, finish și termen. Avans sau credit pentru clienți recurenți." },
  { n: 5, t: "Tăiem cu precizie ±0.1mm", d: "Mitsubishi ML3015EX CO2 4.5kW — muchii curate, fără slag, fără bavuri pe tablă debitată." },
  { n: 6, t: "Ridici sau livrăm", d: "Strada Aurel Vlaicu 77, Iași — sau curier rapid în toată România. Piesele sunt ambalate protejat." },
];

const faqs: FAQItem[] = [
  { q: "Acceptați fișiere Illustrator (AI) sau Corel (CDR) pentru garduri și panouri decorative?", a: "Da. Acceptăm AI, CDR, SVG și PDF vectorial. Exportați în DXF sau SVG la scară 1:1 în milimetri — dacă fișierul nu e imediat compatibil, îl ajustăm și confirmăm înainte de tăiere." },
  { q: "Care e dimensiunea maximă a unui panou decorativ dintr-o singură bucată?", a: "3050 × 1525 mm — dimensiunea maximă a tablei pe care o procesăm. Panouri sau garduri mai mari se execută din mai multe bucăți cu îmbinare — specificați dimensiunile finale și propunem soluția constructivă." },
  { q: "Faceți și găuri de prindere sau montaj?", a: "Da. Orice gaură, decupaj sau slot de prindere se definește în fișierul DXF și se taie laser cu precizie ±0.1mm. Formă circulară, dreptunghiulară, ovală sau personalizată — nu există restricție de formă." },
  { q: "Pot comanda un panou de probă înainte de comanda finală?", a: "Da. Executăm o probă pe un panou mai mic (300×300 sau 500×500mm) dacă nu ești sigur de densitatea patternului sau de aspectul materialului. Costul probei se deduce din comanda finală dacă continuați cu ea." },
  { q: "Litera 'O', 'B' sau 'D' se poate tăia fără să cadă insula interioară?", a: "Insulele interioare (golul din O, B, D, A, P) trebuie fie susținute cu microponți (bare fine care se șlefuiesc ulterior), fie integrate în design cu o bară de legătură vizibilă — stil stencil. Specificați preferința și propunem soluția." },
  { q: "Faceți și finisare după tăiere — vopsire, zincare, eloxare?", a: "Ne specializăm în debitare laser CNC. Pentru vopsire pulbere, zincare la cald sau eloxare aluminiu, colaborăm cu parteneri locali verificați și putem coordona procesul complet la cerere." },
];

const breadcrumbs = [
  { label: "Acasă", href: "/" },
  { label: "Servicii", href: "/servicii" },
  { label: "Elemente Decorative Metal" },
];

export default function ElementeDecorativePage() {
  return (
    <>
      <ServiceHero
        eyebrow="Serviciu · Elemente Decorative"
        title="Elemente decorative din metal la comandă — Iași"
        intro="SOZO PROJECT execută elemente decorative din metal la comandă în Iași: garduri Corten cu pattern custom, panouri perforat, litere și cifre din tablă, semnalistică pentru spații comerciale. Orice fișier vectorial — DXF, AI, SVG — tăiat cu precizie ±0.1mm. De la 1 bucată, ofertă în aceeași zi."
        badges={["Orice pattern DXF/AI", "Corten · Inox · Oțel", "De la 1 buc", "Iași"]}
        image={images.panouDecorativLaser}
        imageAlt="Panouri decorative din tablă tăiată laser — pattern organic pe fațadă exterioară, execuție CNC la comandă"
        crumbs={breadcrumbs}
      />

      {/* Applications */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Aplicații"
            heading="Ce executăm la comandă"
            subheading="De la garduri Corten la litere de semnalistică — orice element executabil din tablă, la dimensiunile și pattern-ul tău."
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
          <SectionHeader eyebrow="Avantaje" heading="De ce laser CO2 față de alte tehnologii" />
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
          <SectionHeader eyebrow="Materiale" heading="Materiale recomandate per aplicație" />
          <div className="bg-bg-elevated border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-bg-surface">
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Aplicație</th>
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Material</th>
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Finisaj</th>
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Observații</th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map((m) => (
                    <tr key={m.app} className="border-b border-border-subtle last:border-0">
                      <td className="text-text-primary py-4 px-6 font-medium">{m.app}</td>
                      <td className="font-mono text-tech py-4 px-6">{m.mat}</td>
                      <td className="text-text-secondary py-4 px-6">{m.finish}</td>
                      <td className="text-text-secondary py-4 px-6">{m.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8 bg-bg-elevated border border-border rounded-lg px-6 py-5">
            <p className="text-text-primary font-semibold text-sm mb-1">Ce este oțelul Corten?</p>
            <p className="text-text-secondary text-sm leading-relaxed">
              Oțelul Corten (denumire comercială pentru aliajele rezistente la intemperii, ex. S355J2W) e un oțel carbon cu adaos de cupru, crom și nichel care dezvoltă natural un strat protector de oxid stabil — "rugina controlată". Spre deosebire de oțelul moale care corodează în profunzime, stratul de oxid al Cortenului oprește coroziunea și se stabilizează în 6–18 luni de expunere la exterior. Rezultatul: aspect brut, industrial, fără nicio vopsire, cu durată de viață de 30–50 ani.
            </p>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Debitare laser CO2 CNC — toleranță ±0.1mm",
              "Format acceptat: DXF, AI, SVG, PDF vectorial",
              "Tablă max 3050 × 1525 mm dintr-o singură bucată",
              "Verificare fabricabilitate fișier — inclusă, fără cost",
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
          <SectionHeader eyebrow="Proces" heading="De la concept la element finit" />
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
          <SectionHeader eyebrow="FAQ" heading="Întrebări frecvente — elemente decorative metal" align="center" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CtaSection
        title="Ai un concept decorativ de executat în metal?"
        subtitle="Trimite fișierul sau schița — îți spunem dacă se poate executa și ofertă în aceeași zi."
      />

      <ServiceSchema
        name="Elemente Decorative din Metal la Comandă"
        description="Elemente decorative din metal la comandă în Iași: garduri Corten, panouri perforat, litere din tablă, semnalistică. Debitare laser CO2, orice pattern DXF/AI. De la 1 bucată."
        url={`${site.url}${URL_PATH}`}
        serviceType="Custom decorative metal fabrication"
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Acasă", href: "/" },
          { name: "Servicii", href: "/servicii" },
          { name: "Elemente Decorative Metal", href: URL_PATH },
        ]}
      />
    </>
  );
}
