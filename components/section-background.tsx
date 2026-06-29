import { cn } from "@/lib/utils";

const overlayStyles = {
  /** Airy white — trust bar & light bands */
  light:
    "bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.64)_50%,rgba(247,250,248,0.7)_100%)]",
  /** Soft green tint — services & contact */
  soft:
    "bg-[linear-gradient(135deg,rgba(255,255,255,0.74)_0%,rgba(247,250,248,0.66)_48%,rgba(43,95,75,0.1)_100%)]",
  /** Muted sage — why us & mission */
  alt:
    "bg-[linear-gradient(160deg,rgba(250,252,251,0.7)_0%,rgba(255,255,255,0.64)_55%,rgba(43,95,75,0.08)_100%)]",
  /** Brand green — how it works */
  brand:
    "bg-[linear-gradient(145deg,rgba(35,74,59,0.88)_0%,rgba(43,95,75,0.84)_42%,rgba(30,64,52,0.9)_100%)]",
  /** Warm editorial — testimonials */
  warm:
    "bg-[linear-gradient(180deg,rgba(255,255,255,0.76)_0%,rgba(255,252,248,0.66)_50%,rgba(43,95,75,0.05)_100%)]",
  /** Light sage — FAQ */
  sage:
    "bg-[linear-gradient(180deg,rgba(255,255,255,0.75)_0%,rgba(240,247,244,0.68)_100%)]",
} as const;

export type SectionBackgroundOverlay = keyof typeof overlayStyles;

type SectionBackgroundProps = {
  image: string;
  overlay?: SectionBackgroundOverlay;
  /** 0–1 — how visible the photo is */
  imageOpacity?: number;
  objectPosition?: string;
  className?: string;
};

export function SectionBackground({
  image,
  overlay = "light",
  imageOpacity = 0.55,
  objectPosition = "center",
  className,
}: SectionBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        className="h-full w-full scale-[1.05] object-cover"
        style={{ opacity: imageOpacity, objectPosition }}
      />
      <div className={cn("absolute inset-0", overlayStyles[overlay])} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_28%,rgba(43,95,75,0.06)_100%)]" />
    </div>
  );
}

/** Clips each section background to its own band */
export const sectionShellClass =
  "relative isolate overflow-hidden bg-white";

export const sectionContentClass = "relative z-10";
