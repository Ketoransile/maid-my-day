"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { ContentSection } from "@/components/pages/content-section";
import { useLanguage } from "@/components/providers/language-provider";
import { images } from "@/lib/images";
import { easeOut } from "@/lib/motion";
import { sectionPaddingY } from "@/lib/section-spacing";

export function WhyUsPageContent() {
  const { locale, t } = useLanguage();
  const page = t.whyUsPage;

  return (
    <>
      <ContentSection
        id="who-we-serve"
        eyebrow={page.whoWeServe.eyebrow}
        title={page.whoWeServe.title}
        description={page.whoWeServe.description}
        image={images.backgrounds.testimonials}
        overlay="warm"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {page.whoWeServeItems.map((client, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.07, ease: easeOut }}
              className="section-surface rounded-2xl p-6"
            >
              <h3 className="text-base font-semibold text-ink">
                {client.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                {client.description}
              </p>
            </motion.article>
          ))}
        </div>
      </ContentSection>

      <ContentSection
        id="standards"
        eyebrow={page.standards.eyebrow}
        title={page.standards.title}
        description={page.standards.description}
        image={images.backgrounds.mission}
        overlay="alt"
        align="left"
      >
        <div key={locale} className="mx-auto max-w-3xl space-y-3">
          {page.standardsItems.map((standard, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: easeOut }}
              className="section-surface flex gap-3.5 rounded-xl p-4 sm:p-5"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Check size={14} className="text-primary" strokeWidth={2} />
              </span>
              <div>
                <p className="font-medium text-ink">{standard.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                  {standard.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      <section className={`relative isolate overflow-hidden border-t border-ink/6 bg-white ${sectionPaddingY}`}>
        <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-5 lg:px-6">
          <div className="section-surface mx-auto max-w-3xl rounded-2xl p-8 text-center sm:p-10">
            <p className="text-xs font-medium uppercase tracking-widest text-primary">
              {t.common.ourPromise}
            </p>
            <blockquote className="mt-4 text-[1.125rem] font-medium leading-relaxed text-ink sm:text-[1.25rem]">
              &ldquo;{t.common.promiseQuote}&rdquo;
            </blockquote>
            <p className="mt-5 text-sm text-ink/55">
              {t.common.promiseAttribution}
            </p>
          </div>
        </div>
      </section>

      <ContentSection
        id="our-story"
        eyebrow={page.story.eyebrow}
        title={page.story.title}
        image={images.backgrounds.testimonials}
        overlay="sage"
      >
        <div className="mx-auto max-w-3xl space-y-4 text-sm leading-relaxed text-ink/65 sm:text-[0.9375rem]">
          {page.story.paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
