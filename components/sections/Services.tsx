"use client";

import { motion } from "framer-motion";
import { Car, ClipboardList, Home, PawPrint, Sparkles } from "lucide-react";

import { FillImage } from "@/components/fill-image";
import { SiteContainer } from "@/components/layout/site-container";
import { SectionBackground, sectionContentClass, sectionShellClass } from "@/components/section-background";
import { SectionHeader } from "@/components/section-header";
import { images } from "@/lib/images";
import { easeOut } from "@/lib/motion";
import type { ServiceItem } from "@/types";

const services: ServiceItem[] = [
  {
    icon: Home,
    title: "Housing & Relocation",
    description:
      "Finding and settling into your new home with professional relocation support.",
    image: images.services.housing,
    imageAlt: "House keys for a new home relocation",
  },
  {
    icon: Sparkles,
    title: "Trained Housemaids",
    description:
      "Reliable staff for cleaning, laundry, cooking, and daily household care.",
    image: images.services.housemaid,
    imageAlt: "Professional housemaid caring for a home",
  },
  {
    icon: Car,
    title: "Professional Drivers",
    description:
      "Safe, dependable drivers for personal and family transportation.",
    image: images.services.driver,
    imageAlt: "Professional driver with a passenger in the car",
  },
  {
    icon: PawPrint,
    title: "Pet Care",
    description:
      "Trusted care for your pets while you work or travel.",
    image: images.services.petCare,
    imageAlt: "Veterinary professionals caring for a pet",
  },
  {
    icon: ClipboardList,
    title: "Home Management",
    description:
      "Complete support to keep your home running smoothly.",
    image: images.services.homeManagement,
    imageAlt: "Well-organized modern household",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: easeOut },
  },
};

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <motion.article
      variants={cardVariants}
      className="group section-surface flex flex-col overflow-hidden rounded-xl transition-shadow duration-300 hover:shadow-[0_10px_32px_rgba(28,28,28,0.09)]"
    >
      <div className="image-frame relative aspect-5/3 overflow-hidden">
        <FillImage
          src={service.image}
          alt={service.imageAlt}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-4.5">
        <div className="flex items-start gap-2.5">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <service.icon size={15} className="text-primary" strokeWidth={1.75} />
          </span>
          <div className="min-w-0">
            <h3 className="text-[0.9375rem] font-semibold leading-snug text-ink sm:text-base">
              {service.title}
            </h3>
            <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-ink/60 sm:text-sm">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Services() {
  return (
    <section id="services" className={`${sectionShellClass} py-12 sm:py-16 lg:py-20`}>
      <SectionBackground
        image={images.backgrounds.services}
        overlay="soft"
        imageOpacity={0.58}
        objectPosition="center 25%"
      />
      <SiteContainer className={sectionContentClass}>
        <SectionHeader
          eyebrow="Our Services"
          title="Everything your home needs in Addis"
          description="Professional household and relocation support for expat families."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </SiteContainer>
    </section>
  );
}
