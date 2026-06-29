import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Mission } from "@/components/sections/Mission";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import {
  HomeExpectationsSection,
  HomeIntroSection,
  HomeNeighborhoodsSection,
  HomePackagesSection,
} from "@/components/pages/home-page-content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <HomeIntroSection />
      <Services />
      <HomePackagesSection />
      <HowItWorks />
      <WhyUs />
      <HomeExpectationsSection />
      <Testimonials />
      <Mission />
      <HomeNeighborhoodsSection />
      <FAQ />
      <Contact />
    </>
  );
}
