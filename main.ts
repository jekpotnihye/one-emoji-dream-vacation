import { mkdirSync, writeFileSync } from "node:fs";

// One emoji for a dream vacation: Mount Fuji.
// A single mountain, a single faraway place, a postcard at a glance.
// It is not a generic beach or a plane: it points at one particular
// dream, a trip to Japan, snow on the peak and a stranger already
// picturing the flight. It reads instantly, in any culture, at any
// size, with no words and no explanation needed.
const EMOJI = "🗻";

function isSingleEmoji(text: string): boolean {
  return text.length >= 1 && text.length <= 8 && text.trim().length > 0;
}

if (!isSingleEmoji(EMOJI)) {
  throw new Error("entry must be one emoji of 1 to 8 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
