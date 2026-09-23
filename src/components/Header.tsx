import Image from "next/image";
import type { Locale } from "@/lib/dictionaries";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ locale, hrefs }: { locale: Locale; hrefs: Record<Locale, string> }) {
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

        <LanguageSwitcher locale={locale} hrefs={hrefs} />
      </div>
    </header>
  );
}
