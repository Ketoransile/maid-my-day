"use client";

import { motion } from "framer-motion";
import { Award, Check, Star, Users } from "lucide-react";

import { SectionHeader } from "@/components/section-header";
import { SiteContainer } from "@/components/layout/site-container";
import { SectionBackground, sectionContentClass, sectionShellClass } from "@/components/section-background";
import { FillImage } from "@/components/fill-image";
import { images } from "@/lib/images";
import { easeOut } from "@/lib/motion";
import { sectionHeaderGap } from "@/lib/section-spacing";
import { cn } from "@/lib/utils";
import { useCountUp } from "@/hooks/use-count-up";
import { useLanguage } from "@/components/providers/language-provider";

const listContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -12, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: easeOut },
  },
};

function StatItem({
  icon: Icon,
  value,
  label,
  countRef,
}: {
  icon: typeof Users;
  value: string;
  label: string;
  countRef?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="flex flex-1 flex-col items-center gap-1 px-3 py-2 text-center">
      <Icon size={16} className="text-ink" strokeWidth={1.5} />
      <div ref={countRef} className="text-lg font-semibold text-ink">
        {value}
      </div>
      <div className="text-xs text-ink/60">{label}</div>
    </div>
  );
}

export function WhyUs() {
  const { t } = useLanguage();
  const families = useCountUp(500, 1500, "+");
  const rating = useCountUp(5, 1200);
  const years = useCountUp(3, 1200, "+");

  return (
    <section id="why-us" className={`${sectionShellClass} py-16 sm:py-24 lg:py-32`}>
      <SectionBackground
        image={images.backgrounds.whyUs}
        overlay="warm"
        imageOpacity={0.46}
        objectPosition="center 20%"
      />
      <SiteContainer className={sectionContentClass}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              eyebrow={t.whyUs.eyebrow}
              title={t.whyUs.title}
              description={t.whyUs.description}
              align="left"
            />

            <motion.ul
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className={cn("space-y-3", sectionHeaderGap)}
            >
              {t.whyUs.trustPoints.map((point, index) => (
                <motion.li
                  key={index}
                  variants={listItem}
                  className="section-surface flex gap-3.5 rounded-xl p-4"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check
                      size={14}
                      className="text-primary"
                      strokeWidth={2}
                    />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{point.title}</p>
                    <p className="mt-1.5 text-sm font-medium leading-relaxed text-ink/75">
                      {point.detail}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div className="relative pb-12 sm:pb-0">
            <div className="image-frame relative h-[260px] overflow-hidden rounded-2xl sm:h-[360px] lg:h-[480px]">
              <FillImage
                src={images.whyUs}
                alt={t.whyUs.imageAlt}
                className="object-[center_20%] transition-transform duration-700 ease-out hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="glass absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-auto sm:w-[320px]">
              <div className="flex items-center divide-x divide-ink/10">
                <StatItem
                  icon={Users}
                  value={families.count}
                  label={t.whyUs.stats.families}
                  countRef={families.ref}
                />
                <StatItem
                  icon={Star}
                  value={rating.count === "5" ? "5.0" : rating.count}
                  label={t.whyUs.stats.rating}
                  countRef={rating.ref}
                />
                <StatItem
                  icon={Award}
                  value={years.count}
                  label={t.whyUs.stats.years}
                  countRef={years.ref}
                />
              </div>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
