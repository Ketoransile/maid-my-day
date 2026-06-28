"use client";

import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { SiteContainer } from "@/components/layout/site-container";
import { Reveal, RevealWords } from "@/components/motion/reveal-text";
import { easeOut, staggerItem } from "@/lib/motion";
import { Separator } from "@/components/ui/separator";

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Fill out our quick contact form or call us directly. We'll respond within 24 hours.",
  },
  {
    number: "02",
    title: "We Match You With the Right Team",
    description:
      "We carefully select and introduce staff suited to your home, schedule, and preferences.",
  },
  {
    number: "03",
    title: "Settle In With Confidence",
    description:
      "Your household is managed, your family is cared for, and your home runs like clockwork.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14 },
  },
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-primary py-16 sm:py-24 lg:py-32">
      <SiteContainer>
        <div className="max-w-xl">
          <Reveal as="p" className="text-xs font-medium uppercase tracking-[0.1em] text-white/60" delay={0.05}>
            The Process
          </Reveal>
          <RevealWords
            as="h2"
            className="mt-3 text-[1.625rem] font-semibold text-white sm:text-[2rem] lg:text-[2.25rem]"
            text="Getting Started is Simple"
            delay={0.12}
          />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-8 md:grid-cols-3"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 380, damping: 22 } }}
            >
              <Card className="h-full border-white/[0.12] bg-white/5 shadow-none backdrop-blur-sm transition-colors hover:bg-white/[0.08]">
                <div className="p-6">
                  <motion.span
                    className="text-[3rem] font-semibold leading-none text-white/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: easeOut }}
                  >
                    {step.number}
                  </motion.span>
                  <Separator className="my-4 bg-white/20" />
                  <h3 className="text-base font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{step.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </SiteContainer>
    </section>
  );
}
