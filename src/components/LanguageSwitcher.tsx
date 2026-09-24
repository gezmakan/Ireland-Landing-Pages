"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LANGUAGE_NAMES, LOCALES, type Locale } from "@/lib/dictionaries";

export default function LanguageSwitcher({
  locale,
  hrefs,
}: {
  locale: Locale;
  hrefs: Partial<Record<Locale, string>>;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const available = LOCALES.filter((l) => hrefs[l]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  if (available.length <= 1) return null;

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-full bg-neutral-100 px-3.5 py-2 text-xs font-bold uppercase text-navy transition hover:bg-neutral-200"
      >
        {locale}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full z-40 mt-2 w-40 overflow-hidden rounded-xl border border-black/5 bg-white py-1 shadow-lg"
        >
          {available.map((l) => (
            <Link
              key={l}
              href={hrefs[l]!}
              role="option"
              aria-selected={l === locale}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between px-4 py-2 text-sm font-medium transition ${
                l === locale ? "bg-neutral-50 text-navy" : "text-neutral-600 hover:bg-neutral-50 hover:text-navy"
              }`}
            >
              {LANGUAGE_NAMES[l]}
              {l === locale && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  className="h-4 w-4 text-accent"
                >
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
