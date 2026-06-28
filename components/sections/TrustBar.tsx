"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Star, Users } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { SiteContainer } from "@/components/layout/site-container";
import { staggerItem } from "@/lib/motion";

const items = [
  { icon: ShieldCheck, label: "Carefully Vetted Staff" },
  { icon: Star, label: "5.0 Average Rating" },
  { icon: Clock, label: "24hr Response Guarantee" },
  { icon: Users, label: "500+ Families Served" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export function TrustBar() {
  return (
    <section
      id="trust-bar"
      className="border-y border-ink/[0.06] bg-white py-5 shadow-[0_1px_0_rgba(28,28,28,0.04)]"
    >
      <SiteContainer>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-0"
        >
          {items.map((trustItem, index) => (
            <motion.div key={trustItem.label} variants={staggerItem} className="flex items-center">
              <div className="flex items-center gap-2 px-4 sm:px-6">
                <trustItem.icon
                  size={16}
                  className="text-primary"
                  strokeWidth={1.5}
                />
                <span className="text-[13px] text-ink/70">{trustItem.label}</span>
              </div>
              {index < items.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="hidden h-5 sm:block"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </SiteContainer>
    </section>
  );
}
