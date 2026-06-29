"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { SectionHeader } from "@/components/section-header";
import { SiteContainer } from "@/components/layout/site-container";
import { SectionBackground, sectionContentClass, sectionShellClass } from "@/components/section-background";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { easeOut } from "@/lib/motion";
import { images } from "@/lib/images";
import type { Testimonial } from "@/types";

const testimonials: Testimonial[] = [
  {
    avatar: images.avatars.james,
    name: "James Holloway",
    role: "UN Consultant, Addis Ababa",
    quote:
      "Finding a housemaid in a new city felt impossible. Maid My Day had someone in place within days. Huge relief.",
  },
  {
    avatar: images.avatars.sophie,
    name: "Sophie Renard",
    role: "Embassy Staff, French Embassy",
    quote:
      "Our driver has been with us two years. Punctual, safe, and kind. Exactly what we needed for school runs.",
  },
  {
    avatar: images.avatars.marcus,
    name: "Marcus Webb",
    role: "NGO Director, Relocated 2023",
    quote:
      "The relocation support was seamless. They helped find our apartment, set up utilities, and arranged pet care for our dog.",
  },
  {
    avatar: images.avatars.elena,
    name: "Elena Vasquez",
    role: "Diplomatic Attaché, EU Delegation",
    quote:
      "They understood our household from the first call. The housemaid they sent is discreet, thorough, and still with us.",
  },
  {
    avatar: images.avatars.david,
    name: "David Okonkwo",
    role: "Corporate Expat, Bole",
    quote:
      "We needed a driver and home management support on short notice. Maid My Day delivered within a week. Could not ask for more.",
  },
  {
    avatar: images.avatars.amara,
    name: "Amara Chen",
    role: "Research Fellow, Relocated 2024",
    quote:
      "I arrived in Addis alone and felt overwhelmed. They made the first month manageable. Warm and straight with me.",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      <Card className="section-surface h-full border-0 shadow-none">
        <CardContent className="flex h-full flex-col p-6 sm:p-7">
          <Quote size={20} className="mb-4 text-primary/45" strokeWidth={1.5} />
          <p className="flex-1 text-[15px] leading-relaxed text-ink/80 sm:text-base sm:leading-relaxed">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <div className="mt-6 flex items-center gap-3 border-t border-ink/6 pt-5 sm:mt-7">
            <Avatar className="h-11 w-11 ring-2 ring-white">
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback>
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
              <p className="text-[13px] leading-snug text-ink/60">{testimonial.role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className={`${sectionShellClass} py-16 sm:py-24 lg:py-32`}>
      <SectionBackground
        image={images.backgrounds.testimonials}
        overlay="warm"
        imageOpacity={0.5}
        objectPosition="center 30%"
      />
      <SiteContainer className={sectionContentClass}>
        <SectionHeader
          eyebrow="Client Stories"
          title="What Our Clients Say"
          description="Real experiences from expats, diplomats, and families we've helped settle in Addis Ababa."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: easeOut }}
          className="mt-12 sm:mt-14"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <div className="flex w-full items-center gap-4 sm:gap-5 lg:gap-6">
              <CarouselPrevious className="static left-auto top-auto h-10 w-10 shrink-0 translate-y-0" />

              <div className="min-w-0 flex-1">
                <CarouselContent className="-ml-5 sm:-ml-6">
                  {testimonials.map((testimonial) => (
                    <CarouselItem
                      key={testimonial.name}
                      className="pl-5 sm:pl-6 basis-[92%] sm:basis-[72%] md:basis-1/2 lg:basis-1/3"
                    >
                      <TestimonialCard testimonial={testimonial} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </div>

              <CarouselNext className="static right-auto top-auto h-10 w-10 shrink-0 translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
