"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/components/providers/language-provider";
import { languageOptions, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const navLinkClass =
  "navbar-link inline-flex h-9 items-center gap-1 rounded-md bg-transparent px-3 text-sm font-semibold text-ink/85 shadow-none transition-colors hover:bg-white/30 hover:text-ink";

type LanguageSwitcherProps = {
  className?: string;
  variant?: "nav" | "sheet";
};

export function LanguageSwitcher({
  className,
  variant = "nav",
}: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useLanguage();

  if (variant === "sheet") {
    return (
      <div className={cn("mt-2 grid grid-cols-2 gap-2", className)}>
        {languageOptions.map((option) => {
          const active = locale === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => setLocale(option.value)}
              className={cn(
                "rounded-xl border px-3 py-2.5 text-sm font-semibold transition-colors",
                active
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-ink/10 bg-white text-ink/80 hover:border-primary/25 hover:bg-primary/5",
              )}
              aria-pressed={active}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <Select
      value={locale}
      onValueChange={(value) => setLocale(value as Locale)}
    >
      <SelectTrigger
        className={cn(
          navLinkClass,
          "language-select-nav h-9 w-[9.5rem] min-w-[9.5rem] max-w-[9.5rem] shrink-0 justify-between border px-2.5 shadow-none hover:shadow-none focus:shadow-none focus-visible:shadow-none data-[state=open]:bg-[rgba(43,95,75,0.12)] data-[state=open]:text-ink [&_svg]:opacity-80",
          className,
        )}
        aria-label={t.nav.language}
      >
        <SelectValue placeholder={t.nav.language} />
      </SelectTrigger>
      <SelectContent position="popper" sideOffset={4} className="z-[250]">
        {languageOptions.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="font-medium data-[highlighted]:bg-primary/10 data-[highlighted]:text-primary"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
