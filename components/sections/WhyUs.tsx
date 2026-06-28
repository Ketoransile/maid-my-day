"use client";

import { motion } from "framer-motion";
import { Award, Check, Star, Users } from "lucide-react";

import { SectionHeader } from "@/components/section-header";
import { SiteContainer } from "@/components/layout/site-container";
import { FillImage } from "@/components/fill-image";
import { Separator } from "@/components/ui/separator";
import { images } from "@/lib/images";
import { easeOut } from "@/lib/motion";
import { useCountUp } from "@/hooks/use-count-up";
import type { TrustPoint } from "@/types";

const trustPoints: TrustPoint[] = [
  {
    title: "Carefully Selected Staff",
    detail:
      "Every housemaid, driver, and helper is vetted and interviewed before placement.",
  },
  {
    title: "Professional Standards",
    detail:
      "Consistent training and clear expectations for every member of your household team.",
  },
  {
    title: "Reliable and Trustworthy Service",
    detail:
      "Dependable support you can count on week after week.",
  },
  {
    title: "Expat-Focused Support",
    detail:
      "Built for diplomats, embassy staff, and international professionals new to Addis Ababa.",
  },
  {
    title: "Personalized Assistance",
    detail:
      "Services tailored to your home, schedule, and family needs.",
  },
];

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
  const families = useCountUp(500, 1500, "+");
  const rating = useCountUp(5, 1200);
  const years = useCountUp(3, 1200, "+");

  return (
    <section id="why-us" className="section-alt py-16 sm:py-24 lg:py-32">
      <SiteContainer>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Why Choose Maid My Day?"
              title="Trusted support for expat households"
              description="We understand what it takes to settle into a new city. Maid My Day brings professional, reliable home and relocation services to families who need them most."
              align="left"
            />

            <Separator className="my-6" />

            <motion.ul
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-4"
            >
              {trustPoints.map((point) => (
                <motion.li
                  key={point.title}
                  variants={listItem}
                  className="flex gap-3"
                >
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-primary"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="font-medium text-ink">{point.title}</p>
                    <p className="text-sm text-ink/60">{point.detail}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div className="relative pb-12 sm:pb-0">
            <div className="image-frame relative h-[260px] overflow-hidden rounded-2xl sm:h-[360px] lg:h-[480px]">
              <FillImage
                src={images.whyUs}
                alt="Family in a modern home in Addis Ababa"
                className="transition-transform duration-700 ease-out hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="glass absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-auto sm:w-[320px]">
              <div className="flex items-center">
                <StatItem
                  icon={Users}
                  value={families.count}
                  label="Families"
                  countRef={families.ref}
                />
                <Separator orientation="vertical" className="h-12" />
                <StatItem
                  icon={Star}
                  value={rating.count === "5" ? "5.0" : rating.count}
                  label="Rating"
                  countRef={rating.ref}
                />
                <Separator orientation="vertical" className="h-12" />
                <StatItem
                  icon={Award}
                  value={years.count}
                  label="Years"
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
