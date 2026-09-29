import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = { title: "About us" };

export default function AboutPage() {
  return (
    <ComingSoon
      title="Our story coming soon"
      description="Learn more about GoCoach's mission and network of coach operators."
    />
  );
}
