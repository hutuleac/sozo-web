"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

export type PortfolioItem = {
  id: string;
  src: string;
  alt: string;
  title: string;
  material: "Oțel" | "Inox" | "Aluminiu";
  service: "Laser" | "Abkant" | "Laser + Abkant";
  industry: "Construcții" | "Automotive" | "Mobilă industrială" | "Echipamente agricole" | "Prototipuri";
};

type Filter = "all" | string;

const filters = {
  service: ["Laser", "Abkant", "Laser + Abkant"],
  material: ["Oțel", "Inox", "Aluminiu"],
  industry: ["Construcții", "Automotive", "Mobilă industrială", "Echipamente agricole", "Prototipuri"],
} as const;

export function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  const [service, setService] = useState<Filter>("all");
  const [material, setMaterial] = useState<Filter>("all");
  const [industry, setIndustry] = useState<Filter>("all");

  const filtered = useMemo(
    () =>
      items.filter(
        (it) =>
          (service === "all" || it.service === service) &&
          (material === "all" || it.material === material) &&
          (industry === "all" || it.industry === industry)
      ),
    [items, service, material, industry]
  );

  return (
    <div>
      {/* Filters */}
      <div className="space-y-5 mb-10">
        <FilterRow label="Serviciu" options={filters.service} value={service} onChange={setService} />
        <FilterRow label="Material" options={filters.material} value={material} onChange={setMaterial} />
        <FilterRow label="Industrie" options={filters.industry} value={industry} onChange={setIndustry} />
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-text-secondary">
          Nicio piesă pentru filtrele selectate.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((it) => (
            <figure
              key={it.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-bg-elevated"
            >
              <Image
                src={it.src}
                alt={it.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/95 via-bg-base/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <Tag>{it.service}</Tag>
                  <Tag>{it.material}</Tag>
                </div>
                <h3 className="text-text-primary font-semibold text-base">{it.title}</h3>
                <p className="text-text-muted text-xs font-mono mt-1">{it.industry}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      <p className="text-center text-xs text-text-muted mt-10 font-mono">
        Imagini de prezentare. Galeria reală va fi populată cu fotografii ale pieselor proprii.
      </p>
    </div>
  );
}

function FilterRow<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly T[];
  value: Filter;
  onChange: (v: Filter) => void;
}) {
  const all: { v: Filter; l: string }[] = [
    { v: "all", l: "Toate" },
    ...options.map((o) => ({ v: o, l: o })),
  ];
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-mono uppercase tracking-wider text-text-muted w-24 flex-shrink-0">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {all.map((o) => (
          <button
            key={o.v}
            onClick={() => onChange(o.v)}
            className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
              value === o.v
                ? "bg-accent text-white"
                : "bg-bg-elevated border border-border text-text-secondary hover:border-border-strong hover:text-text-primary"
            }`}
          >
            {o.l}
          </button>
        ))}
      </div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-bg-base/85 border border-border-subtle text-text-secondary font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded">
      {children}
    </span>
  );
}
