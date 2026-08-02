import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Elena Berard",
  description: "Politique de confidentialité et traitement des données du site Elena Berard."
};

export default function PrivacyPage() {
  return (
    <section className="hero-shell py-20">
      <div className="container max-w-4xl">
        <SectionTitle eyebrow="Données personnelles" title="Politique de confidentialité" />
        <div className="card-elevated mt-10 space-y-8 rounded-[2rem] p-8 leading-8 text-muted">
          <PrivacyBlock title="Données collectées">
            <p>
              Le formulaire de contact peut collecter votre nom, prénom, email,
              téléphone et message afin de répondre à votre demande.
            </p>
          </PrivacyBlock>
          <PrivacyBlock title="Finalité du traitement">
            <p>
              Les données transmises servent uniquement à reprendre contact avec
              vous et à qualifier votre demande d’accompagnement patrimonial ou
              de changement de carrière.
            </p>
          </PrivacyBlock>
          <PrivacyBlock title="Durée de conservation">
            <p>
              Les informations sont conservées pour la durée nécessaire au traitement
              de votre demande, sauf obligation légale contraire.
            </p>
          </PrivacyBlock>
          <PrivacyBlock title="Vos droits">
            <p>
              Vous pouvez demander l’accès, la rectification ou la suppression de
              vos données en écrivant à {site.email}.
            </p>
          </PrivacyBlock>
          <PrivacyBlock title="Contact">
            <p>
              Pour toute question relative aux données personnelles, contactez
              {` ${site.name}`} à l’adresse {site.email}.
            </p>
          </PrivacyBlock>
        </div>
      </div>
    </section>
  );
}

function PrivacyBlock({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-serif text-2xl font-semibold text-navy">{title}</h2>
      <div className="mt-3 text-sm">{children}</div>
    </div>
  );
}
