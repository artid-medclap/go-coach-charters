import { cn } from "@/lib/utils";

/** Shared elevation + border for home page cards */
export function premiumCard(
  className?: string,
  variant: "light" | "soft" | "glass" = "light"
) {
  return cn(
    "group relative overflow-hidden rounded-[28px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
    variant === "light" &&
      cn(
        "border border-primary-200/45 bg-white",
        "shadow-[0_14px_44px_rgba(53,0,20,0.07)]",
        "ring-1 ring-inset ring-white/90",
        "hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-[0_26px_64px_rgba(53,0,20,0.11)]"
      ),
    variant === "soft" &&
      cn(
        "border border-primary-200/40 bg-[#fff8fa]",
        "shadow-[0_10px_36px_rgba(53,0,20,0.05)]",
        "hover:-translate-y-1 hover:border-primary-200 hover:bg-white hover:shadow-[0_22px_52px_rgba(53,0,20,0.09)]"
      ),
    variant === "glass" &&
      cn(
        "border border-white/20 bg-white/10 backdrop-blur-md",
        "shadow-[0_12px_40px_rgba(0,0,0,0.15)]"
      ),
    className
  );
}

export const premiumCardAccentBar =
  "absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-primary-300 via-primary-400 to-primary-300 transition-all duration-500 group-hover:w-full";

export const premiumImageOverlay =
  "absolute inset-0 bg-gradient-to-t from-primary-950/75 via-primary-950/15 to-primary-950/5";
