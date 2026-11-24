import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Sick-Day Excuse — one line, under 200 characters.
// The joke: the Wi-Fi dying is believable, the "illness" is having to
// talk to your own family all morning, and the punchline ("from that")
// lands on the very last word — the recovery is from the family, not a flu.
const EXCUSE =
  "Can't come in today — the Wi-Fi died, so I spent the morning talking to my family, and honestly I need a sick day to recover from that.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
