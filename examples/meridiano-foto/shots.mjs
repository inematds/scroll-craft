import { gen } from "./gen.mjs";

// Frameless views: the porthole is real markup, so the view has to be able to
// move behind it. Anything with a baked-in window frame cannot parallax.
const NO_FRAME =
  "Full-frame view with no window, no porthole, no frame, no glass, no interior visible.";

const SHOTS = [
  // 4 · PEAK. The collapse lands on this.
  ["earth-limb",
   `Earth seen from low orbit, the curved limb across the lower two thirds of the frame, thin blue atmospheric shell glowing along the horizon against pure black space, deep ocean, swirling white cyclone cloud systems, a desert coastline in warm ochre, the day-night terminator crossing with an amber sunrise line. 50mm, astronaut photography, NASA archival photograph. ${NO_FRAME}`,
   { seed: 11 }],

  // 1 · HERO, right column: still on the pad, nothing has happened yet.
  ["sky-pad",
   `Looking straight out at a pale overcast dawn sky from high on a launch tower, flat grey-blue gradient, a single band of thin cloud, the top edge of a white launch vehicle just intruding at the left edge, cold morning light, no drama. 35mm. ${NO_FRAME}`,
   { seed: 23 }],

  // 2 · ASCENT, right column: the view is useless, and that is the point.
  ["ascent-streak",
   `Violent upward motion blur of atmosphere during a rocket ascent, streaked cloud and haze pulled into vertical lines, the sky darkening from pale blue at the bottom to deep indigo at the top, hot amber exhaust glow bleeding in from below, heavy vibration blur, long exposure. 24mm. ${NO_FRAME}`,
   { seed: 31 }],

  // 1 · HERO, left column: the cabin, many people, before launch.
  ["cabin-wide",
   `Interior of a large crewed spacecraft passenger cabin, several rows of contoured seats with five-point harnesses, roughly twenty ordinary adults of mixed ages and ethnicities strapped in wearing plain grey flight suits, dim instrument light, exposed structural ribs and quilted thermal blankets on the walls, cold white cabin light from above, a wide-angle documentary frame from the aisle. 24mm, deep focus.`,
   { seed: 42 }],

  // 3 · STILLNESS, left column: engines out, harnesses loose.
  ["cabin-float",
   `Interior of the same spacecraft cabin in weightlessness, harness straps drifting up loose, a woman's hair floating, passengers turned in their seats looking off to one side, faces lit cold blue-white from an unseen window, quiet and still, no panic, documentary reportage. 35mm.`,
   { seed: 55 }],

  // 5 · CLOSE, left column: the human beat the page ends on.
  ["cabin-backs",
   `Silhouettes of several passengers from behind, floating close together against a bright unseen window, rim-lit in warm amber and cold blue, their shoulders and drifting hair dark against the light, faces not visible, intimate and quiet. 50mm, shallow depth of field.`,
   { seed: 63 }],
];

// Portrait crop of the peak. The phone gets its own composition, not a
// letterboxed desktop frame.
const PORTRAIT = [
  ["earth-limb-p",
   `Earth seen from low orbit in a tall vertical frame, the curved limb low in the frame, thin blue atmospheric shell glowing along the horizon, black space filling the upper half, swirling white cloud systems over deep ocean, amber terminator light. Astronaut photography, NASA archival photograph. ${NO_FRAME}`,
   { seed: 11, w: 1152, h: 2048 }],
];

for (const [slug, scene, opts] of [...SHOTS, ...PORTRAIT]) {
  try { await gen(slug, scene, opts); }
  catch (e) { console.error(`FAIL ${slug}: ${e.message}`); }
}
