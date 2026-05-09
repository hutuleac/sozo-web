import type { Metadata } from "next";
import { MessageCircle, Clock, ShieldCheck, FileCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { whatsappLink, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cere Ofertă Personalizată",
  description:
    "Trimite-ne fișierul tău (DXF, DWG, STEP, PDF) și primești ofertă pentru debitare laser sau abkant CNC în maximum 2 ore. SOZO PROJECT Iași.",
  alternates: { canonical: "/cere-oferta" },
};

const benefits = [
  { icon: Clock, t: "Răspuns în 2 ore", d: "În program L–S, 07:00–20:00." },
  { icon: ShieldCheck, t: "Confidențial", d: "Datele și fișierele tale rămân la noi, doar pentru ofertă." },
  { icon: FileCheck, t: "Consultanță gratuită", d: "Verificăm fișierul înainte. Semnalăm orice problemă posibilă." },
];

export default function CereOfertaPage() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: "Acasă", href: "/" }, { label: "Cere ofertă" }]} />
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mt-6 mb-4">
            <span className="w-8 h-px bg-accent" />
            Cere ofertă
          </div>
          <h1 className="text-h1 text-text-primary mb-4 max-w-3xl">
            Trimite-ne fișierul. Primești prețul în 2 ore.
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            Acceptăm DXF, DWG, STEP, STP, PDF. Pentru orice tehnică — debitare laser, abkant, ambele —
            răspundem în maximum 2 ore în intervalul L–S, 07:00–20:00.
          </p>
        </div>
      </section>

      {/* WhatsApp shortcut */}
      <section className="py-10 bg-bg-elevated border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p className="text-text-primary font-medium mb-1">Preferi direct WhatsApp?</p>
              <p className="text-text-secondary text-sm">
                Răspuns instant. Atașezi fișierul direct în chat.
              </p>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm px-6 py-3 rounded transition-colors"
              style={{ backgroundColor: "var(--color-whatsapp)" }}
            >
              <MessageCircle className="w-4 h-4" />
              Scrie pe WhatsApp · {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Benefits + Form */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
            <aside>
              <h2 className="text-h3 text-text-primary mb-6">Cum lucrăm</h2>
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
                  Sediu
                </p>
                <p className="text-text-primary text-sm">{site.address.full}</p>
                <p className="text-text-secondary text-xs mt-1">{site.hours}</p>
              </div>
            </aside>

            <div className="bg-bg-elevated border border-border rounded-lg p-6 md:p-10">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbSchema
        items={[
          { name: "Acasă", href: "/" },
          { name: "Cere ofertă", href: "/cere-oferta" },
        ]}
      />
    </>
  );
}
