import type { Metadata } from "next";
import {
  BadgeEuro,
  ChartNoAxesCombined,
  CircleDollarSign,
  FileText,
  HeartHandshake,
  Home,
  PiggyBank,
  Scale,
  Shield
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { HeroVisual } from "@/components/HeroVisual";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Gestion de Patrimoine, Placement et Optimisation Financière | Elena Berard",
  description:
    "Services de conseil patrimonial : placement, budget, retraite, transmission, protection familiale et stratégie long terme."
};

const services = [
  {
    icon: ChartNoAxesCombined,
    title: "Faire le point sur votre situation",
    description:
      "Prenons le temps d'analyser votre situation actuelle afin d'identifier les solutions les plus adaptées à vos projets et à vos objectifs."
  },
  {
    icon: PiggyBank,
    title: "Faire grandir votre épargne",
    description:
      "Que vous souhaitiez préparer un projet, votre retraite ou simplement faire fructifier votre argent, nous sélectionnons ensemble les solutions qui vous correspondent."
  },
  {
    icon: Home,
    title: "Réaliser vos projets immobiliers",
    description:
      "Résidence principale, investissement locatif ou nouveau projet de vie : bénéficiez d'un accompagnement pour prendre les bonnes décisions."
  },
  {
    icon: BadgeEuro,
    title: "Retrouver de la sérénité avec votre budget",
    description:
      "Mieux comprendre vos dépenses, dégager une capacité d'épargne et avancer sereinement vers vos objectifs."
  },
  {
    icon: Shield,
    title: "Protéger ceux qui comptent pour vous",
    description:
      "Préparer les imprévus, sécuriser votre famille et construire un avenir plus serein grâce à des solutions adaptées."
  },
  {
    icon: Scale,
    title: "Préparer l'avenir de vos proches",
    description:
      "Anticiper la transmission de votre patrimoine et organiser votre succession en toute simplicité."
  }
];

const faqs = [
  {
    question: "À qui s’adresse l’accompagnement ?",
    answer:
      "Aux particuliers, familles, indépendants et dirigeants qui souhaitent clarifier leur situation patrimoniale et prendre de meilleures décisions financières."
  },
  {
    question: "Le premier rendez-vous est-il engageant ?",
    answer:
      "Le rendez-vous découverte sert à comprendre vos objectifs, votre situation et la pertinence d’un accompagnement. Il permet d’avancer avec transparence."
  },
  {
    question: "Quels sujets peut-on aborder ?",
    answer:
      "Placements, retraite, budget, financement d’un projet, études des enfants, transmission, protection familiale ou réorganisation globale du patrimoine."
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="hero-shell py-16 sm:py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow-line mb-9 text-xs font-semibold uppercase tracking-[0.34em] text-royal">
              Services
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[1.02] text-navy sm:text-7xl">
              Des solutions pour donner vie à vos projets.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              Épargne, retraite, immobilier, protection de votre famille… Ensemble, nous trouvons les solutions les plus adaptées à votre situation et à vos objectifs.
            </p>
            <div className="mt-8">
              <ButtonLink href={site.calendly} external>
                Prendre RDV
              </ButtonLink>
            </div>
          </div>
          <HeroVisual
            image="/images/elena-rendez-vous.jpg"
            label="Rendez-vous de conseil patrimonial"
            priority
            position="center 62%"
          />
        </div>
      </section>

      <section id="expertises" className="editorial-section section-soft">
        <div className="container">
          <SectionTitle
            eyebrow="Expertises"
            title="Des conseils pensés pour votre quotidien."
            description="Chaque recommandation répond à un objectif concret : protéger votre famille, préparer un achat immobilier, développer votre épargne ou anticiper l'avenir."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section section-cream">
        <div className="container grid gap-8 lg:grid-cols-3">
          {[
            {
              icon: CircleDollarSign,
              title: "Comprendre",
              text: "Analyse de votre situation actuelle, de vos contraintes et de vos ambitions."
            },
            {
              icon: FileText,
              title: "Structurer",
              text: "Construction d’une stratégie claire avec des priorités, des étapes et des arbitrages."
            },
            {
              icon: HeartHandshake,
              title: "Suivre",
              text: "Accompagnement dans le temps pour ajuster la stratégie quand votre vie évolue."
            }
          ].map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="card-elevated rounded-[1.5rem] p-8">
                <Icon className="text-royal" size={28} aria-hidden="true" />
                <h2 className="mt-6 font-serif text-3xl font-semibold text-navy">{step.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted">{step.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="editorial-section section-soft">
        <div className="container">
          <SectionTitle
            eyebrow="Questions fréquentes"
            title="Avant de prendre rendez-vous"
            align="center"
          />
          <div className="mx-auto mt-10 max-w-4xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <CTASection title="Parlons ensemble de vos projets" />
    </>
  );
}
