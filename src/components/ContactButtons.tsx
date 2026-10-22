import { CalendarDays, Mail, MessageCircle, Phone } from "lucide-react";
import { contactMethods } from "@/data/site";
import { cn } from "@/lib/utils";

type ContactButtonsProps = {
  variant?: "default" | "dark";
};

export function ContactButtons({ variant = "default" }: ContactButtonsProps) {
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
            className={cn(
              "focus-ring inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition",
              variant === "default" &&
                "border-royal/18 bg-white/82 text-navy shadow-sm backdrop-blur hover:border-gold hover:text-royal",
              variant === "dark" &&
                "border-white/70 bg-transparent text-white hover:border-white hover:bg-white/10"
            )}
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
