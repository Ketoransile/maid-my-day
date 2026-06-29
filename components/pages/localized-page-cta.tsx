"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { SiteContainer } from "@/components/layout/site-container";
import { Button } from "@/components/ui/button";
import {
  SectionBackground,
  sectionContentClass,
  sectionShellClass,
} from "@/components/section-background";
import { sectionPaddingY } from "@/lib/section-spacing";

type PageCtaKey = keyof ReturnType<
  typeof import("@/lib/i18n").getTranslations
>["pageCta"];

const ctaHrefs: Record<
  PageCtaKey,
  { primary?: string; secondary: string }
> = {
  services: { secondary: "/how-it-works" },
  howItWorks: { secondary: "/why-us" },
  whyUs: { secondary: "/faq" },
  faq: { secondary: "/services" },
  contact: { primary: "tel:+251911000000", secondary: "/services" },
};

export function LocalizedPageCta({ page }: { page: PageCtaKey }) {
  const { locale, t } = useLanguage();
  const content = t.pageCta[page];
  const hrefs = ctaHrefs[page];
  const primaryLabel =
    "primaryLabel" in content
      ? content.primaryLabel
      : t.common.cta.contactUs;
  const secondaryLabel = content.secondaryLabel;
  const primaryHref = hrefs.primary ?? "/contact";

  return (
    <section className={`${sectionShellClass} ${sectionPaddingY}`}>
      <SectionBackground
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=85&auto=format&fit=crop"
        overlay="brand"
        imageOpacity={0.28}
      />
      <SiteContainer className={sectionContentClass}>
        <motion.div
          key={locale}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-[1.5rem] font-semibold text-white sm:text-[1.75rem]">
            {content.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
            {content.description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="rounded-xl" asChild>
              <Link href={primaryHref}>
                {primaryLabel}
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              asChild
            >
              <Link href={hrefs.secondary}>{secondaryLabel}</Link>
            </Button>
          </div>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
