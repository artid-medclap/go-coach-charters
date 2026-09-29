import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = { title: "Route details" };

export default function RouteDetailsPage() {
  return (
    <ComingSoon
      title="Route details coming soon"
      description="Schedules, stops, and operator options for this route are on the way."
    />
  );
}
