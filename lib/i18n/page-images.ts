import { images } from "@/lib/images";

export const pageHeroImages = {
  services: images.backgrounds.services,
  howItWorks: images.backgrounds.howItWorks,
  whyUs: images.backgrounds.whyUs,
  faq: images.backgrounds.faq,
  contact: images.backgrounds.contact,
} as const;

export type PageHeroKey = keyof typeof pageHeroImages;
