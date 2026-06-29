import type { Metadata } from "next";

import { LocalizedPageCta } from "@/components/pages/localized-page-cta";
import { LocalizedPageHero } from "@/components/pages/localized-page-hero";
import { ServicesPageContent } from "@/components/pages/services-page-content";
import { Services } from "@/components/sections/Services";
import { TrustBar } from "@/components/sections/TrustBar";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Services | Maid My Day",
  description:
    "Housing & relocation, trained housemaids, professional drivers, pet care, and home management for expat families in Addis Ababa.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <LocalizedPageHero page="services" />
      <TrustBar />
      <Services />
      <ServicesPageContent />
      <LocalizedPageCta page="services" />
    </PageShell>
  );
}
