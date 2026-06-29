import type { Metadata } from "next";

import { LocalizedPageCta } from "@/components/pages/localized-page-cta";
import { LocalizedPageHero } from "@/components/pages/localized-page-hero";
import { HowItWorksPageContent } from "@/components/pages/how-it-works-page-content";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "How It Works | Maid My Day",
  description:
    "A clear seven-step process from first inquiry to settled household support in Addis Ababa.",
};

export default function HowItWorksPage() {
  return (
    <PageShell>
      <LocalizedPageHero page="howItWorks" />
      <HowItWorks variant="page" />
      <HowItWorksPageContent />
      <LocalizedPageCta page="howItWorks" />
    </PageShell>
  );
}
