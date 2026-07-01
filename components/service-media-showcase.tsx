"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ServiceImage } from "@/components/service-image";
import { SERVICE_IMAGE_SLOTS, type ServiceImageSlot } from "@/lib/service-media";
import { cn } from "@/lib/utils";

const SLOT_LABELS: Record<ServiceImageSlot, string> = {
  card: "Overview",
  detail: "Detail",
  "gallery-1": "Gallery 1",
  "gallery-2": "Gallery 2",
};

type ServiceMediaShowcaseProps = {
  serviceId: string;
  alt: string;
  variant: "card" | "detail";
  className?: string;
};

/** Landing page — cross-fading hero with thumbnail strip */
function ServiceMediaCardShowcase({
  serviceId,
  alt,
  className,
}: Omit<ServiceMediaShowcaseProps, "variant">) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % SERVICE_IMAGE_SLOTS.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <div
      className={cn("relative aspect-5/3 overflow-hidden", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="absolute inset-0"
        >
          <ServiceImage
            serviceId={serviceId}
            slot={SERVICE_IMAGE_SLOTS[active]}
            alt={`${alt} — ${SLOT_LABELS[SERVICE_IMAGE_SLOTS[active]]}`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-2.5 sm:p-3">
        <div className="flex gap-1.5">
          {SERVICE_IMAGE_SLOTS.map((slot, index) => (
            <button
              key={slot}
              type="button"
              aria-label={`Show ${SLOT_LABELS[slot]}`}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
              className={cn(
                "pointer-events-auto relative h-9 w-9 shrink-0 overflow-hidden rounded-md border-2 shadow-sm transition-all sm:h-10 sm:w-10",
                active === index
                  ? "border-white ring-2 ring-primary/40"
                  : "border-white/50 opacity-85 hover:border-white hover:opacity-100",
              )}
            >
              <ServiceImage
                serviceId={serviceId}
                slot={slot}
                alt=""
                sizes="40px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
        <span className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold tabular-nums text-ink/70 backdrop-blur-sm">
          {active + 1}/{SERVICE_IMAGE_SLOTS.length}
        </span>
      </div>
    </div>
  );
}

/** Services page — bento grid showing all four images at once */
function ServiceMediaBentoShowcase({
  serviceId,
  alt,
  className,
}: Omit<ServiceMediaShowcaseProps, "variant">) {
  const cells: { slot: ServiceImageSlot; layout: string }[] = [
    {
      slot: "detail",
      layout: "col-span-2 row-span-2 min-h-[220px] sm:min-h-[300px]",
    },
    {
      slot: "gallery-1",
      layout: "col-span-2 row-span-1 min-h-[108px] sm:min-h-[142px]",
    },
    {
      slot: "gallery-2",
      layout: "col-span-1 row-span-1 min-h-[108px] sm:min-h-[142px]",
    },
    {
      slot: "card",
      layout: "col-span-1 row-span-1 min-h-[108px] sm:min-h-[142px]",
    },
  ];

  return (
    <div
      className={cn(
        "grid grid-cols-4 grid-rows-2 gap-2 sm:gap-2.5",
        className,
      )}
    >
      {cells.map(({ slot, layout }) => (
        <div
          key={slot}
          className={cn(
            "image-frame group relative overflow-hidden rounded-xl sm:rounded-2xl",
            layout,
          )}
        >
          <ServiceImage
            serviceId={serviceId}
            slot={slot}
            alt={`${alt} — ${SLOT_LABELS[slot]}`}
            sizes="(max-width: 1024px) 50vw, 30vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <span className="pointer-events-none absolute left-2 top-2 rounded-md bg-white/88 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink/55 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
            {SLOT_LABELS[slot]}
          </span>
        </div>
      ))}
    </div>
  );
}

export function ServiceMediaShowcase({
  serviceId,
  alt,
  variant,
  className,
}: ServiceMediaShowcaseProps) {
  if (variant === "card") {
    return (
      <ServiceMediaCardShowcase
        serviceId={serviceId}
        alt={alt}
        className={className}
      />
    );
  }

  return (
    <ServiceMediaBentoShowcase
      serviceId={serviceId}
      alt={alt}
      className={className}
    />
  );
}
