"use client";

import { useState } from "react";
import type { ImageProps } from "next/image";

import { FillImage } from "@/components/fill-image";
import {
  getServiceImageFallback,
  getServiceImagePath,
  type ServiceImageSlot,
} from "@/lib/service-media";

type ServiceImageProps = Omit<ImageProps, "fill" | "width" | "height" | "src"> & {
  serviceId: string;
  slot: ServiceImageSlot;
};

/**
 * Loads /images/services/<folder>/<slot>.jpg first.
 * Falls back to Unsplash placeholder if the local file is missing.
 */
export function ServiceImage({
  serviceId,
  slot,
  alt,
  ...props
}: ServiceImageProps) {
  const localSrc = getServiceImagePath(serviceId, slot);
  const fallbackSrc = getServiceImageFallback(serviceId);
  const [src, setSrc] = useState(localSrc);

  return (
    <FillImage
      {...props}
      alt={alt}
      src={src}
      onError={() => {
        if (src !== fallbackSrc) setSrc(fallbackSrc);
      }}
    />
  );
}
