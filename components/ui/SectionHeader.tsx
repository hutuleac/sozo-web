type Props = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, heading, subheading, align = "left" }: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`mb-12 max-w-2xl ${alignCls}`}>
      {eyebrow && (
        <div className="text-accent font-mono text-xs mb-3 tracking-widest uppercase">
          {eyebrow}
        </div>
      )}
      <h2 className="text-h2 text-text-primary mb-4">{heading}</h2>
      {subheading && (
        <p className="text-base md:text-lg text-text-secondary leading-relaxed">
          {subheading}
        </p>
      )}
    </div>
  );
}
