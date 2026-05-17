import type { Metadata } from "next";
import { Check, Layers, Ruler, Package, Repeat } from "lucide-react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { FAQAccordion, type FAQItem } from "@/components/ui/FAQAccordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

const URL_PATH = "/servicii/confectii-metalice";

export const metadata: Metadata = {
  title: "Confecții Metalice la Comandă Iași — Dulapuri, Rafturi, Structuri",
  description:
    "Confecții metalice la comandă în Iași: dulapuri metalice, rafturi industriale, structuri din tablă. Debitare laser CO2 + îndoire abkant CNC. De la 1 bucată, ofertă în aceeași zi. ☎ +40 732 034 386",
  alternates: {
    canonical: URL_PATH,
    languages: { "ro": URL_PATH, "x-default": URL_PATH },
  },
  openGraph: {
    title: "Confecții Metalice la Comandă Iași | SOZO PROJECT",
    description:
      "Dulapuri metalice, rafturi, structuri din tablă la comandă. Dimensiuni personalizate, de la 1 bucată.",
    url: `${site.url}${URL_PATH}`,
  },
};

const products = [
  { t: "Dulapuri metalice", d: "Dulapuri electrice, tablouri de distribuție, carcase tehnice pentru automatizări și echipamente" },
  { t: "Rafturi industriale", d: "Rafturi depozit la dimensiuni personalizate, console portante, sisteme de depozitare din oțel" },
  { t: "Structuri de susținere", d: "Cadre, suporți, console, grinzi ușoare din tablă pentru echipamente sau instalații" },
  { t: "Panouri și carcase", d: "Panouri de acces, capace de protecție, uși metalice, carcase pentru mașini și utilaje" },
  { t: "Mobilier industrial", d: "Mese de lucru, bancuri mecanice, suporți echipamente, stații de lucru personalizate" },
  { t: "Produse personalizate", d: "Orice produs definit de client din tablă — dacă poate fi desenat, îl putem executa" },
];

const materials = [
  { name: "Oțel carbon (OL37, OL52)", thick: "12 mm", note: "Standard pentru dulapuri, rafturi, structuri — rezistență ridicată, sudabil, vopsibil" },
  { name: "Inox 304", thick: "8 mm", note: "Industria alimentară, spații umede, aplicații unde aspectul contează" },
  { name: "Inox 316", thick: "8 mm", note: "Medii cu coroziune chimică sau saramură — rezistență superioară" },
  { name: "Aluminiu 5052 / 6061", thick: "10 mm", note: "Carcase ușoare, echipamente portabile, structuri cu cerință de masă redusă" },
];

const benefits = [
  { icon: Ruler, title: "Dimensiuni exact ca la tine", text: "Nu adaptezi spațiul la produs. Executăm la dimensiunile exacte din desen sau schiță — fără compromisuri constructive." },
  { icon: Layers, title: "Debitare + îndoire în una", text: "Tăiem și îndoim în aceeași comandă, fără transport intermediar. Mai rapid, mai ieftin, un singur punct de contact." },
  { icon: Package, title: "De la 1 bucată", text: "Fără cantitate minimă. Un singur dulap sau un singur raft — același proces, același nivel de calitate." },
  { icon: Repeat, title: "Repetabil pe serii", text: "Odată ce ai aprobat prima piesă, seriile ulterioare sunt identice. Back gauge CNC programabil asigură repetabilitatea." },
];

const process = [
  { n: 1, t: "Trimiți desenul sau schița", d: "DXF, DWG, STEP, PDF cu cote sau schiță de mână. Acceptăm orice format care transmite dimensiunile și materialul." },
  { n: 2, t: "Primești oferta", d: "Fișier clar și produs standard: 2–4h. Produse complexe sau cu consultanță: 24–48h. Program L–S, 07:00–20:00." },
  { n: 3, t: "Consultanță înainte de producție", d: "Verificăm desenul și semnalăm orice problemă de fabricabilitate — grosimi, raze de îndoire, toleranțe." },
  { n: 4, t: "Confirmi comanda", d: "Acord pe preț, cantitate și termen. Avans sau credit pentru clienți recurenți." },
  { n: 5, t: "Producem", d: "Programare CNC → debitare laser → îndoire abkant → control dimensional și vizual." },
  { n: 6, t: "Ridici sau livrăm", d: "Strada Aviației 9, Iași — sau curier rapid în toată România." },
];

const faqs: FAQItem[] = [
  { q: "Faceți și finisare — vopsire, zincare, eloxare?", a: "Ne specializăm în debitare laser CO2 și îndoire abkant. Pentru vopsire, zincare la cald sau eloxare aluminiu, colaborăm cu parteneri locali verificați și putem coordona procesul complet la cerere." },
  { q: "Pot trimite o schiță de mână pentru ofertă inițială?", a: "Da. O fotografie clară a schiței cu dimensiunile principale, materialul și grosimea e suficientă pentru o ofertă orientativă. Convertim noi schița în fișier de producție după confirmare." },
  { q: "Care e grosimea maximă de tablă pentru un dulap metalic?", a: "Structura unui dulap se execută de obicei din tablă de 1.5–3 mm (pereți, uși) și 4–6 mm (cadru, talpă). Presa noastră de 160T îndoaie oțel până la 12 mm — mai mult decât suficient pentru orice dulap industrial." },
  { q: "Livrați în afara Iașului?", a: "Da, livrăm în toată România prin curier sau transport dedicat pentru piese mari. Costul de transport e calculat la comandă în funcție de dimensiuni și greutate." },
  { q: "Care e dimensiunea maximă a unui panou sau perete executat dintr-o singură bucată?", a: "Dimensiunea maximă a tablei pe care o procesăm e 3050 × 1525 mm. Pereți sau panouri mai mari se execută din mai multe bucăți cu îmbinare — specificați cerința și propunem soluția constructivă." },
  { q: "Puteți face decupaje pentru cabluri, prize, grile de ventilație?", a: "Da, orice decupaj sau gaură se definește în fișierul DXF și se taie laser cu precizie ±0.1 mm. Forme dreptunghiulare, circulare, ovale sau personalizate — nu există restricție de formă." },
];

const breadcrumbs = [
  { label: "Acasă", href: "/" },
  { label: "Servicii", href: "/servicii" },
  { label: "Confecții Metalice" },
];

export default function ConfectiiMetalicePage() {
  return (
    <>
      <ServiceHero
        eyebrow="Serviciu · Confecții Metalice"
        title="Confecții metalice la comandă — Iași"
        intro="SOZO PROJECT execută confecții metalice la comandă în Iași: dulapuri metalice, rafturi industriale, structuri și carcase din tablă. Tăiem și îndoim în aceeași comandă — de la 1 bucată, la dimensiunile exacte din desenul tău. Ofertă în aceeași zi."
        badges={["De la 1 buc", "Dimensiuni custom", "Laser + Abkant", "Iași"]}
        image={images.finishedParts}
        imageAlt="Confecții metalice la comandă — suporți și structuri din oțel executate CNC în Iași"
        crumbs={breadcrumbs}
      />

      {/* Products */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Produse"
            heading="Ce executăm la comandă"
            subheading="Dacă poate fi desenat și executat din tablă, îl facem — la dimensiunile tale, nu la standarde de catalog."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((p) => (
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
          <SectionHeader eyebrow="Beneficii" heading="De ce comandă la dimensiune față de produsul standard" />
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
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Grosime max îndoire</th>
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
              "Tablă maximă 3050 × 1525 mm",
              "Consultanță inclus — verificăm fișierul înainte de tăiere",
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
          <SectionHeader eyebrow="Proces" heading="De la schiță la produs finit" />
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
          <SectionHeader eyebrow="FAQ" heading="Întrebări frecvente — confecții metalice" align="center" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CtaSection
        title="Ai un dulap, raft sau structură de executat?"
        subtitle="Trimite schița sau fișierul — ofertă în aceeași zi. Lucrăm și de pe schiță de mână."
      />

      <ServiceSchema
        name="Confecții Metalice la Comandă"
        description="Confecții metalice la comandă în Iași: dulapuri metalice, rafturi industriale, structuri din tablă. Debitare laser CO2 + îndoire abkant CNC. De la 1 bucată."
        url={`${site.url}${URL_PATH}`}
        serviceType="Custom metal fabrication"
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Acasă", href: "/" },
          { name: "Servicii", href: "/servicii" },
          { name: "Confecții Metalice", href: URL_PATH },
        ]}
      />
    </>
  );
}
