import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = { title: "Booking confirmation" };

export default function BookingConfirmationPage() {
  return (
    <ComingSoon
      title="Booking confirmation coming soon"
      description="A summary of your confirmed trip will appear here after checkout."
    />
  );
}
