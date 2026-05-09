import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent hover:bg-accent-hover text-white font-semibold",
  secondary:
    "border border-accent text-accent hover:bg-accent-muted font-semibold",
  ghost:
    "text-text-secondary hover:text-text-primary font-medium",
};

type Props = {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  external?: boolean;
  className?: string;
  size?: "md" | "lg";
};

export function Button({
  href,
  children,
  variant = "primary",
  withArrow = false,
  external = false,
  className = "",
  size = "md",
}: Props) {
  const sizing = size === "lg" ? "px-7 py-4 text-base" : "px-6 py-3 text-sm";
  const cls = `inline-flex items-center justify-center gap-2 rounded transition-colors duration-200 ${styles[variant]} ${sizing} ${className}`;
  const inner = (
    <>
      {children}
      {withArrow && <ArrowRight className="w-4 h-4" />}
    </>
  );
  if (!href) return <button className={cls}>{inner}</button>;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
