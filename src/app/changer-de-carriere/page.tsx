import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Compass, Sparkles, Users } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { HeroVisual } from "@/components/HeroVisual";
import { ImageFrame } from "@/components/ImageFrame";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Devenir Conseiller en Gestion de Patrimoine | Elena Berard",
  description:
    "Changer de carrière vers le métier de conseiller en gestion de patrimoine avec un accompagnement humain, structuré et concret."
};

const benefits = [
  "Découvrir le métier de conseiller en gestion de patrimoine",
  "Comprendre les compétences clés et la posture attendue",
  "Évaluer votre projet de reconversion avec lucidité",
  "Identifier les prochaines étapes pour avancer sereinement"
];

export default function CareerPage() {
  return (
    <>
      <section className="hero-shell py-16 sm:py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow-line mb-9 text-xs font-semibold uppercase tracking-[0.34em] text-royal">
              Changer de carrière
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[1.02] text-navy sm:text-7xl">
              Changement de carrière vers le métier de conseiller en gestion de patrimoine
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              Un parcours professionnel peut devenir un projet de vie. Elena vous aide
              à comprendre le métier, ses exigences et les étapes pour vous projeter.
            </p>
            <a
              href="#contact"
              className="focus-ring mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-royal px-7 text-sm font-semibold text-white shadow-button transition hover:bg-navy"
            >
              Être recontacté
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <HeroVisual
            image="/images/elena-standing.jpg"
            label="Elena Berard en posture professionnelle"
            priority
            position="center 28%"
          />
        </div>
      </section>

      <section className="editorial-section section-soft">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionTitle
            eyebrow="Reconversion"
            title="Un métier de conseil, de confiance et d’impact"
            description="La gestion de patrimoine réunit écoute, analyse, pédagogie et accompagnement long terme. Une reconversion réussie commence par une vision claire de la réalité du métier."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="card-elevated rounded-[1.5rem] p-6">
                <CheckCircle2 className="text-royal" size={22} aria-hidden="true" />
                <p className="mt-4 font-semibold leading-7 text-navy">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section section-cream">
        <div className="container grid gap-8 lg:grid-cols-3">
          {[
            {
              icon: Compass,
              title: "Clarifier",
              text: "Mettre des mots sur votre envie de changement et votre rapport au conseil."
            },
            {
              icon: Users,
              title: "Comprendre",
              text: "Explorer les missions, les échanges clients et la dynamique commerciale du métier."
            },
            {
              icon: Sparkles,
              title: "Projeter",
              text: "Identifier un chemin réaliste pour passer de l’intention à l’action."
            }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="card-elevated rounded-[1.5rem] p-8">
                <Icon className="text-royal" size={28} aria-hidden="true" />
                <h2 className="mt-6 font-serif text-3xl font-semibold text-navy">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="contact" className="editorial-section section-soft">
        <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionTitle
              eyebrow="Contact"
              title="Échanger sur votre projet de changement"
              description="Décrivez votre situation, votre parcours et ce que vous souhaitez comprendre. Elena vous répondra pour organiser un premier échange."
            />
            <ImageFrame
              src="/images/elena-career-motion.jpg"
              alt="Accompagnement professionnel"
              className="mt-8 min-h-[320px] rounded-[46%_0_0_46%/52%_0_0_52%] shadow-card"
              position="center 48%"
            />
          </div>
          <ContactForm />
        </div>
      </section>

      <CTASection
        title="Un échange peut clarifier votre prochaine étape"
        description="Que votre projet soit encore flou ou déjà avancé, l’important est de le regarder avec méthode."
      />
    </>
  );
}
