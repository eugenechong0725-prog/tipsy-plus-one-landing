# Tipsy Plus One — Bar & Event Space Landing Page

A premium, mobile-first one-page landing page for **Tipsy Plus One (TPO)**.
Built for conversion: WhatsApp table bookings, event space enquiries, and Meta /
Instagram ad traffic.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3010](http://localhost:3010) (booking: [http://localhost:3010/#book](http://localhost:3010/#book)).

## Page sections

1. **Hero** — headline, "Book a Table" + "Event Space Enquiry" CTAs.
2. **About / Atmosphere** — vibe copy, 3 photos, 3 highlight cards.
3. **Booking** — WhatsApp-only: *Book a Table* and *Event Space Enquiry* open chat directly.
4. **Gallery** — 6 curated bar / drinks / nightlife / event photos.
5. **Contact** — WhatsApp CTA, location, opening hours.

All enquiries go through **WhatsApp only** — no email, no backend.

## Editing content (for the client)

### Business details — `src/lib/config.ts`

| What | Where |
| --- | --- |
| Bar name / wordmark | `site.name`, `site.wordmark` |
| WhatsApp number & default message | `site.whatsappNumber`, `site.whatsappMessage` |
| Location | `site.location.label` |
| Opening hours | `site.hours` |
| Instagram link | `site.social.instagram` |

> **WhatsApp number format:** digits only, no `+`, spaces or dashes.
> Example: `+60 12-345 6789` → `60123456789`.

### Photos — `src/lib/images.ts`

| Array | Used in | Count |
| --- | --- | --- |
| `heroImage` | Hero background | 1 |
| `aboutImages` | About section | 3 |
| `galleryImages` | Gallery grid | 6 |

Drop real photos into `public/gallery/` and update each `src` to e.g.
`"/gallery/hero.jpg"`.

## How booking works

Booking buttons open WhatsApp with a prefilled message. Edit default text in `src/lib/config.ts`.

No backend, no email, no Google Sheets — just update the WhatsApp number in
`src/lib/config.ts`.

## Tech

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript
