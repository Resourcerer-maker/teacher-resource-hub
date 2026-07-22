# How to add a resource

## Step 1 — upload the file
On GitHub, open the right subject folder and use "Add file → Upload files":
- `resources/biology/`
- `resources/chemistry/`
- `resources/physics/`
- `resources/earth-space/`

Name the file lowercase-with-hyphens, e.g. `cell-structure-worksheet.pdf`

## Step 2 — add an entry to resources.json
Open `resources.json` in the repo root. It's a list of entries in `[ ]`,
separated by commas. Copy this template, fill in the blanks, and paste it
in as a new entry (don't forget a comma after the previous entry if it's
not the last one):

```json
{
  "title": "Cell Structure Worksheet",
  "subject": "biology",
  "subtopic": "bio-cells",
  "filename": "cell-structure-worksheet.pdf",
  "format": "worksheet",
  "yearLevel": "Year 8"
}
```

**Field notes:**
- `subject` must be exactly one of: `biology`, `chemistry`, `physics`, `earth-space`
- `subtopic` must match one of the subtopic IDs on that subject's page (ask
  Claude if unsure, or check the `id="..."` attributes in that page's HTML)
- `filename` is just the filename, not the full path (it's combined with the
  subject folder automatically)
- `format` is a short label like `worksheet`, `slides`, `answer key`, `notes`
- `yearLevel` is optional — delete the line if not relevant

## Step 3 — commit
Commit the change on GitHub. Netlify auto-deploys — live in about a minute.

## If something breaks
The most common mistake is a missing comma between entries, or a missing
closing `}` or `]`. If the resource cards stop showing up after an edit,
that's almost always why — paste the file to Claude and it'll spot the typo.

## Handing files to Claude instead
Just upload the file to the chat and say which subject/subtopic it belongs
to — Claude will do steps 1 and 2 for you via GitHub directly.
