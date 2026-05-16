import type { Metadata } from "next";
import { MessageCircle, Clock, ShieldCheck, FileCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { whatsappLinkEN, mapsLink, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Quote — CNC Laser Cutting & Press Brake",
  description:
    "Send your file (DXF, DWG, STEP, PDF) and receive a quote for CNC laser cutting or press brake bending the same day. SOZO PROJECT Iași, Romania.",
  alternates: {
    canonical: "/en/get-a-quote",
    languages: { "en": "/en/get-a-quote", "ro": "/cere-oferta", "x-default": "/cere-oferta" },
  },
};

const benefits = [
  { icon: Clock, t: "Same-day quote", d: "Clear file: 2–4h. Complex projects or consultations: 24–48h. Mon–Sat, 07:00–20:00." },
  { icon: ShieldCheck, t: "Confidential", d: "Your files and data stay with us, used only for the quote." },
  { icon: FileCheck, t: "Free consultation", d: "We review your file before committing. We flag any issues upfront." },
];

export default function EnGetAQuotePage() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: "Home", href: "/en" }, { label: "Get a quote" }]} />
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mt-6 mb-4">
            <span className="w-8 h-px bg-accent" />
            Get a quote
          </div>
          <h1 className="text-h1 text-text-primary mb-4 max-w-3xl">
            Send us your file. Get a quote the same day.
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            We accept DXF, DWG, STEP, STP, PDF. For any service — laser cutting, press brake, or both —
            we reply the same day Mon–Sat 07:00–20:00. Clear files and standard parts: usually 2–4h. Complex projects: 24–48h.
          </p>
        </div>
      </section>

      {/* WhatsApp shortcut */}
      <section className="py-10 bg-bg-elevated border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p className="text-text-primary font-medium mb-1">Prefer WhatsApp?</p>
              <p className="text-text-secondary text-sm">
                Instant reply. Attach your file directly in the chat.
              </p>
            </div>
            <a
              href={whatsappLinkEN}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm px-6 py-3 rounded transition-colors"
              style={{ backgroundColor: "var(--color-whatsapp)" }}
            >
              <MessageCircle className="w-4 h-4" />
              Write on WhatsApp · {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Benefits + Form */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
            <aside>
              <h2 className="text-h3 text-text-primary mb-6">How we work</h2>
              <ul className="space-y-5">
                {benefits.map((b) => {
                  const Icon = b.icon;
                  return (
                    <li key={b.t} className="flex gap-4">
                      <div className="w-10 h-10 rounded bg-accent-muted text-accent flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-text-primary font-semibold mb-1">{b.t}</h4>
                        <p className="text-text-secondary text-sm">{b.d}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10 bg-bg-elevated border border-border rounded-lg p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-text-muted mb-2">
                  Location
                </p>
                <a href={mapsLink} target="_blank" rel="noreferrer" className="text-text-primary text-sm hover:text-accent transition-colors">
                  {site.address.full}
                </a>
                <p className="text-text-secondary text-xs mt-1">Mon–Sat, 07:00–20:00</p>
              </div>
            </aside>

            <div className="bg-bg-elevated border border-border rounded-lg p-6 md:p-10">
              <QuoteForm lang="en" />
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Get a quote", href: "/en/get-a-quote" },
        ]}
      />
    </>
  );
}
