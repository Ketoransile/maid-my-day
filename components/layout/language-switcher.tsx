"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { languageOptions, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  className?: string;
  variant?: "nav" | "sheet";
  chevronClassName?: string;
  defaultOpen?: boolean;
};

function LanguageOptionRow({
  option,
  active,
  onSelect,
}: {
  option: (typeof languageOptions)[number];
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      role="option"
      aria-selected={active}
      onClick={onSelect}
      className={cn(
        "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
        active
          ? "bg-primary/[0.09] text-primary"
          : "text-ink/85 hover:bg-primary/[0.05] hover:text-primary",
      )}
    >
      <span
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-md border text-[11px] font-bold uppercase tracking-wide transition-colors",
          active
            ? "border-primary/30 bg-primary/15 text-primary"
            : "border-ink/10 bg-white text-ink/70 group-hover:border-primary/20 group-hover:text-primary",
        )}
        aria-hidden="true"
      >
        {option.badge}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-semibold leading-tight">
          {option.label}
        </span>
        {option.subtitle !== option.label && (
          <span className="mt-0.5 block truncate text-xs font-medium text-ink/50 group-hover:text-primary/70">
            {option.subtitle}
          </span>
        )}
      </span>
      <Check
        className={cn(
          "h-4 w-4 shrink-0 text-primary transition-opacity",
          active ? "opacity-100" : "opacity-0",
        )}
        aria-hidden="true"
      />
    </button>
  );
}

function LanguageSheetSection({
  className,
  chevronClassName,
  defaultOpen = false,
}: {
  className?: string;
  chevronClassName?: string;
  defaultOpen?: boolean;
}) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(defaultOpen);
  const activeOption =
    languageOptions.find((option) => option.value === locale) ?? languageOptions[0];

  const sheetChevronClass =
    chevronClassName ??
    "relative top-px h-3.5 w-3.5 shrink-0 opacity-60 transition-transform duration-300";

  return (
    <div className={cn("border-b border-ink/6 pb-4", className)}>
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 py-1 text-left"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="flex min-w-0 items-center gap-2">
          <span className="text-base font-semibold text-ink">{t.nav.language}</span>
          <span className="language-switcher-badge inline-flex shrink-0">
            {activeOption.badge}
          </span>
        </span>
        <ChevronDown
          className={cn(sheetChevronClass, "text-ink/50", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      <ul
        className={cn(
          "mt-2 space-y-1 overflow-hidden pl-1 transition-all duration-300",
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
        )}
        role="listbox"
        aria-label={t.nav.language}
      >
        {languageOptions.map((option) => {
          const active = locale === option.value;
          return (
            <li key={option.value}>
              <button
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => setLocale(option.value)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-md px-2 py-2.5 text-left transition-colors",
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-ink/65 hover:bg-ink/5 hover:text-primary",
                )}
              >
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-md border text-[11px] font-bold uppercase tracking-wide",
                    active
                      ? "border-primary/30 bg-primary/15 text-primary"
                      : "border-ink/10 bg-white text-ink/70",
                  )}
                  aria-hidden="true"
                >
                  {option.badge}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold">
                    {option.label}
                  </span>
                  <span className="mt-0.5 block truncate text-xs font-medium text-ink/50">
                    {option.subtitle}
                  </span>
                </span>
                <Check
                  className={cn(
                    "h-4 w-4 shrink-0 text-primary transition-opacity",
                    active ? "opacity-100" : "opacity-0",
                  )}
                  aria-hidden="true"
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function LanguageNavDropdown({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const activeOption =
    languageOptions.find((option) => option.value === locale) ?? languageOptions[0];

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const selectLocale = (value: Locale) => {
    setLocale(value);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className={cn("relative shrink-0", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t.nav.language}: ${activeOption.label}`}
        onClick={() => setOpen((current) => !current)}
        className={cn(
          "language-switcher-trigger inline-flex h-9 items-center gap-1 rounded-full px-2.5 sm:px-2.5",
          open && "language-switcher-trigger-open",
        )}
      >
        <span className="language-switcher-badge flex shrink-0 items-center justify-center">
          {activeOption.badge}
        </span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 shrink-0 opacity-70 transition-transform duration-200",
            open && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={t.nav.language}
          className="language-switcher-panel absolute right-0 top-[calc(100%+0.5rem)] z-[250] w-[min(100vw-2rem,13.5rem)] overflow-hidden rounded-2xl border border-ink/[0.08] bg-white/95 p-1.5 shadow-[0_16px_40px_rgba(28,28,28,0.12)] backdrop-blur-xl animate-in fade-in-0 zoom-in-95 duration-150"
        >
          <p className="px-2.5 pb-1 pt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-ink/45">
            {t.nav.language}
          </p>
          <ul className="space-y-0.5">
            {languageOptions.map((option) => {
              const active = locale === option.value;
              return (
                <li key={option.value}>
                  <LanguageOptionRow
                    option={option}
                    active={active}
                    onSelect={() => selectLocale(option.value)}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export function LanguageSwitcher({
  className,
  variant = "nav",
  chevronClassName,
  defaultOpen = false,
}: LanguageSwitcherProps) {
  if (variant === "sheet") {
    return (
      <LanguageSheetSection
        className={className}
        chevronClassName={chevronClassName}
        defaultOpen={defaultOpen}
      />
    );
  }

  return <LanguageNavDropdown className={className} />;
}
