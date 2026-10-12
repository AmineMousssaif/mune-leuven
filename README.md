# Muné Leuven website

A redesigned website concept for [Muné](https://mune.be), the Dubai-inspired brunch and sweets spot at Muntstraat 46, Leuven.

- `/` home page: story, vision, The International, menu preview, signature sweets, gallery, opening hours.
- `/menu/` full menu with prices, allergens, category navigation and search.

Content, prices, hours and photos come from mune.be (October 2026). The menu lives in `data/menu.ts`, hours and contact details in `data/site.ts`.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

The site is a static export (`output: "export"`), so `npm run build` writes plain HTML to `out/`. On Vercel, import the repository and keep the default Next.js settings.
