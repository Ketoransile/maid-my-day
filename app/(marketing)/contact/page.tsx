import type { Metadata } from "next";

import { LocalizedPageCta } from "@/components/pages/localized-page-cta";
import { LocalizedPageHero } from "@/components/pages/localized-page-hero";
import { ContactPageContent } from "@/components/pages/contact-page-content";
import { Contact } from "@/components/sections/Contact";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Contact | Maid My Day",
  description:
    "Get in touch for housemaids, drivers, relocation support, and home management in Addis Ababa. Reply within 24 hours.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <LocalizedPageHero page="contact" />
      <Contact />
      <ContactPageContent />
      <LocalizedPageCta page="contact" />
    </PageShell>
  );
}
