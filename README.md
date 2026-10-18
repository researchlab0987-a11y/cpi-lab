# CPI Lab website

Website of the **Cyber Physical Intelligence (CPI) Lab**, Institute of Appropriate Technology, BUET, directed by Dr. Tahsina Farah Sanam. It replaces https://sites.google.com/view/tahsina-cpi-lab.

Built on the same editable engine as Dr. Sanam's personal site (Next.js 14, Tailwind, Firebase): every tab, section, list, colour and image can be changed from the browser.

- Structure and decisions: [PLAN.md](PLAN.md)
- Everything extracted from the old site, with open questions: [_source/CONTENT.md](_source/CONTENT.md)
- Design system: [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) · Architecture: [ARCHITECTURE.md](ARCHITECTURE.md)

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Without Firebase keys it runs in **local mode**: the bundled content in `src/data/seed.js` is shown, and `/login` → "Local editor" lets you edit in this browser only.

## Tabs

Home · Research · People · Publications · News (and grants) · Facilities · Gallery · Join us · Contact

## Content lists (Dashboard → Content)

People (Lab Director, Research Assistant, Graduate Student, Undergraduate Student, Visiting Researcher, Alumni) · Research projects · Publications · News · Grants · Facilities · Gallery · Open positions

## Items that need review

Anything that was unclear or outdated on the old site was imported with a **review note**, and hidden where it should not be public yet. Signed-in editors see:

- **Dashboard → Overview:** a list of everything awaiting review
- **Dashboard → Content:** a "need review" filter in each list
- **On the page (edit mode):** an amber **Review** badge; open the entry to read the note, then **Mark as checked** or **Checked, show it**

## Going live

1. Create a Firebase project for the lab (Authentication → Email/Password, Firestore), copy `.env.example` to `.env.local` and fill in the keys and `NEXT_PUBLIC_SITE_URL`.
2. Put the super admin email in `isSuper()` in `firestore.rules`, add the project id to `.firebaserc`, and publish: `firebase deploy --only firestore:rules`.
3. Sign in, then **Dashboard → Data and backups → Publish** once. Add editors under **Access**.
4. Optional: Cloudinary keys for image hosting. Deploy to Vercel with the same environment variables, and add the domain to Firebase → Authentication → Authorized domains.

Images from the old site are in `public/lab/`. Eight images could not be copied (listed in `_source/CONTENT.md`); their entries are hidden with a review note until the photos are uploaded.
