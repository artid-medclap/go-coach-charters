import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverted";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <span
          className={cn(
            "text-sm font-semibold uppercase tracking-wide",
            tone === "inverted" ? "text-accent-300" : "text-primary-600"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-2 text-3xl font-bold tracking-tight sm:text-4xl",
          tone === "inverted" ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base",
            tone === "inverted" ? "text-primary-100" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
