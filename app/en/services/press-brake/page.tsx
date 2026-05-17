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
import { site, whatsappLinkEN } from "@/lib/site";

const URL_PATH = "/en/services/press-brake";

export const metadata: Metadata = {
  title: "CNC Press Brake Bending Iași — Precision Sheet Metal",
  description:
    "CNC press brake bending in Iași, Romania. 160T hydraulic press, 4-axis CNC, steel/stainless/aluminium. ±0.1° repeatability. Quote same day. ☎ +40 732 034 386",
  alternates: {
    canonical: URL_PATH,
    languages: { "en": URL_PATH, "ro": "/servicii/prelucrare-abkant", "x-default": "/servicii/prelucrare-abkant" },
  },
  openGraph: {
    title: "CNC Press Brake Bending Iași | SOZO PROJECT",
    description: "160T hydraulic press, 4-axis CNC. Complex profiles with ±0.1° repeatability from the first part.",
    url: `${site.url}${URL_PATH}`,
  },
};

const materials = [
  { name: "Carbon steel", min: "0.5 mm", max: "12 mm", radius: "1× thickness" },
  { name: "Stainless 304/316", min: "0.5 mm", max: "8 mm", radius: "2× thickness" },
  { name: "Aluminium", min: "0.5 mm", max: "10 mm", radius: "1× thickness" },
];

const equipmentSpecs = [
  { k: "Type", v: "Hydraulic CNC" },
  { k: "Capacity", v: "160 Ton" },
  { k: "Axes", v: "4-axis CNC" },
  { k: "Angle repeatability", v: "±0.1°" },
  { k: "Back gauge", v: "CNC programmable" },
  { k: "Tooling", v: "V-die · Radius" },
];

const profiles = [
  { t: "L profile", d: "Simple angles, brackets, supports" },
  { t: "U / C profile", d: "Guides, frames, enclosures" },
  { t: "Z profile", d: "Mounting plates, support structures" },
  { t: "Hat profile", d: "Electrical panels, stiffening elements" },
  { t: "Boxes", d: "Multi-bend metal enclosures" },
  { t: "Multi-bend", d: "Complex profiles with 3+ bends on the same part" },
];

const benefits = [
  { icon: CornerUpRight, title: "0–180° angles", text: "Any angle to specification, ±0.1° repeatability — critical for production runs." },
  { icon: Boxes, title: "Complex profiles", text: "U, Z, L, hat sections, boxes, multi-bend. We handle parts with 3+ bends in a single setup." },
  { icon: Ruler, title: "CNC back gauge", text: "Automatic positioning — every part in the batch is identical, not just the first one." },
  { icon: Repeat, title: "Small batches", text: "From 1 piece. We specialise in small runs with high complexity." },
];

const process = [
  { n: 1, t: "Send your file or sketch", d: "With angle and dimensions clearly indicated. We accept DXF, DWG, STEP, PDF with dimensions." },
  { n: 2, t: "Receive your quote", d: "Clear file and standard part: usually 2–4h. Complex projects or requiring consultation: 24–48h. Mon–Sat 07:00–20:00." },
  { n: 3, t: "Confirm order", d: "Agree on price, quantity, and lead time." },
  { n: 4, t: "We produce", d: "CNC programming → cutting (if needed) → bending → angle/dimension quality control." },
  { n: 5, t: "Pick up or delivery", d: "Strada Aurel Vlaicu 77, Iași — or fast courier anywhere in Romania." },
];

const faqs: FAQItem[] = [
  { q: "What thicknesses can you bend?", a: "Carbon steel: up to 12mm. Stainless: up to 8mm. Aluminium: up to 10mm — with our 160T press." },
  { q: "What is the minimum bend radius?", a: "It depends on material and thickness. General rule: minimum radius = 1× thickness for carbon steel, 2× for stainless." },
  { q: "Do you handle batches of 5–10 pieces?", a: "Absolutely. We specialise in small batches with high complexity. No minimum piece count." },
  { q: "Can you bend parts that you also cut with the laser?", a: "Yes, this is our most efficient combined service: we cut and bend in the same order, with no intermediate transport costs." },
  { q: "What is the bending tolerance?", a: "Angular repeatability ±0.1° (precision). Dimensional tolerance ±0.1mm for critical dimensions, ±0.3mm standard." },
  { q: "How do I receive a quote?", a: "Send your file or sketch via WhatsApp, email, or the quote form. Clear file and standard part: usually 2–4h. Complex projects: 24–48h. Mon–Sat 07:00–20:00." },
  { q: "What profiles can you produce on the press brake?", a: "Our 160T CNC press produces L, U/C, Z, hat (omega), metal enclosures, and any multi-bend profile with 3 or more bends. The programmable CNC back gauge ensures identical repeatability across the entire batch, regardless of complexity." },
  { q: "What file format works best for a part with bends?", a: "DXF with flange dimensions and fold lines on separate layers, or a 3D STEP file. Files from SolidWorks, Fusion 360, or Inventor are preferred — they include K-factor and bend allowance automatically. A PDF with clear dimensions or a hand sketch works for an initial quote." },
  { q: "Can you bend parts cut by someone else or supplied by the client?", a: "Yes, we work with client-supplied blanks or parts cut externally. Please specify the exact material, thickness, and grade — these are needed to calculate bend radius and K-factor correctly and avoid cracking." },
  { q: "What is the minimum flange length you can bend?", a: "Minimum flange length depends on material thickness and tooling. Practical rule: min. flange ≈ 3× material thickness + 2mm. Example: 2mm sheet → minimum flange ~8mm. For very narrow flanges, consult us before finalising the drawing." },
  { q: "How does material grain direction affect bend quality?", a: "Bending perpendicular to the rolling direction reduces cracking risk at tight radii — especially important for stainless steel and hard aluminium alloys. Indicate your preferred grain direction in the design, or let us optimise orientation before cutting." },
];

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/en" },
  { label: "CNC Press Brake" },
];

export default function PressBrakePage() {
  return (
    <>
      <ServiceHero
        eyebrow="Service · CNC Press Brake Bending"
        title="CNC Press Brake Bending in Iași"
        intro="SOZO PROJECT provides CNC press brake bending in Iași with a 160T hydraulic press, 4-axis CNC. We bend carbon steel up to 12mm, stainless up to 8mm, and aluminium up to 10mm, with angular repeatability of ±0.1°. We accept small batches and complex parts with multiple bends."
        badges={["160T Press", "4-axis CNC", "±0.1°", "Multi-bend"]}
        image={images.pressBrake}
        imageAlt="CNC press brake bending a steel sheet in a precision metal fabrication workshop"
        crumbs={breadcrumbs}
      />

      {/* Equipment */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Equipment"
                heading="160T CNC Press Brake"
                subheading="Our 4-axis hydraulic CNC press enables precise bending on complex profiles — not just simple straight bends."
              />
              <ul className="space-y-3">
                {[
                  "Bending from 0° to 180° — any angle to specification",
                  "Complex profiles: U, Z, L, hat sections, boxes",
                  "±0.1° repeatability — essential for production runs",
                  "CNC programmable back gauge — automatic positioning",
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

      {/* Materials */}
      <section className="py-20 md:py-24 bg-bg-elevated border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader eyebrow="Materials & thickness" heading="What we bend and up to what thickness" />
          <div className="bg-bg-base border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-bg-surface">
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Material</th>
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Min</th>
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Max</th>
                    <th className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-4 px-6">Min bend radius</th>
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

      {/* Profiles */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader eyebrow="Capabilities" heading="Typical profiles produced" />
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
          <SectionHeader eyebrow="Benefits" heading="What you get beyond a standard press" />
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
          <SectionHeader eyebrow="Process" heading="How it works — press brake order" />
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
          <SectionHeader eyebrow="FAQ" heading="Frequently asked questions — press brake" align="center" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CtaSection
        title="Have a drawing or sketch?"
        subtitle="Quote same day. We cut and bend in the same order."
        primary={{ href: "/en/get-a-quote", label: "Get a quote" }}
        secondary={{ href: whatsappLinkEN, label: "WhatsApp direct", external: true }}
      />

      <ServiceSchema
        name="CNC Press Brake Bending"
        description="CNC press brake bending on a 160T hydraulic press with 4 axes. Steel up to 12mm, stainless 8mm, aluminium 10mm. Angular tolerance ±0.1°."
        url={`${site.url}${URL_PATH}`}
        serviceType="CNC press brake bending"
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/en" },
          { name: "CNC Press Brake", href: URL_PATH },
        ]}
      />
    </>
  );
}
