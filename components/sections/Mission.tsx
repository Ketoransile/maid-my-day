"use client";

import { motion } from "framer-motion";

import { FillImage } from "@/components/fill-image";
import { SiteContainer } from "@/components/layout/site-container";
import { Reveal, RevealWords } from "@/components/motion/reveal-text";
import { easeOut } from "@/lib/motion";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

const serviceOrbits = [
  {
    label: "Housing",
    src: images.services.housing,
    alt: "Housing and relocation support",
    className: "left-[2%] top-[10%] sm:left-[0%] sm:top-[8%]",
  },
  {
    label: "Housemaids",
    src: images.services.housemaid,
    alt: "Trained housemaids",
    className: "right-[2%] top-[14%] sm:right-[0%] sm:top-[12%]",
  },
  {
    label: "Drivers",
    src: images.services.driver,
    alt: "Professional drivers",
    className: "left-[4%] bottom-[4%] sm:left-[2%] sm:bottom-[2%]",
  },
  {
    label: "Pet Care",
    src: images.services.petCare,
    alt: "Pet care services",
    className: "right-[4%] bottom-[2%] sm:right-[2%] sm:bottom-[0%]",
  },
  {
    label: "Home Mgmt",
    src: images.services.homeManagement,
    alt: "Home management services",
    className: "left-1/2 -top-5 -translate-x-1/2 sm:-top-7",
  },
] as const;

function ServiceOrbit({
  label,
  src,
  alt,
  className,
  delay,
}: {
  label: string;
  src: string;
  alt: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: easeOut }}
      className={cn(
        "absolute z-20 flex w-[30%] max-w-[118px] flex-col items-center gap-1.5 sm:max-w-[128px]",
        className,
      )}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4.5 + delay,
          ease: "easeInOut",
        }}
        className="w-full"
      >
        <div className="image-frame relative aspect-square overflow-hidden rounded-xl border-2 border-white shadow-[0_8px_24px_rgba(28,28,28,0.08)]">
          <FillImage src={src} alt={alt} sizes="128px" />
        </div>
        <p className="mt-1.5 rounded-full bg-primary px-2.5 py-1 text-center text-[10px] font-medium leading-tight text-white shadow-[0_4px_12px_rgba(43,95,75,0.25)] sm:text-[11px]">
          {label}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function Mission() {
  return (
    <section id="mission" className="section-alt py-16 sm:py-20 lg:py-28">
      <SiteContainer>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="order-1 lg:order-2">
            <Reveal as="p" className="section-label text-primary" delay={0.05}>
              Our Mission
            </Reveal>
            <RevealWords
              as="h2"
              className="mt-3 text-[1.625rem] font-semibold leading-snug tracking-tight text-ink sm:text-[2rem] lg:text-[2.25rem]"
              text="Making life in Addis Ababa easier for expat families"
              delay={0.1}
            />
            <Reveal
              as="p"
              className="mt-6 text-lg leading-relaxed text-ink/70 sm:text-xl"
              delay={0.22}
            >
              To make living in Addis Ababa easier, cleaner, and more comfortable
              through trusted home and relocation support.
            </Reveal>
            <Reveal
              as="p"
              className="mt-5 text-[0.9375rem] leading-relaxed text-ink/60"
              delay={0.32}
            >
              Maid My Day exists to take the stress out of settling in. Whether
              you need help finding a home, hiring trusted staff, or keeping
              daily life organized, we are here to support expats, diplomats,
              embassy staff, and international professionals at every step.
            </Reveal>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="order-2 lg:order-1"
          >
            <div className="relative mx-auto h-[360px] w-full max-w-[400px] overflow-visible pt-8 sm:h-[420px] sm:max-w-[440px] lg:mx-0">
              {serviceOrbits.map((service, index) => (
                <ServiceOrbit
                  key={service.label}
                  label={service.label}
                  src={service.src}
                  alt={service.alt}
                  className={service.className}
                  delay={0.1 + index * 0.07}
                />
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: 0.05, ease: easeOut }}
                className="absolute left-1/2 top-1/2 z-10 w-[56%] max-w-[240px] -translate-x-1/2 -translate-y-1/2"
              >
                <div className="image-frame relative aspect-[4/5] overflow-hidden rounded-2xl border-[3px] border-white shadow-[0_12px_40px_rgba(28,28,28,0.1)]">
                  <FillImage
                    src={images.mission.main}
                    alt="Comfortable home in Addis Ababa"
                    sizes="(max-width: 1024px) 60vw, 240px"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </SiteContainer>
    </section>
  );
}
