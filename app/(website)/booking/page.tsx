import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = { title: "Booking" };

export default function BookingPage() {
  return (
    <ComingSoon
      title="Online booking coming soon"
      description="Seat selection, passenger details, and secure payment are on the way."
    />
  );
}
