"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { SectionHeader } from "@/components/section-header";
import { SiteContainer } from "@/components/layout/site-container";
import { SectionBackground, sectionContentClass, sectionShellClass } from "@/components/section-background";
import { useLanguage } from "@/components/providers/language-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { sectionHeaderGap } from "@/lib/section-spacing";
import { images } from "@/lib/images";

const testimonialAvatars = [
  images.avatars.james,
  images.avatars.sophie,
  images.avatars.marcus,
  images.avatars.elena,
  images.avatars.david,
  images.avatars.amara,
] as const;

function TestimonialCard({
  name,
  role,
  quote,
  avatar,
}: {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}) {
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
            &ldquo;{quote}&rdquo;
          </p>
          <div className="mt-6 flex items-center gap-3 border-t border-ink/6 pt-5 sm:mt-7">
            <Avatar className="h-11 w-11 ring-2 ring-white">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback>
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold text-ink">{name}</p>
              <p className="text-[13px] leading-snug text-ink/60">{role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Testimonials() {
  const { locale, t } = useLanguage();

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
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          description={t.testimonials.description}
        />

        <motion.div
          key={locale}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className={sectionHeaderGap}
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
                  {t.testimonials.items.map((testimonial, index) => (
                    <CarouselItem
                      key={testimonial.name}
                      className="pl-5 sm:pl-6 basis-[92%] sm:basis-[72%] md:basis-1/2 lg:basis-1/3"
                    >
                      <TestimonialCard
                        name={testimonial.name}
                        role={testimonial.role}
                        quote={testimonial.quote}
                        avatar={testimonialAvatars[index] ?? testimonialAvatars[0]}
                      />
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
