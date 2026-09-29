import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <ComingSoon
      title="Contact form coming soon"
      description="In the meantime, reach our travel desk using the details in the footer."
    />
  );
}
