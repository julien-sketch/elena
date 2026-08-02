import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Mentions légales | Elena Berard",
  description: "Mentions légales du site Elena Berard, conseillère en gestion de patrimoine."
};

export default function LegalPage() {
  return (
    <section className="hero-shell py-20">
      <div className="container max-w-4xl">
        <SectionTitle eyebrow="Informations légales" title="Mentions légales" />
        <div className="card-elevated mt-10 space-y-8 rounded-[2rem] p-8 leading-8 text-muted">
          <LegalBlock title="Éditeur du site">
            <p>{site.name}</p>
            <p>{site.title}</p>
            <p>{site.address}</p>
            <p>Email : {site.email}</p>
            <p>Téléphone : {site.phone}</p>
          </LegalBlock>
          <LegalBlock title="Informations professionnelles">
            <p>ORIAS : {site.orias}</p>
            <p>SIREN : {site.siren}</p>
          </LegalBlock>
          <LegalBlock title="Hébergement">
            <p>
              Site prévu pour un hébergement sur Vercel Inc., 440 N Barranca Ave
              #4133, Covina, CA 91723, États-Unis.
            </p>
          </LegalBlock>
          <LegalBlock title="Propriété intellectuelle">
            <p>
              Les contenus présents sur ce site sont fournis à titre provisoire.
              Toute reproduction ou réutilisation sans autorisation préalable est interdite.
            </p>
          </LegalBlock>
        </div>
      </div>
    </section>
  );
}

function LegalBlock({
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
