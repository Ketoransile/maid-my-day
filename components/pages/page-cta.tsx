"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { SiteContainer } from "@/components/layout/site-container";
import { Button } from "@/components/ui/button";
import {
  SectionBackground,
  sectionContentClass,
  sectionShellClass,
} from "@/components/section-background";

type PageCtaProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function PageCta({
  title,
  description,
  primaryLabel = "Contact Us",
  primaryHref = "/contact",
  secondaryLabel = "View Services",
  secondaryHref = "/services",
}: PageCtaProps) {
  return (
    <section className={`${sectionShellClass} py-14 sm:py-16 lg:py-20`}>
      <SectionBackground
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=85&auto=format&fit=crop"
        overlay="brand"
        imageOpacity={0.28}
      />
      <SiteContainer className={sectionContentClass}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-[1.5rem] font-semibold text-white sm:text-[1.75rem]">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="rounded-xl" asChild>
              <Link href={primaryHref}>
                {primaryLabel}
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              asChild
            >
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          </div>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
