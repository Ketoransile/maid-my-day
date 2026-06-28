"use client";

import { Reveal, RevealWords } from "@/components/motion/reveal-text";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl",
        className,
      )}
    >
      <Reveal
        as="p"
        className={cn(
          "section-label text-primary",
          align === "center" && "mx-auto",
        )}
        delay={0.05}
      >
        {eyebrow}
      </Reveal>
      <RevealWords
        as="h2"
        className={cn(
          "mt-3 text-[1.5rem] font-semibold tracking-tight text-ink sm:text-[2rem] lg:text-[2.25rem]",
          align === "center" && "justify-center",
        )}
        text={title}
        delay={0.12}
      />
      {description && (
        <Reveal
          as="p"
          className={cn(
            "mt-4 text-[0.9375rem] leading-relaxed text-ink/60",
            align === "center" && "mx-auto max-w-xl",
          )}
          delay={0.28}
        >
          {description}
        </Reveal>
      )}
    </div>
  );
}
