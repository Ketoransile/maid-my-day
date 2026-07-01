"use client";

import { motion } from "framer-motion";
import { Check, MapPin } from "lucide-react";

import { ServiceMediaShowcase } from "@/components/service-media-showcase";
import { ContentSection } from "@/components/pages/content-section";
import { InlineSectionHeader } from "@/components/inline-section-header";
import { useLanguage } from "@/components/providers/language-provider";
import { images } from "@/lib/images";
import { easeOut, staggerContainer, staggerItem } from "@/lib/motion";
import { sectionHeaderGap, sectionPaddingY } from "@/lib/section-spacing";
import { cn } from "@/lib/utils";

export function ServicesPageContent() {
  const { t } = useLanguage();
  const sp = t.servicesPage;

  return (
    <>
      {sp.serviceDetails.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`relative isolate overflow-hidden border-t border-ink/6 bg-white ${sectionPaddingY}`}
        >
          <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-5 lg:px-6">
            <div
              className={cn(
                "grid items-center gap-10 lg:grid-cols-2 lg:gap-14",
                index % 2 === 1 && "lg:[&>*:first-child]:order-2",
              )}
            >
              <motion.div
                key={`${service.id}-text`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, ease: easeOut }}
              >
                <p className="section-label text-primary">{service.title}</p>
                <h2 className="mt-3 text-[1.375rem] font-semibold text-ink sm:text-[1.625rem]">
                  {service.summary}
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink/65 sm:text-[0.9375rem]">
                  {service.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-ink/45">
                      {t.common.whatsIncluded}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm text-ink/70"
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
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-ink/45">
                      {t.common.idealFor}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {service.idealFor.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm text-ink/70"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                key={`${service.id}-images`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, ease: easeOut }}
              >
                <ServiceMediaShowcase
                  serviceId={service.id}
                  alt={service.imageAlt}
                  variant="detail"
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <ContentSection
        id="areas"
        eyebrow={sp.areas.eyebrow}
        title={sp.areas.title}
        description={sp.areas.description}
        image={images.backgrounds.trustBar}
        overlay="light"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="flex flex-wrap justify-center gap-2.5"
        >
          {sp.serviceAreas.map((area) => (
            <motion.span
              key={area}
              variants={staggerItem}
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.07] px-3.5 py-1.5 text-sm font-medium text-primary"
            >
              <MapPin size={12} strokeWidth={2} />
              {area}
            </motion.span>
          ))}
        </motion.div>
      </ContentSection>

      <ContentSection
        id="packages"
        eyebrow={sp.packages.eyebrow}
        title={sp.packages.title}
        description={sp.packages.description}
        image={images.backgrounds.mission}
        overlay="sage"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {t.homePage.relocationPackages.map((pkg, index) => (
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
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-ink/70"
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
            </article>
          ))}
        </div>
      </ContentSection>

      <section className={`relative isolate overflow-hidden border-t border-ink/6 bg-white ${sectionPaddingY}`}>
        <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-5 lg:px-6">
          <InlineSectionHeader
            eyebrow={sp.whyItMatters.eyebrow}
            title={sp.whyItMatters.title}
          />
          <div className={cn("grid gap-5 md:grid-cols-3", sectionHeaderGap)}>
            {sp.whyItMattersItems.map((item, index) => (
              <article
                key={index}
                className="section-surface rounded-2xl p-6"
              >
                <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
