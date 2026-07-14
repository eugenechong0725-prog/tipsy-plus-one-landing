#!/usr/bin/env node
/**
 * Import curated venue photos into public/gallery (not menu / not event space).
 * Run: node scripts/import-gallery-photos.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const srcDir =
  "/Users/eugenechongzhikai/.cursor/projects/Users-eugenechongzhikai-Desktop-Eugene-Work-Hub-jude-landing-page-bar/assets";
const destDir = path.join(__dirname, "..", "public", "gallery");

/** Unique photos only — no duplicates across hero / galleries. */
const mapping = [
  // Hero
  [
    "WhatsApp_Image_2026-07-08_at_20.02.16-6f530a69-5507-4ba6-9bef-b5d76e0463a0.png",
    "tpo-live-stage.png",
  ],
  // Gallery 1
  [
    "WhatsApp_Image_2026-07-08_at_20.02.16-3-d75b1363-eb71-489f-b2f2-6bca4f9d75c9.png",
    "tpo-lounge-night.png",
  ],
  [
    "WhatsApp_Image_2026-07-08_at_20.02.16-2-2ac3d9d7-8c43-4aa1-8369-a8bbb777873d.png",
    "tpo-vip-throne.png",
  ],
  [
    "WhatsApp_Image_2026-07-08_at_20.02.15-2-960a8dfa-cdbf-4ad7-9b91-36af87b96e17.png",
    "tpo-bar-counter.png",
  ],
  [
    "WhatsApp_Image_2026-07-08_at_20.02.15-4fd7c09c-820a-41bd-b24e-b85349806ef1.png",
    "tpo-spirits-wall.png",
  ],
  [
    "WhatsApp_Image_2026-07-14_at_14.33.08-2-f3daee59-9e3f-4963-b45e-44434d5ddee2.png",
    "tpo-bar-service.png",
  ],
  // Gallery 2
  [
    "WhatsApp_Image_2026-07-14_at_14.33.06-24a52d20-d98d-4b4a-b438-7f178468d329.png",
    "tpo-entrance.png",
  ],
  [
    "WhatsApp_Image_2026-07-14_at_14.33.08-4-f230af31-55a3-4f60-9511-6ebe61d617f6.png",
    "tpo-window-seating.png",
  ],
  [
    "WhatsApp_Image_2026-07-14_at_14.33.07-2-b9836fd0-1539-4bfa-b1e8-d78d98a5d9ac.png",
    "tpo-megah-rise.png",
  ],
  [
    "WhatsApp_Image_2026-07-14_at_14.33.08-3-05f3dc4d-63a6-4aa3-8122-256b1c87f2f0.png",
    "tpo-apple-cocktail.png",
  ],
  [
    "WhatsApp_Image_2026-07-14_at_14.33.07-dfc3447c-b8ad-46e8-9050-b3f73dd21cb3.png",
    "tpo-cocktail-set.png",
  ],
];

fs.mkdirSync(destDir, { recursive: true });

const used = new Set();
for (const [from, to] of mapping) {
  if (used.has(to) || used.has(from)) {
    console.error("Duplicate mapping:", from, "->", to);
    process.exit(1);
  }
  used.add(to);
  used.add(from);

  const src = path.join(srcDir, from);
  const dest = path.join(destDir, to);
  if (!fs.existsSync(src)) {
    console.error("Missing source:", src);
    process.exit(1);
  }
  fs.copyFileSync(src, dest);
  console.log("Copied", to);
}

console.log("Done.", mapping.length, "unique photos");
