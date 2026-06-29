"use client";

import { ContentSection } from "@/components/pages/content-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/components/providers/language-provider";
import { images } from "@/lib/images";
import { subsectionHeaderGap, sectionPaddingY } from "@/lib/section-spacing";
import { cn } from "@/lib/utils";

export function FaqPageContent() {
  const { t } = useLanguage();
  const page = t.faqPage;

  return (
    <>
      <ContentSection
        id="more-questions"
        eyebrow={page.moreAnswers.eyebrow}
        title={page.moreAnswers.title}
        description={page.moreAnswers.description}
        image={images.backgrounds.faq}
        overlay="light"
      >
        <div className="mx-auto max-w-3xl space-y-10">
          {page.extendedFaqs.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
                {group.category}
              </h3>
              <Accordion type="single" collapsible className={cn(subsectionHeaderGap, "flex flex-col gap-3")}>
                {group.items.map((faq, index) => (
                  <div
                    key={index}
                    className="faq-item overflow-hidden rounded-2xl"
                  >
                    <AccordionItem
                      value={`group-${groupIndex}-item-${index}`}
                      className="border-0 bg-transparent"
                    >
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
            </div>
          ))}
        </div>
      </ContentSection>

      <section className={`relative isolate overflow-hidden border-t border-ink/6 bg-white ${sectionPaddingY}`}>
        <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-5 lg:px-6">
          <div className="section-surface mx-auto max-w-3xl rounded-2xl p-8 sm:p-10">
            <h2 className="text-center text-[1.25rem] font-semibold text-ink sm:text-[1.5rem]">
              {page.stillWondering.title}
            </h2>
            <ul className={cn(subsectionHeaderGap, "space-y-3")}>
              {page.stillWondering.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-ink/70"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
