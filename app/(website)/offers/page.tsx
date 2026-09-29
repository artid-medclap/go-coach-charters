import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = { title: "Offers" };

export default function OffersPage() {
  return (
    <ComingSoon
      title="All offers coming soon"
      description="The full list of active promo codes and seasonal deals is on the way."
    />
  );
}
