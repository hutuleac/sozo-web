import type { Metadata } from "next";
import { Check, Shield, Droplets, Thermometer, Zap } from "lucide-react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { FAQAccordion, type FAQItem } from "@/components/ui/FAQAccordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

const URL_PATH = "/servicii/inox-industria-alimentara";

export const metadata: Metadata = {
  title: "Inox Industria Alimentară și HoReCa Iași — Tablă 304/316 la Comandă",
  description:
    "Tablă inox 304 și 316 tăiată laser CNC la comandă în Iași pentru industria alimentară și HoReCa: mese lucru inox, rafturi depozit, capace echipamente, tăvi, panouri pereți. De la 1 bucată, ofertă în aceeași zi. ☎ +40 732 034 386",
  alternates: {
    canonical: URL_PATH,
    languages: { "ro": URL_PATH, "x-default": URL_PATH },
  },
  openGraph: {
    title: "Inox Industria Alimentară și HoReCa Iași | SOZO PROJECT",
    description:
      "Tablă inox 304/316 debitat laser și îndoit la comandă. Mese lucru, rafturi, carcase echipamente pentru bucătărie profesională și procesare alimente.",
    url: `${site.url}${URL_PATH}`,
  },
};

const applications = [
  { t: "Mese de lucru inox", d: "Blaturi și structuri din inox 304 la dimensiunile exacte ale bucătăriei — fără compromisuri față de mobilierul standard" },
  { t: "Rafturi și console depozit", d: "Rafturi inox pentru spații frigorifice, depozite alimentare sau bucătării profesionale — rezistente la umiditate și dezinfectanți" },
  { t: "Capace și panouri echipamente", d: "Carcase, capace de protecție, panouri frontale și laterale pentru echipamente de procesare — tăiate laser cu precizie ±0.1mm" },
  { t: "Tăvi și recipiente", d: "Tăvi de colectare, recipiente auxiliare, funduri de utilaj — orice formă definită în fișier DXF, cu sau fără îndoire" },
  { t: "Panouri și placaje pereți", d: "Placaje inox pentru pereți în zone de gătit sau procesare — îmbinări precise, fără bavuri, ușor de igienizat" },
  { t: "Piese de schimb echipamente", d: "Componente inox pentru utilaje de procesare, ambalare sau depozitare — replici după piesa uzată sau după fișier" },
];

const grades = [
  {
    grade: "Inox 304 (EN 1.4301)",
    use: "Bucătării profesionale, HoReCa, depozite alimentare uscate sau umede",
    note: "Standard pentru industria alimentară generală — rezistă la acizi organici, detergenți uzuali, dezinfectanți pe bază de clor la concentrații normale",
    thick: "0.8–10 mm",
  },
  {
    grade: "Inox 316 (EN 1.4401)",
    use: "Procesare carne, pește, lactate, saramură, medii cu clor concentrat",
    note: "Adaos molibden (2–3%) — rezistență superioară la coroziune prin pitting în medii saline și clorurate. Alegerea pentru HACCP strict",
    thick: "0.8–10 mm",
  },
  {
    grade: "Inox 430 (EN 1.4016)",
    use: "Elemente decorative, panouri frontale, zone fără contact direct cu alimente",
    note: "Feromagnetic — mai ieftin, dar rezistență la coroziune inferioară. Nu e recomandat în medii umede permanente",
    thick: "0.5–6 mm",
  },
];

const benefits = [
  { icon: Shield, title: "Suprafață igienizabilă", text: "Tăierea laser produce margini nete, fără bavuri și fără crăpături unde se pot acumula bacterii. Suprafața inoxului nu necesită acoperiri suplimentare." },
  { icon: Droplets, title: "Rezistă la dezinfectanți", text: "Inox 304 și 316 rezistă la detergenți alcalini, acizi organici și dezinfectanți pe bază de clor în concentrațiile uzuale din industria alimentară." },
  { icon: Thermometer, title: "Stabil termic", text: "Inoxul nu se deformează la temperaturile uzuale de gătit sau sterilizare (până la 870°C pentru 304). Potrivit pentru medii cu abur și variații termice bruște." },
  { icon: Zap, title: "De la 1 bucată", text: "Fără cantitate minimă. O singură masă de lucru, un singur raft sau un singur capac de echipament — același proces, același nivel de precizie." },
];

const process = [
  { n: 1, t: "Trimiți dimensiunile sau fișierul", d: "DXF, DWG, STEP, PDF cu cote sau schiță foto. Specificați aliajul (304/316), grosimea și finisajul dorit (periat, satinat, lustruit)." },
  { n: 2, t: "Primești oferta", d: "Fișier clar: 2–4h. Piese complexe sau cu consultanță: 24h. Program L–S, 07:00–20:00." },
  { n: 3, t: "Verificare fișier", d: "Controlăm fabricabilitatea înainte de tăiere — raze de îndoire, grosimi, toleranțe. Semnalăm orice problemă." },
  { n: 4, t: "Confirmi comanda", d: "Acord pe preț, cantitate și termen. Avans sau credit pentru clienți recurenți." },
  { n: 5, t: "Producem", d: "Debitare laser CO2 CNC → îndoire abkant (dacă e necesar) → control dimensional. Piesele ies debavurate, gata de igienizare." },
  { n: 6, t: "Ridici sau livrăm", d: "Strada Aurel Vlaicu 77, Iași — sau curier în toată România. Ambalaj protectiv pentru piese cu suprafață satinat sau lustruit." },
];

const faqs: FAQItem[] = [
  { q: "Ce aliaj de inox folosiți pentru industria alimentară — 304 sau 316?", a: "Ambele sunt disponibile. 304 e standard pentru bucătării profesionale, HoReCa și depozitare generală. 316 e recomandat pentru procesare carne, pește, lactate sau orice mediu cu saramură sau dezinfectanți clorați concentrați. Dacă nu sunteți siguri, descrieți aplicația și recomandăm aliajul potrivit." },
  { q: "Piesele din inox tăiate laser au margini sigure din punct de vedere igienic?", a: "Da. Tăierea laser produce o margine curată, fără bavuri metalice și fără microcrăpături. Nu există risc de descuamare sau acumulare de materie organică pe margine. Recomandăm un ușor biseau (teșire) la cerere pentru margini cu care se lucrează manual frecvent." },
  { q: "Faceți și polizare sau finisaj satinat după tăiere?", a: "Ne specializăm în debitare laser și îndoire abkant. Inoxul iese din laser cu margine curată. Pentru finisaj satinat (Ra 0.8–1.6μm), lustruit oglindă sau debavurare completă, colaborăm cu parteneri locali și putem coordona la cerere." },
  { q: "Ce grosimi de inox puteți tăia?", a: "Inox 304 și 316 până la 10mm grosime. Grosimile uzuale pentru industria alimentară (0.8–3mm) se taie rapid cu precizie ±0.05mm. La grosimi > 6mm, toleranța practică pe contur e ±0.1mm." },
  { q: "Puteți executa mese de lucru sau rafturi complete, nu doar componente?", a: "Da, dacă structura poate fi executată integral din tablă prin tăiere + îndoire. Mese de lucru cu blat plan și picioare sau cadru din profile îndoite — le facem complet. Dacă produsul necesită sudură, colaborăm cu un atelier de sudură partener din Iași și coordonăm la cerere." },
  { q: "Livrați și în afara județului Iași?", a: "Da, livrăm în toată România prin curier sau transport dedicat. Piesele din inox sunt ambalate protectiv pentru a preveni zgârieturile pe suprafața finisată." },
  { q: "Există cantitate minimă de comandă?", a: "Nu. Acceptăm și o singură piesă. Valoare minimă facturabilă: 50 RON + TVA (~€10)." },
];

const breadcrumbs = [
  { label: "Acasă", href: "/" },
  { label: "Servicii", href: "/servicii" },
  { label: "Inox Industria Alimentară" },
];

export default function InoxIndustriaAlimentaraPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Serviciu · Inox Alimentar & HoReCa"
        title="Inox pentru industria alimentară și HoReCa — Iași"
        intro="SOZO PROJECT taie și îndoaie tablă inox 304 și 316 la comandă în Iași pentru bucătării profesionale, procesare alimente și HoReCa. Mese de lucru, rafturi, carcase echipamente, tăvi și panouri — la dimensiunile exacte din desen, de la 1 bucată. Ofertă în aceeași zi."
        badges={["Inox 304 & 316", "De la 1 buc", "±0.05mm", "Iași"]}
        image={images.masaInoxHoreca}
        imageAlt="Masă cu picioare din oțel inox — componente metalice la comandă pentru HoReCa și industria alimentară"
        crumbs={breadcrumbs}
      />

      {/* Applications */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Aplicații"
            heading="Ce executăm pentru industria alimentară și HoReCa"
            subheading="Orice componentă din inox definibilă prin fișier sau schiță — o tăiem și îndoim la dimensiunile exacte."
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

      {/* Grades */}
      <section className="py-20 md:py-24 bg-bg-elevated border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Aliaje"
            heading="Inox 304 vs 316 — care e diferența și când contează"
          />
          <div className="space-y-4">
            {grades.map((g) => (
              <div key={g.grade} className="bg-bg-base border border-border rounded-lg p-6 grid md:grid-cols-[200px_1fr_140px] gap-4 items-start">
                <div>
                  <p className="text-text-primary font-semibold font-mono text-sm">{g.grade}</p>
                  <p className="text-tech font-mono text-xs mt-1">până la {g.thick}</p>
                </div>
                <div>
                  <p className="text-text-secondary text-sm leading-relaxed">{g.note}</p>
                </div>
                <div>
                  <p className="text-text-secondary text-xs italic">{g.use}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Debitare laser CO2 CNC — toleranță ±0.05mm",
              "Gaz de asistare N₂ — margine curată, fără oxidare",
              "Îndoire abkant CNC — repetabilitate ±0.1°",
              "Disponibil: 304, 316, 430 — grosimi 0.8–10mm",
            ].map((f) => (
              <div key={f} className="flex items-start gap-3 bg-bg-elevated border border-border rounded-lg px-5 py-4">
                <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-text-secondary text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader eyebrow="Beneficii" heading="De ce tablă inox tăiată laser față de inox standard din catalog" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="bg-bg-elevated border border-border rounded-lg p-7">
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
      <section className="py-20 md:py-24 bg-bg-elevated border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader eyebrow="Proces" heading="De la dimensiuni la piesă gata" />
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
          <SectionHeader eyebrow="FAQ" heading="Întrebări frecvente — inox alimentar & HoReCa" align="center" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CtaSection
        title="Ai nevoie de inox pentru bucătărie sau procesare alimente?"
        subtitle="Trimite dimensiunile sau schița — ofertă în aceeași zi. Lucrăm și de pe schiță de mână."
      />

      <ServiceSchema
        name="Inox pentru Industria Alimentară și HoReCa"
        description="Tablă inox 304 și 316 tăiată laser CNC și îndoită la comandă în Iași pentru bucătării profesionale, HoReCa și procesare alimente. Mese de lucru, rafturi, carcase echipamente."
        url={`${site.url}${URL_PATH}`}
        serviceType="Stainless steel fabrication for food industry"
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Acasă", href: "/" },
          { name: "Servicii", href: "/servicii" },
          { name: "Inox Industria Alimentară", href: URL_PATH },
        ]}
      />
    </>
  );
}
