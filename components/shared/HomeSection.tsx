import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type HomeSectionTone = "white" | "blush" | "muted";

const toneStyles: Record<HomeSectionTone, string> = {
  white: "bg-white",
  blush:
    "bg-gradient-to-b from-accent-50/80 via-white to-white",
  muted: "bg-surface-muted",
};

interface HomeSectionProps {
  id?: string;
  tone?: HomeSectionTone;
  children: ReactNode;
  className?: string;
  /** Visual break between homepage blocks */
  showDivider?: boolean;
}

export function HomeSection({
  id,
  tone = "white",
  children,
  className,
  showDivider = true,
}: HomeSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-[4.75rem] py-14 sm:scroll-mt-24 sm:py-20 lg:py-28",
        toneStyles[tone],
        showDivider && "border-t border-primary-200/50",
        className
      )}
    >
      {showDivider && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 flex flex-col items-center gap-2 pt-5 sm:pt-6"
          aria-hidden
        >
          <span className="h-1 w-14 rounded-full bg-primary-600/25" />
          <span className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-primary-300/40 to-transparent" />
        </div>
      )}
      {children}
    </section>
  );
}
