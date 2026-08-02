import Image from "next/image";

type HeroVisualProps = {
  image: string;
  label: string;
  children?: React.ReactNode;
  priority?: boolean;
  position?: string;
};

export function HeroVisual({
  image,
  label,
  children,
  priority,
  position = "center"
}: HeroVisualProps) {
  return (
    <div
      className="relative min-h-[430px] overflow-hidden rounded-[46%_0_0_46%/52%_0_0_52%] bg-cream lg:min-h-[570px]"
    >
      <Image
        src={image}
        alt={label}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 52vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,253,249,0.72)_0%,rgba(255,253,249,0.08)_44%,rgba(255,253,249,0.32)_100%)]" />
      <div className="blue-wash -bottom-40 -left-8 h-[25rem] w-[28rem]" />
      <div className="blue-wash -bottom-52 right-16 h-[31rem] w-[31rem] opacity-80" />
      <span className="leaf-mark large right-2 top-28 rotate-12" aria-hidden="true" />
      <span className="leaf-mark small left-12 top-12 -rotate-12 opacity-35" aria-hidden="true" />
      {children ? (
        <div className="absolute inset-x-5 bottom-8 sm:left-auto sm:right-7 sm:w-[30rem]">
          {children}
        </div>
      ) : null}
    </div>
  );
}
