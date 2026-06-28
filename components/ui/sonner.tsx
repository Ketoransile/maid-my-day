"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";

export function Toaster({ ...props }: ToasterProps) {
  return (
    <Sonner
      theme="light"
      position="top-center"
      closeButton
      richColors={false}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast !rounded-xl !border !shadow-[0_8px_24px_rgba(28,28,28,0.1)] !font-sans",
          title: "!text-sm !font-semibold !text-ink",
          description: "!text-[13px] !text-ink/65",
          closeButton:
            "!border-ink/10 !bg-white !text-ink/50 hover:!text-ink",
          success:
            "!border-primary/25 !bg-[#f3f8f5] !text-ink [&>svg]:!text-primary",
          error:
            "!border-red-200 !bg-red-50 !text-ink [&>svg]:!text-red-600",
        },
      }}
      {...props}
    />
  );
}
