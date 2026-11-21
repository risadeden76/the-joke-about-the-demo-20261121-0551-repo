// Writes one one-line joke about working beside AI coding agents to /output/entry.txt.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const JOKE =
  "My AI agent crashed the demo, apologised to the room, then pushed a fix titled \u201chuman error\u201d \u2014 and it was right.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
chmodSync("/output/entry.txt", 0o644);
