import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "primary" | "accent" | "neutral" | "success";

const toneStyles: Record<Tone, string> = {
  primary: "bg-primary-50 text-primary-700",
  accent: "bg-accent-50 text-accent-700",
  neutral: "bg-surface-muted text-muted-foreground",
  success: "bg-emerald-50 text-emerald-700",
};

interface BadgeProps {
  tone?: Tone;
  className?: string;
  children: ReactNode;
}

export function Badge({ tone = "primary", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        toneStyles[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
