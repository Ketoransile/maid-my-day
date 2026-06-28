"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { FillImage } from "@/components/fill-image";
import { SiteContainer } from "@/components/layout/site-container";
import { Reveal, RevealWords } from "@/components/motion/reveal-text";
import { scrollToSection } from "@/lib/smooth-scroll";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";
import { easeOut } from "@/lib/motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col overflow-x-clip bg-white pt-[4.25rem] lg:min-h-[100dvh]"
    >
      <SiteContainer className="flex items-center py-10 sm:py-12 lg:py-12">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-xl lg:max-w-2xl">
            <Reveal
              as="p"
              animateOnMount
              delay={0.05}
              className="text-sm font-medium tracking-wide text-primary"
            >
              Maid My Day Home & Relocation
            </Reveal>

            <RevealWords
              as="h1"
              animateOnMount
              delay={0.12}
              className="mt-4 text-[1.875rem] font-semibold leading-[1.12] tracking-[-0.02em] text-ink sm:mt-5 sm:text-[2.375rem] sm:leading-[1.08] lg:text-[3.25rem]"
              text="Settle into Addis Ababa Without the Stress"
            />

            <Reveal
              as="p"
              animateOnMount
              delay={0.28}
              className="mt-4 text-base leading-relaxed text-ink/75 sm:mt-6 sm:text-lg lg:text-xl"
            >
              Trusted housemaids, drivers, pet care, and relocation services for
              expats and international professionals.
            </Reveal>

            <Reveal
              as="p"
              animateOnMount
              delay={0.38}
              className="mt-4 hidden text-[0.9375rem] leading-relaxed text-ink/60 sm:block sm:text-base"
            >
              Premium home and relocation services designed for expats,
              diplomats, embassy staff, and international professionals. From
              finding the right home to trusted housemaids, drivers, pet care,
              and home management, we help make life in Addis Ababa comfortable,
              organized, and worry-free.
            </Reveal>

            <Reveal
              animateOnMount
              delay={0.48}
              className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap"
            >
              <Button
                size="lg"
                className="h-12 w-full cursor-pointer px-7 text-[15px] sm:w-auto"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 w-full cursor-pointer border-ink/15 bg-white px-7 text-[15px] text-ink shadow-none hover:!border-primary/30 hover:!bg-primary/[0.06] hover:!text-ink sm:w-auto"
                onClick={() => scrollToSection("services")}
              >
                Our Services
              </Button>
            </Reveal>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            className="relative hidden overflow-hidden lg:block lg:pl-2"
          >
            <div className="image-frame relative aspect-[4/5] max-h-[min(72vh,640px)] overflow-hidden rounded-[1.25rem] lg:ml-auto lg:max-w-[92%]">
              <FillImage
                src={images.hero}
                alt="Premium home interior in Addis Ababa"
                priority
                sizes="(min-width: 1024px) 46vw, 0px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </SiteContainer>

      <button
        type="button"
        aria-label="Scroll to next section"
        onClick={() => scrollToSection("trust-bar")}
        className="mb-6 hidden justify-center text-ink/35 transition-colors hover:text-ink/55 sm:flex"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={20} strokeWidth={1.5} />
        </motion.span>
      </button>
    </section>
  );
}
