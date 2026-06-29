import { en } from "./build-en";
import { amOverrides } from "./locales/am-overrides";
import { omOverrides } from "./locales/om-overrides";
import { soOverrides } from "./locales/so-overrides";
import { deepMerge } from "./merge";
import type { Translations } from "./types";

export const locales = ["en", "am", "om", "so"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const languageOptions = [
  { value: "en" as const, label: "English", badge: "EN", subtitle: "English" },
  { value: "am" as const, label: "አማርኛ", badge: "አማ", subtitle: "Amharic" },
  { value: "om" as const, label: "Afaan Oromoo", badge: "OM", subtitle: "Oromo" },
  { value: "so" as const, label: "Soomaali", badge: "SO", subtitle: "Somali" },
] as const;

const localeMap: Record<Locale, Translations> = {
  en,
  am: deepMerge(en, amOverrides),
  om: deepMerge(en, omOverrides),
  so: deepMerge(en, soOverrides),
};

export function getTranslations(locale: Locale): Translations {
  return localeMap[locale] ?? en;
}

export type { Translations } from "./types";
