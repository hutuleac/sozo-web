const stats = [
  { value: "±0.05mm", label: "Precizie pozițională" },
  { value: "3050 × 1525mm", label: "Tablă maximă" },
  { value: "07:00 – 20:00", label: "L–S, fără întrerupere" },
  { value: "12+ ani", label: "Experiență proprietar" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-bg-elevated">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-8 md:py-10 px-4 ${i > 0 ? "md:border-l border-border-subtle" : ""} ${i % 2 === 1 ? "border-l border-border-subtle md:border-l" : ""}`}
            >
              <div className="font-mono text-2xl md:text-3xl font-medium text-tech mb-2">
                {s.value}
              </div>
              <div className="text-xs md:text-sm text-text-secondary uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
