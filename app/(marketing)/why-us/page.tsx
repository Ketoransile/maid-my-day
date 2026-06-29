import type { Metadata } from "next";

import { LocalizedPageCta } from "@/components/pages/localized-page-cta";
import { LocalizedPageHero } from "@/components/pages/localized-page-hero";
import { WhyUsPageContent } from "@/components/pages/why-us-page-content";
import { Mission } from "@/components/sections/Mission";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyUs } from "@/components/sections/WhyUs";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Why Us | Maid My Day",
  description:
    "Trusted household and relocation support for diplomats, embassy staff, and international families in Addis Ababa.",
};

export default function WhyUsPage() {
  return (
    <PageShell>
      <LocalizedPageHero page="whyUs" />
      <WhyUs />
      <WhyUsPageContent />
      <Testimonials />
      <Mission />
      <LocalizedPageCta page="whyUs" />
    </PageShell>
  );
}
