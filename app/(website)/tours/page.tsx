import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = { title: "Tours" };

export default function ToursPage() {
  return (
    <ComingSoon
      title="Full tour catalog coming soon"
      description="Every multi-day coach tour package, filterable by destination and length."
    />
  );
}
