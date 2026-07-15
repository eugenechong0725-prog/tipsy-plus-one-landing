import Image from "next/image";
import { site, whatsappLink } from "@/lib/config";
import { WhatsAppIcon } from "./icons";
import SocialButtons from "./SocialButtons";

export default function Footer() {
  return (
    <footer className="border-t border-line/60 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <Image
            src={site.logo}
            alt={`${site.shortName} logo`}
            width={64}
            height={60}
            className="h-14 w-auto object-contain"
          />
          <p className="font-serif text-lg font-semibold tracking-[0.12em] text-cream sm:tracking-[0.18em]">
            {site.wordmark}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.25em] text-cream/40">
            {site.tagline}
          </p>
          <div className="mt-4 max-w-sm space-y-2 text-center text-sm leading-relaxed text-cream/50 sm:text-left">
            <p>{site.location.venue}</p>
            <p>
              <span className="text-cream/40">Phone: </span>
              <a
                href={`tel:+${site.whatsappNumber}`}
                className="text-cream/70 transition-colors hover:text-gold"
              >
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <span className="text-cream/40">Email: </span>
              <a
                href={`mailto:${site.email}`}
                className="text-cream/70 transition-colors hover:text-gold"
              >
                {site.email}
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 sm:items-end">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book on WhatsApp"
            className="premium-button inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-cream/70 transition-colors hover:border-gold/60 hover:text-gold"
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>
          <SocialButtons layout="stack" size="sm" />
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-6xl px-5 text-center text-xs text-cream/30 sm:px-8">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
