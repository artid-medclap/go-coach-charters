import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = { title: "Tour details" };

export default function TourDetailsPage() {
  return (
    <ComingSoon
      title="Tour details coming soon"
      description="Full itinerary, inclusions, and booking for this tour are on the way."
    />
  );
}
