"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UsersRound, X } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { SocialIcon } from "@/components/social/social-icons";
import { Button } from "@/components/ui/button";
import { getSocialLinks } from "@/lib/social-links";
import { cn } from "@/lib/utils";

const socialLinks = getSocialLinks();

const itemVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.85 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: index * 0.05, duration: 0.25 },
  }),
  exit: { opacity: 0, y: 8, scale: 0.85, transition: { duration: 0.15 } },
};

export function SocialFab() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[90] flex justify-start p-4 sm:p-5"
    >
      <div className="pointer-events-auto flex flex-col-reverse items-center gap-3">
        <Button
          type="button"
          size="icon"
          onClick={() => setOpen((value) => !value)}
          className={cn(
            "h-14 w-14 rounded-full shadow-[0_8px_28px_rgba(43,95,75,0.35)] transition-transform hover:scale-105",
            open && "bg-ink text-white hover:bg-ink/90",
          )}
          aria-expanded={open}
          aria-controls="social-links-menu"
          aria-label={open ? t.social.closeLabel : t.social.openLabel}
          title={open ? undefined : t.social.followTitle}
        >
          {open ? (
            <X size={22} strokeWidth={1.75} />
          ) : (
            <UsersRound size={22} strokeWidth={1.75} />
          )}
        </Button>

        <AnimatePresence>
          {open && (
            <motion.div
              id="social-links-menu"
              role="menu"
              aria-label={t.social.menuAriaLabel}
              className="flex flex-col-reverse items-center gap-2.5"
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.id}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  role="menuitem"
                  aria-label={social.label}
                  custom={index}
                  variants={itemVariants}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/90 text-ink/70 shadow-[0_4px_20px_rgba(28,28,28,0.1)] backdrop-blur-md transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  <SocialIcon id={social.id} className="h-4 w-4" />
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
