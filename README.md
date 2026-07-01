# Bluprint — Landing Page

A React + Vite + Tailwind CSS landing page built from the "Website Development
Brief – Bluprint" document. Visual theme: a blueprint / architectural-drawing
motif (grid lines, corner registration marks, a "title block" info card),
tying directly into the company name and trade.

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build       # production build -> dist/
npm run preview     # preview the production build
```

Requires Node.js 18+.

## Project structure

```
src/
  data/content.js       ← ALL business copy, services, service areas, etc.
                            edit this file to update text without touching layout
  components/            ← one component per section (Navbar, Hero, About, ...)
  assets/site-photo.jpg  ← the project photo pulled from the brief document
  App.jsx                ← assembles the page
  index.css              ← Tailwind + global styles
tailwind.config.js        ← brand colors (navy/blue/cyan/paper/amber) & fonts
```

## Things to double-check / customize before launch

- **Contact form**: `src/components/Contact.jsx` currently opens the
  visitor's email client with the request pre-filled (no backend needed).
  For direct submissions, wire the `handleSubmit` function to a form
  service (e.g. Formspree) or your own API endpoint.
- **Facebook link**: the brief linked to a private Facebook group
  member profile, which isn't publicly accessible, so no Facebook link was
  added to the footer/header. If you have a public Facebook Page URL, drop
  it into `src/data/content.js` and add a link in `Footer.jsx` / `Navbar.jsx`.
- **Gallery**: only one real project photo was available (embedded in the
  brief doc). `src/components/Gallery.jsx` has 3 clearly-labeled placeholder
  slots — swap them for real project photos as they become available.
- **Reviews**: the brief only gave an aggregate rating (100% Recommended,
  10 Reviews), no individual quotes, so the Reviews section highlights that
  stat rather than inventing customer testimonials. Add real quotes to
  `src/components/Reviews.jsx` once you have them.
- Update `[Your Phone Number]` / `[Your Email Address]` style placeholders —
  none remain in this build since the real contact info from the brief
  (phone, WhatsApp, email) was used throughout.

## Deploying

The `dist/` folder produced by `npm run build` is static and can be deployed
to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.).
