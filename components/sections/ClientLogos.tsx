import Image from "next/image";

const clients = [
  { name: "Sonovision", src: "/images/logos/sonovision.png", width: 320, height: 96 },
  { name: "NECOM", src: "/images/logos/necom.png", width: 280, height: 96 },
  { name: "Tehmec", src: "/images/logos/tehmec.png", width: 280, height: 96 },
  { name: "Thagora", src: "/images/logos/thagora.svg", width: 300, height: 96 },
  { name: "BPT Manufacturing", src: "/images/logos/bpt.svg", width: 340, height: 96 },
];

const cardStyle: React.CSSProperties = {
  background: "var(--logo-card-bg)",
  border: "1px solid var(--logo-card-border)",
  boxShadow: "var(--logo-card-shadow)",
};

export function ClientLogos() {
  return (
    <section className="py-16 border-y border-border-subtle bg-bg-base">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <p className="text-center font-mono text-xs uppercase tracking-widest text-text-muted mb-10">
          Clienți și parteneri
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-center p-6 rounded-2xl transition-transform duration-300 hover:scale-105"
              style={cardStyle}
            >
              <Image
                src={c.src}
                alt={c.name}
                width={c.width}
                height={c.height}
                className="object-contain w-full max-h-[80px]"
                unoptimized={c.src.endsWith(".svg")}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
