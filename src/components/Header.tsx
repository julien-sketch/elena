import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { navigation, site } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-ivory/92 backdrop-blur-2xl">
      <div className="container relative flex min-h-24 items-center justify-between gap-5">
        <span className="leaf-mark large -left-24 -top-16 hidden rotate-[58deg] opacity-45 lg:block" aria-hidden="true" />
        <Link href="/" className="focus-ring relative rounded-sm pl-12 sm:pl-0">
          <span className="block font-serif text-[2rem] font-semibold leading-none text-navy sm:text-4xl">
            Elena Bérard
          </span>
          <span className="mt-1 block text-[0.68rem] font-medium uppercase tracking-[0.48em] text-royal sm:text-xs">
            Gestion de patrimoine
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-sm border-b border-transparent pb-2 text-[0.95rem] font-medium text-ink/80 transition hover:border-royal hover:text-royal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={site.calendly}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-navy px-4 text-sm font-semibold text-white shadow-button transition hover:-translate-y-0.5 hover:bg-royal sm:px-7 sm:text-base"
        >
          <CalendarDays size={16} aria-hidden="true" />
          <span className="sm:hidden">Rendez-vous</span>
          <span className="hidden sm:inline">Prendre rendez-vous</span>
        </a>
      </div>
    </header>
  );
}
