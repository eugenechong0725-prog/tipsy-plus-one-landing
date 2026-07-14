import type { ImageCategory } from "@/lib/images";
import { categoryLabels } from "@/lib/images";

type BarPhotoProps = {
  src: string;
  alt: string;
  caption?: string;
  category?: ImageCategory;
  /** Tailwind aspect-ratio class, e.g. "aspect-[4/5]" */
  aspect?: string;
  /** Show category badge + caption overlay on hover */
  showOverlay?: boolean;
  /** Stronger gradient for hero backgrounds */
  overlayStrength?: "subtle" | "medium" | "strong";
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

const overlayClasses = {
  subtle: "from-ink/35 via-ink/5 to-transparent",
  medium: "from-ink/75 via-ink/20 to-transparent",
  strong: "from-ink/90 via-ink/50 to-ink/20",
};

export default function BarPhoto({
  src,
  alt,
  caption,
  category,
  aspect = "aspect-[4/5]",
  showOverlay = true,
  overlayStrength = "medium",
  className = "",
  imgClassName = "",
  priority = false,
}: BarPhotoProps) {
  return (
    <figure className={`group relative overflow-hidden ${aspect} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        className={`premium-image motion-parallax h-full w-full object-cover ${imgClassName}`}
      />

      {showOverlay && (
        <>
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${overlayClasses[overlayStrength]} opacity-80 transition-opacity duration-300 group-hover:opacity-95`}
          />
          {(category || caption) && (
            <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
              {category && (
                <span className="mb-1.5 inline-block rounded-full border border-gold/30 bg-ink/60 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
                  {categoryLabels[category]}
                </span>
              )}
              {caption && (
                <p className="font-serif text-base font-medium text-cream sm:text-lg">
                  {caption}
                </p>
              )}
            </figcaption>
          )}
        </>
      )}
    </figure>
  );
}
