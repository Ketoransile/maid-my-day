import { SiteContainer } from "@/components/layout/site-container";
import {
  SectionBackground,
  sectionContentClass,
  sectionShellClass,
  type SectionBackgroundOverlay,
} from "@/components/section-background";
import { sectionPaddingY } from "@/lib/section-spacing";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  overlay?: SectionBackgroundOverlay;
  imageOpacity?: number;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  overlay = "soft",
  imageOpacity = 0.38,
  className,
}: PageHeroProps) {
  return (
    <section
      id="overview"
      className={cn(
        sectionShellClass,
        "border-b border-ink/6",
        sectionPaddingY,
        className,
      )}
    >
      <SectionBackground
        image={image}
        overlay={overlay}
        imageOpacity={imageOpacity}
        objectPosition="center 30%"
      />
      <SiteContainer className={sectionContentClass}>
        <div className="max-w-3xl">
          <p className="section-label text-primary">{eyebrow}</p>
          <h1 className="mt-3 text-[1.75rem] font-semibold tracking-tight text-ink sm:text-[2.25rem] lg:text-[2.5rem]">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-ink/65 sm:text-base">
            {description}
          </p>
        </div>
      </SiteContainer>
    </section>
  );
}
