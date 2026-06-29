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
  /** Remount and replay when locale or content identity changes */
  replayKey?: string;
} & Omit<HTMLMotionProps<"div">, "children">;

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  animateOnMount = false,
  replayKey,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] as typeof motion.div;

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const shouldAnimateOnMount = animateOnMount || Boolean(replayKey);
  const motionProps = shouldAnimateOnMount
    ? { initial: "hidden", animate: "visible" }
    : { initial: "hidden", whileInView: "visible", viewport: viewportOnce };

  return (
    <Component
      key={replayKey}
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
  replayKey?: string;
};

export function RevealWords({
  text,
  className,
  delay = 0,
  as = "h2",
  animateOnMount = false,
  replayKey,
}: RevealWordsProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");
  const Component = motion[as] as typeof motion.h2;

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{text}</Tag>;
  }

  const shouldAnimateOnMount = animateOnMount || Boolean(replayKey);
  const motionProps = shouldAnimateOnMount
    ? { initial: "hidden", animate: "visible" }
    : { initial: "hidden", whileInView: "visible", viewport: viewportOnce };

  return (
    <Component
      key={replayKey ?? text}
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
