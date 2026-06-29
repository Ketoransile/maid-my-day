"use client";

import { motion } from "framer-motion";

import { SiteContainer } from "@/components/layout/site-container";
import { SectionHeader } from "@/components/section-header";
import { useLanguage } from "@/components/providers/language-provider";
import {
  SectionBackground,
  sectionContentClass,
  sectionShellClass,
  type SectionBackgroundOverlay,
} from "@/components/section-background";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { sectionHeaderGap, sectionPaddingY } from "@/lib/section-spacing";
import { cn } from "@/lib/utils";

type ContentSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  image?: string;
  overlay?: SectionBackgroundOverlay;
  imageOpacity?: number;
  className?: string;
  children: React.ReactNode;
};

export function ContentSection({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  image,
  overlay = "alt",
  imageOpacity = 0.42,
  className,
  children,
}: ContentSectionProps) {
  const { locale } = useLanguage();

  return (
    <section
      id={id}
      className={cn(
        sectionShellClass,
        sectionPaddingY,
        className,
      )}
    >
      {image && (
        <SectionBackground
          image={image}
          overlay={overlay}
          imageOpacity={imageOpacity}
        />
      )}
      <SiteContainer className={sectionContentClass}>
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          align={align}
        />
        <motion.div
          key={locale}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className={sectionHeaderGap}
        >
          <motion.div variants={staggerItem}>{children}</motion.div>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
