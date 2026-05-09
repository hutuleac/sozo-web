import Image from "next/image";

const clients = [
  { name: "Sonovision", src: "/images/logos/sonovision.png", width: 140, height: 42 },
  { name: "NECOM", src: "/images/logos/necom.png", width: 120, height: 42 },
  { name: "Tehmec", src: "/images/logos/tehmec.png", width: 120, height: 42 },
  { name: "Thagora", src: "/images/logos/thagora.svg", width: 130, height: 42 },
  { name: "BPT Manufacturing", src: "/images/logos/bpt.svg", width: 150, height: 42 },
];

export function ClientLogos() {
  return (
    <section className="py-16 border-y border-border-subtle bg-bg-base">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <p className="text-center font-mono text-xs uppercase tracking-widest text-text-muted mb-10">
          Clienți și parteneri
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-center opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={c.src}
                alt={c.name}
                width={c.width}
                height={c.height}
                className="object-contain max-h-12"
                unoptimized={c.src.endsWith(".svg")}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
