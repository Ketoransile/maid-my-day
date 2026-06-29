"use client";

import { motion } from "framer-motion";
import { Clock, Globe, MapPin, MessageCircle } from "lucide-react";

import { ContentSection } from "@/components/pages/content-section";
import { InlineSectionHeader } from "@/components/inline-section-header";
import { useLanguage } from "@/components/providers/language-provider";
import { images } from "@/lib/images";
import { easeOut } from "@/lib/motion";
import { sectionHeaderGap, sectionPaddingY } from "@/lib/section-spacing";
import { cn } from "@/lib/utils";

const officeIcons = [Clock, MessageCircle, Globe, MapPin] as const;

export function ContactPageContent() {
  const { locale, t } = useLanguage();
  const page = t.contactPage;
  const { office } = page;

  const officeItems = [
    { icon: officeIcons[0], label: office.labels.officeHours, value: office.hours },
    { icon: officeIcons[1], label: office.labels.responseTime, value: office.response },
    { icon: officeIcons[2], label: office.labels.languages, value: office.languages },
    { icon: officeIcons[3], label: office.labels.coverage, value: office.coverage },
  ] as const;

  return (
    <>
      <ContentSection
        id="after-contact"
        eyebrow={page.afterContact.eyebrow}
        title={page.afterContact.title}
        description={page.afterContact.description}
        image={images.backgrounds.howItWorks}
        overlay="sage"
      >
        <div key={locale} className="mx-auto grid max-w-3xl gap-4">
          {page.afterContactSteps.map((step, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: easeOut }}
              className="section-surface flex gap-4 rounded-2xl p-5 sm:p-6"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {step.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </ContentSection>

      <section id="office-info" className={`relative isolate overflow-hidden border-t border-ink/6 bg-white ${sectionPaddingY}`}>
        <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-5 lg:px-6">
          <InlineSectionHeader
            eyebrow={office.eyebrow}
            title={office.title}
            description={office.description}
          />

          <div key={locale} className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-4", sectionHeaderGap)}>
            {officeItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: easeOut }}
                className="section-surface rounded-2xl p-5 text-center"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <item.icon size={18} className="text-primary" strokeWidth={1.5} />
                </div>
                <p className="mt-4 text-sm font-medium text-ink">{item.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContentSection
        id="prep-tips"
        eyebrow={page.prepTips.eyebrow}
        title={page.prepTips.title}
        description={page.prepTips.description}
        image={images.backgrounds.contact}
        overlay="soft"
      >
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {page.prepTipsItems.map((tip, index) => (
            <article
              key={index}
              className="section-surface rounded-2xl p-5"
            >
              <h3 className="text-sm font-semibold text-ink">{tip.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{tip.detail}</p>
            </article>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
