"use client";

import { motion } from "framer-motion";
import { Car, ClipboardList, Home, PawPrint, Sparkles } from "lucide-react";

import { FillImage } from "@/components/fill-image";
import { SiteContainer } from "@/components/layout/site-container";
import { SectionHeader } from "@/components/section-header";
import { Reveal, RevealWords } from "@/components/motion/reveal-text";
import { images } from "@/lib/images";
import { easeOut } from "@/lib/motion";
import type { ServiceItem } from "@/types";

const services: ServiceItem[] = [
  {
    icon: Home,
    title: "Housing & Relocation Support",
    description:
      "Professional assistance with finding and settling into your new home.",
    image: images.services.housing,
    imageAlt: "Couple settling into a new home with moving boxes",
  },
  {
    icon: Sparkles,
    title: "Trained Housemaids",
    description:
      "Reliable and carefully selected staff for cleaning, laundry, cooking, and household support.",
    image: images.services.housemaid,
    imageAlt: "Professional housemaid cleaning a kitchen",
  },
  {
    icon: Car,
    title: "Professional Drivers",
    description:
      "Safe, dependable drivers for personal and family transportation.",
    image: images.services.driver,
    imageAlt: "Professional driver behind the wheel",
  },
  {
    icon: PawPrint,
    title: "Pet Care Services",
    description:
      "Trusted care for your pets while you work or travel.",
    image: images.services.petCare,
    imageAlt: "Veterinary care for a small dog",
  },
  {
    icon: ClipboardList,
    title: "Home Management",
    description:
      "Complete support to keep your home running smoothly.",
    image: images.services.homeManagement,
    imageAlt: "Professional home management and property care",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.55, ease: easeOut } },
};

function ServiceRow({
  service,
  reversed,
}: {
  service: ServiceItem;
  reversed?: boolean;
}) {
  return (
    <motion.article
      variants={rowVariants}
      className={`grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16 ${
        reversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="image-frame relative aspect-[16/9] overflow-hidden rounded-2xl sm:aspect-[16/10] lg:aspect-[16/11]">
        <FillImage
          src={service.image}
          alt={service.imageAlt}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="transition-transform duration-700 ease-out hover:scale-[1.03]"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-primary/92 px-4 py-3 sm:px-5 sm:py-3.5">
          <div className="flex items-center gap-2">
            <service.icon size={16} className="text-white/95" strokeWidth={1.5} />
            <span className="text-sm font-medium text-white">{service.title}</span>
          </div>
        </div>
      </div>

      <div className="lg:max-w-lg lg:py-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
          <service.icon size={20} className="text-primary" strokeWidth={1.5} />
        </div>
        <RevealWords
          as="h3"
          className="mt-4 text-xl font-semibold text-ink"
          text={service.title}
          delay={0.08}
        />
        <Reveal as="p" className="mt-3 text-[0.9375rem] leading-relaxed text-ink/60 sm:text-base" delay={0.18}>
          {service.description}
        </Reveal>
      </div>
    </motion.article>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20 lg:py-28">
      <SiteContainer>
        <SectionHeader
          eyebrow="Our Services"
          title="Everything your home needs in Addis"
          description="From relocation to daily household support, Maid My Day covers the services expat families rely on most."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 space-y-12 sm:mt-14 sm:space-y-16 lg:mt-16 lg:space-y-24"
        >
          {services.map((service, index) => (
            <ServiceRow
              key={service.title}
              service={service}
              reversed={index % 2 === 1}
            />
          ))}
        </motion.div>
      </SiteContainer>
    </section>
  );
}
