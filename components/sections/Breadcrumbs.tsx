import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {it.href ? (
              <Link href={it.href} className="hover:text-accent transition-colors">
                {it.label}
              </Link>
            ) : (
              <span className="text-text-secondary">{it.label}</span>
            )}
            {i < items.length - 1 && <ChevronRight className="w-3 h-3" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
