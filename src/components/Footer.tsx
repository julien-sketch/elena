import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <span className="leaf-mark large -left-14 top-10 rotate-45" aria-hidden="true" />
      <div className="blue-wash -right-36 bottom-0 h-80 w-96 opacity-50" />
      <div className="container relative grid gap-10 py-14 md:grid-cols-[1.1fr_0.9fr_0.8fr]">
        <div>
          <p className="font-serif text-3xl font-semibold">{site.name}</p>
          <p className="mt-1 text-[0.68rem] font-medium uppercase tracking-[0.36em] text-white/66">
            Gestion de patrimoine
          </p>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/72">
            Conseil patrimonial indépendant, accompagnement sur-mesure et stratégie
            financière adaptée à vos projets de vie.
          </p>
        </div>

        <div className="space-y-4 text-sm text-white/78">
          <a className="flex items-start gap-3 transition hover:text-white" href={site.phoneHref}>
            <Phone size={17} className="mt-0.5" aria-hidden="true" />
            {site.phone}
          </a>
          <a className="flex items-start gap-3 transition hover:text-white" href={site.emailHref}>
            <Mail size={17} className="mt-0.5" aria-hidden="true" />
            {site.email}
          </a>
          <p className="flex items-start gap-3">
            <MapPin size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
            <span>{site.address}</span>
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <Link className="block text-white/78 transition hover:text-white" href="/mentions-legales">
            Mentions légales
          </Link>
          <Link className="block text-white/78 transition hover:text-white" href="/confidentialite">
            Confidentialité
          </Link>
          <a
            className="flex items-center gap-2 text-white/78 transition hover:text-white"
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={16} aria-hidden="true" />
            LinkedIn
          </a>
          <p className="pt-3 text-white/64">ORIAS : {site.orias}</p>
          <p className="text-white/64">SIREN : {site.siren}</p>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-5">
        <p className="container text-xs text-white/55">
          © {new Date().getFullYear()} {site.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
