# Justin & Co. — Design + Development Studio Site

A React (Vite) marketing site for graphic design and web development services.

## What's included

- **Overview page** (`/`) — hero + a dashboard-style grid of all services
- **Service pages** (`/services/graphic-design`, `/services/web-development`, `/services/branding-identity`) — what's included, process, pricing, FAQs
- **Contact page** (`/contact`) — a project inquiry form
- Fully responsive: mobile, tablet, and desktop layouts
- No external UI libraries — hand-written CSS, so it's easy to restyle

## Running it locally

You'll need [Node.js](https://nodejs.org) (18+) installed.

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

To build a production version:

```bash
npm run build
```

This outputs static files to `dist/`, which you can deploy anywhere that serves
static sites (Netlify, Vercel, GitHub Pages, Cloudflare Pages, your own host, etc).

## Editing content, services, and prices

Everything about the three services — names, descriptions, what's included,
process steps, pricing tiers, and FAQs — lives in one file:

```
src/data/services.js
```

Edit the objects in that array to change copy or prices. To **add a new
service**, copy one of the existing objects, give it a unique `slug`, and it
will automatically appear in the navigation, the home page grid, and get its
own page at `/services/your-slug`.

## The contact form

The form at `/contact` currently opens the visitor's email app with the
message pre-filled (via a `mailto:` link) — this works with zero backend, but
it does depend on the visitor having an email client configured on their
device.

For a more reliable inbox (recommended before launch), swap the `handleSubmit`
function in `src/pages/Contact.jsx` for a request to a form service like
Formspree or Resend, or your own backend endpoint. The relevant code is
clearly marked with a comment.

## Design notes

The visual identity is a "blueprint / drafting" theme — grid lines, corner
registration marks (a nod to print production), a technical display face
(Space Grotesk) paired with a warm serif (Fraunces) for body text. Colors and
type are defined as CSS variables at the top of `src/index.css` if you want to
adjust the palette.

## Folder structure

```
src/
  components/    Nav, Footer (shared across pages)
  data/          services.js — all editable content
  pages/         Home, ServicePage, Contact, NotFound
  App.jsx        routes
  index.css      design tokens & global styles
```
