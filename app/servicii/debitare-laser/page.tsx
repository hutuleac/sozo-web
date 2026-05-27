import type { Metadata } from "next";
import Image from "next/image";
import { Check, FileCode, Zap, Target, Layers, Repeat } from "lucide-react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { FAQAccordion, type FAQItem } from "@/components/ui/FAQAccordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

const URL_PATH = "/servicii/debitare-laser";

export const metadata: Metadata = {
  title: "Debitare Laser CNC Iași — Mitsubishi ML3015EX",
  description:
    "Atelier de prelucrare cu laser CNC în Iași. Mitsubishi ML3015EX, tablă oțel până la 20mm, inox/aluminiu până la 10mm, toleranță ±0.05mm. Ofertă în aceeași zi. ☎ +40 732 034 386",
  alternates: {
    canonical: URL_PATH,
    languages: { "ro": URL_PATH, "en": "/en/services/laser-cutting", "x-default": URL_PATH },
  },
  openGraph: {
    title: "Debitare Laser CNC Iași | SOZO PROJECT",
    description:
      "Mitsubishi ML3015EX, CO2 4.5kW, precizie ±0.05mm. Oțel până la 20mm, inox/aluminiu până la 10mm.",
    url: `${site.url}${URL_PATH}`,
  },
};

const materials = [
  { name: "Oțel carbon (OL37, OL52)", thick: "20 mm", tol: "±0.1 mm", note: "Suprafață curată, fără bavuri" },
  { name: "Inox 304", thick: "10 mm", tol: "±0.1 mm", note: "Fără decolorare excesivă la 6mm și sub" },
  { name: "Inox 316", thick: "10 mm", tol: "±0.1 mm", note: "Rezistență chimică superioară" },
  { name: "Aluminiu 5052 / 6061", thick: "10 mm", tol: "±0.1 mm", note: "Contururi fine fără deformare" },
];

const equipmentSpecs = [
  { k: "Putere laser", v: "4.5 kW" },
  { k: "Suprafață tăiere", v: "3050 × 1525 mm" },
  { k: "Precizie pozițională", v: "±0.05 mm/500 mm" },
  { k: "Repetabilitate", v: "±0.02 mm" },
  { k: "Greutate max foaie", v: "950 kg" },
  { k: "Control", v: "Mitsubishi M800 CNC" },
];

const benefits = [
  { icon: Target, title: "Precizie", text: "±0.05mm pozițional, ±0.02mm repetabilitate. De 3× mai precis decât media mașinilor de import comod." },
  { icon: Zap, title: "Viteză", text: "CO2 4.5kW cu cap de tăiere rapid — fișier clar: ofertă în 2–4h, producție în 1–3 zile lucrătoare. Urgențe prioritizate în programul de producție." },
  { icon: Layers, title: "Versatilitate", text: "Oțel, inox, aluminiu. Contururi fine, găuri mici, profile complexe imposibil de făcut cu plasma." },
  { icon: Repeat, title: "Eficiență", text: "Loturi de la 1 piesă. Zero costuri matriță. Primul lot costă cât al sutălea." },
];

const process = [
  { n: 1, t: "Trimiți fișierul", d: "DXF / DWG / STEP pe WhatsApp, email sau formularul de ofertă." },
  { n: 2, t: "Primești oferta", d: "Fișier pregătit și specificații clare: de obicei 2–4h. Proiecte complexe sau cu consultanță: 24–48h. Program L–S, 07:00–20:00." },
  { n: 3, t: "Consultanță", d: "Revizuim designul. Semnalăm orice optimizare posibilă înainte de tăiere." },
  { n: 4, t: "Confirmi comanda", d: "Acord pe preț, cantitate și termen. Acont sau credit pentru clienți recurenți." },
  { n: 5, t: "Producem", d: "Programare CNC → tăiere → control calitate dimensional și vizual." },
  { n: 6, t: "Ridici sau livrăm", d: "Sediul Strada Aurel Vlaicu 77, Iași — sau curier rapid în toată România." },
];

const fileFormats = [
  { ext: "DXF / DWG", note: "AutoCAD, SolidWorks, Fusion 360, LibreCAD — preferat" },
  { ext: "STEP / STP", note: "Modele 3D pentru piese complexe" },
  { ext: "PDF", note: "Cu dimensiuni; pentru ofertă inițială sau inginerie inversă" },
  { ext: "Piesă fizică", note: "Fără desen? Măsurăm noi (inginerie inversă)" },
];

const dxfTips = [
  "Scara 1:1 în milimetri",
  "Un singur layer de tăiere (sau layere clar etichetate)",
  "Toate contururile închise",
  "Fără texte, cotații sau umpleri pe layerul de tăiere",
  "Fără linii duble suprapuse",
];

const faqs: FAQItem[] = [
  { q: "Ce materiale puteți debita cu laserul?", a: "Oțel carbon OL37 și OL52 până la 20mm, inox 304/316 până la 10mm, aluminiu până la 10mm." },
  { q: "Care este toleranța de precizie?", a: "Echipamentul nostru Mitsubishi ML3015EX oferă precizie pozițională de ±0.05mm/500mm și repetabilitate ±0.02mm." },
  { q: "Ce formate de fișiere acceptați?", a: "DXF și DWG (AutoCAD), STEP/STP (modele 3D), PDF cu dimensiuni. Lucrăm și din piese fizice prin inginerie inversă." },
  { q: "Care este termenul de livrare?", a: "Standard: 2–5 zile lucrătoare. Urgente: livrare în aceeași zi (disponibilitate confirmată la comandă)." },
  { q: "Care este comanda minimă?", a: "Nu există limită minimă de bucăți. Acceptăm și piese unice. Valoare minimă facturabilă: 50 RON + TVA." },
  { q: "Puteți face inginerie inversă?", a: "Da. Aduceți sau trimiteți piesa fizică, o măsurăm și creăm fișierul de producție. Serviciu inclus fără cost adițional pentru piese simple." },
  { q: "Acceptați fișiere Illustrator (AI) sau SVG?", a: "Da, dacă sunt vectoriale la scară 1:1 în milimetri. Preferăm conversia în DXF înainte de trimitere — în Illustrator: File → Export → DXF. Un PDF cu dimensiuni exacte funcționează de asemenea pentru ofertă inițială." },
  { q: "Ce este kerf-ul și cum afectează dimensiunile piesei?", a: "Kerf-ul este lățimea tăieturii lăsate de fasciculul laser — între 0.2 și 0.5mm în funcție de material și grosime. Pentru piese cu ajustaj strâns sau press-fit, dimensionați găurile cu 0.15mm mai mari decât diametrul nominal. Suntem disponibili pentru consultanță înainte de finalizarea fișierului." },
  { q: "Ce grosime minimă de tablă puteți procesa?", a: "Nu există o limită minimă strictă. Tăiem regulat inox de 0.5mm și oțel de 0.8mm. Sub 0.5mm poate apărea deformare termică — consultați-ne înainte de a finaliza proiectul." },
  { q: "Puteți tăia tabla cu folia de protecție aplicată?", a: "Da, tăiem cu folia intactă. Recomandăm să o lăsați până la instalarea pieselor pentru a evita zgârieturile în transport și manipulare." },
  { q: "Faceți și marcaj laser sau gravură pe aceeași mașină?", a: "Mitsubishi ML3015EX este optimizat pentru tăiere, nu pentru gravură fină. Putem executa linii de pliere superficiale (score lines) dacă sunt necesare. Pentru gravură decorativă sau marcare industrială, recomandăm un serviciu dedicat." },
  { q: "Faceți și finisare după tăiere — vopsire, zincare, eloxare aluminiu?", a: "Ne specializăm în debitare laser CNC. Pentru vopsire pulbere, zincare la cald sau eloxare aluminiu, colaborăm cu parteneri locali verificați din Iași și putem coordona procesul complet la cerere — primiți piesele gata de instalare sau asamblare." },
];

const breadcrumbs = [
  { label: "Acasă", href: "/" },
  { label: "Servicii", href: "/servicii" },
  { label: "Debitare Laser CNC" },
];

export default function DebitareLaserPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Serviciu · Debitare Laser CNC"
        title="Debitare Laser CNC în Iași"
        intro="Atelier de prelucrare cu laser CNC în Iași — SOZO PROJECT operează un Mitsubishi ML3015EX, CO2 4.5kW. Tăiem oțel carbon până la 20mm, inox 304/316 și aluminiu până la 10mm, cu precizie pozițională de ±0.05mm/500mm. Trimiți fișierul DXF, DWG sau STEP și primești ofertă în aceeași zi."
        badges={["Mitsubishi ML3015EX", "CO2 4.5kW", "±0.05mm", "3050 × 1525mm"]}
        image={images.mitsubishiLaser}
        imageAlt="Laser CNC Mitsubishi ML3015EX în acțiune — debitare tablă cu scântei, atelier SOZO PROJECT Iași"
        crumbs={breadcrumbs}
      />

      {/* Equipment */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Echipament"
                heading="Mitsubishi ML3015EX"
                subheading="Investim în echipamente de calitate industrială pentru că știm că precizia nu se negociază."
              />
              <p className="text-text-secondary leading-relaxed mb-6">
                Mitsubishi ML3015EX este o mașină de debitare laser CO2 din gama industrială — același tip de echipament folosit de furnizori Tier 1 din industria automotive. Precizia pozițională de ±0.05mm este de 3 ori mai bună decât media mașinilor de categorie inferioară, iar suprafața de tăiere rămâne curată, fără slag.
              </p>
              <ul className="space-y-3">
                {[
                  "±0.05mm precizie — 3× mai bună decât media",
                  "Suprafață curată, fără slag, fără oxidare excesivă",
                  "Repetabilitate ±0.02mm — piesa 100 e ca prima",
                  "Foaie până la 3050 × 1525mm, max 950kg",
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

      {/* Materials table */}
      <section className="py-20 md:py-24 bg-bg-elevated border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader eyebrow="Materiale & grosimi" heading="Ce tăiem și până la ce grosime" />
          <div className="bg-bg-base border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-bg-surface">
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Material</th>
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Grosime max</th>
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Toleranță</th>
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Note</th>
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
        </div>
      </section>

      {/* Aluminium focus */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Material · Aluminiu"
            heading="Debitare aluminiu laser CNC — particularități"
            subheading="Aluminiul are proprietăți optice diferite față de oțel. Laserul CO2 de 4.5kW cu gaz de asistare azot (N₂) îl taie curat, fără strat de oxid, fără decolorare."
          />
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="bg-bg-elevated border border-border rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-bg-surface">
                      <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-3 px-5">Aliaj</th>
                      <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-3 px-5">Grosime max</th>
                      <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-3 px-5">Caracteristici</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { a: "5052-H32", t: "10 mm", n: "Ductil, taie curat, ideal decorativ și structural" },
                      { a: "6061-T6",  t: "10 mm", n: "Mai dur, margine mai rugusă la grosimi mari — specificați dacă e critic" },
                      { a: "1050 / 1060", t: "6 mm", n: "Aluminiu pur — taie excelent, aplicații electrice și termice" },
                    ].map((r) => (
                      <tr key={r.a} className="border-b border-border-subtle last:border-0">
                        <td className="font-mono text-tech py-3 px-5">{r.a}</td>
                        <td className="font-mono text-tech py-3 px-5">{r.t}</td>
                        <td className="text-text-secondary py-3 px-5">{r.n}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul className="space-y-3">
                {[
                  "Gaz de asistare N₂ — suprafață fără oxid, aptă pentru eloxare sau vopsire directă",
                  "Toleranță ±0.1mm pe contur, găuri de la 1×t minim",
                  "Folia de protecție rămâne intactă — piese fără zgârieturi",
                  "Greutate ~3× mai mică decât oțelul la aceeași grosime",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-text-secondary text-sm">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-h4 text-text-primary mb-5">Aplicații tipice aluminiu</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { t: "Cadre și profile aluminiu la comandă", d: "Rame ferestre custom, cadre echipamente, structuri portante ușoare" },
                  { t: "Carcase și panouri", d: "Carcase echipamente electrice, panouri de acces, uși tehnice, capace" },
                  { t: "Elemente decorative", d: "Panouri perforat, litere, garduri și ecrane — eloxate sau vopsite" },
                  { t: "Piese industriale ușoare", d: "Suporți, plăci de montaj, ghidaje pentru aplicații cu cerință de masă redusă" },
                  { t: "Prototipuri design", d: "Iterații rapide pentru designeri industriali și arhitecți — de la 1 bucată" },
                ].map((a) => (
                  <div key={a.t} className="flex gap-4 p-4 bg-bg-elevated border border-border rounded">
                    <div className="w-1 bg-accent rounded-full flex-shrink-0" />
                    <div>
                      <h4 className="text-text-primary font-semibold text-sm mb-1">{a.t}</h4>
                      <p className="text-text-secondary text-xs">{a.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-bg-elevated border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader eyebrow="Beneficii" heading="De ce alegi laserul (vs plasma, ștanțare, frezare)" />
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
      <section className="py-20 md:py-28 bg-bg-elevated border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader eyebrow="Proces" heading="Cum funcționează — de la fișier la piesă" />
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

      {/* File formats */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionHeader eyebrow="Fișiere" heading="Formate de fișiere acceptate" />
              <ul className="space-y-4">
                {fileFormats.map((f) => (
                  <li key={f.ext} className="flex gap-4 items-start">
                    <div className="w-10 h-10 flex-shrink-0 rounded bg-bg-elevated border border-border flex items-center justify-center text-tech">
                      <FileCode className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-mono text-sm text-tech mb-1">{f.ext}</div>
                      <div className="text-text-secondary text-sm">{f.note}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-bg-elevated border border-border rounded-lg p-8">
              <h3 className="text-h4 text-text-primary mb-5">Recomandări pentru fișierul DXF</h3>
              <ul className="space-y-3">
                {dxfTips.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-text-secondary text-sm">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-border-subtle text-xs text-text-muted">
                Fișier corect = ofertă corectă + piesă corectă. Dacă ai dubii, trimite-ne fișierul — verificăm gratuit înainte de comandă.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries / applications */}
      <section className="py-20 md:py-24 bg-bg-elevated border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader eyebrow="Aplicații" heading="Industrii și aplicații tipice" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { t: "Construcții metalice", d: "Console, bride, plăci de bază, gusete, panouri." },
              { t: "Automotive", d: "Suporți de montaj, scuturi termice, plăci de ranforsare, prototipuri." },
              { t: "Mobilă industrială", d: "Rame metalice, componente rafturi, uși metalice." },
              { t: "Echipamente agricole", d: "Plăci de uzură, piese de schimb, cuplaje." },
              { t: "Prototipuri R&D", d: "Iterații rapide design, validare forme, machete funcționale." },
              { t: "Inginerie inversă", d: "Reproducere piese fără desen — măsurăm, creăm fișierul, producem." },
            ].map((a) => (
              <div key={a.t} className="flex gap-4 p-5 bg-bg-base border border-border rounded">
                <div className="w-1 bg-accent rounded-full flex-shrink-0" />
                <div>
                  <h4 className="text-text-primary font-semibold mb-1">{a.t}</h4>
                  <p className="text-text-secondary text-sm">{a.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader eyebrow="FAQ" heading="Întrebări frecvente — debitare laser" align="center" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CtaSection
        title="Gata să trimiți fișierul?"
        subtitle="Ofertă în aceeași zi. Consultanță inclusă."
      />

      <ServiceSchema
        name="Debitare Laser CNC"
        description="Servicii debitare laser CNC pe Mitsubishi ML3015EX. Oțel până la 20mm, inox/aluminiu până la 10mm. Toleranță ±0.05mm."
        url={`${site.url}${URL_PATH}`}
        serviceType="Laser cutting / CNC CO2 laser"
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Acasă", href: "/" },
          { name: "Servicii", href: "/servicii" },
          { name: "Debitare Laser CNC", href: URL_PATH },
        ]}
      />
    </>
  );
}
