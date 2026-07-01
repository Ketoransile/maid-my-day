import { cn } from "@/lib/utils";

type BrandLogoProps = {
  size?: number;
  className?: string;
  /** Favicon-style mark on brand green tile */
  variant?: "default" | "tile";
};

/**
 * Maid My Day mark — home roof + morning sun (settle in / new day).
 * Brand green: #2B5F4B
 */
export function BrandLogo({
  size = 18,
  className,
  variant = "default",
}: BrandLogoProps) {
  if (variant === "tile") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("shrink-0", className)}
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" fill="#2B5F4B" />
        <path
          d="M16 7.5L7 15.25V24h6v-6.5h6V24h6V15.25L16 7.5Z"
          fill="white"
        />
        <circle cx="23.5" cy="9" r="2.25" fill="white" fillOpacity="0.85" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0 text-primary", className)}
      aria-hidden="true"
    >
      <path
        d="M16 6L6 15v13h7v-7h6v7h7V15L16 6Z"
        fill="currentColor"
      />
      <circle
        cx="24"
        cy="8.5"
        r="2.5"
        fill="currentColor"
        fillOpacity="0.35"
      />
    </svg>
  );
}
