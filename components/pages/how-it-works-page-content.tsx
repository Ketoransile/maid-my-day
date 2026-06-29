"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { ContentSection } from "@/components/pages/content-section";
import { InlineSectionHeader } from "@/components/inline-section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/components/providers/language-provider";
import { images } from "@/lib/images";
import { easeOut, staggerItem } from "@/lib/motion";
import { sectionHeaderGap, sectionPaddingY } from "@/lib/section-spacing";
import { cn } from "@/lib/utils";

export function HowItWorksPageContent() {
  const { locale, t } = useLanguage();
  const page = t.howItWorksPage;

  return (
    <>
      <ContentSection
        id="detailed-process"
        eyebrow={page.detailedProcess.eyebrow}
        title={page.detailedProcess.title}
        description={page.detailedProcess.description}
        image={images.backgrounds.howItWorks}
        overlay="sage"
      >
        <div className="mx-auto max-w-3xl space-y-4">
          {page.detailedProcessSteps.map((step) => (
            <motion.article
              key={step.step}
              variants={staggerItem}
              className="section-surface rounded-2xl p-5 sm:p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <span className="text-2xl font-semibold leading-none text-primary/25">
                  {step.step}
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {step.duration}
                </span>
              </div>
              <h3 className="mt-3 text-base font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </ContentSection>

      <section className={`relative isolate overflow-hidden border-t border-ink/6 bg-white ${sectionPaddingY}`}>
        <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-5 lg:px-6">
          <InlineSectionHeader
            eyebrow={page.first30Days.eyebrow}
            title={page.first30Days.title}
            description={page.first30Days.description}
          />

          <div className={cn("grid gap-5 md:grid-cols-3", sectionHeaderGap)}>
            {page.first30Days.phases.map((phase, index) => (
              <motion.div
                key={`${locale}-${index}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: easeOut }}
              >
                <Card className="section-surface h-full border-0 shadow-none">
                  <div className="p-6">
                    <p className="text-xs font-medium uppercase tracking-widest text-primary">
                      {phase.week}
                    </p>
                    <h3 className="mt-2 text-base font-semibold text-ink">
                      {phase.title}
                    </h3>
                    <Separator className="my-4 bg-ink/8" />
                    <ul className="space-y-2.5">
                      {phase.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm text-ink/65"
                        >
                          <Check
                            size={14}
                            className="mt-0.5 shrink-0 text-primary"
                            strokeWidth={2}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContentSection
        id="prepare"
        eyebrow={page.prepare.eyebrow}
        title={page.prepare.title}
        description={page.prepare.description}
        image={images.backgrounds.contact}
        overlay="soft"
      >
        <div className="mx-auto grid max-w-2xl gap-3">
          {page.preparationChecklist.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: easeOut }}
              className="section-surface flex items-start gap-3 rounded-xl p-4"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                {index + 1}
              </span>
              <p className="text-sm leading-relaxed text-ink/70">{item}</p>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      <ContentSection
        id="process-faq"
        eyebrow={page.processFaq.eyebrow}
        title={page.processFaq.title}
        description={page.processFaq.description}
        image={images.backgrounds.faq}
        overlay="light"
      >
        <Accordion type="single" collapsible className="mx-auto max-w-3xl flex flex-col gap-3">
          {page.processFaqItems.map((faq, index) => (
            <div key={index} className="faq-item overflow-hidden rounded-2xl">
              <AccordionItem value={`process-faq-${index}`} className="border-0 bg-transparent">
                <AccordionTrigger className="gap-4 px-5 py-5 text-left text-[15px] font-medium leading-snug text-ink hover:no-underline data-[state=open]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="faq-answer mx-5 pb-5 pt-4 text-[0.9375rem] leading-relaxed text-ink/65">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </ContentSection>
    </>
  );
}
