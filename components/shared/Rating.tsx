import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingProps {
  value: number;
  className?: string;
}

export function Rating({ value, className }: RatingProps) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`Rated ${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "h-4 w-4",
            index < Math.round(value) ? "fill-accent-500 text-accent-500" : "fill-none text-border"
          )}
        />
      ))}
    </div>
  );
}
