# MERIDIANO: one story, three grammars

Three pages built with this skill from a single brief: a crewed vehicle that
carries a full cabin to orbit, and the promise is seeing the planet for real.

They are here as **source**, because the source is the teachable part. The
generated media is not committed: the repo's `.gitignore` refuses `*.mp4` and
`builds/` on purpose, since a single build with seven video legs is 45MB and
committing it once puts it in history permanently. The live pages, with their
media, are published at **eventos.inema.pro**.

| | Grammar | Media | Weight |
|---|---|---|---|
| [`meridiano-foto`](meridiano-foto/) | split stage | 8 stills, no video | 1.3MB |
| [`meridiano-video`](meridiano-video/) | split stage | the same page, 2 acts converted to scrub clips | 15MB |
| [`meridiano-voo`](meridiano-voo/) | continuous world | 7 chained video legs, one unbroken flight | 45MB |

Each folder carries its `BRIEF.md`: the interview (self-authored, and marked as
such), the grammar choice with the reason every other grammar lost, the feeling
curve, the peak, the score, the signature move, and what verification actually
covered.

## What the three prove

**The first two share a grammar, so they are one page and a variant of it.** The
video version was built to the owner's explicit "mesmo conteudo", and it is
logged as a variant rather than put through the fingerprint gate.

**The third is a different page.** It clears the gate on all six dimensions:
grammar, nav, hero, act shape, close and signature move. It exists because
"animate every scene" is not a third scrub act; a pinned act is a block in the
document, a document made of blocks has seams, and a world with seams is not a
world. Removing the seams meant removing the blocks.

## The seam law, which is the whole trick of the third one

The clip generator produces five seconds at a time, and the flight is longer
than that. So the flight is seven legs, and they are chained:

    the LAST frame of leg N, pulled from its ENCODED mp4,
    becomes the START frame handed to the generator for leg N+1

`meridiano-voo/leg.mjs` is that step. It downloads a finished render, encodes it
for scrubbing at desktop and mobile, then extracts the poster and the chain
frame from the encoded file rather than from the source render, because the
encode changes the pixels and a chain frame taken from the master does not match
the frame the browser will actually decode.

Chaining on **start frames only** is deliberate. Asking an image-to-video model
to hit both a start and an end resolves the conflict by pulling the camera back,
and every leg ends up as the same wide establishing shot.

## Three defects worth keeping

All three were invisible in any single screenshot, and all three were caught by
walking the page at every scroll position.

**A page can pass green while completely broken.** The first verification run of
`meridiano-foto` reported no dead scroll and clean contrast while both pinned
acts were not pinning at all and the peak rendered as an empty black screen. A
plain `.stage { position: relative }` has the same specificity as the engine's
`.sc-stage { position: sticky }` and, being later in the document, silently won.
The engine warns about it on the console, but the harness only collects
`console.error`. Fixed by writing the rule as `:where(.stage)`.

**A scrim that is itself a copy block is never measured.** The closing line of
`meridiano-voo` failed contrast at 2.77:1. The first fix declared the new scrim
as `data-sc-copy` so it would inherit the finale's window, and the number did not
move at all, because the contrast pass hides every copy block to photograph the
frame underneath. Rebuilt as a plain element driven from the leg progress the
engine publishes.

**An even pace and an engineered peak pull against each other.** A worldflight
needs weight divided by clip length to match across legs or the world surges and
drags, so the peak cannot simply be given more scroll the way an act page would.
When the generated footage converged and the peak stopped reading as a peak, the
fix was a grade rather than a span: the leg before it opens desaturated and
recovers to neutral across its own progress, so its last frame still matches the
next leg's first frame and the seam stays invisible.
