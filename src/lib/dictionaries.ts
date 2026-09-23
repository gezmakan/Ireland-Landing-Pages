export type Locale = "en" | "tr" | "de";

export const LOCALES: Locale[] = ["en", "tr", "de"];

export const LANGUAGE_NAMES: Record<Locale, string> = {
  en: "English",
  tr: "Türkçe",
  de: "Deutsch",
};

export const dictionaries = {
  en: {
    footer: {
      tagline:
        "Since 2010, Education State & Eğitim İrlanda have helped thousands of students study abroad — with Ireland at the heart of everything we do.",
      copyright: (year: number) =>
        `© ${year} Education State. All activity pricing is indicative and subject to change.`,
    },
    hero: {
      kickerPrefix: "Ireland",
      kickerAccent: "Activity Guide",
      headlinePrefix: "Everything to do in Ireland,",
      headlineAccent: "during your visit.",
      paragraph:
        "From free museums to student-priced icons and full-day adventures — this is the same curated activity list Education State shares with every international student, now searchable in one place.",
      browseCta: "Browse Activities",
      visitCta: "Visit Education State",
      stats: {
        curated: "Curated Activities",
        free: "Free To Visit",
        daytrips: "Day Trips",
        cities: "Cities Covered",
      },
    },
    explorer: {
      tabs: { all: "All Activities", free: "Free to Visit", student: "Paid Attractions", daytrip: "Day Trips" },
      searchPlaceholder: "Search activities…",
      noResults: (q: string) => `No activities match "${q}". Try a different search.`,
    },
    card: {
      freeEntry: "Free entry",
      free: "Free",
      dayTrip: "Day trip",
      paidAttraction: "Paid attraction",
      watchVideo: "Watch video →",
      watchVideoAria: (title: string) => `Watch video about ${title}`,
      noVideo: "No video",
    },
  },
  tr: {
    footer: {
      tagline:
        "2010'dan bu yana Education State ve Eğitim İrlanda, binlerce öğrencinin yurt dışında eğitim almasına yardımcı oldu — ve bu yolculuğun kalbinde her zaman İrlanda var.",
      copyright: (year: number) =>
        `© ${year} Education State. Tüm aktivite fiyatları bilgilendirme amaçlıdır ve değişiklik gösterebilir.`,
    },
    hero: {
      kickerPrefix: "İrlanda",
      kickerAccent: "Aktivite Rehberi",
      headlinePrefix: "İrlanda'da yapılacak her şey,",
      headlineAccent: "ziyaretiniz boyunca.",
      paragraph:
        "Ücretsiz müzelerden öğrenci fiyatlı simge yapılara ve tam günlük maceralara kadar — bu, Education State'in her uluslararası öğrenciyle paylaştığı aynı özenle hazırlanmış aktivite listesi, artık tek bir yerde aranabilir.",
      browseCta: "Aktivitelere Göz At",
      visitCta: "Education State'i Ziyaret Et",
      stats: {
        curated: "Seçilmiş Aktivite",
        free: "Ücretsiz Ziyaret",
        daytrips: "Günübirlik Tur",
        cities: "Kapsanan Şehir",
      },
    },
    explorer: {
      tabs: { all: "Tüm Aktiviteler", free: "Ücretsiz Gezilecekler", student: "Ücretli Aktiviteler", daytrip: "Günübirlik Turlar" },
      searchPlaceholder: "Aktivite ara…",
      noResults: (q: string) => `"${q}" ile eşleşen aktivite bulunamadı. Farklı bir arama deneyin.`,
    },
    card: {
      freeEntry: "Ücretsiz giriş",
      free: "Ücretsiz",
      dayTrip: "Günübirlik tur",
      paidAttraction: "Ücretli aktivite",
      watchVideo: "Videoyu izle →",
      watchVideoAria: (title: string) => `${title} hakkında videoyu izle`,
      noVideo: "Video yok",
    },
  },
  de: {
    footer: {
      tagline:
        "Seit 2010 helfen Education State & Eğitim İrlanda Tausenden von Studierenden dabei, im Ausland zu studieren — mit Irland immer im Mittelpunkt.",
      copyright: (year: number) =>
        `© ${year} Education State. Alle Preisangaben zu Aktivitäten sind unverbindlich und können sich ändern.`,
    },
    hero: {
      kickerPrefix: "Irland",
      kickerAccent: "Aktivitätenführer",
      headlinePrefix: "Alles, was man in Irland unternehmen kann,",
      headlineAccent: "während des Aufenthalts.",
      paragraph:
        "Von kostenlosen Museen über Attraktionen zu Studierendenpreisen bis hin zu ganztägigen Abenteuern — dies ist dieselbe kuratierte Aktivitätenliste, die Education State mit jedem internationalen Studierenden teilt, jetzt an einem Ort durchsuchbar.",
      browseCta: "Aktivitäten entdecken",
      visitCta: "Education State besuchen",
      stats: {
        curated: "Kuratierte Aktivitäten",
        free: "Kostenlos besuchbar",
        daytrips: "Tagesausflüge",
        cities: "Abgedeckte Städte",
      },
    },
    explorer: {
      tabs: { all: "Alle Aktivitäten", free: "Kostenlos", student: "Kostenpflichtig", daytrip: "Tagesausflüge" },
      searchPlaceholder: "Aktivität suchen…",
      noResults: (q: string) => `Keine Aktivitäten gefunden für „${q}". Versuchen Sie eine andere Suche.`,
    },
    card: {
      freeEntry: "Kostenloser Eintritt",
      free: "Kostenlos",
      dayTrip: "Tagesausflug",
      paidAttraction: "Kostenpflichtig",
      watchVideo: "Video ansehen →",
      watchVideoAria: (title: string) => `Video über ${title} ansehen`,
      noVideo: "Kein Video",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
