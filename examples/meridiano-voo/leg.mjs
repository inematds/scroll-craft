#!/usr/bin/env node
/**
 * One leg of the flight, from a finished kling render to shippable assets.
 *
 *   node leg.mjs <n> <videoUrl>
 *
 * Downloads the render, encodes it for scrubbing at desktop and mobile, then
 * pulls two frames OUT OF THE ENCODED mp4:
 *
 *   assets/pN.webp      the leg's poster (its own first frame)
 *   out/chainN.png      its LAST frame, which becomes leg N+1's start image
 *
 * Both come from the encoded file rather than the source render on purpose.
 * The encode changes the pixels, so a chain frame taken from the pre-encode
 * master does not match the frame the browser will actually decode, and the
 * seam shows.
 */
import { writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";

const SKILL = "/home/nmaldaner/.claude/plugins/cache/main-design/main-design/0.2.0/skills/scrollcraft";
const n = process.argv[2];
const url = process.argv[3];
if (!n || !url) { console.error("usage: node leg.mjs <n> <videoUrl>"); process.exit(1); }

const sh = (cmd, args) => execFileSync(cmd, args, { stdio: ["ignore", "pipe", "pipe"] }).toString();

const r = await fetch(url);
if (!r.ok) throw new Error(`download leg ${n}: HTTP ${r.status}`);
const raw = `out/raw${n}.mp4`;
await writeFile(raw, Buffer.from(await r.arrayBuffer()));

// Grain-heavy world: a dense GOP doubles the cost of grain, so 22 rather than
// the default 20.
sh("bash", [`${SKILL}/scripts/encode.sh`, raw, `assets/leg${n}.mp4`, "desktop", "22"]);
sh("bash", [`${SKILL}/scripts/encode.sh`, raw, `assets/leg${n}-m.mp4`, "mobile"]);

// Poster: the leg's own first frame, from the encoded file.
sh("ffmpeg", ["-loglevel", "error", "-y", "-i", `assets/leg${n}.mp4`,
              "-frames:v", "1", "-q:v", "3", `assets/p${n}.webp`]);

// Chain frame: the leg's last frame, for the next leg to start from.
sh("ffmpeg", ["-loglevel", "error", "-y", "-sseof", "-0.15", "-i", `assets/leg${n}.mp4`,
              "-frames:v", "1", "-q:v", "2", `out/chain${n}.png`]);

const size = (f) => (sh("stat", ["-c", "%s", f]).trim() / 1048576).toFixed(1);
console.log(`leg ${n}: ${size(`assets/leg${n}.mp4`)}MB desktop, ${size(`assets/leg${n}-m.mp4`)}MB mobile`);
console.log(`  poster assets/p${n}.webp  chain out/chain${n}.png`);
