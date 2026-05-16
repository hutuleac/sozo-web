import type { Metadata } from "next";
import { Check, FileCode, Zap, Target, Layers, Repeat } from "lucide-react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { FAQAccordion, type FAQItem } from "@/components/ui/FAQAccordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { images } from "@/lib/images";
import { site, whatsappLinkEN } from "@/lib/site";

const URL_PATH = "/en/services/laser-cutting";

export const metadata: Metadata = {
  title: "CNC Laser Cutting Iași — Mitsubishi ML3015EX",
  description:
    "CNC fiber laser cutting services in Iași, Romania. Mitsubishi ML3015EX, steel up to 20mm, stainless/aluminium up to 10mm, ±0.05mm tolerance. Quote same day. ☎ +40 732 034 386",
  alternates: {
    canonical: URL_PATH,
    languages: { "en": URL_PATH, "ro": "/servicii/debitare-laser", "x-default": "/servicii/debitare-laser" },
  },
  openGraph: {
    title: "CNC Laser Cutting Iași | SOZO PROJECT",
    description:
      "Mitsubishi ML3015EX, 4.5kW fiber laser, ±0.05mm precision. Steel up to 20mm, stainless/aluminium up to 10mm.",
    url: `${site.url}${URL_PATH}`,
  },
};

const materials = [
  { name: "Carbon steel (OL37, OL52)", thick: "20 mm", tol: "±0.1 mm", note: "Clean edge, no burrs" },
  { name: "Stainless 304", thick: "10 mm", tol: "±0.1 mm", note: "No discolouration at 6mm and below" },
  { name: "Stainless 316", thick: "10 mm", tol: "±0.1 mm", note: "Superior chemical resistance" },
  { name: "Aluminium 5052 / 6061", thick: "10 mm", tol: "±0.1 mm", note: "Fine contours without deformation" },
];

const equipmentSpecs = [
  { k: "Laser power", v: "4.5 kW" },
  { k: "Cutting area", v: "3050 × 1525 mm" },
  { k: "Positional accuracy", v: "±0.05 mm/500 mm" },
  { k: "Repeatability", v: "±0.02 mm" },
  { k: "Max sheet weight", v: "950 kg" },
  { k: "Control", v: "Mitsubishi M800 CNC" },
];

const benefits = [
  { icon: Target, title: "Precision", text: "±0.05mm positional, ±0.02mm repeatability. 3× better than the average import machine." },
  { icon: Zap, title: "Speed", text: "Fiber laser on thin sheet — several times faster than CO₂. Clear file: quote in 2–4h. Complex projects: 24–48h. Urgent orders prioritised." },
  { icon: Layers, title: "Versatility", text: "Steel, stainless, aluminium. Fine contours, small holes, complex profiles impossible with plasma." },
  { icon: Repeat, title: "Efficiency", text: "Batches from 1 piece. Zero tooling costs. Part 1 costs the same as part 100." },
];

const process = [
  { n: 1, t: "Send your file", d: "DXF / DWG / STEP via WhatsApp, email, or the quote form." },
  { n: 2, t: "Receive your quote", d: "Clear file and standard part: usually 2–4h. Complex projects or requiring consultation: 24–48h. Mon–Sat 07:00–20:00." },
  { n: 3, t: "Consultation", d: "We review your design and flag any optimisation before cutting." },
  { n: 4, t: "Confirm order", d: "Agree on price, quantity, and lead time. Deposit or credit for recurring clients." },
  { n: 5, t: "We produce", d: "CNC programming → cutting → dimensional and visual quality control." },
  { n: 6, t: "Pick up or delivery", d: "Strada Aviației 9, Iași — or fast courier anywhere in Romania." },
];

const fileFormats = [
  { ext: "DXF / DWG", note: "AutoCAD, SolidWorks, Fusion 360, LibreCAD — preferred" },
  { ext: "STEP / STP", note: "3D models for complex parts" },
  { ext: "PDF", note: "With dimensions; for initial quote or reverse engineering" },
  { ext: "Physical part", note: "No drawing? We measure it (reverse engineering)" },
];

const dxfTips = [
  "Scale 1:1 in millimetres",
  "Single cut layer (or clearly labelled layers)",
  "All contours closed",
  "No text, dimensions or fills on the cut layer",
  "No duplicate overlapping lines",
];

const faqs: FAQItem[] = [
  { q: "What materials can you cut with the laser?", a: "Carbon steel OL37 and OL52 up to 20mm, stainless 304/316 up to 10mm, aluminium up to 10mm." },
  { q: "What is the precision tolerance?", a: "Our Mitsubishi ML3015EX delivers positional accuracy of ±0.05mm/500mm and repeatability of ±0.02mm." },
  { q: "What file formats do you accept?", a: "DXF and DWG (AutoCAD), STEP/STP (3D models), PDF with dimensions. We also work from physical parts via reverse engineering." },
  { q: "What is the lead time?", a: "Standard: 2–5 business days. Urgent: same-day delivery (availability confirmed at order)." },
  { q: "Is there a minimum order?", a: "No minimum piece count. We accept single parts. Minimum billable value: 50 RON + VAT (~€10)." },
  { q: "Can you do reverse engineering?", a: "Yes. Bring or send the physical part, we measure it and create the production file. Included at no extra cost for simple parts." },
];

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/en/services/laser-cutting" },
  { label: "CNC Laser Cutting" },
];

export default function LaserCuttingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Service · CNC Laser Cutting"
        title="CNC Laser Cutting in Iași"
        intro="SOZO PROJECT provides CNC fiber laser cutting in Iași using a Mitsubishi ML3015EX, 4.5kW fiber laser. We cut carbon steel up to 20mm, stainless 304/316 and aluminium up to 10mm, with positional accuracy of ±0.05mm/500mm. Send your DXF, DWG or STEP file and get a quote the same day."
        badges={["Mitsubishi ML3015EX", "4.5kW Fiber", "±0.05mm", "3050 × 1525mm"]}
        image={images.precisionEdge}
        imageAlt="Laser-cut edge on 304 stainless steel — no burrs, clean surface"
        crumbs={breadcrumbs}
      />

      {/* Equipment */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Equipment"
                heading="Mitsubishi ML3015EX"
                subheading="We invest in industrial-grade equipment because precision is non-negotiable."
              />
              <p className="text-text-secondary leading-relaxed mb-6">
                The Mitsubishi ML3015EX is an industrial-class fiber laser cutting machine — the same type used by Tier 1 automotive suppliers. Its positional accuracy of ±0.05mm is 3× better than entry-level machines, and the cut surface is clean with no slag.
              </p>
              <ul className="space-y-3">
                {[
                  "±0.05mm precision — 3× better than average",
                  "Clean surface, no slag, no excessive oxidation",
                  "±0.02mm repeatability — part 100 matches part 1",
                  "Sheet up to 3050 × 1525mm, max 950kg",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-text-primary">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-bg-elevated border border-border rounded-lg p-8">
              <div className="text-accent font-mono text-xs uppercase tracking-widest mb-4">Specifications</div>
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
          <SectionHeader eyebrow="Materials & thickness" heading="What we cut and up to what thickness" />
          <div className="bg-bg-base border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-bg-surface">
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Material</th>
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Max thickness</th>
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Tolerance</th>
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Notes</th>
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

      {/* Benefits */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader eyebrow="Why laser" heading="Laser vs plasma, stamping, and milling" />
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
          <SectionHeader eyebrow="Process" heading="How it works — from file to finished part" />
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
              <SectionHeader eyebrow="Files" heading="Accepted file formats" />
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
              <h3 className="text-h4 text-text-primary mb-5">DXF file checklist</h3>
              <ul className="space-y-3">
                {dxfTips.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-text-secondary text-sm">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-border-subtle text-xs text-text-muted">
                A correct file = a correct quote + a correct part. If unsure, send us the file — we check it for free before you commit.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-24 bg-bg-elevated border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader eyebrow="Applications" heading="Industries and typical use cases" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { t: "Metal construction", d: "Brackets, flanges, base plates, gussets, panels." },
              { t: "Automotive", d: "Mounting brackets, heat shields, reinforcement plates, prototypes." },
              { t: "Industrial furniture", d: "Metal frames, shelf components, metal doors." },
              { t: "Agricultural equipment", d: "Wear plates, spare parts, couplings." },
              { t: "R&D prototypes", d: "Rapid design iterations, form validation, functional mockups." },
              { t: "Reverse engineering", d: "Parts without drawings — we measure, create the file, produce." },
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
          <SectionHeader eyebrow="FAQ" heading="Frequently asked questions — laser cutting" align="center" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CtaSection
        title="Ready to send your file?"
        subtitle="Quote same day. Consultation included."
        primary={{ href: "/en/get-a-quote", label: "Get a quote" }}
        secondary={{ href: whatsappLinkEN, label: "WhatsApp direct", external: true }}
      />

      <ServiceSchema
        name="CNC Laser Cutting"
        description="CNC fiber laser cutting on Mitsubishi ML3015EX. Steel up to 20mm, stainless/aluminium up to 10mm. Tolerance ±0.05mm."
        url={`${site.url}${URL_PATH}`}
        serviceType="Laser cutting / CNC fiber laser"
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/en/services/laser-cutting" },
          { name: "CNC Laser Cutting", href: URL_PATH },
        ]}
      />
    </>
  );
}
