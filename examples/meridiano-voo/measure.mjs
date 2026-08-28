#!/usr/bin/env node
/**
 * Where does everything actually sit, and what overlaps what.
 *
 *   node measure.mjs [--width 1440] [--height 900] [--right]
 *
 * --right previews the rail moved to the right edge, so the question can be
 * answered before the change is made rather than after.
 */
import { createRequire } from "node:module";
import path from "node:path";
const { chromium } = createRequire(path.join(process.cwd(), "package.json"))("playwright-core");

const arg = (n, d) => { const i = process.argv.indexOf(`--${n}`); return i === -1 ? d : Number(process.argv[i + 1]); };
const W = arg("width", 1440), H = arg("height", 900);
const RIGHT = process.argv.includes("--right");

const browser = await chromium.launch({ executablePath: "/snap/bin/chromium" });
const page = await browser.newPage({ viewport: { width: W, height: H } });
await page.goto("http://localhost:4700", { waitUntil: "networkidle" });
await page.waitForTimeout(1200);

if (RIGHT) {
  await page.addStyleTag({ content: `
    .rail { left: auto !important; right: var(--sc-gutter) !important; }
    .rail__leg, .rail__play { grid-template-columns: auto 1.5rem !important; direction: rtl; }
  ` });
  await page.waitForTimeout(300);
}

const boxes = await page.evaluate(() => {
  const out = [];
  const put = (name, el) => {
    if (!el) return;
    const r = el.getBoundingClientRect();
    out.push({ name, l: Math.round(r.left), r: Math.round(r.right), t: Math.round(r.top), b: Math.round(r.bottom) });
  };
  /* The rail's own box is full height so it can centre without a transform.
     What can actually collide is the run of buttons, so measure those. */
  const items = [...document.querySelectorAll(".rail__play, .rail__leg")];
  if (items.length) {
    const rs = items.map((el) => el.getBoundingClientRect());
    out.push({
      name: "TRILHO (botoes)",
      l: Math.round(Math.min(...rs.map((r) => r.left))),
      r: Math.round(Math.max(...rs.map((r) => r.right))),
      t: Math.round(Math.min(...rs.map((r) => r.top))),
      b: Math.round(Math.max(...rs.map((r) => r.bottom))),
    });
  }
  const labels = ["hero (VENHA PARA O FUTURO)", "Casco de voo", "A Terra inteira", "finale (VENHA TEM LUGAR)"];
  document.querySelectorAll("[data-sc-copy]").forEach((el, i) => put(labels[i] || `copy ${i}`, el));
  return out;
});

const rail = boxes.find((b) => b.name.startsWith("TRILHO"));
const overlaps = (a, b) => a.l < b.r && b.l < a.r && a.t < b.b && b.t < a.b;

console.log(`viewport ${W}x${H}   trilho a ${RIGHT ? "DIREITA" : "ESQUERDA"}\n`);
for (const b of boxes) {
  const w = b.r - b.l, h = b.b - b.t;
  let verdict = "";
  if (!b.name.startsWith("TRILHO")) {
    const hitX = b.l < rail.r && rail.l < b.r;
    const hitY = b.t < rail.b && rail.t < b.b;
    verdict = overlaps(b, rail)
      ? "  <<< COLIDE com o trilho"
      : `  ok (${hitX ? "mesma coluna" : "coluna livre"}, ${hitY ? "mesma altura" : "alturas separadas"})`;
  }
  console.log(`${b.name.padEnd(28)} x ${String(b.l).padStart(4)}-${String(b.r).padStart(4)} (${String(w).padStart(4)}px)   y ${String(b.t).padStart(3)}-${String(b.b).padStart(3)} (${String(h).padStart(3)}px)${verdict}`);
}

await browser.close();
