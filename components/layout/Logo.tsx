import Link from "next/link";
import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="SOZO PROJECT — pagina principală"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/images/sozo_logo.webp"
        alt="SOZO PROJECT"
        width={379}
        height={165}
        style={{ height: "36px", width: "auto" }}
        className="rounded-md"
        priority
      />
    </Link>
  );
}
