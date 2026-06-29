"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import { ContentSection } from "@/components/pages/content-section";
import { SiteContainer } from "@/components/layout/site-container";
import { Button } from "@/components/ui/button";
import {
  SectionBackground,
  sectionContentClass,
  sectionShellClass,
} from "@/components/section-background";
import { SectionHeader } from "@/components/section-header";
import { useLanguage } from "@/components/providers/language-provider";
import { images } from "@/lib/images";
import { easeOut } from "@/lib/motion";
import { sectionHeaderGap, sectionPaddingY } from "@/lib/section-spacing";
import { cn } from "@/lib/utils";

export function HomeIntroSection() {
  const { t } = useLanguage();
  const intro = t.homePage.intro;

  return (
    <section
      id="home-intro"
      className={`${sectionShellClass} border-t border-ink/6 ${sectionPaddingY}`}
    >
      <SectionBackground
        image={images.backgrounds.mission}
        overlay="alt"
        imageOpacity={0.45}
      />
      <SiteContainer className={sectionContentClass}>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-14">
          <div>
            <SectionHeader
              eyebrow={intro.eyebrow}
              title={intro.title}
              description={intro.lead}
              align="left"
            />
            <div className={cn("space-y-4 text-sm leading-relaxed text-ink/65 sm:text-[0.9375rem]", sectionHeaderGap)}>
              {intro.paragraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
            <Button className="mt-8 rounded-xl" asChild>
              <Link href="/contact">
                {t.common.cta.getStarted}
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {t.homePage.quickFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: easeOut }}
                className="section-surface rounded-2xl p-5 text-center"
              >
                <p className="text-xl font-semibold text-primary sm:text-2xl">
                  {fact.value}
                </p>
                <p className="mt-1.5 text-xs text-ink/55 sm:text-sm">{fact.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

export function HomePackagesSection() {
  const { t } = useLanguage();
  const pkgs = t.homePage;

  return (
    <ContentSection
      id="home-packages"
      eyebrow={pkgs.packages.eyebrow}
      title={pkgs.packages.title}
      description={pkgs.packages.description}
      image={images.backgrounds.services}
      overlay="soft"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {pkgs.relocationPackages.map((pkg, index) => (
          <article
            key={index}
            className="section-surface flex flex-col rounded-2xl p-6"
          >
            <h3 className="text-base font-semibold text-ink">{pkg.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              {pkg.description}
            </p>
            <ul className="mt-5 flex-1 space-y-2 border-t border-ink/6 pt-5">
              {pkg.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-ink/70">
                  <Check
                    size={14}
                    className="mt-0.5 shrink-0 text-primary"
                    strokeWidth={2}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button variant="outline" className="rounded-xl" asChild>
          <Link href="/services">{t.common.cta.exploreAllServices}</Link>
        </Button>
      </div>
    </ContentSection>
  );
}

export function HomeExpectationsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="home-expectations"
      className={`${sectionShellClass} border-t border-ink/6 ${sectionPaddingY}`}
    >
      <SiteContainer className={sectionContentClass}>
        <SectionHeader
          eyebrow={t.homePage.expectations.eyebrow}
          title={t.homePage.expectations.title}
          description={t.homePage.expectations.description}
        />
        <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-4", sectionHeaderGap)}>
          {t.homePage.expectationsItems.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.07, ease: easeOut }}
              className="section-surface rounded-2xl p-5"
            >
              <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {item.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}

export function HomeNeighborhoodsSection() {
  const { t } = useLanguage();

  return (
    <ContentSection
      id="home-neighborhoods"
      eyebrow={t.homePage.neighborhoods.eyebrow}
      title={t.homePage.neighborhoods.title}
      description={t.homePage.neighborhoods.description}
      image={images.backgrounds.whyUs}
      overlay="warm"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {t.homePage.neighborhoodItems.map((area, index) => (
          <article
            key={index}
            className="section-surface rounded-2xl p-6"
          >
            <h3 className="text-base font-semibold text-primary">{area.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">
              {area.detail}
            </p>
          </article>
        ))}
      </div>
    </ContentSection>
  );
}
