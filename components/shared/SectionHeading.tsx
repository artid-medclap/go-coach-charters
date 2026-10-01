import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverted";
  layout?: "stack" | "split";
  className?: string;
  headingClassName?: string;
  /** Wider headline block for centered sections */
  wide?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  layout = "stack",
  className,
  headingClassName,
  wide = false,
}: SectionHeadingProps) {
  const isInverted = tone === "inverted";
  const isCenter = align === "center";
  const isSplit = layout === "split";

  const eyebrowEl = eyebrow ? (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2",
        isInverted
          ? "border border-primary-200/30 bg-white/[0.04] shadow-none"
          : "border border-primary-200/55 bg-accent-50 shadow-[0_4px_14px_rgba(53,0,20,0.04)]"
      )}
    >
      <span
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-full",
            isInverted ? "bg-primary-200/15" : "bg-primary-100"
        )}
      >
        <span
          className={cn(
            "h-2 w-2 rounded-full",
            isInverted ? "bg-primary-200" : "bg-primary-600"
          )}
        />
      </span>
      <span
        className={cn(
          "text-[10px] font-bold uppercase tracking-[0.2em]",
          isInverted ? "text-primary-200" : "text-primary-900"
        )}
      >
        {eyebrow}
      </span>
    </div>
  ) : null;

  const titleEl = (
    <h2
      className={cn(
        "font-bold leading-[1.05] tracking-[-0.045em]",
        eyebrow ? "mt-6" : "mt-0",
        isInverted ? "text-white" : "text-primary-950",
        "text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
        isCenter && "mx-auto",
        wide ? "max-w-4xl" : "max-w-3xl",
        !isCenter && "max-w-none",
        headingClassName
      )}
    >
      {title}
    </h2>
  );

  const accentLine =
    isCenter && !isInverted ? (
      <div
        className="mx-auto mt-5 flex items-center justify-center gap-2"
        aria-hidden
      >
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-primary-200/80" />
        <span className="h-1 w-1 rotate-45 bg-primary-300" />
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-primary-200/80" />
      </div>
    ) : null;

  const descriptionEl = description ? (
    <p
      className={cn(
        "text-base leading-7 sm:text-lg",
        accentLine ? "mt-5" : "mt-6",
        isInverted ? "text-white/60" : "text-primary-950/55",
        isCenter && "mx-auto max-w-2xl",
        isSplit && "max-w-md lg:mt-0",
        !isCenter && !isSplit && "max-w-xl"
      )}
    >
      {description}
    </p>
  ) : null;

  if (isSplit) {
    return (
      <div
        className={cn(
          "mb-8 flex flex-col gap-5 sm:mb-10 lg:mb-16 lg:flex-row lg:items-end lg:justify-between lg:gap-6",
          className
        )}
      >
        <div className={cn("max-w-2xl", isCenter && "mx-auto text-center")}>
          {eyebrowEl}
          {titleEl}
        </div>
        {descriptionEl}
      </div>
    );
  }

  return (
    <div
      className={cn(
        wide ? "max-w-4xl" : "max-w-3xl",
        isCenter && "mx-auto text-center",
        className
      )}
    >
      {eyebrowEl}
      {titleEl}
      {accentLine}
      {descriptionEl}
    </div>
  );
}

/** Accent second line for section titles (brand burgundy) */
export function SectionTitleAccent({
  children,
  className,
  inverted,
}: {
  children: ReactNode;
  className?: string;
  inverted?: boolean;
}) {
  return (
    <span
      className={cn(
        "block",
        inverted ? "text-primary-200" : "text-primary-700",
        className
      )}
    >
      {children}
    </span>
  );
}
