import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { images } from "@/lib/images";

const items = [
  { src: images.portfolio1, alt: "Firmă luminoasă Depo-Box — litere din inox debitate laser" },
  { src: images.portfolio2, alt: "Panou decorativ floral — debitare laser din tablă neagră" },
  { src: images.portfolio3, alt: "Portret decorativ laser — tablă neagră 2mm, detaliu fin" },
  { src: images.portfolio4, alt: "Grătar metalic inox — debitare laser și finisare manuală" },
  { src: images.portfolio5, alt: "Producție serie rondele oțel — debitare laser CNC, lot 200 buc" },
  { src: images.portfolio6, alt: "Piesă tablă îndoită la abkant — profil L din oțel zincat" },
];

export function PortfolioTeaser() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <SectionHeader eyebrow="Portofoliu" heading="Din proiectele noastre" />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all self-start md:self-end"
          >
            Solicită exemple relevante <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border group"
            >
              <Image
                src={it.src}
                alt={it.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
