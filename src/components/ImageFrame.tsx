import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageFrameProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  position?: string;
};

export function ImageFrame({
  src,
  alt,
  className,
  imageClassName,
  sizes = "(max-width: 1024px) 100vw, 48vw",
  position = "center"
}: ImageFrameProps) {
  return (
    <div className={cn("relative overflow-hidden bg-cream", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,253,249,0.36),rgba(255,253,249,0.02)_46%,rgba(6,27,73,0.16))]" />
      <span className="leaf-mark small right-5 top-5 rotate-12 opacity-35" aria-hidden="true" />
    </div>
  );
}
