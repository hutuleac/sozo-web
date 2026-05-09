import { SectionHeader } from "@/components/ui/SectionHeader";

const materials = [
  { name: "Oțel carbon", grades: "OL37 · OL52", thick: "până la 20mm", note: "Construcții, structuri, automotive" },
  { name: "Inox", grades: "304 · 316", thick: "până la 10mm", note: "Alimentar, marin, decorativ" },
  { name: "Aluminiu", grades: "1050 · 5052 · 6061", thick: "până la 10mm", note: "Auto, electronice, prototipare" },
];

export function MaterialsStrip() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <SectionHeader eyebrow="Materiale" heading="Materiale prelucrate" subheading="Trei familii de tablă, toate certificate, toate cu trasabilitate." />

        <div className="grid md:grid-cols-3 gap-6">
          {materials.map((m) => (
            <div key={m.name} className="bg-bg-elevated border border-border rounded-lg p-7">
              <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">
                Material
              </div>
              <h3 className="text-h3 text-text-primary mb-1">{m.name}</h3>
              <div className="font-mono text-sm text-tech mb-5">{m.grades}</div>
              <div className="border-t border-border-subtle pt-4 mb-3">
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-1">Grosime</div>
                <div className="font-mono text-sm text-text-primary">{m.thick}</div>
              </div>
              <p className="text-sm text-text-secondary">{m.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
