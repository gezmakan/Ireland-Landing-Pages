# Ireland Landing Pages

Shared Next.js app powering every landing page under `ireland.educationstate.co`.
One deployment, one design system — each landing page is just a route folder.

- **Live:** https://ireland.educationstate.co (once DNS/cert finish propagating), also at https://ireland-activities.vercel.app
- **Repo:** https://github.com/gezmakan/Ireland-Landing-Pages — pushes to `main` auto-deploy via the connected Vercel project (`educationstate/ireland-activities`)

## Pages

| Path | Route file |
|---|---|
| `/activities` | `src/app/activities/page.tsx` |
| `/tr/activities` | `src/app/tr/activities/page.tsx` |
| `/de/activities` | `src/app/de/activities/page.tsx` |
| `/food` | `src/app/food/page.tsx` (English only so far) |

`/` redirects to `/activities` (see `src/app/page.tsx`) — revisit that once there's more than one page to land visitors on.

## Adding a new landing page (e.g. `/food`)

1. Create `src/app/food/page.tsx`.
2. Reuse the shared chrome from `src/components/`: `Header` and `Footer` take a `locale` and an `hrefs` map (`Partial<Record<Locale, string>>`). For an English-only page, pass `hrefs={{ en: "/food" }}` — `LanguageSwitcher` automatically hides itself when there's only one locale available, so no dead TR/DE links.
3. Build page-specific sections as new components in `src/components/` (e.g. `FoodHero.tsx`, `RestaurantExplorer.tsx`), following the pattern of `Hero.tsx` / `ActivityExplorer.tsx`.
4. If the page needs its own data set, add it under `src/data/` (see `activities.ts` / `food.ts` for the shape used so far).
5. To add a translation later (e.g. `/tr/food`), mirror the `activities` → `tr/activities` pattern: a translated data file (`food.tr.ts`), locale-aware copy in `src/lib/dictionaries.ts`, a new route folder, and widen that page's `hrefs` map (and the English page's) to include the new locale so the switcher picks it up both ways.
6. Commit and push to `main` — Vercel picks it up automatically. No new Vercel project, no new domain, no new DNS record needed; it's served at `ireland.educationstate.co/food` immediately.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/activities`.

## Deployment

```bash
vercel --prod
```

(Usually unnecessary — pushing to `main` on GitHub triggers this automatically.)
