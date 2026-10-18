# CPI Lab website – rebuild plan

**Goal:** replace the Google Sites page (https://sites.google.com/view/tahsina-cpi-lab) with a modern, self-editable lab website built on the same system as Dr. Sanam's personal site (`../tahsina-sanam-website`): same design system, editor, dashboard, roles, Bin, image pipeline and Firebase back end.

Content source: [_source/CONTENT.md](_source/CONTENT.md) (everything extracted from the current site, with problems flagged).

---

## 1. Site map

| Tab | Purpose | Built from |
|---|---|---|
| **Home** | Who the lab is in 10 seconds | Hero (lab name, mission line, buttons: Research, Join us) · Mission text · Research areas (4 cards) · Live numbers (members, publications, grants, testbeds) · Latest news (3) · Open positions banner · Director card |
| **Research** | What the lab works on | One card per project → side panel with problem, approach, results, people and related papers |
| **People** | The team | Director · Current graduate students · Undergraduate students · Visiting researchers · **Alumni** (graduated, with where they went) |
| **Publications** | Output | Citation list grouped Journal / Conference, newest first, year filter chips, search, Q1 badges, DOI links |
| **News** | Activity | Timeline of news + a **Grants** list |
| **Facilities** (was "Testbeds") | Equipment | Cards grouped Smart communications / Sensing platforms, each with photo, spec and link |
| **Gallery** | Lab life | Photo wall with captions, opens full size |
| **Join us** (new) | Recruiting | Open positions (RA) with eligibility, pay, duration, how to apply; "no openings" message when empty |
| **Contact** | Find the lab | Address, map (Excellence Building, BUET), email, parking note, message form |

Footer on every page: lab name, IAT-BUET, email, link to Dr. Sanam's personal site.

## 2. Content types (dashboard lists)

| List | Fields |
|---|---|
| **Members** | name, role (Director / PhD / M.Sc. / B.Sc. / Visiting / Research Assistant), status (current / alumni), programme & institute, photo, short bio, research interests (tags), email, links (Scholar, LinkedIn, ORCID), start–end year, now at (for alumni) |
| **Projects** | title, summary, details (rich text), image, status (active / completed), topics, funding, team members, related publications, link |
| **Publications** | title, authors (lab members bolded), venue, type (journal / conference / book chapter / thesis), year, month, volume/pages, DOI, PDF, abstract, badge (Q1…), topics |
| **News** | date, title, text, image, link, category (award / fellowship / talk / paper / event) |
| **Grants** | title, funder, year(s), amount, project, role (PI / Co-PI) |
| **Equipment** | name, category, image, description, specs, datasheet link |
| **Gallery** | image, caption, date, event |
| **Openings** | title, positions, status (open / closed), eligibility, skills, pay, duration, deadline, how to apply |

## 3. Design

Same design system ([DESIGN_SYSTEM.md](../tahsina-sanam-website/DESIGN_SYSTEM.md)), but visually distinct from the personal site so the two read as "lab" vs "person":
- different preset theme and accent (proposed: **Ocean** or **Midnight** — technical/cyber feel), a sans heading font (e.g. Space Grotesk or Manrope) instead of the serif
- hero motif: **grid/dots** ("sensor network") instead of the waveform
- all 15 pointer styles, 20 themes, genie reveals, mobile bottom sheets, Section Studio etc. come for free

## 4. Technical setup

- Folder: `Dr. TahsinaSanam/cpi-lab-website` (this folder), a copy of the personal-site engine with its own `seed.js` (lab content), own `.env.local`, own Git repository.
- Editing: same super admin / admin roles; Dr. Sanam as admin, lab members can be given access to only News, Gallery or their own list.
- Hosting: Vercel (or similar), domain to decide (e.g. `cpilab.iat.buet.ac.bd` if IAT can point a subdomain, or a `.vercel.app` address to start).

## 5. Decisions (agreed 18 Oct 2026)

1. **Firebase:** a **new, separate Firebase project** for the lab (own database, admins and limits).
2. **Publications:** a **separate lab list**, independent of the personal site.
3. **Look:** a **distinct lab look**: same system, technical theme, sans-serif headings, sensor-grid hero.
4. **RA position:** status unknown, so it's imported as a **hidden draft** opening that can be switched on from the dashboard.

Still open:
- Confirm the ⚠ items in `_source/CONTENT.md` (title Professor vs Assistant Professor, name spellings, which members are current vs alumni, pronouns in news, missing members Samiul Islam / Sadia Akter / N. Pervin).
- Send the 8 images Google blocked (listed at the end of CONTENT.md).
- Create the lab's Firebase project and send its web config (only needed at step 4).

**Ambiguous content (agreed):** anything unclear is imported with an editors-only **review note**, hidden from visitors where needed, and switched on later from edit mode or the dashboard ("Mark as checked" / "Checked, show it").

## Progress

- [x] Engine copied, lab theme (Ocean, Space Grotesk headings, underline tabs, grid hero, ring pointer)
- [x] `seed.js`: 8 lists, 9 tabs, all extracted content, 26 review notes (13 items or sections hidden)
- [x] Images from the old site in `public/lab/` (16 of 24)
- [x] Production build and page checks
- [ ] Answers to the review notes, missing photos
- [ ] Firebase project for the lab, rules, publish
- [ ] GitHub repository, hosting and domain

## 6. Build steps (after decisions)

1. Copy the engine, strip the personal content, set the lab theme and fonts.
2. Write `seed.js`: lab config, the 8 lists above with all extracted content, 9 tabs with sections.
3. Move images into the project (Cloudinary upload or `public/`), compress them through the image pipeline.
4. Firebase project, rules, Cloudinary preset, `.env.local`; publish content.
5. Check desktop, tablet, phone; accessibility and contrast; build; push to GitHub; deploy.
