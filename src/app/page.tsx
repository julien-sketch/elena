import type { Metadata } from "next";
import {
  Banknote,
  BriefcaseBusiness,
  GraduationCap,
  Landmark,
  Plane,
  ShieldCheck
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactButtons } from "@/components/ContactButtons";
import { CTASection } from "@/components/CTASection";
import { HeroVisual } from "@/components/HeroVisual";
import { ImageFrame } from "@/components/ImageFrame";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Conseillère en Gestion de Patrimoine à Brignais | Elena Berard",
  description:
    "Elena Berard accompagne particuliers et familles dans la gestion, l’optimisation et la transmission de leur patrimoine à Brignais."
};

const expertises = [
  {
    icon: Banknote,
    title: "Mieux placer votre argent",
    description:
      "Identifier les solutions cohérentes avec votre horizon, votre profil de risque et vos objectifs."
  },
  {
    icon: GraduationCap,
    title: "Études de vos enfants",
    description:
      "Anticiper les frais d’études et construire une stratégie progressive pour préparer l’avenir familial."
  },
  {
    icon: Plane,
    title: "Financer votre tour du monde",
    description:
      "Transformer un grand projet de vie en plan financier lisible, réaliste et suivi dans le temps."
  },
  {
    icon: ShieldCheck,
    title: "Transmission à vos enfants",
    description:
      "Préparer la transmission de votre patrimoine avec méthode, pédagogie et vision long terme."
  },
  {
    icon: Landmark,
    title: "Optimisation de budget",
    description:
      "Clarifier vos flux, vos charges et vos marges de manœuvre pour mieux piloter vos décisions."
  },
  {
    icon: BriefcaseBusiness,
    title: "Préparation retraite",
    description:
      "Structurer dès aujourd’hui les revenus et arbitrages qui soutiendront votre prochaine étape de vie."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero-shell py-16 sm:py-20 lg:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
          <div>
            <p className="eyebrow-line mb-9 text-xs font-semibold uppercase tracking-[0.34em] text-royal">
              À vos côtés pour concrétiser vos projets.
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[0.98] text-navy sm:text-7xl lg:text-8xl">
              Parce que vos projets méritent d&apos;être préparés.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              Je vous accompagne pour faire les bons choix financiers, protéger votre famille et préparer l&apos;avenir avec sérénité.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={site.calendly} external>
                Prendre RDV
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Découvrir les services
              </ButtonLink>
            </div>
            <div className="mt-7">
              <ContactButtons />
            </div>
          </div>

          <HeroVisual
            image="/images/elena-portrait-hero.jpg"
            label="Portrait souriant d'Elena Berard"
            priority
            position="center 34%"
          >
            <div className="card-elevated rounded-[2rem] p-7">
              <p className="text-sm font-semibold text-royal">Elena Berard</p>
              <p className="mt-4 font-serif text-3xl font-semibold leading-snug text-navy">
                Conseil clair, stratégie durable, accompagnement humain.
              </p>
            </div>
          </HeroVisual>
        </div>
      </section>

      <section id="expertises" className="editorial-section section-soft">
        <div className="container">
          <SectionTitle
            eyebrow="Expertises"
            title="Chaque étape de votre vie mérite des conseils adaptés."
            description="Achat immobilier, études des enfants, retraite, épargne ou nouveaux projets : chaque accompagnement est construit autour de ce qui est important pour vous."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {expertises.map((expertise) => (
              <ServiceCard key={expertise.title} {...expertise} />
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section section-cream">
        <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ImageFrame
            src="/images/elena-window.jpg"
            alt="Portrait professionnel d’Elena Berard"
            className="min-h-[520px] rounded-[46%_0_0_46%/52%_0_0_52%] shadow-soft"
            position="center 42%"
          />
          <div>
            <SectionTitle
              eyebrow="Accompagnement"
              title="Des conseils clairs pour avancer sereinement."
              description="Elena Berard accompagne les décisions qui comptent avec une approche claire, structurée et personnalisée."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Analyse globale", "Pédagogie", "Suivi dans le temps", "Solutions adaptées"].map(
                (item) => (
                  <div key={item} className="card-elevated rounded-2xl p-5">
                    <p className="font-semibold text-navy">{item}</p>
                  </div>
                )
              )}
            </div>
            <div className="mt-8">
              <ButtonLink href="/changer-de-carriere" variant="secondary">
                Changer de carrière
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-section section-soft">
        <div className="container">
          <SectionTitle
            eyebrow="Clients"
            title="Un accompagnement apprécié pour sa clarté"
            description="Des échanges simples, une vision structurée et des décisions prises avec confiance."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <TestimonialCard
              quote="Une approche très claire qui m’a permis de remettre de l’ordre dans mes priorités financières."
              name="Client particulier"
              detail="Préparation retraite"
            />
            <TestimonialCard
              quote="Elena a su traduire nos projets familiaux en décisions concrètes et compréhensibles."
              name="Famille accompagnée"
              detail="Transmission et études"
            />
            <TestimonialCard
              quote="Un premier rendez-vous rassurant, professionnel et sans jargon inutile."
              name="Entrepreneur"
              detail="Organisation patrimoniale"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
