import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12 text-center">
        <div className="text-accent font-mono text-sm uppercase tracking-widest mb-6">
          Eroare 404
        </div>
        <h1 className="text-h1 text-text-primary mb-4">Pagina nu a fost găsită</h1>
        <p className="text-lg text-text-secondary mb-10 max-w-xl mx-auto">
          Pagina pe care o cauți nu există sau a fost mutată.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary">Pagina principală</Button>
          <Link href="/servicii/debitare-laser" className="text-text-secondary hover:text-text-primary text-sm self-center">
            Servicii
          </Link>
          <Link href="/contact" className="text-text-secondary hover:text-text-primary text-sm self-center">
            Contact
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="text-text-secondary hover:text-text-primary text-sm self-center"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
