import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/site";
import { images } from "@/lib/images";

type Props = {
  title?: string;
  subtitle?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string; external?: boolean };
};

export function CtaSection({
  title = "Ai un proiect?",
  subtitle = "Contactează-ne acum și primești ofertă în 2 ore.",
  primary = { href: "/cere-oferta", label: "Cere o ofertă" },
  secondary = { href: whatsappLink, label: "WhatsApp direct", external: true },
}: Props) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <Image
        src={images.sparks}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-base via-bg-base/85 to-bg-base/40" />
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-2xl">
          <h2 className="text-h2 text-text-primary mb-4">{title}</h2>
          <p className="text-lg text-text-secondary mb-10 leading-relaxed">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={primary.href} variant="primary" withArrow size="lg">
              {primary.label}
            </Button>
            <Button href={secondary.href} variant="secondary" external={secondary.external} size="lg">
              {secondary.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
