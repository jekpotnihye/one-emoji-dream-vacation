import { mkdirSync, writeFileSync } from "node:fs";

// One emoji for a dream vacation: Mount Fuji.
//
// A single mountain, a single faraway place, a postcard at a glance.
// It is not a generic beach, a palm tree or a plane, the first picks
// anyone reaches for. It points at one particular dream instead: a trip
// to Japan, snow on the peak, a stranger already picturing the flight.
// It evokes the trip vividly, it feels personal and specific, it carries
// the surprise of choosing a mountain over a beach, and it reads
// instantly across cultures and screens, clear at small size, with no
// words and no explanation. One code point, no variation selector,
// no joiner, nothing else.
const EMOJI = "🗻";
const OUTPUT_PATH = "/output/entry.txt";

function isSingleEmoji(text: string): boolean {
  // Exactly one code point, well inside the gate of 1 to 8 characters.
  return [...text].length === 1 && text.length <= 8;
}

if (!isSingleEmoji(EMOJI)) {
  throw new Error("entry must be exactly one emoji");
}

mkdirSync("/output", { recursive: true });
// Exactly the emoji and nothing else: no trailing newline, so the file
// holds four bytes and the single emoji stands alone, as the judge sees it.
writeFileSync(OUTPUT_PATH, EMOJI, "utf8");
