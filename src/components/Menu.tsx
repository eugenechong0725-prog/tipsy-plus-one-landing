import { whatsappLink, site } from "@/lib/config";
import { menuHighlights, type MenuItem } from "@/lib/menu";
import { WhatsAppIcon } from "./icons";

export default function Menu() {
  const drinks = menuHighlights.filter((item) => item.kind === "drink");
  const foods = menuHighlights.filter((item) => item.kind === "food");

  return (
    <section
      id="menu"
      className="section-reveal relative border-t border-line/60 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-5">Our Menu</p>
          <h2 className="display text-4xl sm:text-5xl">Drinks &amp; bites</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/65">
            Signature pours and kitchen favourites from Tipsy Plus One — more
            coming soon.
          </p>
          <a
            href={whatsappLink(site.whatsappMenuMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button premium-glow mt-8 inline-flex items-center justify-center gap-2.5 rounded-full border border-gold/40 px-7 py-4 text-sm font-semibold tracking-wide text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            <WhatsAppIcon className="h-5 w-5" />
            View Menu
          </a>
        </div>

        <MenuGroup title="Drinks" items={drinks} />
        <MenuGroup title="Food" items={foods} />
      </div>
    </section>
  );
}

function MenuGroup({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <div className="mt-12 sm:mt-16">
      <p className="mb-5 text-center text-xs uppercase tracking-[0.25em] text-cream/40">
        {title}
      </p>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  const hasImage = Boolean(item.image);
  const hasName = Boolean(item.name.trim());

  return (
    <article className="premium-card group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-ink-card/70 sm:rounded-2xl">
      <div className="relative aspect-square overflow-hidden bg-black sm:aspect-[3/4]">
        {hasImage && item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={item.image}
            src={item.image}
            alt={hasName ? item.name : `${item.category} preview`}
            className="premium-image motion-parallax h-full w-full object-cover object-center"
          />
        ) : (
          <PhotoSlot label={`${item.category} photo coming soon`} />
        )}
      </div>
      <div className="flex min-h-[110px] flex-1 flex-col p-3.5 sm:min-h-[140px] sm:p-5">
        <p className="text-[8px] uppercase tracking-[0.2em] text-gold/80 sm:text-[10px] sm:tracking-[0.25em]">
          {item.category}
        </p>
        <h3 className="mt-1.5 font-serif text-base font-medium leading-tight text-cream sm:mt-2 sm:text-xl">
          {hasName ? item.name : "Coming soon"}
        </h3>
        {item.description.trim() ? (
          <p className="mt-1.5 text-[11px] leading-relaxed text-cream/60 sm:mt-2 sm:text-sm">
            {item.description}
          </p>
        ) : !hasName ? (
          <p className="mt-1.5 text-[11px] leading-relaxed text-cream/40 sm:mt-2 sm:text-sm">
            Name &amp; details to be confirmed
          </p>
        ) : null}
      </div>
    </article>
  );
}

function PhotoSlot({ label }: { label: string }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(145deg,rgba(21,19,17,0.95),rgba(10,10,10,0.88))]"
      aria-label={label}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(201,162,75,0.08),transparent_62%)]" />
      <div className="relative px-4 text-center">
        <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-gold/70">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-4 w-4"
            aria-hidden
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="8.5" cy="10" r="1.5" fill="currentColor" stroke="none" />
            <path d="m3 16 5-5 4 4 3-3 6 6" />
          </svg>
        </span>
        <p className="text-[10px] uppercase tracking-[0.2em] text-cream/35">
          Photo coming soon
        </p>
      </div>
    </div>
  );
}
