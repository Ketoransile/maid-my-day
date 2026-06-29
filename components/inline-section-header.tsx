import { cn } from "@/lib/utils";

type InlineSectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

/** Centered or left-aligned header matching SectionHeader typography for custom sections */
export function InlineSectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: InlineSectionHeaderProps) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl",
        className,
      )}
    >
      <p className="section-label text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-[1.5rem] font-semibold tracking-tight text-ink sm:text-[2rem] lg:text-[2.25rem]">
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
