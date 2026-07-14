import { site, whatsappLink } from "@/lib/config";
import { WhatsAppIcon, MapPinIcon, ClockIcon } from "./icons";
import SocialButtons from "./SocialButtons";

export default function Contact() {
  return (
    <section id="contact" className="section-reveal relative border-t border-line/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-5">Get in Touch</p>
            <h2 className="display text-4xl sm:text-5xl">
              Ready to reserve your night?
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/65">
              Message us on WhatsApp for table reservations and event enquiries
              — we&apos;ll get back to you as soon as we can.
            </p>

            <div className="mt-9">
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

            <div className="mt-8">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-cream/40">
                Follow us
              </p>
              <SocialButtons />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <InfoCard icon={MapPinIcon} title="Location">
              <p className="text-lg text-cream/80">{site.location.label}</p>
              <p className="mt-1 text-sm text-cream/50">{site.location.venue}</p>
              <a
                href={site.location.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button mt-5 inline-flex items-center gap-2 rounded-full border border-cream/25 px-5 py-2.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:border-gold/70 hover:text-gold"
              >
                <MapPinIcon className="h-4 w-4" />
                Open in Google Maps
              </a>
            </InfoCard>

            <InfoCard icon={ClockIcon} title="Opening Hours">
              <ul className="space-y-1.5">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4 text-sm">
                    <span className="text-cream/50">{h.day}</span>
                    <span className="text-cream/80">{h.time}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="premium-card rounded-2xl border border-line bg-ink-card/70 p-7">
      <div className="mb-4 flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="font-serif text-xl font-medium text-cream">{title}</h3>
      </div>
      {children}
    </div>
  );
}
