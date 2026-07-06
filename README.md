# ABHEE Smart Liv — Next.js 15 site

## What changed on the homepage (`app/page.tsx`)

- Every section follows the same text budget: **small label → strong headline → one sentence (≤20 words) → one CTA**. No paragraphs anywhere.
- All 13 product categories are visible in the **second section** of the homepage (a bento grid), immediately after the hero — nothing is buried.
- Each following section uses a **different layout** so the page never repeats itself: full hero → catalogue bento → 2-column editorial → horizontal scroll gallery → full-width cinematic banner → asymmetrical blocks → stat bar → final CTA.
- No section repeats product data already shown in the catalogue bento — later sections use atmosphere/lifestyle photography instead, so nothing feels duplicated.
- Images are ~80% of every section's visual weight; text blocks are short and always paired with a CTA.

## SEO / GEO infrastructure

| Need | Where it lives |
|---|---|
| Per-product SEO pages | `app/products/[slug]/page.tsx` — one route per category, `generateStaticParams` from `lib/products-data.ts` |
| Per-city SEO pages | `app/locations/[city]/page.tsx` — Hyderabad, Vijayawada, Bangalore, Chennai to start; add more cities in `lib/cities-data.ts` |
| Blog / journal | `app/blog/[slug]/page.tsx` — question-answer format, one sample article included |
| Meta titles/descriptions, OG, Twitter cards | Set per-page via `generateMetadata` / `metadata` exports |
| Organization, LocalBusiness, Product, Service, FAQ, Review, Breadcrumb, Speakable schema | `lib/schema.ts`, injected via `components/JsonLd.tsx` |
| XML sitemap | `app/sitemap.ts` (auto-includes every product, city and article route) |
| robots.txt | `app/robots.ts` |
| Canonical URLs | Set on every page via `alternates.canonical` |
| Image alt text | Every image has a descriptive, keyword-relevant `alt` |
| Lazy loading / fast loading | Handled by `next/image` automatically; hero images use `priority` only where they're above the fold |

## GEO (AI-search) notes

- FAQ blocks on every product and article page double as direct-answer content for AI Overviews, ChatGPT, Perplexity, etc. Keep answers to 1–2 plain sentences.
- `speakableSchema()` marks the headline/intro on hero sections so voice assistants know what to read aloud.
- Entities (products, cities, the ABHEE brand) are modeled as distinct schema objects rather than free text, which is what current AI answer engines parse most reliably.

## Before launch

1. **Replace all `picsum.photos` placeholder images** with real ABHEE installation/lifestyle photography — this is the single biggest lever for the "premium" feel the brief asks for.
2. Confirm phone/email/address in `lib/site-config.ts`.
3. Add remaining cities or products by extending `lib/cities-data.ts` / `lib/products-data.ts` — every page, schema entry, and sitemap entry is generated from those two files.
4. Run `npm install` then `npm run build` to verify a clean production build before deploying.
