type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

export function FAQ({ items }: FAQProps) {
  return (
    <div className="card-elevated divide-y divide-navy/10 rounded-[2rem]">
      {items.map((item) => (
        <details key={item.question} className="group p-6">
          <summary className="cursor-pointer list-none font-semibold text-navy">
            <span className="flex items-center justify-between gap-6">
              {item.question}
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cream text-royal transition group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
