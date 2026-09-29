import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = { title: "Destination details" };

export default function DestinationDetailsPage() {
  return (
    <ComingSoon
      title="Destination details coming soon"
      description="Highlights, tours, and travel tips for this destination are on the way."
    />
  );
}
