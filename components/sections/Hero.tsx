import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/site";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative min-h-[88vh] md:min-h-[92vh] flex items-center overflow-hidden pt-24 pb-16">
      <Image
        src={images.heroLaser}
        alt="Debitare laser CNC industrială pe tablă metalică, scântei portocalii, atelier SOZO PROJECT Iași"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 hero-overlay" aria-hidden />
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />

      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mb-6">
            <span className="w-8 h-px bg-accent" />
            Debitare laser & abkant CNC — Iași
          </div>

          <h1 className="text-display text-text-primary mb-6">
            Debitare laser și prelucrare abkant CNC în Iași.
          </h1>

          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl">
            Precizie ±0.05mm. Echipament Mitsubishi. Consultanță inclusă în fiecare comandă.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/cere-oferta" variant="primary" withArrow size="lg">
              Cere o ofertă gratuită
            </Button>
            <Button href={whatsappLink} variant="secondary" external size="lg">
              Scrie-ne pe WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
