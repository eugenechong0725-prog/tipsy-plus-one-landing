#!/usr/bin/env node
/**
 * Import client menu photos into public/menu.
 * Run: node scripts/import-menu-photos.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const srcDir =
  "/Users/eugenechongzhikai/.cursor/projects/Users-eugenechongzhikai-Desktop-Eugene-Work-Hub-jude-landing-page-bar/assets";
const destDir = path.join(__dirname, "..", "public", "menu");

const mapping = [
  [
    "R2907761-6f04c7c4-60d6-49c8-9c67-838693d3ac87.png",
    "food-pizza.png",
  ],
  [
    "R2907598-a0b6392a-9ae8-4328-aee2-d1f557038718.png",
    "food-grilled-pork.png",
  ],
  [
    "R2907715-552ef4dc-6728-4d12-b102-f7b4f9d5be26.png",
    "food-pork-belly.png",
  ],
  [
    "R2907523-6d801433-1aaf-4050-98db-68df164385a3.png",
    "drink-01.png",
  ],
  [
    "R2907539-c73369b9-0db0-4514-917b-e4b7ae2b5b53.png",
    "drink-02.png",
  ],
  [
    "R2907684-2a7661a6-705a-4b97-a513-305ca3c83797.png",
    "drink-berry-rum-rubble.png",
  ],
  [
    "R2907412-d597a811-2d6f-4a78-9c46-d7e355eb0d27.png",
    "drink-tipsy-butterfly.png",
  ],
  [
    "R2907490-913d4ba5-3b4c-4a0f-9b27-89f5fbd44c0b.png",
    "food-chicken-karaage.png",
  ],
];

fs.mkdirSync(destDir, { recursive: true });

for (const [from, to] of mapping) {
  const src = path.join(srcDir, from);
  const dest = path.join(destDir, to);
  if (!fs.existsSync(src)) {
    console.error("Missing source:", src);
    process.exit(1);
  }
  fs.copyFileSync(src, dest);
  console.log("Copied", to);
}

console.log("Done.");
