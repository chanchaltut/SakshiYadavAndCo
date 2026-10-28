# Sakshi Yadav & Co. — Website

Website of **Sakshi Yadav & Co., Chartered Accountants**, SF-57, Ansal Fortune, Sector 18, Noida — https://sakshiyadavandco.in

React 18 + Vite + Tailwind CSS, deployed on Vercel.

## Commands

```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/ (includes pre-rendered pages, sitemap, llms.txt)
npm run preview    # serve the production build
npm run lint
```

## Where things live

| What | File |
| --- | --- |
| Firm details, contact info, services, FAQs, founder profile | `src/utils/constants.js` |
| Show / hide fees (off by default, per ICAI guidelines) | `SITE_FLAGS.showPricing` in `src/utils/constants.js` |
| Insights articles | `src/data/articles.js` |
| Titles, descriptions, canonical URLs, JSON-LD for every page | `src/seo/routes.js` |
| Build-time pre-rendering, sitemap.xml, llms.txt, llms-full.txt | `plugins/seo.js` |
| Design tokens (colours, fonts) | `tailwind.config.js`, `src/index.css` |
| Social banner, favicons, logo PNG | `scripts/brand-assets/*.html` → `./scripts/build-brand-assets.sh` |

## SEO / AEO / GEO

- Every route is pre-rendered at build time with its own title, meta, canonical, Open Graph/Twitter tags, JSON-LD and readable body copy, so link previews (WhatsApp, LinkedIn, X) and AI crawlers that don't run JavaScript see real content.
- Structured data: `AccountingService` with address, geo, hours and offer catalogue; `Person` for CA Sakshi Yadav (ICAI); `Service` + `FAQPage` per service; `Article` per post; `BreadcrumbList` everywhere.
- `sitemap.xml`, `llms.txt` and `llms-full.txt` are generated from the same data on every build. `robots.txt` explicitly allows search and AI answer-engine crawlers.
- New pages: add the route in `src/App.jsx` and its entry in `src/seo/routes.js` — pre-rendering and the sitemap pick it up automatically.

## Regenerating brand images

Edit `scripts/brand-assets/og.html` or `icon.html`, then run `./scripts/build-brand-assets.sh` (needs Google Chrome and Python 3 with Pillow).
