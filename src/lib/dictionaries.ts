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
      headlinePrefix: "What to see in Ireland,",
      headlineAccent: "during your visit?",
      paragraph:
        "Explore over 60+ places and experiences, from free museums and Ireland favourites to unforgettable day trips. Pick what suits your budget, watch a video, and plan your next adventure.",
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
      headlinePrefix: "İrlanda'da neler görmelisiniz,",
      headlineAccent: "ziyaretiniz boyunca?",
      paragraph:
        "60'tan fazla mekan ve deneyimi keşfedin; ücretsiz müzelerden İrlanda'nın favorilerine, unutulmaz günübirlik turlara kadar. Bütçenize uygun olanı seçin, bir video izleyin ve bir sonraki maceranızı planlayın.",
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
      headlinePrefix: "Was man in Irland sehen sollte,",
      headlineAccent: "während des Aufenthalts?",
      paragraph:
        "Entdecken Sie über 60 Orte und Erlebnisse – von kostenlosen Museen und irischen Favoriten bis hin zu unvergesslichen Tagesausflügen. Wählen Sie, was zu Ihrem Budget passt, schauen Sie sich ein Video an und planen Sie Ihr nächstes Abenteuer.",
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
