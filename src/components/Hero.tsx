import { whatsappLink } from "@/lib/config";
import { heroImage } from "@/lib/images";
import { WhatsAppIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-dvh items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImage.src}
          alt={heroImage.alt}
          className="hero-bg-motion h-full w-full object-cover object-center brightness-[1.12]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-ink/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/35" />
        <div className="absolute inset-0 bg-ink/10" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pt-28 pb-16 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow hero-reveal mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-gold/60" />
            Bar · Lounge · Event Space
          </p>

          <h1 className="display hero-reveal hero-reveal-delay-1 text-[2.75rem] leading-[1.03] sm:text-7xl">
            Reserve Your Night
            <span className="mt-1 block text-gold">at Tipsy Plus One</span>
          </h1>

          <p className="hero-reveal hero-reveal-delay-2 mt-6 max-w-lg text-base leading-relaxed text-cream/70 sm:text-lg">
            Book your table or enquire about private events, birthdays, parties and
            celebrations — drinks, music and unforgettable nights at TPO.
          </p>

          <div className="hero-reveal hero-reveal-delay-3 mt-9">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button premium-glow inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-4 text-sm font-semibold tracking-wide text-ink shadow-glow"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Book on WhatsApp
            </a>
          </div>

          <div className="hero-reveal hero-reveal-delay-3 mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-cream/40">
            <span>Open Daily · 11 AM – 1 AM</span>
            <span className="hidden h-3 w-px bg-line sm:block" />
            <span>Signature Cocktails</span>
            <span className="hidden h-3 w-px bg-line sm:block" />
            <span>Private Events</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        <span className="scroll-cue text-[10px] uppercase tracking-[0.4em] text-cream/40">
          Scroll
        </span>
      </div>
    </section>
  );
}
