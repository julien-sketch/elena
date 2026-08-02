type TestimonialCardProps = {
  quote: string;
  name: string;
  detail: string;
};

export function TestimonialCard({ quote, name, detail }: TestimonialCardProps) {
  return (
    <figure className="card-elevated rounded-[1.5rem] p-7">
      <div className="mb-5 h-px w-16 bg-gold" />
      <blockquote className="text-base leading-8 text-ink">&ldquo;{quote}&rdquo;</blockquote>
      <figcaption className="mt-6 border-t border-navy/10 pt-5">
        <p className="font-semibold text-navy">{name}</p>
        <p className="mt-1 text-sm text-muted">{detail}</p>
      </figcaption>
    </figure>
  );
}
