import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: string }[];
}

export function Select({ options, className, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        "h-12 w-full rounded-lg border border-border bg-surface px-4 text-sm text-foreground focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20",
        className
      )}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
