# Teacher Resource Hub — Decision Log

Running record of settled decisions so we don't re-litigate them each session.
Update this file whenever a new decision is locked in.

## Hosting & pipeline (confirmed working)
- Host: Netlify, auto-deploy from GitHub on push to `main`.
- Repo: github.com/Resourcerer-maker/teacher-resource-hub
- Live URL: resilient-gelato-b4a1b8.netlify.app (custom domain TBD)
- Flow: Claude edits → commits to GitHub → Netlify auto-deploys.
- GitHub has no native Claude connector; a fine-grained PAT (Contents: Read/write)
  is pasted into chat each session and never stored in memory.
- Netlify connector is connected persistently at the account level.

## Subject taxonomy (locked)
Four subjects, aligned to the Australian Curriculum v9.0 Science Understanding
strand, but subtopic names are deliberately generic (no AC9 codes) so the site
reads as internationally usable.

**Biology**
Classification & Biodiversity · Cells & Cell Structure · Body Systems & Organs ·
Body Systems & Feedback · Reproduction (Sexual & Asexual) ·
Ecosystems: Matter & Energy Flow · Genetics: DNA, Genes & Heredity ·
Evolution & Natural Selection

**Chemistry**
Particle Theory & States of Matter · Mixtures & Separating Techniques ·
Elements, Compounds & Mixtures · Physical & Chemical Changes ·
Atomic Structure & Radioactivity · Chemical Reactions & Equations ·
The Periodic Table · Reaction Types & Reaction Rates

**Physics**
Forces & Motion · Energy Types & Transfer · Conservation of Energy ·
Waves & the Electromagnetic Spectrum · Wave vs Particle Models ·
Newton's Laws of Motion

**Earth & Space Science**
Earth-Sun-Moon System (Seasons & Tides) · Plate Tectonics · The Rock Cycle ·
Earth's Structure & Layers · Earth's Spheres & the Carbon Cycle ·
Origin of the Universe · Global Climate Change

Confirmed by owner 2026-07-21.

## Site architecture (locked)
- Multi-page: `index.html` (homepage, links out to subject pages) +
  `biology.html` / `chemistry.html` / `physics.html` / `earth-space.html`,
  each with its own subtopic chip-nav and card grid. No more single-page
  scroll — was crowding once subtopics/resources stack up.
- Shared `styles.css` across all pages (not duplicated per-page).
- Design: notebook/field-guide aesthetic, subject-coded accent colours
  (bio=green, chem=purple, phys=blue, earth=amber). Owner said they may
  want to revisit aesthetic later — not locked in as final.

## Resource upload system (locked, "Option B")
- `resources.json` (repo root) is the single source of truth: one JSON array,
  one entry per resource — title, subject, subtopic, filename, format,
  optional yearLevel.
- Actual files live in `resources/<subject>/` (one subfolder per subject,
  NOT per subtopic — subtopic is metadata in the JSON, so re-categorising a
  resource is a one-line edit, not a file move).
- `resources.js` fetches resources.json client-side and renders cards into
  the matching subtopic-card div on each subject page, replacing the
  "coming soon" placeholder.
- `RESOURCES_GUIDE.md` has the copy-paste template + steps for manual
  uploads via GitHub's web UI (upload file → add JSON entry → commit).
- Owner will use a mix of manual uploads and handing files to Claude —
  same structure works for both.
- Considered a full CMS (Decap/Netlify CMS) for a form-based admin UI —
  deferred; revisit if hand-editing JSON becomes error-prone or annoying.

## Open items / not yet decided
- Cowork/automated intake pipeline — not yet designed.
- Monetisation model — deferred until site has content + traffic.
- Aesthetic revisit — owner flagged wanting to change the visual design later.

## Copyright flag (open, needs owner decision)
Four resource files uploaded to the project (EM Spectrum worksheets, Elements &
Compounds handout/notes) appear to be sourced from published textbooks/workbooks
(one is credited "© 2006 McGraw-Hill Ryerson Limited"; others are templated
worksheet formats not obviously self-authored). These have NOT been published
as live resource cards on the site pending confirmation of redistribution
rights. Do not publish content from these files until this is resolved —
either by confirming rights, or by using them only as structural/topic
reference and writing original resources instead.

