import Image from "next/image";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { SpecBadge } from "@/components/ui/SpecBadge";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  badges?: string[];
  image: string;
  imageAlt: string;
  crumbs: Crumb[];
};

export function ServiceHero({ eyebrow, title, intro, badges = [], image, imageAlt, crumbs }: Props) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden border-b border-border">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-base via-bg-base/95 to-bg-base/60" />
      <div className="absolute inset-0 bg-grid opacity-25" aria-hidden />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="mb-6">
          <Breadcrumbs items={crumbs} />
        </div>
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mb-5">
            <span className="w-8 h-px bg-accent" />
            {eyebrow}
          </div>
          <h1 className="text-h1 text-text-primary mb-6">{title}</h1>
          <p className="text-lg text-text-secondary leading-relaxed mb-6">{intro}</p>
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <SpecBadge key={b}>{b}</SpecBadge>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
