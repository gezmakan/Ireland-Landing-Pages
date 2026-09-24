import Image from "next/image";
import type { CuisineCategory, Restaurant } from "@/data/food";
import { mapsSearchUrl } from "@/data/food";
import { getDictionary, type Locale } from "@/lib/dictionaries";

const CATEGORY_BADGE: Record<CuisineCategory, string> = {
  local: "bg-amber-50 text-amber-700 ring-amber-600/20",
  turkish: "bg-rose-50 text-rose-700 ring-rose-600/20",
  chinese: "bg-red-50 text-red-700 ring-red-600/20",
  indian: "bg-orange-50 text-orange-700 ring-orange-600/20",
  italian: "bg-green-50 text-green-700 ring-green-600/20",
  japanese: "bg-sky-50 text-sky-700 ring-sky-600/20",
  mexican: "bg-lime-50 text-lime-700 ring-lime-600/20",
};

export default function RestaurantCard({ restaurant, locale }: { restaurant: Restaurant; locale: Locale }) {
  const t = getDictionary(locale).food;
  const mapsHref = mapsSearchUrl(restaurant);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_1px_2px_rgba(16,24,43,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_-14px_rgba(16,24,43,0.25)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-soft">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          sizes="(min-width: 1024px) 31vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />

        <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-navy ring-1 ring-inset ring-black/10 backdrop-blur-sm">
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-amber-400">
            <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L10 1.5z" />
          </svg>
          {restaurant.rating.toFixed(1)}
        </span>

        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-navy ring-1 ring-inset ring-black/10 backdrop-blur-sm">
          {restaurant.priceRange}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div>
          <h3 className="text-[15px] font-bold leading-snug text-navy">{restaurant.name}</h3>
          <p className="text-[12px] font-medium text-neutral-400">{restaurant.cuisineType}</p>
        </div>

        {restaurant.offering.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {restaurant.offering.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-semibold text-neutral-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="flex-1 text-[12px] leading-relaxed text-neutral-500">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="mr-1 inline h-3.5 w-3.5 -translate-y-px text-neutral-400">
            <path
              d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="9" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {restaurant.address}
        </p>

        <div className="mt-1 flex items-center justify-between border-t border-black/5 pt-3">
          <span
            className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${CATEGORY_BADGE[restaurant.category]}`}
          >
            {t.tabs[restaurant.category]}
          </span>
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] font-semibold text-accent-dark hover:text-accent"
          >
            {t.viewOnMaps}
          </a>
        </div>
      </div>
    </article>
  );
}
