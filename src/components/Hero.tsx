import Image from "next/image";
import { activities } from "@/data/activities";

const collage = [
  activities.find((a) => a.title === "Phoenix Park"),
  activities.find((a) => a.title === "Guinness Storehouse"),
  activities.find((a) => a.title === "Trinity College Library & Book of Kells"),
  activities.find((a) => a.title === "Cliffs of Moher Tour from Dublin"),
].filter((a): a is NonNullable<typeof a> => Boolean(a));

const stats = [
  { value: `${activities.length}+`, label: "Curated Activities" },
  { value: `${activities.filter((a) => a.category === "free").length}`, label: "Free To Visit" },
  { value: `${activities.filter((a) => a.category === "daytrip").length}`, label: "Day Trips" },
  { value: "4", label: "Cities Covered" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-14 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-20 lg:pt-16">
        <div>
          <h1 className="text-3xl font-extrabold uppercase tracking-tight text-navy sm:text-4xl">
            Ireland <span className="text-accent">Activity Guide</span>
          </h1>
          <p className="mt-3 text-2xl font-bold leading-snug text-navy sm:text-3xl">
            Everything to do in Ireland, <span className="text-accent">during your visit.</span>
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-500 sm:text-xl">
            From free museums to student-priced icons and full-day adventures — this is the same
            curated activity list Education State shares with every international student, now
            searchable in one place.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#activities"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-accent/20 transition hover:bg-accent-dark"
            >
              Browse Activities
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
            {collage.map((activity, i) => (
              <div
                key={activity.slug}
                className="relative aspect-square overflow-hidden rounded-2xl bg-navy-soft shadow-lg"
              >
                <Image
                  src={activity.image}
                  alt={activity.title}
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
