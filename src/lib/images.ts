/**
 * Tipsy Plus One — client photography (user-provided only).
 * Every src must be unique across hero + both galleries.
 */
export type ImageCategory = "interior" | "cocktail" | "nightlife" | "event" | "food";

export type SiteImage = {
  src: string;
  alt: string;
  category: ImageCategory;
  caption: string;
};

/** Hero only — empty stage (not reused below). */
export const heroImage: SiteImage = {
  src: "/gallery/tpo-live-stage.png",
  alt: "Tipsy Plus One live stage with curtains and warm lounge lighting",
  category: "nightlife",
  caption: "Your table awaits",
};

/** Gallery 1 — The Space */
export const gallerySpaceImages: SiteImage[] = [
  {
    src: "/gallery/tpo-lounge-night.png",
    alt: "Dim lounge seating and glowing stage light at Tipsy Plus One",
    category: "interior",
    caption: "The lounge",
  },
  {
    src: "/gallery/tpo-vip-throne.png",
    alt: "VIP throne seating under purple fiber-optic lights at Tipsy Plus One",
    category: "event",
    caption: "VIP seating",
  },
  {
    src: "/gallery/tpo-bar-counter.png",
    alt: "Bar counter and quilted stools at Tipsy Plus One",
    category: "interior",
    caption: "The bar",
  },
  {
    src: "/gallery/tpo-spirits-wall.png",
    alt: "Backlit spirits wall behind the bar at Tipsy Plus One",
    category: "cocktail",
    caption: "The spirits wall",
  },
  {
    src: "/gallery/tpo-bar-service.png",
    alt: "Bartenders crafting drinks at Tipsy Plus One",
    category: "cocktail",
    caption: "Behind the bar",
  },
];

/** Gallery 2 — Nights & Views (different photos only) */
export const galleryNightImages: SiteImage[] = [
  {
    src: "/gallery/tpo-entrance.png",
    alt: "Tipsy Plus One entrance with illuminated signage",
    category: "nightlife",
    caption: "Welcome in",
  },
  {
    src: "/gallery/tpo-window-seating.png",
    alt: "Window seating overlooking the city at night",
    category: "interior",
    caption: "Window seats",
  },
  {
    src: "/gallery/tpo-megah-rise.png",
    alt: "Megah Rise Mall night signage near Tipsy Plus One",
    category: "nightlife",
    caption: "Find us",
  },
  {
    src: "/gallery/tpo-apple-cocktail.png",
    alt: "Signature cocktail with apple and rosemary at Tipsy Plus One",
    category: "cocktail",
    caption: "Signature pour",
  },
  {
    src: "/gallery/tpo-cocktail-set.png",
    alt: "Crafted cocktails and dessert pour on the bar counter",
    category: "cocktail",
    caption: "Bar favourites",
  },
];

/** @deprecated use gallerySpaceImages */
export const galleryImages = gallerySpaceImages;

/** Event space section — dedicated hire photos only. */
export const eventSpaceImages: SiteImage[] = [];

export const categoryLabels: Record<ImageCategory, string> = {
  interior: "Bar & Lounge",
  cocktail: "Drinks",
  nightlife: "Nightlife",
  event: "Private Events",
  food: "Food & Bites",
};
