# ResortOS — Marketing Website

Public marketing website for **ResortOS**, a cloud-based property management
system for independent resorts in India.

- Live product (separate app): https://pms.voittoventures.com/
- This site will live at: https://resortos.anshmaansingh.in

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS 3
- lucide-react icons
- Static export (`output: "export"`) — no server, database, or backend required

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static site is emitted to `out/`.

## Deploy to Cloudflare Pages

1. Push this repo to GitHub.
2. In Cloudflare Pages, create a project from the repo.
3. Build command: `npm run build`
4. Build output directory: `out`
5. Node version: 20+

No environment variables are needed. The `404.html` page is generated from
`src/app/not-found.tsx` and is picked up automatically.

## Notes

- All product mockups use clearly-labelled fictional sample data.
- "Request Demo" buttons open a pre-addressed email to
  info@anshmaansingh.in — there is no fake signup flow.
- "View Live Product" links to the real PMS at pms.voittoventures.com
  in a new tab.
