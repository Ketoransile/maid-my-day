import { cn } from "@/lib/utils";

interface SiteContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
}

/** Shared horizontal edges for navbar, sections, and footer */
export function SiteContainer({
  children,
  className,
  as: Tag = "div",
}: SiteContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1360px] overflow-x-clip px-4 sm:px-5 lg:px-6", className)}>
      {children}
    </Tag>
  );
}
