import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";

type FillImageProps = Omit<ImageProps, "fill" | "width" | "height">;

/** Full-bleed image — uses unoptimized + no-referrer so external CDN URLs load reliably */
export function FillImage({ className, alt, ...props }: FillImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      fill
      unoptimized
      referrerPolicy="no-referrer"
      className={cn("object-cover", className)}
    />
  );
}
