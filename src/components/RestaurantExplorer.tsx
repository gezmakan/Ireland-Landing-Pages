"use client";

import { useMemo, useState } from "react";
import { restaurants, CUISINE_LABELS, type CuisineCategory } from "@/data/food";
import RestaurantCard from "./RestaurantCard";

type Filter = "all" | CuisineCategory;

const TABS: { key: Filter; label: string }[] = [
  { key: "all", label: "All Cuisines" },
  { key: "local", label: CUISINE_LABELS.local },
  { key: "turkish", label: CUISINE_LABELS.turkish },
  { key: "chinese", label: CUISINE_LABELS.chinese },
  { key: "indian", label: CUISINE_LABELS.indian },
  { key: "italian", label: CUISINE_LABELS.italian },
  { key: "japanese", label: CUISINE_LABELS.japanese },
  { key: "mexican", label: CUISINE_LABELS.mexican },
];

export default function RestaurantExplorer() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const base = { all: restaurants.length } as Record<Filter, number>;
    for (const r of restaurants) base[r.category] = (base[r.category] ?? 0) + 1;
    return base;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return restaurants.filter((r) => {
      const matchesFilter = filter === "all" || r.category === filter;
      const matchesQuery =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.cuisineType.toLowerCase().includes(q) ||
        r.address.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <section id="restaurants" className="mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === tab.key
                  ? "bg-navy text-white shadow-sm"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {tab.label}
              <span
                className={`ml-2 rounded-full px-1.5 py-0.5 text-[11px] ${
                  filter === tab.key ? "bg-white/15 text-white" : "bg-white text-neutral-400"
                }`}
              >
                {counts[tab.key]}
              </span>
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search restaurants…"
            className="w-full rounded-full border border-black/10 bg-white py-2.5 pl-9 pr-4 text-sm text-navy placeholder:text-neutral-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 rounded-2xl border border-dashed border-black/10 bg-neutral-50 py-16 text-center text-sm text-neutral-500">
          No restaurants match &ldquo;{query}&rdquo;. Try a different search.
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((restaurant) => (
            <RestaurantCard key={restaurant.slug} restaurant={restaurant} />
          ))}
        </div>
      )}
    </section>
  );
}
