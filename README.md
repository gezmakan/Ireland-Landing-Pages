# Ireland Landing Pages

Shared Next.js app powering every landing page under `ireland.educationstate.co`.
One deployment, one design system — each landing page is just a route folder.

- **Live:** https://ireland.educationstate.co (once DNS/cert finish propagating), also at https://ireland-activities.vercel.app
- **Repo:** https://github.com/gezmakan/Ireland-Landing-Pages — pushes to `main` auto-deploy via the connected Vercel project (`educationstate/ireland-activities`)

## Pages

| Path | Route file |
|---|---|
| `/activities` | `src/app/activities/page.tsx` |

`/` redirects to `/activities` (see `src/app/page.tsx`) — revisit that once there's more than one page to land visitors on.

## Adding a new landing page (e.g. `/food`)

1. Create `src/app/food/page.tsx`.
2. Reuse the shared chrome from `src/components/`: `Header` and `Footer` are generic (logo + link only, no page-specific content) — import them as-is.
3. Build page-specific sections as new components in `src/components/` (e.g. `FoodHero.tsx`, `FoodMenu.tsx`), following the pattern of `Hero.tsx` / `ActivityExplorer.tsx`.
4. If the page needs its own data set, add it under `src/data/` (see `activities.ts` for the shape used on `/activities`).
5. Commit and push to `main` — Vercel picks it up automatically. No new Vercel project, no new domain, no new DNS record needed; it's served at `ireland.educationstate.co/food` immediately.

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
