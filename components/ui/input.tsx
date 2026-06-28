import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-xl border-0 bg-white px-4 py-2 text-sm text-ink shadow-[0_1px_2px_rgba(28,28,28,0.04),inset_0_0_0_1px_rgba(28,28,28,0.07)] transition-shadow file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-ink/40 focus-visible:outline-none focus-visible:shadow-[0_1px_2px_rgba(28,28,28,0.04),inset_0_0_0_1px_rgba(43,95,75,0.45),0_0_0_3px_rgba(43,95,75,0.1)] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
