import type { Metadata } from "next";
import Image from "next/image";
import { Target, Heart, Zap, Handshake } from "lucide-react";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { AboutPageSchema } from "@/components/schema/AboutPageSchema";
import { CtaSection } from "@/components/sections/CtaSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Despre Noi — SOZO PROJECT Iași",
  description:
    "SOZO PROJECT — companie de prelucrare metal de precizie în Iași. 12+ ani experiență, echipament Mitsubishi ML3015EX, consultanță inclusă în fiecare comandă.",
  alternates: { canonical: "/despre-noi" },
  openGraph: {
    title: "Despre SOZO PROJECT",
    description: "12+ ani experiență, echipament industrial, consultanță în fiecare proiect.",
    url: `${site.url}/despre-noi`,
  },
};

const values = [
  { icon: Target, t: "Precizie", d: "Nu tăiem estimativ. Fiecare piesă are o toleranță, și o respectăm." },
  { icon: Heart, t: "Onestitate", d: "Dacă un design are o problemă, o spunem înainte să tăiem, nu după." },
  { icon: Zap, t: "Viteză", d: "Înțelegem că termenele contează. Ofertă în aceeași zi, livrarea promisă, fără surprize." },
  { icon: Handshake, t: "Parteneriat", d: "Nu suntem o bandă rulantă. Lucrăm cu tine pe proiect, de la prima schiță." },
];

const companyData = [
  { k: "Denumire legală", v: site.legalName },
  { k: "CUI", v: site.cui },
  { k: "Registrul Comerțului", v: site.reg },
  { k: "Sediu operațional", v: site.address.full },
  { k: "An înființare", v: "2021" },
  { k: "Program", v: site.hours },
];

export default function DespreNoiPage() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: "Acasă", href: "/" }, { label: "Despre noi" }]} />
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mt-6 mb-4">
            <span className="w-8 h-px bg-accent" />
            Despre SOZO PROJECT
          </div>
          <h1 className="text-h1 text-text-primary mb-6 max-w-3xl">
            Atelier de precizie. Consultanță în fiecare proiect.
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Suntem un atelier B2B de prelucrare metal în Iași, cu echipament industrial Mitsubishi
            și 12+ ani de experiență directă a proprietarului. Lucrăm cu tine de la fișier la piesă —
            și îți spunem dacă designul poate fi îmbunătățit înainte să tăiem.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader eyebrow="Povestea noastră" heading="De ce am fondat SOZO PROJECT" />
              <div className="space-y-5 text-text-secondary leading-relaxed">
                <p>
                  SOZO PROJECT s-a născut dintr-o convingere simplă: clienții din industrie merită un
                  furnizor de prelucrare metal care să înțeleagă nu doar cum se operează o mașină,
                  ci ce înseamnă piesa respectivă în contextul produsului final.
                </p>
                <p>
                  Proprietarul companiei vine cu peste 12 ani de experiență directă în prelucrarea
                  metalelor — ani petrecuți în producție, nu în birouri. SOZO PROJECT a fost fondată
                  în 2021 ca un răspuns la ceea ce lipsea pe piața din Iași: un atelier de precizie
                  cu echipament serios, disponibil să lucreze și cu loturi mici, și care să îți
                  spună direct dacă designul poate fi îmbunătățit.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/5] md:aspect-square rounded-lg overflow-hidden border border-border">
              <Image
                src={images.workshop}
                alt="Atelier SOZO PROJECT — spațiu de prelucrare metal"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment investment */}
      <section className="py-20 md:py-28 bg-bg-elevated border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border order-2 md:order-1">
              <Image
                src={images.cncPanel}
                alt="Panou de control CNC industrial — Mitsubishi M800"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <SectionHeader eyebrow="Echipament" heading="De ce Mitsubishi, nu cea mai ieftină alternativă" />
              <div className="space-y-5 text-text-secondary leading-relaxed">
                <p>
                  Am investit în echipament Mitsubishi ML3015EX pentru că, în prelucrarea de
                  precizie, echipamentul dictează calitatea — nu vorba vânzătorului. Același tip
                  de mașină este folosit de furnizori din industria automotive la nivel european.
                </p>
                <p className="text-text-primary">
                  Alegeam un echipament mai ieftin și am fi tăiat mai ieftin, dar nu la ±0.05mm.
                </p>
                <p>
                  Pentru îndoire, presa abkant CNC de 160T, 4 axe, completează lanțul: tăiem și
                  formăm sub același acoperiș, fără pas intermediar de transport.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader eyebrow="Valori" heading="Ce ne ghidează în fiecare comandă" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.t} className="bg-bg-elevated border border-border rounded-lg p-7">
                  <div className="w-12 h-12 rounded bg-accent-muted text-accent flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-h4 text-text-primary mb-3">{v.t}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{v.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Owner / team */}
      <section className="py-20 md:py-24 bg-bg-elevated border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader eyebrow="Echipa" heading="Cu cine lucrezi" />
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-4xl">
            <div className="relative aspect-square rounded-lg overflow-hidden border border-border max-w-sm">
              <Image
                src={images.ownerPortrait}
                alt="Proprietar SOZO PROJECT — specialist prelucrare metal CNC, Iași"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-text-muted mb-2">
                Proprietar · Inginer
              </div>
              <h3 className="text-h3 text-text-primary mb-3">Lucian Bercea</h3>
              <p className="text-text-secondary leading-relaxed mb-5">
                Peste 12 ani de experiență în conducerea directă a producției industriale de
                prelucrare tablă de precizie — inox, oțel, aluminiu, cupru și aliaje speciale.
                A gestionat întreg lanțul: de la prima discuție cu clientul și validarea designului,
                ofertare și prototipuri, până la implementarea fluxului de producție cu 50+ oameni
                și 20+ tipuri de echipamente, inclusiv acoperiri metalice, galvanizare, vopsire,
                sudură, asamblare și control strict de calitate.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Pasionat de inginerie în toate formele ei — proiectare, execuție, flux tehnologic,
                optimizare proces. Implicat personal în fiecare consultare tehnică: identifică
                problemele de design înainte de tăiere, recomandă soluții mai eficiente și
                validează toleranțele pentru serii mici, mijlocii sau repere repetitive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company data */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader eyebrow="Date companie" heading="Transparență — ce facturi vei primi" />
          <div className="bg-bg-elevated border border-border rounded-lg overflow-hidden max-w-3xl">
            <dl className="divide-y divide-border-subtle">
              {companyData.map((d) => (
                <div key={d.k} className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-6 py-4">
                  <dt className="text-sm font-mono uppercase tracking-wider text-text-muted mb-1 sm:mb-0">{d.k}</dt>
                  <dd className="text-text-primary text-sm sm:text-right">{d.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <CtaSection
        title="Hai să discutăm proiectul tău"
        subtitle="Te răspundem direct, fără filtru de vânzări."
      />

      <BreadcrumbSchema
        items={[
          { name: "Acasă", href: "/" },
          { name: "Despre noi", href: "/despre-noi" },
        ]}
      />
      <AboutPageSchema />
    </>
  );
}
