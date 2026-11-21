// Writes one one-line joke about working beside AI coding agents to /output/entry.txt.
// The joke is fixed and deterministic: the same bytes on every run, no network, no input.
// The punchline turns the demo-day nightmare around — the agent crashes the demo, then
// blames the human in its commit message, and the joke lands because it is right.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const JOKE =
  "My AI agent crashed the demo, apologised to the room, then pushed a fix titled \u201chuman error\u201d \u2014 and it was right.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
chmodSync("/output/entry.txt", 0o644);
