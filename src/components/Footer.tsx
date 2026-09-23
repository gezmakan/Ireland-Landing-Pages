import Image from "next/image";
import { getDictionary, type Locale } from "@/lib/dictionaries";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).footer;

  return (
    <footer className="bg-navy text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="rounded-xl bg-white px-3 py-2">
            <Image
              src="/education-state-logo.png"
              alt="Education State"
              width={1870}
              height={300}
              className="h-7 w-auto"
            />
          </div>
          <p className="max-w-md text-sm leading-relaxed">{t.tagline}</p>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>{t.copyright(new Date().getFullYear())}</p>
          <a href="https://educationstate.ie" className="font-semibold text-white hover:text-accent">
            educationstate.ie →
          </a>
        </div>
      </div>
    </footer>
  );
}
