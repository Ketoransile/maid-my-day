"use client";

import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

/** Static header — avoids layout shift when locale changes */
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
      <p
        className={cn(
          "section-label text-primary",
          align === "center" && "mx-auto",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-3 text-[1.5rem] font-semibold tracking-tight text-ink sm:text-[2rem] lg:text-[2.25rem]",
          align === "center" && "mx-auto",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-[0.9375rem] font-medium leading-relaxed text-ink/75",
            align === "center" && "mx-auto max-w-xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
