import { CalendarDays, Mail, MessageCircle, Phone } from "lucide-react";
import { contactMethods } from "@/data/site";

export function ContactButtons() {
  const items = contactMethods.filter((item) => item.kind !== "calendar");

  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => {
        const Icon = iconByKind[item.kind];
        return (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full border border-royal/18 bg-white/82 px-4 text-sm font-semibold text-navy shadow-sm backdrop-blur transition hover:border-gold hover:text-royal"
          >
            <Icon size={16} aria-hidden="true" />
            {item.label}
          </a>
        );
      })}
    </div>
  );
}

const iconByKind = {
  calendar: CalendarDays,
  phone: Phone,
  whatsapp: MessageCircle,
  email: Mail
} as const;
