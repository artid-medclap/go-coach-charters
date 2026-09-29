import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-lg border border-border bg-surface px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20",
        className
      )}
      {...props}
    />
  );
}
