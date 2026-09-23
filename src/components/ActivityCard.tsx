import Image from "next/image";
import type { Activity } from "@/data/activities";
import { getDictionary, type Locale } from "@/lib/dictionaries";

const CATEGORY_BADGE: Record<Activity["category"], string> = {
  free: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  student: "bg-orange-50 text-accent-dark ring-accent/25",
  daytrip: "bg-sky-50 text-sky-700 ring-sky-600/20",
};

export default function ActivityCard({ activity, locale }: { activity: Activity; locale: Locale }) {
  const t = getDictionary(locale).card;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_1px_2px_rgba(16,24,43,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_-14px_rgba(16,24,43,0.25)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-soft">
        <Image
          src={activity.image}
          alt={activity.title}
          fill
          sizes="(min-width: 1024px) 31vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-0 transition group-hover:opacity-100" />

        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset backdrop-blur-sm ${
            activity.category === "free"
              ? "bg-white/90 text-emerald-700 ring-emerald-600/20"
              : "bg-white/90 text-navy ring-black/10"
          }`}
        >
          {activity.category === "free" ? t.freeEntry : activity.price}
        </span>

        {activity.video && (
          <a
            href={activity.video}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy opacity-0 shadow-md transition duration-300 group-hover:opacity-100 hover:bg-accent hover:text-white"
            aria-label={t.watchVideoAria(activity.title)}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-4 w-4">
              <path d="M8 5v14l11-7z" />
            </svg>
          </a>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-[15px] font-bold leading-snug text-navy">{activity.title}</h3>
        <p className="line-clamp-3 flex-1 text-[13px] leading-relaxed text-neutral-500">
          {activity.description}
        </p>

        <div className="mt-1 flex items-center justify-between border-t border-black/5 pt-3">
          <span
            className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${CATEGORY_BADGE[activity.category]}`}
          >
            {activity.category === "free" ? t.free : activity.category === "daytrip" ? t.dayTrip : t.paidAttraction}
          </span>
          {activity.video ? (
            <a
              href={activity.video}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-semibold text-accent-dark hover:text-accent"
            >
              {t.watchVideo}
            </a>
          ) : (
            <span className="text-[12px] font-medium text-neutral-300">{t.noVideo}</span>
          )}
        </div>
      </div>
    </article>
  );
}
