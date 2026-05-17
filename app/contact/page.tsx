import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { ContactForm } from "@/components/forms/ContactForm";
import { site, telLink, mailLink, whatsappLink, mapsLink, mapsEmbed } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact — ${site.phoneDisplay}`,
  description: `Contactează SOZO PROJECT pentru debitare laser și abkant CNC în Iași. Tel: ${site.phoneDisplay}. Email: ${site.email}. Program: L–S 07:00–20:00.`,
  alternates: {
    canonical: "/contact",
    languages: { "ro": "/contact", "en": "/en/contact", "x-default": "/contact" },
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: "Acasă", href: "/" }, { label: "Contact" }]} />
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mt-6 mb-4">
            <span className="w-8 h-px bg-accent" />
            Contact
          </div>
          <h1 className="text-h1 text-text-primary mb-4">Hai să discutăm proiectul tău</h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            Cel mai rapid răspuns pe WhatsApp. Ofertă în aceeași zi — fișier clar: 2–4h, proiecte complexe: 24–48h. Program L–S, 07:00–20:00.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-h3 text-text-primary mb-6">Date de contact</h2>
              <ul className="space-y-5 mb-10">
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded bg-bg-elevated border border-border flex items-center justify-center text-tech flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-text-muted mb-1">Adresă</div>
                    <a href={mapsLink} target="_blank" rel="noreferrer" className="text-text-primary hover:text-accent transition-colors">{site.address.full}</a>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded bg-bg-elevated border border-border flex items-center justify-center text-tech flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-text-muted mb-1">Telefon</div>
                    <a href={telLink} className="text-text-primary hover:text-accent transition-colors">{site.phoneDisplay}</a>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded bg-bg-elevated border border-border flex items-center justify-center text-tech flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-text-muted mb-1">Email</div>
                    <a href={mailLink} className="text-text-primary hover:text-accent transition-colors">{site.email}</a>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded bg-bg-elevated border border-border flex items-center justify-center text-tech flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-text-muted mb-1">Program</div>
                    <div className="text-text-primary">{site.hours}</div>
                  </div>
                </li>
              </ul>

              <div className="bg-bg-elevated border border-border rounded-lg p-6">
                <p className="text-text-primary font-medium mb-4">Cel mai rapid răspuns</p>
                <p className="text-text-secondary text-sm mb-5">
                  Scrie-ne direct pe WhatsApp — răspuns instant în program de lucru.
                </p>
                <Button href={whatsappLink} external variant="primary" withArrow>
                  Deschide WhatsApp
                </Button>
                <Button href={mapsLink} external variant="secondary">
                  Obține indicații
                </Button>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-h3 text-text-primary mb-6">Sau trimite-ne un mesaj</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="border border-border rounded-lg overflow-hidden bg-bg-elevated">
            <iframe
              src={mapsEmbed}
              title="Hartă SOZO PROJECT — Strada Aurel Vlaicu 77, Iași"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[400px]"
              style={{ border: 0, filter: "grayscale(0.3) contrast(0.95)" }}
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <BreadcrumbSchema
        items={[
          { name: "Acasă", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
    </>
  );
}
