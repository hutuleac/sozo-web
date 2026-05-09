export function SpecBadge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-block font-mono text-xs text-tech bg-tech-muted border rounded px-2 py-0.5 ${className}`}
      style={{ borderColor: "rgba(0, 212, 255, 0.25)" }}
    >
      {children}
    </span>
  );
}
