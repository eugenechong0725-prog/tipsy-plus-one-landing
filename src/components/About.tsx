import { SparkIcon, UsersIcon, CalendarCheckIcon } from "./icons";

const highlights = [
  {
    icon: SparkIcon,
    title: "Great Atmosphere",
    body: "Low lighting, curated music and signature cocktails crafted for the perfect night out.",
  },
  {
    icon: UsersIcon,
    title: "Private Event Friendly",
    body: "From intimate birthdays to full buy-outs — a flexible space tailored to your celebration.",
  },
  {
    icon: CalendarCheckIcon,
    title: "Easy Booking",
    body: "Table reservations and event enquiries — message us directly on WhatsApp.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-reveal relative border-t border-line/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-5">The Atmosphere</p>
          <h2 className="display text-4xl sm:text-5xl">
            A stylish place for drinks, music &amp; special nights
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/65">
            More than a bar — a destination for after-work drinks, private
            gatherings and the moments worth celebrating. Every detail is
            designed to make your night feel effortless.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="premium-card group rounded-2xl border border-line bg-ink-card/70 p-8"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-serif text-2xl font-medium text-cream">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
