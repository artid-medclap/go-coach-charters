import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = { title: "Buses" };

export default function BusesPage() {
  return (
    <ComingSoon
      title="Bus search coming soon"
      description="We're putting the finishing touches on live bus search and seat selection."
    />
  );
}
