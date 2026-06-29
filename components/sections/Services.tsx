"use client";

import { motion } from "framer-motion";

import { FillImage } from "@/components/fill-image";
import { SiteContainer } from "@/components/layout/site-container";
import { SectionBackground, sectionContentClass, sectionShellClass } from "@/components/section-background";
import { SectionHeader } from "@/components/section-header";
import { useLanguage } from "@/components/providers/language-provider";
import { serviceIconMap, type ServiceIconKey } from "@/lib/i18n/service-icons";
import { serviceImageMap } from "@/lib/i18n/service-images";
import { images } from "@/lib/images";
import { easeOut } from "@/lib/motion";
import { sectionHeaderGap, sectionPaddingY } from "@/lib/section-spacing";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: easeOut },
  },
};

export function Services() {
  const { locale, t } = useLanguage();

  return (
    <section id="services" className={`${sectionShellClass} ${sectionPaddingY}`}>
      <SectionBackground
        image={images.backgrounds.services}
        overlay="soft"
        imageOpacity={0.58}
        objectPosition="center 25%"
      />
      <SiteContainer className={sectionContentClass}>
        <SectionHeader
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
        />

        <motion.div
          key={locale}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={cn(
            "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3",
            sectionHeaderGap,
          )}
        >
          {t.services.items.map((service) => {
            const Icon = serviceIconMap[service.id as ServiceIconKey];
            const image = serviceImageMap[service.id as ServiceIconKey];

            return (
              <motion.article
                key={service.id}
                variants={cardVariants}
                className="group section-surface flex flex-col overflow-hidden rounded-xl transition-shadow duration-300 hover:shadow-[0_10px_32px_rgba(28,28,28,0.09)]"
              >
                <div className="image-frame relative aspect-5/3 overflow-hidden">
                  <FillImage
                    src={image}
                    alt={service.imageAlt}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-4.5">
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon size={15} className="text-primary" strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[0.9375rem] font-semibold leading-snug text-ink sm:text-base">
                        {service.title}
                      </h3>
                      <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-ink/60 sm:text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </SiteContainer>
    </section>
  );
}
