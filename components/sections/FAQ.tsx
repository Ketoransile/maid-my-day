"use client";

import { motion } from "framer-motion";

import { SectionHeader } from "@/components/section-header";
import { SiteContainer } from "@/components/layout/site-container";
import { SectionBackground, sectionContentClass, sectionShellClass } from "@/components/section-background";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/components/providers/language-provider";
import { staggerItem } from "@/lib/motion";
import { images } from "@/lib/images";
import { sectionHeaderGap } from "@/lib/section-spacing";
import { cn } from "@/lib/utils";

const list = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

export function FAQ() {
  const { locale, t } = useLanguage();

  return (
    <section id="faq" className={`${sectionShellClass} py-16 sm:py-24 lg:py-32`}>
      <SectionBackground
        image={images.backgrounds.faq}
        overlay="sage"
        imageOpacity={0.44}
        objectPosition="center 40%"
      />
      <SiteContainer className={sectionContentClass}>
        <SectionHeader
          eyebrow={t.faq.eyebrow}
          title={t.faq.title}
          description={t.faq.description}
        />

        <motion.div
          key={locale}
          variants={list}
          initial="hidden"
          animate="visible"
        >
          <Accordion type="single" collapsible className={cn(sectionHeaderGap, "flex flex-col gap-4")}>
            {t.faq.items.map((faq, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="faq-item overflow-hidden rounded-2xl"
              >
                <AccordionItem value={`item-${index}`} className="border-0 bg-transparent">
                  <AccordionTrigger className="gap-4 px-5 py-5 text-left text-[15px] font-medium leading-snug text-ink hover:no-underline data-[state=open]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="faq-answer mx-5 pb-5 pt-4 text-[0.9375rem] leading-relaxed text-ink/65">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
