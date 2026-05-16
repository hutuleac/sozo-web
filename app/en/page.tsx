import type { Metadata } from "next";
import Link from "next/link";
import { Check, Zap, Target, Repeat } from "lucide-react";
import { CtaSection } from "@/components/sections/CtaSection";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { site, whatsappLinkEN } from "@/lib/site";

export const metadata: Metadata = {
  title: "CNC Metal Fabrication Iași, Romania — SOZO PROJECT",
  description:
    "SOZO PROJECT — CNC fiber laser cutting and press brake bending in Iași, Romania. Mitsubishi ML3015EX, ±0.05mm precision, same-day quotes. ☎ +40 732 034 386",
  alternates: { canonical: "/en" },
  openGraph: {
    title: "CNC Metal Fabrication Iași | SOZO PROJECT",
    description: "CNC fiber laser cutting & press brake bending. ±0.05mm precision, same-day quotes.",
    url: `${site.url}/en`,
  },
};

const services = [
  {
    title: "CNC Laser Cutting",
    href: "/en/services/laser-cutting",
    specs: ["Mitsubishi ML3015EX", "4.5kW fiber laser", "Steel up to 20mm", "±0.05mm precision"],
    desc: "High-precision fiber laser cutting on carbon steel, stainless 304/316, and aluminium. Industrial-grade machine, clean edges, no slag.",
  },
  {
    title: "CNC Press Brake Bending",
    href: "/en/services/press-brake",
    specs: ["160T hydraulic press", "4-axis CNC", "Steel up to 12mm", "±0.1° repeatability"],
    desc: "Complex profiles — L, U, Z, hat sections, boxes, multi-bend. Small batches from 1 piece, no minimum order.",
  },
];

const highlights = [
  { icon: Target, t: "±0.05mm precision", d: "Positional accuracy 3× better than average. Part 100 matches part 1." },
  { icon: Zap, t: "Same-day quote", d: "Clear file: 2–4h. Complex projects: 24–48h. Mon–Sat 07:00–20:00." },
  { icon: Check, t: "Free consultation", d: "We check your file before cutting and flag any issues. No extra cost." },
  { icon: Repeat, t: "From 1 piece", d: "No minimum batch. Same unit price for 1 or 100 parts." },
];

export default function EnHomePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mb-6">
            <span className="w-8 h-px bg-accent" />
            CNC Metal Fabrication · Iași, Romania
          </div>
          <h1 className="text-h1 text-text-primary mb-6 max-w-4xl">
            Precision laser cutting &amp; press brake bending in Romania
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mb-10 leading-relaxed">
            SOZO PROJECT provides CNC fiber laser cutting and press brake bending in Iași, Romania.
            We serve B2B clients across the EU with fast turnaround, industrial-grade equipment, and same-day quotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/en/get-a-quote"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-7 py-4 rounded transition-colors"
            >
              Get a quote
            </Link>
            <Link
              href="/en/contact"
              className="inline-flex items-center gap-2 border border-border hover:border-border-strong text-text-primary font-semibold px-7 py-4 rounded transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mb-10">
            <span className="w-8 h-px bg-accent" />
            Services
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-bg-elevated border border-border rounded-lg p-8 hover:border-accent transition-colors"
              >
                <h2 className="text-h3 text-text-primary mb-3 group-hover:text-accent transition-colors">{s.title}</h2>
                <p className="text-text-secondary text-sm mb-6 leading-relaxed">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.specs.map((spec) => (
                    <span key={spec} className="font-mono text-xs text-tech bg-bg-surface border border-border-subtle rounded px-2 py-1">
                      {spec}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 md:py-24 bg-bg-elevated border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div key={h.t} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded bg-accent-muted text-accent flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-text-primary font-semibold mb-1">{h.t}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{h.d}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mb-8">
            <span className="w-8 h-px bg-accent" />
            Materials
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { m: "Carbon steel", laser: "up to 20mm", brake: "up to 12mm" },
              { m: "Stainless 304/316", laser: "up to 10mm", brake: "up to 8mm" },
              { m: "Aluminium", laser: "up to 10mm", brake: "up to 10mm" },
            ].map((r) => (
              <div key={r.m} className="bg-bg-elevated border border-border rounded-lg p-6">
                <h4 className="text-text-primary font-semibold mb-4">{r.m}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Laser cutting</span>
                    <span className="font-mono text-tech">{r.laser}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Press brake</span>
                    <span className="font-mono text-tech">{r.brake}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to send your file?"
        subtitle="Quote same day. Consultation included."
        primary={{ href: "/en/get-a-quote", label: "Get a quote" }}
        secondary={{ href: whatsappLinkEN, label: "WhatsApp direct", external: true }}
      />

      <BreadcrumbSchema
        items={[{ name: "Home", href: "/" }, { name: "EN", href: "/en" }]}
      />
    </>
  );
}
