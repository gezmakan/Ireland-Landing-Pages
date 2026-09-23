"use client";

import { useMemo, useState } from "react";
import type { Activity, ActivityCategory } from "@/data/activities";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import ActivityCard from "./ActivityCard";

type Filter = "all" | ActivityCategory;

export default function ActivityExplorer({ activities, locale }: { activities: Activity[]; locale: Locale }) {
  const t = getDictionary(locale).explorer;
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const TABS: { key: Filter; label: string }[] = [
    { key: "all", label: t.tabs.all },
    { key: "free", label: t.tabs.free },
    { key: "student", label: t.tabs.student },
    { key: "daytrip", label: t.tabs.daytrip },
  ];

  const counts = useMemo(() => {
    const base: Record<Filter, number> = { all: activities.length, free: 0, student: 0, daytrip: 0 };
    for (const a of activities) base[a.category]++;
    return base;
  }, [activities]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return activities.filter((a) => {
      const matchesFilter = filter === "all" || a.category === filter;
      const matchesQuery = !q || a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [activities, filter, query]);

  return (
    <section id="activities" className="mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6 lg:px-8">
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
            placeholder={t.searchPlaceholder}
            className="w-full rounded-full border border-black/10 bg-white py-2.5 pl-9 pr-4 text-sm text-navy placeholder:text-neutral-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 rounded-2xl border border-dashed border-black/10 bg-neutral-50 py-16 text-center text-sm text-neutral-500">
          {t.noResults(query)}
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((activity) => (
            <ActivityCard key={activity.slug} activity={activity} locale={locale} />
          ))}
        </div>
      )}
    </section>
  );
}
