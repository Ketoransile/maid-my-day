import { getLenis } from "@/lib/lenis-instance";

const NAVBAR_OFFSET = 64; // matches h-16 navbar

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

function fallbackScrollTo(target: number) {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion) {
    window.scrollTo({ top: target, behavior: "auto" });
    return;
  }

  const start = window.scrollY;
  const distance = target - start;
  const duration = Math.min(1000, Math.max(450, Math.abs(distance) * 0.55));
  let startTime: number | null = null;

  function step(timestamp: number) {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export function scrollToSection(id: string, offset = NAVBAR_OFFSET) {
  const element = document.getElementById(id);
  if (!element) return;

  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(element, { offset: -offset, duration: 1.15 });
    return;
  }

  const target =
    element.getBoundingClientRect().top + window.scrollY - offset;
  fallbackScrollTo(target);
}
