import { eventSpaceImages } from "@/lib/images";
import BarPhoto from "./BarPhoto";

export default function EventSpaceGallery() {
  if (eventSpaceImages.length === 0) {
    return (
      <div className="grid gap-4">
        <PhotoSlot
          label="Main event space photo"
          aspect="aspect-[4/3] lg:aspect-[5/4]"
        />
        <div className="grid grid-cols-2 gap-4">
          <PhotoSlot label="Event photo 2" aspect="aspect-[4/3]" />
          <PhotoSlot label="Event photo 3" aspect="aspect-[4/3]" />
        </div>
        <p className="text-center text-xs leading-relaxed text-cream/40">
          Event space photos will be added soon.
        </p>
      </div>
    );
  }

  const [featured, ...supporting] = eventSpaceImages;

  return (
    <div className="grid gap-4">
      <BarPhoto
        src={featured.src}
        alt={featured.alt}
        caption={featured.caption}
        category={featured.category}
        aspect="aspect-[4/3] lg:aspect-[5/4]"
        overlayStrength="medium"
        className="premium-card rounded-2xl border border-line"
      />
      {supporting.length === 1 && (
        <BarPhoto
          src={supporting[0].src}
          alt={supporting[0].alt}
          caption={supporting[0].caption}
          category={supporting[0].category}
          aspect="aspect-[4/3]"
          overlayStrength="subtle"
          className="premium-card rounded-2xl border border-line"
        />
      )}
      {supporting.length > 1 && (
        <div className="grid grid-cols-2 gap-4">
          {supporting.map((img) => (
            <BarPhoto
              key={img.src}
              src={img.src}
              alt={img.alt}
              caption={img.caption}
              category={img.category}
              aspect="aspect-[4/3]"
              overlayStrength="subtle"
              className="premium-card rounded-2xl border border-line"
            />
          ))}
        </div>
      )}
    </div>
  );
}

function PhotoSlot({ label, aspect }: { label: string; aspect: string }) {
  return (
    <div
      className={`premium-card relative flex ${aspect} items-center justify-center overflow-hidden rounded-2xl border border-dashed border-line/90 bg-[linear-gradient(145deg,rgba(21,19,17,0.95),rgba(10,10,10,0.88))]`}
      aria-label={label}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(201,162,75,0.08),transparent_62%)]" />
      <div className="relative px-6 text-center">
        <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 text-gold/70">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5"
            aria-hidden
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="8.5" cy="10" r="1.5" fill="currentColor" stroke="none" />
            <path d="m3 16 5-5 4 4 3-3 6 6" />
          </svg>
        </span>
        <p className="text-[11px] uppercase tracking-[0.22em] text-cream/35">
          Photo coming soon
        </p>
      </div>
    </div>
  );
}
