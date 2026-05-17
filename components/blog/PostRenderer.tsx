import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import type { Block } from "@/lib/posts-types";

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function PostRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <article className="prose-block space-y-6">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2": {
            const id = b.id || slugify(b.text);
            return (
              <h2
                key={i}
                id={id}
                className="text-h3 md:text-h2 text-text-primary mt-12 mb-2 scroll-mt-24"
              >
                {b.text}
              </h2>
            );
          }
          case "h3": {
            const id = b.id || slugify(b.text);
            return (
              <h3
                key={i}
                id={id}
                className="text-h4 text-text-primary mt-8 mb-1 scroll-mt-24"
              >
                {b.text}
              </h3>
            );
          }
          case "p":
            return (
              <p key={i} className="text-text-secondary leading-relaxed text-base md:text-lg">
                {b.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2 list-disc list-outside pl-6 marker:text-accent">
                {b.items.map((it, j) => (
                  <li key={j} className="text-text-secondary leading-relaxed">{it}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-3 list-decimal list-outside pl-6 marker:text-accent marker:font-mono">
                {b.items.map((it, j) => (
                  <li key={j} className="text-text-secondary leading-relaxed pl-2">{it}</li>
                ))}
              </ol>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto bg-bg-elevated border border-border rounded-lg">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-bg-surface">
                      {b.head.map((h, j) => (
                        <th key={j} className="text-left text-text-secondary font-mono uppercase tracking-wider text-xs py-3 px-5">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, j) => (
                      <tr key={j} className="border-b border-border-subtle last:border-0">
                        {row.map((cell, k) => (
                          <td
                            key={k}
                            className={`py-3 px-5 ${k === 0 ? "text-text-primary font-medium" : "font-mono text-tech"}`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "callout":
            return (
              <aside key={i} className="flex gap-3 bg-accent-muted border-l-2 border-accent rounded p-5">
                <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-text-primary leading-relaxed">{b.text}</p>
              </aside>
            );
          case "qa":
            return (
              <div key={i} className="bg-bg-elevated border border-border rounded-lg p-6">
                <p className="text-text-primary font-semibold mb-2">{b.q}</p>
                <p className="text-text-secondary leading-relaxed">{b.a}</p>
              </div>
            );
          case "internal":
            return (
              <div key={i} className="bg-bg-elevated border border-border rounded-lg p-6">
                <p className="text-text-secondary leading-relaxed mb-3">{b.text}</p>
                <Link
                  href={b.href}
                  className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                >
                  {b.label} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          case "image":
            return (
              <figure key={i} className="my-8">
                <div className="relative w-full overflow-hidden rounded-lg aspect-[16/9]">
                  <Image
                    src={b.src}
                    alt={b.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 720px"
                  />
                </div>
                {b.caption && (
                  <figcaption className="text-center text-text-tertiary text-sm mt-3 italic">
                    {b.caption}
                  </figcaption>
                )}
              </figure>
            );
          default:
            return null;
        }
      })}
    </article>
  );
}
