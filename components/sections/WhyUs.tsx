import { Cpu, Clock, Wrench, RotateCcw } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const usps = [
  {
    icon: Cpu,
    title: "Echipament Mitsubishi",
    desc: "Nu tăiem cu mașini de import ieftin. Mitsubishi ML3015EX este același echipament folosit de furnizori Tier 1 din automotive.",
  },
  {
    icon: Clock,
    title: "Ofertă în aceeași zi",
    desc: "Fișier clar și piesă standard: de obicei 2–4h. Proiecte cu consultanță sau iterații: 24–48h. Urgențele — prioritizate.",
  },
  {
    icon: Wrench,
    title: "Consultanță inclusă",
    desc: "Proprietarul revizuiește fiecare proiect. Îți spunem dacă designul poate fi optimizat înainte să tăiem.",
  },
  {
    icon: RotateCcw,
    title: "Inginerie inversă",
    desc: "Nu ai desen? Aduci piesa fizică, pleci cu piese noi. Măsurăm și creăm fișierul noi.",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-bg-elevated border-y border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <SectionHeader
          eyebrow="De ce SOZO PROJECT"
          heading="Patru motive serioase. Nimic din ce nu putem demonstra."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((u) => {
            const Icon = u.icon;
            return (
              <div
                key={u.title}
                className="bg-bg-base border border-border rounded-lg p-7 hover:border-border-strong transition-colors"
              >
                <div className="w-12 h-12 rounded bg-accent-muted text-accent flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-h4 text-text-primary mb-3">{u.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{u.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
