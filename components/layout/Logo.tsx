import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="SOZO PROJECT — pagina principală"
      className={`inline-flex items-baseline gap-1 font-semibold tracking-tight ${className}`}
    >
      <span className="text-accent text-xl font-bold">SOZO</span>
      <span className="text-text-primary text-xl font-bold">PROJECT</span>
    </Link>
  );
}
