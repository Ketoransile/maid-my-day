"use client";

import { motion } from "framer-motion";

import { SectionHeader } from "@/components/section-header";
import { SiteContainer } from "@/components/layout/site-container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { staggerItem } from "@/lib/motion";
import type { FAQItem } from "@/types";

const faqs: FAQItem[] = [
  {
    question: "How do you select your housemaids and staff?",
    answer:
      "Every candidate goes through a multi-stage process: an application review, in-person interview, reference checks, and a background verification. Only those who meet our standards are placed with clients.",
  },
  {
    question: "Can I meet the staff before committing?",
    answer:
      "Yes. We arrange an introduction meeting before any placement begins. You have full approval over who enters your home.",
  },
  {
    question: "What areas of Addis Ababa do you serve?",
    answer:
      "We serve all major residential areas in Addis Ababa, including Bole, Kazanchis, CMC, Old Airport, Sarbet, and surrounding neighborhoods.",
  },
  {
    question: "What if I'm not happy with my assigned staff?",
    answer:
      "We offer a replacement guarantee. If you're not satisfied, contact us and we'll find a better match at no additional cost.",
  },
  {
    question: "Do you offer relocation support for newly arrived expats?",
    answer:
      "Yes. We offer end-to-end relocation packages covering home search, move-in assistance, utility setup, and household staff placement.",
  },
  {
    question: "How quickly can services begin after I contact you?",
    answer:
      "In most cases, we can begin the matching process within 24 hours of your first inquiry and have staff placed within a few days.",
  },
];

const list = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

export function FAQ() {
  return (
    <section id="faq" className="section-alt py-16 sm:py-24 lg:py-32">
      <SiteContainer>
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
          <Accordion type="single" collapsible className="mt-12 flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <motion.div key={faq.question} variants={staggerItem}>
                <AccordionItem
                  value={`item-${index}`}
                  className="overflow-hidden rounded-2xl border-0 border-l-4 border-l-primary bg-white pl-4 pr-5 shadow-[0_2px_12px_rgba(28,28,28,0.04)] transition-colors data-[state=open]:border-l-primary data-[state=open]:bg-primary/[0.03]"
                >
                  <AccordionTrigger className="py-5 text-left text-[15px] font-medium text-ink hover:no-underline [&[data-state=open]]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-[0.9375rem] leading-relaxed text-ink/60">
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
