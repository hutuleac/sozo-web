import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { ContactForm } from "@/components/forms/ContactForm";
import { site, telLink, mailLink, whatsappLinkEN, mapsLink, mapsEmbed } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact SOZO PROJECT — ${site.phoneDisplay}`,
  description: `Contact SOZO PROJECT for CNC laser cutting and press brake bending in Iași, Romania. Phone: ${site.phoneDisplay}. Email: ${site.email}. Mon–Sat 07:00–20:00.`,
  alternates: {
    canonical: "/en/contact",
    languages: { "en": "/en/contact", "ro": "/contact", "x-default": "/contact" },
  },
};

export default function EnContactPage() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: "Home", href: "/en" }, { label: "Contact" }]} />
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mt-6 mb-4">
            <span className="w-8 h-px bg-accent" />
            Contact
          </div>
          <h1 className="text-h1 text-text-primary mb-4">Let&apos;s talk about your project</h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            Fastest reply via WhatsApp. Quote same day — clear file: 2–4h, complex projects: 24–48h. Mon–Sat 07:00–20:00.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-h3 text-text-primary mb-6">Contact details</h2>
              <ul className="space-y-5 mb-10">
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded bg-bg-elevated border border-border flex items-center justify-center text-tech flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-text-muted mb-1">Address</div>
                    <a href={mapsLink} target="_blank" rel="noreferrer" className="text-text-primary hover:text-accent transition-colors">{site.address.full}</a>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded bg-bg-elevated border border-border flex items-center justify-center text-tech flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-text-muted mb-1">Phone</div>
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
                    <div className="text-xs font-mono uppercase tracking-wider text-text-muted mb-1">Hours</div>
                    <div className="text-text-primary">Mon–Sat, 07:00–20:00</div>
                  </div>
                </li>
              </ul>

              <div className="bg-bg-elevated border border-border rounded-lg p-6">
                <p className="text-text-primary font-medium mb-4">Fastest reply</p>
                <p className="text-text-secondary text-sm mb-5">
                  Message us directly on WhatsApp — instant reply during working hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button href={whatsappLinkEN} external variant="primary" withArrow>
                    Open WhatsApp
                  </Button>
                  <Button href={mapsLink} external variant="secondary">
                    Get directions
                  </Button>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-h3 text-text-primary mb-6">Or send us a message</h2>
              <ContactForm lang="en" />
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
              title="SOZO PROJECT location — Strada Aviației 9, Iași"
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
          { name: "Home", href: "/" },
          { name: "Contact", href: "/en/contact" },
        ]}
      />
    </>
  );
}
