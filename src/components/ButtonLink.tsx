import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  external?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  className
}: ButtonLinkProps) {
  const classes = cn(
    "focus-ring inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-7 text-sm font-semibold transition",
    variant === "primary" &&
      "bg-royal text-white shadow-button hover:-translate-y-0.5 hover:bg-navy",
    variant === "secondary" &&
      "border border-royal/55 bg-white/70 text-royal backdrop-blur hover:border-navy hover:text-navy",
    variant === "light" &&
      "bg-white text-navy shadow-card hover:-translate-y-0.5 hover:text-royal",
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
        <ArrowRight size={16} aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      <ArrowRight size={16} aria-hidden="true" />
    </Link>
  );
}
