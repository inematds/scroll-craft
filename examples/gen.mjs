#!/usr/bin/env node
/**
 * inemaimg client. Stills only: this build generates no video.
 *
 *   node gen.mjs <slug> "<prompt>" [--w 2048] [--h 1152] [--seed N] [--steps 4]
 *
 * Writes out/<slug>.png. The style preamble lives in PREAMBLE and is prepended
 * verbatim to every prompt: that is what makes six separate generations read as
 * one shoot rather than six stock photos.
 */
import { writeFile } from "node:fs/promises";
import path from "node:path";

const HOST = process.env.INEMAIMG || "http://localhost:8000";
const MODEL = "flux2-klein";

export const PREAMBLE =
  "Photorealistic documentary photograph, real optics, natural available light, " +
  "high dynamic range, fine 35mm film grain, subtle chromatic aberration at the frame edge. " +
  "Cold graphite and bone palette, warm amber only where real sunlight falls. " +
  "No CGI gloss, no lens flare, no neon, no glow, no text, no logos, no watermark, " +
  "no illustration, no 3D render look.";

const NEG =
  "cartoon, illustration, 3d render, cgi, video game, concept art, painting, " +
  "text, letters, watermark, logo, signature, lens flare, neon, glow, oversaturated, " +
  "plastic skin, distorted hands, extra limbs, blurry, low resolution";

export async function gen(slug, scene, opts = {}) {
  const body = {
    model: MODEL,
    prompt: `${PREAMBLE}\n\n${scene}`,
    negative_prompt: NEG,
    width: opts.w ?? 2048,
    height: opts.h ?? 1152,
    steps: opts.steps ?? 4,
    seed: opts.seed ?? 7,
  };
  const t0 = Date.now();
  const r = await fetch(`${HOST}/generate`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!r.ok) throw new Error(`${slug}: HTTP ${r.status} ${await r.text()}`);
  const j = await r.json();
  if (!j.image) throw new Error(`${slug}: no image in response ${JSON.stringify(j).slice(0, 300)}`);
  const out = path.join("out", `${slug}.png`);
  await writeFile(out, Buffer.from(j.image, "base64"));
  const wall = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`${out}  ${body.width}x${body.height}  ${wall}s  (gpu ${j.generation_time_s}s)`);
  return out;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [slug, scene] = process.argv.slice(2);
  const flag = (n, d) => {
    const i = process.argv.indexOf(`--${n}`);
    return i === -1 ? d : Number(process.argv[i + 1]);
  };
  if (!slug || !scene) {
    console.error('usage: node gen.mjs <slug> "<scene>" [--w N] [--h N] [--seed N] [--steps N]');
    process.exit(1);
  }
  await gen(slug, scene, { w: flag("w", 2048), h: flag("h", 1152), seed: flag("seed", 7), steps: flag("steps", 4) });
}
