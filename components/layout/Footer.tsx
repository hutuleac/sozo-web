import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin } from "lucide-react";
import { Logo } from "./Logo";
import { site, telLink, mailLink, mapsLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-bg-elevated border-t border-border mt-24">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Logo />
            <p className="text-text-secondary text-sm mt-4 leading-relaxed">
              Precizie în metal. Consultanță în fiecare proiect.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook SOZO PROJECT"
                className="w-9 h-9 flex items-center justify-center rounded border border-border hover:border-border-strong text-text-secondary hover:text-text-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn SOZO PROJECT"
                className="w-9 h-9 flex items-center justify-center rounded border border-border hover:border-border-strong text-text-secondary hover:text-text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-text-primary font-mono text-xs uppercase tracking-wider mb-4">
              Servicii
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/servicii/debitare-laser" className="text-text-secondary hover:text-accent transition-colors">Debitare Laser CNC</Link></li>
              <li><Link href="/servicii/prelucrare-abkant" className="text-text-secondary hover:text-accent transition-colors">Prelucrare Abkant CNC</Link></li>
              <li><Link href="/servicii/confectii-metalice" className="text-text-secondary hover:text-accent transition-colors">Confecții Metalice</Link></li>
              <li><Link href="/servicii/piese-industriale-la-comanda" className="text-text-secondary hover:text-accent transition-colors">Piese Industriale</Link></li>
              <li><Link href="/cere-oferta" className="text-text-secondary hover:text-accent transition-colors">Cere ofertă</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-text-primary font-mono text-xs uppercase tracking-wider mb-4">
              Companie
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/portofoliu" className="text-text-secondary hover:text-accent transition-colors">Portofoliu</Link></li>
              <li><Link href="/despre-noi" className="text-text-secondary hover:text-accent transition-colors">Despre noi</Link></li>
              <li><Link href="/faq" className="text-text-secondary hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="text-text-secondary hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-text-secondary hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-text-primary font-mono text-xs uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-text-muted" />
                <a href={mapsLink} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors">{site.address.full}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-text-muted" />
                <a href={telLink} className="text-text-secondary hover:text-accent transition-colors">{site.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-text-muted" />
                <a href={mailLink} className="text-text-secondary hover:text-accent transition-colors">{site.email}</a>
              </li>
              <li className="flex items-start gap-2 text-text-secondary">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-text-muted" />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-subtle mt-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-text-muted">
            {site.legalName} · CUI {site.cui} · {site.reg} · © {new Date().getFullYear()} SOZO PROJECT.
          </p>
          <div className="flex gap-6 text-xs text-text-muted">
            <Link href="/politica-de-confidentialitate" className="hover:text-text-secondary transition-colors">Politică de confidențialitate</Link>
            <Link href="/cookies" className="hover:text-text-secondary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
