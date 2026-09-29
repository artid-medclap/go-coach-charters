import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = { title: "Routes" };

export default function RoutesPage() {
  return (
    <ComingSoon
      title="Full route directory coming soon"
      description="Browse every route we cover, with live pricing and schedules."
    />
  );
}
