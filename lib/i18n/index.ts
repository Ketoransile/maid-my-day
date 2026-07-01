import { en } from "./build-en";
import { amOverrides } from "./locales/am-overrides";
import { arOverrides } from "./locales/ar-overrides";
import { frOverrides } from "./locales/fr-overrides";
import { omOverrides } from "./locales/om-overrides";
import { soOverrides } from "./locales/so-overrides";
import { svOverrides } from "./locales/sv-overrides";
import { zhOverrides } from "./locales/zh-overrides";
import { deepMerge } from "./merge";
import type { Translations } from "./types";

export const locales = ["en", "am", "om", "so", "fr", "zh", "ar", "sv"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** BCP 47 lang attribute for document.documentElement.lang */
export const localeHtmlLang: Record<Locale, string> = {
  en: "en",
  am: "am",
  om: "om",
  so: "so",
  fr: "fr",
  zh: "zh-CN",
  ar: "ar",
  sv: "sv",
};

export const languageOptions = [
  { value: "en" as const, label: "English", badge: "EN", subtitle: "English" },
  { value: "am" as const, label: "አማርኛ", badge: "አማ", subtitle: "Amharic" },
  { value: "om" as const, label: "Afaan Oromoo", badge: "OM", subtitle: "Oromo" },
  { value: "so" as const, label: "Soomaali", badge: "SO", subtitle: "Somali" },
  { value: "fr" as const, label: "Français", badge: "FR", subtitle: "French" },
  { value: "zh" as const, label: "中文", badge: "中", subtitle: "Chinese" },
  { value: "ar" as const, label: "العربية", badge: "ع", subtitle: "Arabic" },
  { value: "sv" as const, label: "Svenska", badge: "SV", subtitle: "Swedish" },
] as const;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

const localeMap: Record<Locale, Translations> = {
  en,
  am: deepMerge(en, amOverrides),
  om: deepMerge(en, omOverrides),
  so: deepMerge(en, soOverrides),
  fr: deepMerge(en, frOverrides),
  zh: deepMerge(en, zhOverrides),
  ar: deepMerge(en, arOverrides),
  sv: deepMerge(en, svOverrides),
};

export function getTranslations(locale: Locale): Translations {
  return localeMap[locale] ?? en;
}

export type { Translations } from "./types";
