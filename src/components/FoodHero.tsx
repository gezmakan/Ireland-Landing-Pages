import Image from "next/image";
import { restaurants } from "@/data/food";

const collage = [
  {
    key: "mixed-grill",
    alt: "Turkish adana kebab grill with rice and flatbread",
    image: "https://images.unsplash.com/photo-1620167790054-de54f34308bb?auto=format&fit=crop&w=800&h=800&q=80",
  },
  {
    key: "sushi",
    alt: "Sushi rolls with salmon roe",
    image: "https://images.unsplash.com/photo-1653122024993-31e02aedb1ac?auto=format&fit=crop&w=800&h=800&q=80",
  },
  {
    key: "fish-and-chips",
    alt: "Fish and chips",
    image: "https://images.unsplash.com/photo-1697748836791-9ddf7e616ece?auto=format&fit=crop&w=800&h=800&q=80",
  },
  {
    key: "pizza",
    alt: "Fresh pizza",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&h=800&q=80",
  },
];

const cuisineCount = new Set(restaurants.map((r) => r.category)).size;
const halalCount = restaurants.filter((r) => r.offering.some((o) => o.toLowerCase().includes("halal"))).length;
const avgRating = (restaurants.reduce((sum, r) => sum + r.rating, 0) / restaurants.length).toFixed(1);

const stats = [
  { value: `${restaurants.length}+`, label: "Restaurants Listed" },
  { value: `${cuisineCount}`, label: "Cuisines Covered" },
  { value: `${halalCount}+`, label: "Halal-Friendly" },
  { value: avgRating, label: "Avg. Google Rating" },
];

export default function FoodHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-14 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-20 lg:pt-16">
        <div>
          <h1 className="text-3xl font-extrabold uppercase tracking-tight text-navy sm:text-4xl">
            Ireland <span className="text-accent">Food Guide</span>
          </h1>
          <p className="mt-3 text-2xl font-bold leading-snug text-navy sm:text-3xl">
            Where to eat in Ireland, <span className="text-accent">during your visit?</span>
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-500 sm:text-xl">
            Explore over {restaurants.length}+ Dublin restaurants across {cuisineCount} cuisines, from cosy Irish
            pubs to halal-friendly grills. Filter by cuisine, check the price range, and find your next meal.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#restaurants"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-accent/20 transition hover:bg-accent-dark"
            >
              Browse Restaurants
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://educationstate.ie"
              className="inline-flex items-center rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-navy transition hover:bg-neutral-50"
            >
              Visit Education State
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-navy px-5 py-6 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-extrabold text-white sm:text-4xl">{s.value}</dd>
                <dd className="mt-1.5 text-sm font-semibold text-white/70 sm:text-base">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {collage.map((item, i) => (
              <div
                key={item.key}
                className="relative aspect-square overflow-hidden rounded-2xl bg-navy-soft shadow-lg"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-cover"
                  priority={i < 2}
                />
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -bottom-6 -left-6 -z-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-8 -top-8 -z-10 h-40 w-40 rounded-full bg-navy/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
