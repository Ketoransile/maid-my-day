"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

import { blurReveal, easeOut, viewportOnce, wordReveal, wordStaggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

type TextTag = "p" | "h1" | "h2" | "h3" | "span" | "div";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: TextTag;
  animateOnMount?: boolean;
  /** Swap translated copy instantly without entrance animation */
  instant?: boolean;
} & Omit<HTMLMotionProps<"div">, "children">;

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  animateOnMount = false,
  instant = false,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Tag = as;

  if (reduceMotion || instant) {
    return <Tag className={className}>{children}</Tag>;
  }

  const Component = motion[as] as typeof motion.div;
  const motionProps = animateOnMount
    ? { initial: "hidden" as const, animate: "visible" as const }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: viewportOnce,
      };

  return (
    <Component
      className={className}
      variants={blurReveal}
      transition={{ delay, duration: 0.65, ease: easeOut }}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
}

type RevealWordsProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: TextTag;
  animateOnMount?: boolean;
  instant?: boolean;
};

export function RevealWords({
  text,
  className,
  delay = 0,
  as = "h2",
  animateOnMount = false,
  instant = false,
}: RevealWordsProps) {
  const reduceMotion = useReducedMotion();
  const Tag = as;

  if (reduceMotion || instant) {
    return <Tag className={className}>{text}</Tag>;
  }

  const words = text.split(" ");
  const Component = motion[as] as typeof motion.h2;
  const motionProps = animateOnMount
    ? { initial: "hidden" as const, animate: "visible" as const }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: viewportOnce,
      };

  return (
    <Component
      className={cn(className, "flex flex-wrap gap-x-[0.3em]")}
      custom={delay}
      variants={wordStaggerContainer}
      {...motionProps}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={wordReveal}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
}
