import type { Metadata } from "next";
import { Check, Ruler, Layers, Zap, Shield } from "lucide-react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { FAQAccordion, type FAQItem } from "@/components/ui/FAQAccordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

const URL_PATH = "/servicii/tablouri-electrice-carcase";

export const metadata: Metadata = {
  title: "Tablouri Electrice și Carcase Metalice la Comandă Iași — Tablă CNC",
  description:
    "Carcase pentru tablouri electrice, dulapuri de distribuție și carcase tehnice la comandă în Iași. Tablă oțel debitată laser + îndoită abkant CNC. Dimensiuni personalizate, IP personalizat, de la 1 bucată. ☎ +40 732 034 386",
  alternates: {
    canonical: URL_PATH,
    languages: { "ro": URL_PATH, "x-default": URL_PATH },
  },
  openGraph: {
    title: "Tablouri Electrice și Carcase Metalice la Comandă Iași | SOZO PROJECT",
    description:
      "Carcase tablouri electrice, dulapuri distribuție și carcase tehnice din tablă CNC. Dimensiuni exacte, decupaje precise, de la 1 bucată.",
    url: `${site.url}${URL_PATH}`,
  },
};

const applications = [
  { t: "Carcase tablouri electrice", d: "Carcasă, cadru, uși și panouri frontale pentru tablouri de distribuție la dimensiunile exacte ale proiectului — fără adaptări la standarde de catalog" },
  { t: "Dulapuri de automatizare", d: "Dulapuri tehnice pentru PLC, invertoare, surse alimentare, terminale — cu decupaje precise pentru cabluri, ventilatoare, afișaje și butoane" },
  { t: "Carcase echipamente industriale", d: "Carcase de protecție pentru echipamente de măsură, control, acționare sau transmisie — forme standard sau complet personalizate" },
  { t: "Panouri și fronturi de comandă", d: "Panouri frontale cu decupaje pentru aparataj: comutatoare, butoane, prize, lămpi de semnalizare, afișaje HMI — tăiate la ±0.1mm" },
  { t: "Suporți și plăci DIN", d: "Plăci de montaj pentru șine DIN, suporți echipamente interioare, traverse și console de prindere — la dimensiunile exacte ale dulapului" },
  { t: "Carcase pentru automatizări agricole și industriale", d: "Incinte IP54/IP65 personalizate pentru medii cu praf, umezeală sau vibrații — grosime și decupaje adaptate cerințelor" },
];

const benefits = [
  { icon: Ruler, title: "Dimensiuni exact din proiect", text: "Nu te adaptezi la un dulap standard și nu tai din el. Definești dimensiunile, decupajele și găurile — tăiem exact asta, la toleranță ±0.1mm." },
  { icon: Zap, title: "Decupaje precise pentru aparataj", text: "Fiecare gaură, fantă de ventilație sau decupaj pentru cablu se definește în fișier și se taie laser la precizie ±0.1mm. Forme rotunde, dreptunghiulare sau personalizate — fără restricție." },
  { icon: Layers, title: "Laser + îndoire în una", text: "Tăiem și îndoim în aceeași comandă — carcasă completă cu față, spate, laterale și flanșe, dintr-un singur punct de contact." },
  { icon: Shield, title: "Compatibil cu orice finisaj", text: "Piesa iese din laser debavurată, gata de vopsire pulbere (orice RAL), zincare sau acoperiri anticorozive — coordonăm cu parteneri locali la cerere." },
];

const materials = [
  { name: "Tablă oțel carbon (DC01 / OL37)", thick: "3 mm", note: "Standard pentru tablouri electrice — rigid, sudabil, compatibil cu orice finisaj anticoroziv" },
  { name: "Tablă oțel zincată (DX51D)", thick: "2 mm", note: "Protecție anticorozivă integrată — potrivit pentru medii cu umiditate fără vopsire suplimentară" },
  { name: "Inox 304", thick: "3 mm", note: "Tablouri pentru industria alimentară, farmaceutică sau medii chimice ușoare" },
  { name: "Aluminiu 5052 / 6061", thick: "6 mm", note: "Carcase ușoare pentru echipamente portabile sau montate pe vehicule" },
];

const process = [
  { n: 1, t: "Trimiți fișierul sau dimensiunile", d: "DXF, DWG, STEP sau PDF cu cote. Specificați grosimea tablei, materialul și finisajul dorit. Dacă aveți doar dimensiunile exterioare și lista de decupaje, e suficient." },
  { n: 2, t: "Primești oferta", d: "Fișier clar: 2–4h. Proiecte complexe cu mai multe componente: 24h. Program L–S, 07:00–20:00." },
  { n: 3, t: "Verificare fișier", d: "Controlăm fișierul — raze de îndoire, grosimi, decupaje minime, contururi închise. Semnalăm orice problemă de fabricabilitate." },
  { n: 4, t: "Confirmi comanda", d: "Acord pe preț, cantitate și termen. Avans sau credit pentru clienți recurenți." },
  { n: 5, t: "Producem", d: "Debitare laser CNC → îndoire abkant (cadru și laterale) → control dimensional. Piesa iese debavurată, gata de asamblare sau finisare." },
  { n: 6, t: "Ridici sau livrăm", d: "Strada Aurel Vlaicu 77, Iași — sau curier rapid în toată România." },
];

const faqs: FAQItem[] = [
  { q: "Faceți carcase complete pentru tablouri sau doar componentele separate?", a: "Executăm atât componentele separate (față, spate, laterale, ușă, cadru), cât și carcasa asamblată din tablă prin îndoire — fără sudură. Structuri care necesită sudură le coordonăm cu un atelier partener din Iași la cerere." },
  { q: "Ce grosime de tablă recomandați pentru un tablou de distribuție?", a: "Standard industrie: 1.5–2mm pentru pereți și uși, 2–3mm pentru cadru și talpă. La dulapuri mari sau în medii cu vibrații, 2–3mm pentru toate panelele. Specificați dimensiunile și greutatea echipamentelor interne, recomandăm grosimea." },
  { q: "Puteți face decupaje pentru prize, butoane, HMI și ventilatoare?", a: "Da. Orice decupaj — dreptunghiular, circular, oval sau formă specială — se definește în fișierul DXF și se taie laser la precizie ±0.1mm. Nu există restricție de formă sau număr de decupaje." },
  { q: "Care e dimensiunea maximă a unui panou dintr-o singură bucată?", a: "3050 × 1525 mm — dimensiunea maximă a tablei procesate. Dulapuri mai mari se execută din mai multe panouri cu îmbinare — specificați cerința și propunem soluția." },
  { q: "Faceți și vopsire sau zincare după tăiere?", a: "Ne specializăm în debitare laser și îndoire abkant. Pentru vopsire pulbere (orice RAL), zincare la cald sau acoperiri epoxidice, colaborăm cu parteneri locali verificați din Iași — coordonăm la cerere, primiți dulapul gata de echipare." },
  { q: "Acceptați comenzi pentru un singur dulap de probă?", a: "Da, fără cantitate minimă. Executăm un singur prototip pentru validare. Valoare minimă facturabilă: 50 RON + TVA (~€10)." },
  { q: "Puteți replica un dulap existent dacă nu am fișier?", a: "Da. Aduceți dulapul existent sau măsurătorile complete — creăm fișierul de producție și executăm replica. Serviciu inclus pentru carcase simple." },
];

const breadcrumbs = [
  { label: "Acasă", href: "/" },
  { label: "Servicii", href: "/servicii" },
  { label: "Tablouri Electrice & Carcase" },
];

export default function TablouriElectriceCarcase() {
  return (
    <>
      <ServiceHero
        eyebrow="Serviciu · Tablouri & Carcase"
        title="Tablouri electrice și carcase metalice la comandă — Iași"
        intro="SOZO PROJECT execută carcase pentru tablouri electrice, dulapuri de automatizare și carcase tehnice din tablă CNC în Iași. Dimensiuni exacte, decupaje precise pentru orice aparataj, finisaj la alegere — de la 1 bucată, ofertă în aceeași zi."
        badges={["Dimensiuni custom", "Decupaje precise", "Laser + Abkant", "De la 1 buc"]}
        image={images.carcasaPerforata}
        imageAlt="Carcasă metalică perforată pentru tablou electric — tablă tăiată laser CNC la dimensiuni exacte, comandă Iași"
        crumbs={breadcrumbs}
      />

      {/* Applications */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Produse"
            heading="Ce executăm pentru tablouri și automatizări"
            subheading="Orice carcasă sau component tehnic definibil din tablă — la dimensiunile și decupajele exacte din proiect."
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
          <SectionHeader eyebrow="Beneficii" heading="De ce carcasă la comandă față de dulap standard din catalog" />
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
              "Debitare laser CO2 CNC — toleranță ±0.05mm",
              "Îndoire abkant CNC — repetabilitate ±0.1°",
              "Decupaje orice formă — fără restricție",
              "Tablă max 3050 × 1525 mm dintr-o bucată",
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
          <SectionHeader eyebrow="Proces" heading="De la fișier la carcasă gata de echipare" />
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
          <SectionHeader eyebrow="FAQ" heading="Întrebări frecvente — tablouri electrice & carcase" align="center" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CtaSection
        title="Ai un tablou sau carcasă de executat?"
        subtitle="Trimite dimensiunile și lista de decupaje — ofertă în aceeași zi."
      />

      <ServiceSchema
        name="Tablouri Electrice și Carcase Metalice la Comandă"
        description="Carcase pentru tablouri electrice, dulapuri de automatizare și carcase tehnice din tablă CNC în Iași. Dimensiuni personalizate, decupaje precise, de la 1 bucată."
        url={`${site.url}${URL_PATH}`}
        serviceType="Custom electrical enclosure and metal cabinet fabrication"
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Acasă", href: "/" },
          { name: "Servicii", href: "/servicii" },
          { name: "Tablouri Electrice & Carcase", href: URL_PATH },
        ]}
      />
    </>
  );
}
