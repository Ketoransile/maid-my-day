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
        <div className="max-w-3xl rounded-2xl border border-white/70 bg-white/80 p-5 shadow-[0_16px_40px_rgba(28,28,28,0.06)] backdrop-blur-sm sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-none">
          <p className="section-label inline-flex rounded-full border border-primary/15 bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-primary sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-sm sm:font-semibold sm:normal-case sm:tracking-normal">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-[2rem] font-semibold leading-[1.1] tracking-[-0.025em] text-ink sm:mt-3 sm:text-[2.25rem] lg:text-[2.5rem]">
            {title}
          </h1>
          <p className="mt-4 text-base font-medium leading-[1.65] text-ink/80 sm:max-w-2xl sm:text-base sm:leading-relaxed">
            {description}
          </p>
        </div>
      </SiteContainer>
    </section>
  );
}
