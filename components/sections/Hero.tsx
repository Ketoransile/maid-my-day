"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

import { HeroVideoBackground } from "@/components/hero-video-background";
import { SiteContainer } from "@/components/layout/site-container";
import { Reveal, RevealWords } from "@/components/motion/reveal-text";
import { useLanguage } from "@/components/providers/language-provider";
import { useLocaleChanged } from "@/hooks/use-locale-changed";
import { scrollToSection } from "@/lib/smooth-scroll";
import { Button } from "@/components/ui/button";
import { easeOut } from "@/lib/motion";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { t } = useLanguage();
  const localeChanged = useLocaleChanged();
  const hasAnimated = useRef(false);
  const useInstantCopy = localeChanged || hasAnimated.current;

  useEffect(() => {
    if (window.location.hash !== "#hero") return;

    const frame = window.requestAnimationFrame(() => {
      scrollToSection("hero");
      window.history.replaceState(null, "", "/");
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-16"
    >
      <HeroVideoBackground />

      <SiteContainer className="relative z-10 flex min-h-0 flex-1 flex-col pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-5 sm:justify-end sm:pb-16 sm:pt-24 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: easeOut }}
          onAnimationComplete={() => {
            hasAnimated.current = true;
          }}
          className="hero-copy flex w-full max-w-2xl flex-1 flex-col justify-between sm:flex-none sm:justify-start lg:max-w-xl"
        >
          <div className="hero-copy-top pt-1 sm:pt-0">
            <Reveal
              as="p"
              animateOnMount={!useInstantCopy}
              instant={useInstantCopy}
              delay={0.05}
              className="hero-eyebrow inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-primary ring-1 ring-primary/15 sm:bg-transparent sm:px-0 sm:py-0 sm:text-sm sm:font-semibold sm:normal-case sm:tracking-wide sm:ring-0"
            >
              {t.hero.eyebrow}
            </Reveal>

            <RevealWords
              as="h1"
              animateOnMount={!useInstantCopy}
              instant={useInstantCopy}
              delay={0.12}
              className="hero-title mt-3.5 text-[2.25rem] font-semibold leading-[1.06] tracking-[-0.035em] text-ink sm:mt-3 sm:text-[2.5rem] sm:leading-[1.1] sm:tracking-[-0.025em] lg:text-[3.25rem] lg:leading-[1.08]"
              text={t.hero.title}
            />

            <Reveal
              as="p"
              animateOnMount={!useInstantCopy}
              instant={useInstantCopy}
              delay={0.28}
              className="hero-lead mt-3.5 max-w-[20rem] text-[1rem] font-medium leading-[1.6] text-ink/78 sm:mt-5 sm:max-w-lg sm:text-lg sm:leading-relaxed"
            >
              {t.hero.lead}
            </Reveal>
          </div>

          <div className="hero-mobile-dock mt-6 sm:mt-9">
            <Reveal
              animateOnMount={!useInstantCopy}
              instant={useInstantCopy}
              delay={0.4}
              className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3"
            >
              <Button
                size="lg"
                className="h-12 w-full cursor-pointer px-7 text-[15px] font-semibold shadow-[0_4px_20px_rgba(43,95,75,0.25)] sm:w-auto"
                asChild
              >
                <Link href="/contact">{t.hero.contactUs}</Link>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="hero-btn-ghost h-12 w-full border px-7 text-[15px] font-semibold shadow-none sm:w-auto"
                asChild
              >
                <Link href="/services">{t.hero.ourServices}</Link>
              </Button>
            </Reveal>

            <button
              type="button"
              aria-label={t.hero.scrollHint}
              onClick={() => scrollToSection("trust-bar")}
              className="mx-auto mt-5 flex flex-col items-center gap-1.5 text-ink/40 transition-colors hover:text-ink/65 sm:hidden"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/45">
                {t.hero.scrollHint}
              </span>
              <motion.span
                animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              >
                <ChevronDown size={20} strokeWidth={1.5} />
              </motion.span>
            </button>
          </div>
        </motion.div>
      </SiteContainer>

      <button
        type="button"
        aria-label={t.hero.scrollHint}
        onClick={() => scrollToSection("trust-bar")}
        className="relative z-10 mx-auto mb-6 hidden text-ink/40 transition-colors hover:text-ink/65 sm:mb-6 sm:flex"
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
