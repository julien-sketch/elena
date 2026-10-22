import { ButtonLink } from "@/components/ButtonLink";
import { ContactButtons } from "@/components/ContactButtons";
import { site } from "@/data/site";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Parlons de vos projets",
  description = "Je prends le temps de comprendre votre situation, vos objectifs et ce qui compte vraiment pour vous."
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white">
      <div className="blue-wash -bottom-48 -left-20 h-[28rem] w-[32rem] opacity-70" />
      <span className="leaf-mark large right-10 top-12 rotate-12" aria-hidden="true" />
      <div className="container relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="eyebrow-line mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-white/64">
            Rendez-vous découverte
          </p>
          <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-6xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">{description}</p>
        </div>
        <div className="rounded-[2rem] bg-white/12 p-6 shadow-soft ring-1 ring-white/14 backdrop-blur">
          <ButtonLink href={site.calendly} external className="w-full text-white">
            Prendre rendez-vous
          </ButtonLink>
          <div className="mt-5">
            <ContactButtons variant="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
