"use client";

import { useLayoutEffect, useRef } from "react";

import { useLanguage } from "@/components/providers/language-provider";

/** True on the render pass immediately after the user switches locale. */
export function useLocaleChanged() {
  const { locale } = useLanguage();
  const previous = useRef(locale);
  const changed = previous.current !== locale;

  useLayoutEffect(() => {
    previous.current = locale;
  }, [locale]);

  return changed;
}
