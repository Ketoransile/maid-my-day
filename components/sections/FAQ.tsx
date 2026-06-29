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
import { staggerItem } from "@/lib/motion";
import { siteFaqs } from "@/lib/chat-knowledge";
import { images } from "@/lib/images";

const list = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

export function FAQ() {
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
          eyebrow="Common Questions"
          title="Frequently Asked Questions"
          description="Plain answers about how we work. No jargon."
        />

        <motion.div
          variants={list}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <Accordion type="single" collapsible className="mt-12 flex flex-col gap-4">
            {siteFaqs.map((faq, index) => (
              <motion.div
                key={faq.question}
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
