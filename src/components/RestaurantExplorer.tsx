"use client";

import { useMemo, useState } from "react";
import type { CuisineCategory, Restaurant } from "@/data/food";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import RestaurantCard from "./RestaurantCard";

type Filter = "all" | CuisineCategory;

export default function RestaurantExplorer({ restaurants, locale }: { restaurants: Restaurant[]; locale: Locale }) {
  const t = getDictionary(locale).food;
  const [filter, setFilter] = useState<Filter>("all");
  const [tagFilters, setTagFilters] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  const TABS: { key: Filter; label: string }[] = [
    { key: "all", label: t.tabs.all },
    { key: "local", label: t.tabs.local },
    { key: "turkish", label: t.tabs.turkish },
    { key: "chinese", label: t.tabs.chinese },
    { key: "indian", label: t.tabs.indian },
    { key: "italian", label: t.tabs.italian },
    { key: "japanese", label: t.tabs.japanese },
    { key: "mexican", label: t.tabs.mexican },
    { key: "korean", label: t.tabs.korean },
    { key: "vietnamese", label: t.tabs.vietnamese },
    { key: "brazilian", label: t.tabs.brazilian },
    { key: "malaysian", label: t.tabs.malaysian },
    { key: "persian", label: t.tabs.persian },
  ];

  const counts = useMemo(() => {
    const base = { all: restaurants.length } as Record<Filter, number>;
    for (const r of restaurants) base[r.category] = (base[r.category] ?? 0) + 1;
    return base;
  }, [restaurants]);

  const dietaryTags = useMemo(() => {
    const present = new Set<string>();
    restaurants.forEach((r) => r.offering.forEach((tag) => present.add(tag)));
    return t.dietaryOrder.filter((tag) => present.has(tag));
  }, [restaurants, t.dietaryOrder]);

  const tagCounts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const r of restaurants) {
      for (const tag of r.offering) {
        map[tag] = (map[tag] ?? 0) + 1;
      }
    }
    return map;
  }, [restaurants]);

  function toggleTag(tag: string) {
    setTagFilters((prev) => (prev.includes(tag) ? prev.filter((t2) => t2 !== tag) : [...prev, tag]));
  }

  const hasActiveFilters = filter !== "all" || tagFilters.length > 0 || query.trim().length > 0;

  function clearAll() {
    setFilter("all");
    setTagFilters([]);
    setQuery("");
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return restaurants.filter((r) => {
      const matchesFilter = filter === "all" || r.category === filter;
      const matchesTags = tagFilters.length === 0 || tagFilters.some((tag) => r.offering.includes(tag));
      const matchesQuery =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.cuisineType.toLowerCase().includes(q) ||
        r.address.toLowerCase().includes(q);
      return matchesFilter && matchesTags && matchesQuery;
    });
  }, [restaurants, filter, tagFilters, query]);

  return (
    <section id="restaurants" className="mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-black/5 bg-neutral-50/70 p-5 shadow-[0_1px_2px_rgba(16,24,43,0.04)] sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">{t.cuisineLabel}</p>
          {hasActiveFilters && (
            <button
              onClick={clearAll}
              className="text-[12px] font-semibold text-accent-dark transition hover:text-accent"
            >
              {t.clearFilters}
            </button>
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              aria-pressed={filter === tab.key}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === tab.key
                  ? "bg-navy text-white shadow-sm"
                  : "border border-black/10 bg-white text-neutral-600 hover:border-navy/20 hover:text-navy"
              }`}
            >
              {tab.label}
              <span
                className={`ml-2 rounded-full px-1.5 py-0.5 text-[11px] ${
                  filter === tab.key ? "bg-white/15 text-white" : "bg-neutral-100 text-neutral-400"
                }`}
              >
                {counts[tab.key]}
              </span>
            </button>
          ))}
        </div>

        <div className="my-5 h-px bg-black/5" />

        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">{t.dietaryLabel}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {dietaryTags.map((tag) => {
                const active = tagFilters.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    aria-pressed={active}
                    className={`shrink-0 rounded-full border px-3.5 py-1.5 text-[13px] font-semibold transition ${
                      active
                        ? "border-accent bg-accent text-white shadow-sm"
                        : "border-black/10 bg-white text-neutral-600 hover:border-accent/40 hover:text-accent-dark"
                    }`}
                  >
                    {tag}
                    <span className={`ml-1.5 text-[11px] ${active ? "text-white/75" : "text-neutral-400"}`}>
                      {tagCounts[tag]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="w-full lg:w-72 lg:pt-[21px]">
            <div className="relative">
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
                placeholder={t.searchPlaceholder}
                className="w-full rounded-full border border-black/10 bg-white py-2.5 pl-9 pr-4 text-sm text-navy placeholder:text-neutral-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </div>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 rounded-2xl border border-dashed border-black/10 bg-neutral-50 py-16 text-center text-sm text-neutral-500">
          {t.noResults(query)}
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((restaurant) => (
            <RestaurantCard key={restaurant.slug} restaurant={restaurant} locale={locale} />
          ))}
        </div>
      )}
    </section>
  );
}
