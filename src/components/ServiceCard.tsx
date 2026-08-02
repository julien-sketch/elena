import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <article className="card-elevated group rounded-[1.5rem] p-7 transition hover:-translate-y-1 hover:border-gold/70 hover:shadow-soft">
      <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-royal/10 text-royal transition group-hover:bg-navy group-hover:text-white">
        <Icon size={23} aria-hidden="true" />
      </div>
      <h3 className="font-serif text-2xl font-semibold leading-tight text-navy">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted">{description}</p>
    </article>
  );
}
