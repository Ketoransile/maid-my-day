"use client";

import { useEffect, useState } from "react";

import { LENIS_READY_EVENT } from "@/components/providers/lenis-provider";
import { getLenis } from "@/lib/lenis-instance";

export function useNavbarScroll(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > threshold);
    };

    update();

    let lenisCleanup: (() => void) | undefined;

    const bindLenis = () => {
      const lenis = getLenis();
      if (!lenis) return false;
      lenis.on("scroll", update);
      lenisCleanup = () => lenis.off("scroll", update);
      return true;
    };

    if (!bindLenis()) {
      window.addEventListener("scroll", update, { passive: true });
      const onLenisReady = () => {
        window.removeEventListener("scroll", update);
        bindLenis();
      };
      window.addEventListener(LENIS_READY_EVENT, onLenisReady);
      return () => {
        window.removeEventListener("scroll", update);
        window.removeEventListener(LENIS_READY_EVENT, onLenisReady);
        lenisCleanup?.();
      };
    }

    return () => lenisCleanup?.();
  }, [threshold]);

  return scrolled;
}
