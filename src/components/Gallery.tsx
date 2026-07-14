import { whatsappLink } from "@/lib/config";
import {
  galleryNightImages,
  gallerySpaceImages,
  type SiteImage,
} from "@/lib/images";
import BarPhoto from "./BarPhoto";
import { WhatsAppIcon } from "./icons";

export default function Gallery() {
  return (
    <>
      <GalleryBlock
        id="gallery"
        eyebrow="The Space"
        title="A room made for one more round"
        copy="Warm bar lighting, live music and intimate lounge corners — the TPO atmosphere before guests even make a booking."
        images={gallerySpaceImages}
        showCta={false}
      />
      <GalleryBlock
        id="gallery-nights"
        eyebrow="Nights & Views"
        title="From the door to last call"
        copy="Entrance glow, window seats and nights at Megah Rise — the moments that make Tipsy Plus One feel like the place to be."
        images={galleryNightImages}
        showCta
      />
    </>
  );
}

function GalleryBlock({
  id,
  eyebrow,
  title,
  copy,
  images,
  showCta,
}: {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  images: SiteImage[];
  showCta?: boolean;
}) {
  const [featured, ...supporting] = images;

  return (
    <section
      id={id}
      className="section-reveal relative border-t border-line/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow mb-5">{eyebrow}</p>
            <h2 className="display text-4xl sm:text-5xl">{title}</h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-cream/60 lg:ml-auto">
            {copy}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-[1.08fr_0.92fr]">
          <BarPhoto
            src={featured.src}
            alt={featured.alt}
            caption={featured.caption}
            category={featured.category}
            aspect="aspect-[4/3] lg:aspect-auto lg:min-h-[420px]"
            overlayStrength={
              featured.src.includes("lounge") ? "subtle" : "medium"
            }
            imgClassName={
              featured.src.includes("lounge") ? "photo-lift" : ""
            }
            className="premium-card rounded-2xl border border-line"
            priority={id === "gallery"}
          />

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {supporting.map((img) => (
              <BarPhoto
                key={img.src}
                src={img.src}
                alt={img.alt}
                caption={img.caption}
                category={img.category}
                aspect="aspect-[4/5] lg:aspect-auto"
                overlayStrength="subtle"
                className="premium-card rounded-2xl border border-line lg:min-h-[202px]"
              />
            ))}
          </div>
        </div>

        {showCta && (
          <div className="mt-10 flex justify-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button premium-glow inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Book on WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
