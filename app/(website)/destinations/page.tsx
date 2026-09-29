import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = { title: "Destinations" };

export default function DestinationsPage() {
  return (
    <ComingSoon
      title="Destination guide coming soon"
      description="A full directory of destinations reachable by coach is on the way."
    />
  );
}
