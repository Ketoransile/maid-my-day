"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { HeroVideoBackground } from "@/components/hero-video-background";
import { SiteContainer } from "@/components/layout/site-container";
import { Reveal, RevealWords } from "@/components/motion/reveal-text";
import { useLanguage } from "@/components/providers/language-provider";
import { scrollToSection } from "@/lib/smooth-scroll";
import { Button } from "@/components/ui/button";
import { easeOut } from "@/lib/motion";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-dvh flex-col overflow-hidden pt-16"
    >
      <HeroVideoBackground />

      <SiteContainer className="relative z-10 flex flex-1 flex-col justify-end pb-14 pt-20 sm:pb-16 sm:pt-24 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: easeOut }}
          className="hero-copy w-full max-w-2xl lg:max-w-xl"
        >
          <Reveal
            as="p"
            animateOnMount
            delay={0.05}
            className="hero-eyebrow text-sm font-medium tracking-wide text-primary"
            key={t.hero.eyebrow}
          >
            {t.hero.eyebrow}
          </Reveal>

          <RevealWords
            as="h1"
            animateOnMount
            delay={0.12}
            className="hero-title mt-3 text-[2rem] font-semibold leading-[1.1] tracking-[-0.025em] text-ink sm:mt-4 sm:text-[2.5rem] lg:text-[3.25rem] lg:leading-[1.08]"
            text={t.hero.title}
            key={t.hero.title}
          />

          <Reveal
            as="p"
            animateOnMount
            delay={0.28}
            className="hero-lead mt-4 max-w-lg text-base leading-relaxed text-ink/85 sm:mt-5 sm:text-lg"
            key={t.hero.lead}
          >
            {t.hero.lead}
          </Reveal>

          <Reveal
            animateOnMount
            delay={0.4}
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap"
          >
            <Button
              size="lg"
              className="h-12 w-full cursor-pointer px-7 text-[15px] shadow-[0_4px_20px_rgba(43,95,75,0.25)] sm:w-auto"
              asChild
            >
              <Link href="/contact">{t.hero.contactUs}</Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="hero-btn-ghost h-12 w-full border px-7 text-[15px] shadow-none backdrop-blur-md sm:w-auto"
              asChild
            >
              <Link href="/services">{t.hero.ourServices}</Link>
            </Button>
          </Reveal>
        </motion.div>
      </SiteContainer>

      <button
        type="button"
        aria-label={t.hero.scrollHint}
        onClick={() => scrollToSection("trust-bar")}
        className="relative z-10 mx-auto mb-5 flex text-ink/40 transition-colors hover:text-ink/65 sm:mb-6"
      >
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={20} strokeWidth={1.5} />
        </motion.span>
      </button>
    </section>
  );
}
