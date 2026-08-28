# MERIDIANO

**Self-authored, not interviewed.**

The human gave the subject and two hard constraints, then deferred the eight
interview questions. Everything below marked *(assumido)* is mine and is the
first thing to overwrite when they answer.

The subject, in their words, verbatim:

> quero criar uma pagina de um fogueter realista vc pode usar a inemaimg pra
> criar as imagens, este foguete leva muitas pessoas, para girar em votla da
> terra com uma capaciadar muito realista de ver o planeta

Their two later constraints, verbatim:

> pode primeiro fazer so com imagem

> nao usar o kie

So: stills only, generated on the local inemaimg server with `flux2-klein`. No
video anywhere on the page, and no kie.ai spend. This removes the `scrub`
device family entirely, which is a structural constraint, not a downgrade: the
grammar below was chosen to work without it rather than to fake it.

---

## The eight answers *(assumido)*

1. **Vibe.** Documental, contido, real, silencioso, humano.
   References: *For All Mankind* (the ground-level realism, not the alt-history),
   the NASA Apollo press kits, and Michael Collins' photograph of Eagle with the
   whole of Earth behind it.
2. **The journey.** Você está preso na cadeira e ainda não aconteceu nada. Sobe,
   e a subida é violenta e feia. O motor corta e fica tudo em silêncio. A janela
   clareia e a Terra ocupa tudo. Você volta para a cabine com as outras pessoas.
3. **The energy curve.** Calmo, alto, muito baixo, alto de novo mas de outro
   jeito, calmo. O segundo alto não é barulho, é escala.
4. **Feeling, and the one moment.** Below, in its own section. The one moment is
   the planet taking the entire screen.
5. **One thing no other site does.** A janela é de verdade: você mexe o ponteiro
   e a vista se desloca atrás do vidro, como se você tivesse movido a cabeça.
6. **Distance from premium-minimal.** Editorial e contido. Nada de maximalismo:
   a foto é o evento, o resto sai da frente.
7. **One unbroken world, or distinct scenes?** Cenas distintas, sustentadas por
   uma tensão única entre dois lados. Não é um voo contínuo.
8. **Assets.** Nenhum. Mundo inteiramente gerado, sete stills.

**Vehicle name.** MERIDIANO *(assumido)*. Page copy is pt-BR, because that is
the language the human works in.

**No numbers.** The brief has no verified figure of any kind: not a passenger
count, not an altitude, not a price. taste.md and devices.md §7 both forbid
inventing one, so the page carries **no counter and no statistic**. "Muitas
pessoas" is shown in the photograph of a full cabin, never asserted as a number.

---

## Grammar: split stage

The page holds two columns in tension for its whole length. **DENTRO** (the
cabin, the people) on the left, **FORA** (what there is to see) on the right.
The divider is the chrome: it carries both labels and the progress of the
argument, and there is no nav bar.

The grammar's mandated ending is the **collapse**: the divider travels to one
edge, one column takes the full width, and that has to be the most satisfying
moment on the page. Here the collapse is the planet filling the screen, which is
exactly the moment the human asked for. The structural requirement and the
emotional peak are the same event, which is why this grammar was chosen.

Why the other seven lost:

- **Filmic one-shot**: leans on `scrub`, and there is no video. Without its
  anchor device it is a generic pinned page, and it is the shape four prior
  builds already took.
- **Continuous world**: requires worldflight legs, which are video. Unavailable.
- **Chaptered editorial**: forbids full-bleed media. It would gut the one moment
  the human actually named.
- **Live surface**: there is no product surface to operate. A spacecraft cabin
  rendered as operable panels would be the fake-dashboard the taste floor bans.
- **Typographic poster**: forbids photographic ground. The photograph of the
  planet *is* the argument here.
- **Gallery / catalog**: there is no range to walk. One vehicle, one journey.
- **Rhythmic cutlist**: bans `pin` and `dwell`, and this page is about stillness.
  A pulse is the opposite of the feeling being sold.

## Signature move: a vigia

A real porthole, built in markup, over the right column. Three things happen in
it that happen on no other site:

1. **Head parallax at the glass.** The pointer moves the view *behind* the
   opening, not the opening itself, at a rate that falls off toward the edges,
   the way looking through a thick window actually behaves.
2. **A specular smear on the glass** that tracks the pointer across the pane and
   dims the view slightly where it crosses.
3. **The opening is the collapse.** At the peak its radius is driven from the
   act's own progress until it passes the corners of the viewport, so the window
   does not cut to a full-bleed image: it *becomes* one.

Coded in the page against `--sc-p` and a bespoke pointer loop. The engine is
untouched.

---

## The feeling curve

One line per act: the emotion, then what on screen causes it.

| Act | Feeling | What causes it |
|---|---|---|
| 1 | Contenção | A full cabin of ordinary strapped-in people beside a pale, empty, uneventful sky. Nothing has happened, and both columns say so. |
| 2 | Peso | The divider is shoved left by the scroll. The outside is all fire and vibration; the inside is reduced to plain text under load. |
| 3 | Silêncio | Loose harnesses, floating hair, faces turned. The porthole wipes clear and the first blue edge arrives. This act is deliberately quiet, because it is the one before the peak. |
| 4 | **Escala (PICO)** | The divider leaves. The porthole opens past the corners of the screen and the planet takes everything. |
| 5 | Pertencimento | Back inside, small, two people at the glass. The ask is a line of text, not a button island. |

No two adjacent acts share a feeling. Act 3 is quieter than act 4 by design.

**The peak**, written as the sentence a visitor would say to a friend:

> "Tem uma hora que a janela abre e o planeta simplesmente toma a tela inteira."

It lives in act 4, which carries the largest span on the page by a clear margin
(3.8 against 2.6 for the next largest).

**The tell-someone sentence:**

> É o site em que a janela abre e você fica olhando a Terra por mais tempo do que
> pretendia.

**Authored silence.** Act 3 holds a near-empty right column for roughly half its
span, on purpose: it is the engine-cutoff beat, and the emptiness is the
content. The verification pass will see low change there and it is not dead
scroll.

---

## The score

Spans in viewport-heights. Total ≈ 10.4, inside the 8 to 14 budget and outside
the 6-to-7-acts-at-13.6-13.8 band that every prior build landed in.

| # | Beat | Device family | Span | Why this one |
|---|---|---|---|---|
| 1 | Contenção | `flow` + `in` | ~1.0 | The split has to be legible before it moves. A static 50/50 establishes the format in one screen. |
| 2 | Peso | `pin` + `parallax` | 2.6 | The divider position is driven from `--sc-p`: the argument is literally one side taking room from the other. |
| 3 | Silêncio | `reveal` | 1.6 | A wipe is a change of state, and this beat is a change of state: the window clears. |
| 4 | **Escala** | `pin` + bespoke pointer | **3.8** | The collapse needs room to be felt. This is the peak and it holds the most scroll. |
| 5 | Pertencimento | `flow` + `in` | ~1.4 | The page stops performing and becomes a document again. The CTA is running text. |

Five families (`flow`/`in`, `pin`, `parallax`, `reveal`, bespoke pointer), never
the same one twice in a row, zero `scrub` acts, no `pan` (banned by the
grammar), no `count` (no real figures), no `data-sc-drift` (the grammar wants two
held grounds, so grounds are painted per section).

**One CTA label, used everywhere: "Reservar assento".**

---

## Fingerprint gate

`FINGERPRINTS.md` was empty at the time of this build. First row, nothing to
clear.

---

## The feel check

Scrolled cold, one word per act, then diffed against the intended curve above.

| Act | Intended | Felt | Verdict |
|---|---|---|---|
| 1 | Contenção | contenção | matches |
| 2 | Peso | **vazio** | **wrong** |
| 3 | Silêncio | silêncio | matches |
| 4 | Escala | escala | matches, and it is the largest visual change on the page |
| 5 | Pertencimento | pertencimento | matches |

**What was wrong and what changed.** Act 2's DENTRO column was a black panel
carrying one line of type. Intended as restraint under load, it read as an
unfinished half of the screen: not weight, absence. The page was wrong, not the
brief. The cabin was put back in behind the type, crushed to 30% opacity and
desaturated with a vignette, drifting slowly upward against the act's own
progress while the outside is all fire. Both columns now carry content, which
is also what the grammar requires of them.

The close resolves rather than fading: the last screen holds the ask and the
colophon, and nothing on it is mid-transition.

## What was verified, and what was not

Three headless passes, each walking every act at six scroll positions and
waiting for the frame to settle:

- **desktop 1440**: no dead scroll. Contrast clears on every line; the peak
  headline sits at 4.34:1, which is above the 3:1 floor for large display type
  and is the intended trade for keeping the photograph.
- **phone 390x844**: no dead scroll, every cue clears 4.5:1.
- **reduced motion**: no dead scroll, same contrast result. Pointer parallax and
  the specular are off, the opening still opens.

Two defects were found by the passes and fixed, and both were invisible in any
single screenshot:

1. **The pinned acts did not pin.** A plain `.stage { position: relative }` has
   the same specificity as the engine's `.sc-stage { position: sticky }` and,
   being later in the document, silently won. Both pinned acts scrolled away
   and the peak rendered as an empty black screen. The engine warns about this
   on the console, but the harness only collects `console.error`, so the first
   run reported clean. Fixed by writing the rule as `:where(.stage)`.
2. **The peak headline failed contrast**, at 1.08:1 desktop and 2.52:1 phone,
   because the scrim ramped in behind the cue rather than ahead of it, and
   because the corner scrim does not cover copy that goes full-width on a
   phone. Fixed by starting the scrim earlier than the line and switching it to
   a bottom band below 860px, where the engine actually lands that copy.

**Not verified: a real phone.** Headless Chrome cannot reproduce iOS scrolling,
Low Power Mode, or Safari's compositing of a large animated `clip-path`, and
the opening at the peak is exactly the kind of effect that can behave
differently there. The page carries no video, which removes the usual iOS
failure mode, but the signature move itself is untested on hardware.

**Licensing note.** The stills were generated with `flux2-klein`, which is
non-commercial. Fine for this test; it would need regenerating on a
commercially licensed model before the page could ship.

---

# Video version

This build is `orbita-video`. It is the **same page and the same content** as
`orbita`, at the human's explicit instruction:

> mantenha esta pagina vamos fazer outra versao

> mesmo conteudo

> faz o mesmo com o kling direto nao [e o kie

So the stills build stays as it is, and this one differs from it only in the
two acts that carry the journey's motion. It is deliberately **not** a new page
under the fingerprint gate: it is a variant of an existing row, and inventing
structural differences to clear the gate would have contradicted "mesmo
conteudo".

## What changed

Two acts became `scrub`, which is the maximum the skill allows on one page, and
they are not adjacent:

| Act | Was | Now |
|---|---|---|
| 2 · Peso | `pin` with a parallax still of the launch | `scrub`, `span 2.6`, `dwell 0.34`. The vehicle climbs under the reader's own hand. |
| 4 · Escala (peak) | `pin` with a still behind the porthole | `scrub`, `span 3.8`, `dwell 0.3`. The clip lives **inside** the mask, so the orbital drift belongs to the view behind the glass while the opening still grows from the act's progress. |

Acts 1, 3 and 5 are unchanged and still carry stills. Device families are now
`flow`/`in`, `scrub`, `reveal`, bespoke pointer: four families, none twice in a
row.

Both clips carry a poster from the still they were generated from, so the stage
is never blank while the clip decodes.

## How the clips were made

`kling-25` through Magnific, driven directly rather than through kie.ai, which
the human ruled out. Each clip is image-to-video at 720p for 5s, started from
the **already-approved still** for that act, so the video and the poster are
continuous by construction rather than by luck. Prompts asked for one
continuous take with motion in a single constant direction, and named cuts,
loops and reverse motion in the negative: a clip that changes direction reads as
broken when the hand, not time, is driving it.

Encoded with the skill's `encode.sh`, which sets a dense GOP because scrubbing
seeks and the decoder walks from the previous keyframe. Desktop `gop=8`, mobile
`gop=4`. The Earth clip took `crf 22` rather than the default 20 because a dense
GOP doubles the cost of grain and this world is grainy. Audio stripped.

Cost: 280 credits of roughly 585,000. Paid generation, and the account's
unlimited mode does not apply in this session.

## Verification of this build

Three passes, all clean:

- **desktop**: no dead scroll, **both clips keep moving whenever they are on
  screen**, all cues clear 4.5:1.
- **phone 390x844**: same, all clear.
- **reduced motion**: no dead scroll, all clear. No clip is fetched at all under
  reduced motion, by design.

The frozen-clip check is the one that matters most here and it is the one no
screenshot can show: every individual frame of a stalled clip looks completely
correct. Both clips advance across their full 5.03s under scroll.

**One defect found and fixed.** The peak headline dropped to 3.45:1, below where
it sat on the stills build, because the clip brightens under the line at frames
the photograph never had. The corner scrim was also the wrong shape: an XL
headline spans most of the frame, and a corner gradient leaves its right half
unprotected. Replaced with a bottom band, which is what taste.md asks for when
copy is full-width. Now clears 4.5:1 on all three passes.

**Still not verified: a real phone.** Now more relevant than on the stills
build, because iOS video is the classic failure here: a muted, seeked,
never-played clip can stay blank, and Low Power Mode changes the behaviour
again. The posters are in place for exactly that reason, but the behaviour is
untested on hardware.

## The CTA

"Reservar assento" now points at **https://eventos.inema.pro**, on both builds.
One label, one destination, used everywhere on the page.
