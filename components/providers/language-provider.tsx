"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  defaultLocale,
  getTranslations,
  isLocale,
  localeHtmlLang,
  locales,
  type Locale,
  type Translations,
} from "@/lib/i18n";

const STORAGE_KEY = "maid-my-day-locale";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && isLocale(stored)) {
    return stored;
  }

  return defaultLocale;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLocaleState(readStoredLocale());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = localeHtmlLang[locale];
    document.documentElement.setAttribute("translate", "no");
    document.documentElement.classList.add("notranslate");
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.classList.remove(
      ...locales.filter((code) => code !== "en").map((code) => `locale-${code}`),
    );
    if (locale !== "en") {
      document.documentElement.classList.add(`locale-${locale}`);
    }
  }, [locale, ready]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: getTranslations(locale),
    }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
