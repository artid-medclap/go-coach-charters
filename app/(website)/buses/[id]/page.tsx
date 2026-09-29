import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = { title: "Bus details" };

export default function BusDetailsPage() {
  return (
    <ComingSoon
      title="Bus details coming soon"
      description="Detailed bus information, amenities, and seat maps are on the way."
    />
  );
}
