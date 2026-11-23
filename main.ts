// One Word, One Username, One Reward
// make.fun bounty u-rusdyxbt-one-word-one-username-one-reward-1a191fae
//
// Writes exactly one word — the entrant's own make.fun username — to
// entry.txt inside the output directory, and nothing else.
// No network, no extra bytes, no trailing newline. Deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const USERNAME = "savira1636";

// The gate requires exactly one word, 1–30 characters, no whitespace.
if (!/^\S{1,30}$/.test(USERNAME)) {
  throw new Error("username must be a single word of 1-30 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), USERNAME, "utf8");
