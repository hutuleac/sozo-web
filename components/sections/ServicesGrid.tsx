import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, CornerUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { images } from "@/lib/images";

const services = [
  {
    href: "/servicii/debitare-laser",
    icon: Zap,
    title: "Debitare Laser CNC",
    desc: "Tăiere precisă a tablei metalice cu fibră laser Mitsubishi ML3015EX. Oțel, inox, aluminiu — grosimi de la 0.5mm la 20mm.",
    img: images.precisionEdge,
    spec: "Mitsubishi ML3015EX · 4.5kW · ±0.05mm",
  },
  {
    href: "/servicii/prelucrare-abkant",
    icon: CornerUpRight,
    title: "Prelucrare Abkant CNC",
    desc: "Îndoire CNC cu presă de 160T, 4 axe. Profile complexe cu toleranță ±0.1° din prima.",
    img: images.pressBrake,
    spec: "Presă 160T · 4 axe CNC · ±0.1°",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <SectionHeader eyebrow="Servicii" heading="Ce prelucrăm" subheading="Două procese, un atelier. Tăiem și îndoim în cadrul aceleiași comenzi — fără costuri intermediare." />

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.href}
                href={s.href}
                className="group relative overflow-hidden bg-bg-elevated border border-border hover:border-accent rounded-lg transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-bg-elevated/40 to-transparent" />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded bg-accent-muted text-accent flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-tech">{s.spec}</span>
                  </div>
                  <h3 className="text-h3 text-text-primary mb-3">{s.title}</h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">{s.desc}</p>
                  <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                    Descoperă serviciul
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
