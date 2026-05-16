import { Building2, Car, Sofa, Tractor, FlaskConical } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const industries = [
  { icon: Building2, name: "Construcții metalice", desc: "Console, plăci, gusete, profile custom" },
  { icon: Car, name: "Automotive / Auto", desc: "Suporți, scuturi termice, ranforsări" },
  { icon: Sofa, name: "Mobilă industrială", desc: "Rame metalice, rafturi, structuri" },
  { icon: Tractor, name: "Echipamente agricole", desc: "Plăci de uzură, piese de schimb" },
  { icon: FlaskConical, name: "Prototipuri R&D", desc: "Iterații rapide, validare forme" },
];

export function Industries() {
  return (
    <section className="py-20 md:py-28 bg-bg-elevated border-y border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <SectionHeader eyebrow="Specializare" heading="Industrii pe care le deservim" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.name}
                className="bg-bg-base border border-border rounded-lg p-6 hover:border-border-strong transition-colors"
              >
                <Icon className="w-7 h-7 text-tech mb-4" strokeWidth={1.5} />
                <h4 className="text-text-primary font-semibold mb-1.5 text-base">{ind.name}</h4>
                <p className="text-text-secondary text-xs leading-relaxed">{ind.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
