"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { PageHero } from "@/components/pages/page-hero";
import { pageHeroImages, type PageHeroKey } from "@/lib/i18n/page-images";

export function LocalizedPageHero({ page }: { page: PageHeroKey }) {
  const { t } = useLanguage();
  const content = t.pageHero[page];

  return <PageHero {...content} image={pageHeroImages[page]} />;
}
