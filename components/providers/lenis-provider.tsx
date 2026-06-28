"use client";

import Lenis from "lenis";
import { useEffect } from "react";

import { setLenis } from "@/lib/lenis-instance";

import "lenis/dist/lenis.css";

export const LENIS_READY_EVENT = "lenis-ready";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setLenis(null);
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
    });

    setLenis(lenis);
    window.dispatchEvent(new Event(LENIS_READY_EVENT));

    let frameId = 0;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return children;
}
