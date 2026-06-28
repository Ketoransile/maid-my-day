import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-xl border-0 bg-white px-4 py-3 text-sm text-ink shadow-[0_1px_2px_rgba(28,28,28,0.04),inset_0_0_0_1px_rgba(28,28,28,0.07)] transition-shadow placeholder:text-ink/40 focus-visible:outline-none focus-visible:shadow-[0_1px_2px_rgba(28,28,28,0.04),inset_0_0_0_1px_rgba(43,95,75,0.45),0_0_0_3px_rgba(43,95,75,0.1)] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
