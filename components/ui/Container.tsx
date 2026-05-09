import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}) {
  return (
    <As className={`max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12 ${className}`}>
      {children}
    </As>
  );
}
