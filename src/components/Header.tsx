import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/dictionaries";

export default function Header({ locale, switchHref }: { locale: Locale; switchHref: string }) {
  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="https://educationstate.ie" className="flex items-center">
          <Image
            src="/education-state-logo.png"
            alt="Education State"
            width={1870}
            height={300}
            priority
            className="h-9 w-auto"
          />
        </a>

        <div className="flex items-center gap-0.5 rounded-full bg-neutral-100 p-1 text-xs font-bold">
          {locale === "en" ? (
            <span className="rounded-full bg-navy px-3 py-1.5 text-white">EN</span>
          ) : (
            <Link href={switchHref} className="rounded-full px-3 py-1.5 text-neutral-500 transition hover:text-navy">
              EN
            </Link>
          )}
          {locale === "tr" ? (
            <span className="rounded-full bg-navy px-3 py-1.5 text-white">TR</span>
          ) : (
            <Link href={switchHref} className="rounded-full px-3 py-1.5 text-neutral-500 transition hover:text-navy">
              TR
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
