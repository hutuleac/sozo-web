"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FAQItem = { q: string; a: string };

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border-subtle border-y border-border-subtle">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex justify-between items-center py-5 text-left text-text-primary font-medium hover:text-accent transition-colors gap-4"
            >
              <span>{item.q}</span>
              <ChevronDown
                className={`w-5 h-5 flex-shrink-0 transition-transform ${isOpen ? "rotate-180 text-accent" : "text-text-muted"}`}
              />
            </button>
            <div
              className={`grid transition-all duration-200 ease-out ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="text-text-secondary leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
