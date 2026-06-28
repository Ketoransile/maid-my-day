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
} & Omit<HTMLMotionProps<"div">, "children">;

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  animateOnMount = false,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] as typeof motion.div;

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const motionProps = animateOnMount
    ? { initial: "hidden", animate: "visible" }
    : { initial: "hidden", whileInView: "visible", viewport: viewportOnce };

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
};

export function RevealWords({
  text,
  className,
  delay = 0,
  as = "h2",
  animateOnMount = false,
}: RevealWordsProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");
  const Component = motion[as] as typeof motion.h2;

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{text}</Tag>;
  }

  const motionProps = animateOnMount
    ? { initial: "hidden", animate: "visible" }
    : { initial: "hidden", whileInView: "visible", viewport: viewportOnce };

  return (
    <Component
      className={cn(className, "flex flex-wrap gap-x-[0.3em]")}
      custom={delay}
      variants={wordStaggerContainer}
      {...motionProps}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block"
          variants={wordReveal}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
}
