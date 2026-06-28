"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { SectionHeader } from "@/components/section-header";
import { SiteContainer } from "@/components/layout/site-container";
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
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      <Card className="h-full">
      <CardContent className="flex h-full flex-col p-6">
        <Quote size={20} className="mb-3 text-primary/40" strokeWidth={1.5} />
        <p className="flex-1 text-[15px] leading-relaxed text-ink/80">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div className="mt-6 flex items-center gap-3 border-t border-ink/[0.06] pt-5">
          <Avatar className="h-11 w-11">
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
            <p className="text-[13px] text-ink/60">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16 sm:py-24 lg:py-32">
      <SiteContainer>
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
          className="mt-12"
        >
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <div className="flex items-center gap-3 sm:gap-5 lg:gap-8">
              <CarouselPrevious className="static left-auto top-auto shrink-0 translate-y-0" />

              <div className="mx-auto min-w-0 max-w-4xl flex-1 px-1 sm:px-2 lg:max-w-3xl">
                <CarouselContent className="-ml-3 sm:-ml-4">
                  {testimonials.map((testimonial) => (
                    <CarouselItem
                      key={testimonial.name}
                      className="pl-3 sm:pl-4 md:basis-[88%] lg:basis-[42%] xl:basis-[36%]"
                    >
                      <TestimonialCard testimonial={testimonial} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </div>

              <CarouselNext className="static right-auto top-auto shrink-0 translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
