import { CalendarDays, Mail, MessageCircle, Phone } from "lucide-react";
import { contactMethods } from "@/data/site";

const iconByKind = {
  calendar: CalendarDays,
  phone: Phone,
  whatsapp: MessageCircle,
  email: Mail
} as const;

export function ContactMethodCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {contactMethods.map((method) => {
        const Icon = iconByKind[method.kind];

        return (
          <a
            key={method.label}
            href={method.href}
            target={method.href.startsWith("http") ? "_blank" : undefined}
            rel={method.href.startsWith("http") ? "noreferrer" : undefined}
            className="focus-ring card-elevated group rounded-[1.5rem] p-6 transition hover:-translate-y-0.5 hover:border-gold/70"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-royal/10 text-royal transition group-hover:bg-navy group-hover:text-white">
                <Icon size={21} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-navy">{method.label}</span>
                <span className="mt-1 block text-base font-semibold text-ink group-hover:text-royal">
                  {method.value}
                </span>
                <span className="mt-3 block text-sm leading-6 text-muted">
                  {method.description}
                </span>
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
}
