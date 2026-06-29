"use client";

import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { SiteContainer } from "@/components/layout/site-container";
import { SectionBackground, sectionContentClass, sectionShellClass } from "@/components/section-background";
import { SectionHeader } from "@/components/section-header";
import { Reveal, RevealWords } from "@/components/motion/reveal-text";
import { useLanguage } from "@/components/providers/language-provider";
import { images } from "@/lib/images";
import { easeOut, staggerItem } from "@/lib/motion";
import { sectionHeaderGap } from "@/lib/section-spacing";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14 },
  },
};

type HowItWorksProps = {
  /** Homepage uses the green hero band; standalone page uses the light style */
  variant?: "hero" | "page";
};

export function HowItWorks({ variant = "hero" }: HowItWorksProps) {
  const { locale, t } = useLanguage();
  const isPage = variant === "page";
  const steps = t.howItWorks.steps;

  return (
    <section id="how-it-works" className={`${sectionShellClass} py-16 sm:py-24 lg:py-32`}>
      <SectionBackground
        image={images.backgrounds.howItWorks}
        overlay={isPage ? "soft" : "brand"}
        imageOpacity={isPage ? 0.58 : 0.34}
        objectPosition="center 40%"
      />
      <SiteContainer className={sectionContentClass}>
        {isPage ? (
          <SectionHeader
            eyebrow={t.howItWorks.eyebrow}
            title={t.howItWorks.title}
            align="left"
          />
        ) : (
          <div className="max-w-xl">
            <Reveal as="p" replayKey={locale} className="text-xs font-medium uppercase tracking-[0.1em] text-white/60" delay={0.05}>
              {t.howItWorks.eyebrow}
            </Reveal>
            <RevealWords
              as="h2"
              replayKey={locale}
              className="mt-3 text-[1.625rem] font-semibold text-white sm:text-[2rem] lg:text-[2.25rem]"
              text={t.howItWorks.title}
              delay={0.12}
            />
          </div>
        )}

        <motion.div
          key={locale}
          variants={container}
          initial="hidden"
          animate="visible"
          className={cn("grid gap-8 md:grid-cols-3", sectionHeaderGap)}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 380, damping: 22 } }}
            >
              <Card
                className={cn(
                  "h-full shadow-none transition-colors",
                  isPage
                    ? "section-surface border-0 hover:shadow-[0_10px_32px_rgba(28,28,28,0.09)]"
                    : "border-white/15 bg-white/10 backdrop-blur-md hover:border-white/25 hover:bg-white/14",
                )}
              >
                <div className="p-6">
                  <motion.span
                    className={cn(
                      "text-[3rem] font-semibold leading-none",
                      isPage ? "text-primary/20" : "text-white/20",
                    )}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: easeOut }}
                  >
                    {step.number}
                  </motion.span>
                  <Separator className={cn("my-4", isPage ? "bg-ink/8" : "bg-white/20")} />
                  <h3 className={cn("text-base font-semibold", isPage ? "text-ink" : "text-white")}>
                    {step.title}
                  </h3>
                  <p className={cn("mt-2 text-sm", isPage ? "text-ink/65" : "text-white/70")}>
                    {step.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </SiteContainer>
    </section>
  );
}
