"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Star, Users } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { SiteContainer } from "@/components/layout/site-container";
import {
  SectionBackground,
  sectionContentClass,
  sectionShellClass,
} from "@/components/section-background";
import { useLanguage } from "@/components/providers/language-provider";
import { images } from "@/lib/images";
import { staggerItem } from "@/lib/motion";

const icons = [ShieldCheck, Star, Clock, Users];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export function TrustBar() {
  const { locale, t } = useLanguage();

  return (
    <section id="trust-bar" className={`${sectionShellClass} py-5 sm:py-6`}>
      <SectionBackground
        image={images.backgrounds.trustBar}
        overlay="light"
        imageOpacity={0.45}
        objectPosition="center 40%"
      />
      <SiteContainer className={sectionContentClass}>
        <motion.div
          key={locale}
          variants={container}
          initial="hidden"
          animate="visible"
          className="section-surface flex flex-wrap items-center justify-center gap-3 rounded-2xl px-4 py-3.5 sm:gap-0 sm:px-6 sm:py-4"
        >
          {t.trustBar.items.map((trustItem, index) => {
            const Icon = icons[index] ?? ShieldCheck;
            return (
              <motion.div key={index} variants={staggerItem} className="flex items-center">
                <div className="flex items-center gap-2.5 px-3 sm:px-5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Icon size={15} className="text-primary" strokeWidth={1.75} />
                  </span>
                  <span className="text-[13px] font-medium text-ink/80 sm:text-sm">
                    {trustItem.label}
                  </span>
                </div>
                {index < t.trustBar.items.length - 1 && (
                  <Separator
                    orientation="vertical"
                    className="hidden h-6 bg-ink/10 sm:block"
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </SiteContainer>
    </section>
  );
}
