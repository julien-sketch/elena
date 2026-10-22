import type { Metadata } from "next";
import { BadgeCheck, LockKeyhole, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactMethodCards } from "@/components/ContactMethodCards";
import { ContactRequestForm } from "@/components/ContactRequestForm";
import { ImageFrame } from "@/components/ImageFrame";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact et rendez-vous | Elena Berard",
  description:
    "Contactez Elena Berard pour planifier un premier rendez-vous en gestion de patrimoine, par Calendly, téléphone, WhatsApp, email ou formulaire."
};

const trustItems = [
  {
    icon: BadgeCheck,
    title: "Conseil encadré",
    text: `ORIAS ${site.orias} · SIREN ${site.siren}`
  },
  {
    icon: LockKeyhole,
    title: "Échange confidentiel",
    text: "Votre situation est abordée avec discrétion et pédagogie."
  },
  {
    icon: MapPin,
    title: "Basée à Brignais",
    text: site.address
  }
];

export default function ContactPage() {
  return (
    <>
      <section className="hero-shell py-16 sm:py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="eyebrow-line mb-9 text-xs font-semibold uppercase tracking-[0.34em] text-royal">
              Contact
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[1.02] text-navy sm:text-7xl">
              Planifier un premier échange patrimonial
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              Choisissez le canal le plus simple pour vous. L&apos;objectif du premier
              échange est de comprendre votre situation, vos priorités et la
              pertinence d&apos;un accompagnement.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={site.calendly} external>
                Prendre rendez-vous
              </ButtonLink>
              <ButtonLink href={site.phoneHref} variant="secondary">
                Appeler maintenant
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-5">
            <ImageFrame
              src="/images/elena-notebook.jpg"
              alt="Carnet de rendez-vous pour préparer un échange patrimonial"
              className="min-h-[280px] rounded-[2rem] shadow-soft"
              position="center 46%"
            />
            <ContactMethodCards />
          </div>
        </div>
      </section>

      <section className="editorial-section section-soft">
        <div className="container grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <SectionTitle
              eyebrow="Demande qualifiée"
              title="Décrire votre situation en quelques mots"
              description="Le formulaire permet de préparer un échange plus utile, sans demander d'informations inutiles."
            />
            <div className="mt-8 grid gap-4">
              {trustItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="card-elevated flex gap-4 rounded-[1.5rem] p-5"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white text-royal">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="text-base font-semibold text-navy">{item.title}</h2>
                      <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <ContactRequestForm />
        </div>
      </section>
    </>
  );
}
