import type { Metadata } from "next";

import { LocalizedPageCta } from "@/components/pages/localized-page-cta";
import { LocalizedPageHero } from "@/components/pages/localized-page-hero";
import { FaqPageContent } from "@/components/pages/faq-page-content";
import { FAQ } from "@/components/sections/FAQ";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "FAQ | Maid My Day",
  description:
    "Answers about staff vetting, relocation packages, pricing, and household support in Addis Ababa.",
};

export default function FaqPage() {
  return (
    <PageShell>
      <LocalizedPageHero page="faq" />
      <FAQ />
      <FaqPageContent />
      <LocalizedPageCta page="faq" />
    </PageShell>
  );
}
