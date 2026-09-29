import Image from "next/image";
import Link from "next/link";
import { Award, ArrowRight, ShieldCheck, Users } from "lucide-react";

import { Container } from "@/components/shared/Container";

const highlights = [
  {
    icon: ShieldCheck,
    label: "Licensed & insured fleet",
  },
  {
    icon: Users,
    label: "5,000+ groups served",
  },
  {
    icon: Award,
    label: "4.9/5 average rating",
  },
];

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[680px] overflow-hidden sm:min-h-[720px] lg:min-h-[780px]">
      {/* =======================================================
          FULL-WIDTH BACKGROUND IMAGE
      ======================================================= */}
      <Image
        src="/hero/edmonton_calgary_charter_buses_background.webp"
        alt="Charter buses for Edmonton group transportation"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

   

      {/* =======================================================
          GRADIENT OVERLAY
      ======================================================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/45 via-primary-950/60 to-primary-950/90" />

      {/* =======================================================
          SIDE VIGNETTE
      ======================================================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,10,18,0.18)_45%,rgba(15,10,18,0.65)_100%)]" />

      {/* =======================================================
          PINK ACCENT GLOW
      ======================================================= */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#f2b3c7]/10 blur-[120px]" />

      {/* =======================================================
          CONTENT
      ======================================================= */}
      <Container className="relative z-10 flex min-h-[680px] flex-col items-center justify-center py-24 text-center sm:min-h-[720px] lg:min-h-[780px] lg:py-32">
        {/* Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {highlights.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[11px] font-semibold text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md sm:px-4 sm:text-xs"
            >
              <Icon className="h-4 w-4 text-[#f2b3c7]" />
              {label}
            </span>
          ))}
        </div>

        {/* Heading */}
        <h1 className="mx-auto mt-7 max-w-5xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-white drop-shadow-[0_3px_20px_rgba(0,0,0,0.45)] sm:text-5xl md:text-6xl lg:text-7xl">
          Edmonton Charter
          <span className="block text-[#f2b3c7]">
            Bus Rentals
          </span>
        </h1>

        {/* Accent divider */}
        <div className="mt-7 flex items-center gap-3">
          <span className="h-px w-10 bg-[#f2b3c7]/60 sm:w-14" />

          <span className="h-2 w-2 rotate-45 bg-[#f2b3c7]" />

          <span className="h-px w-10 bg-[#f2b3c7]/60 sm:w-14" />
        </div>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base lg:text-lg lg:leading-8">
          From weddings and corporate events to school trips and sports
          tournaments, enjoy safe, comfortable group transportation across
          Edmonton, Calgary, and beyond.
        </p>

        {/* CTA */}
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#f2b3c7] px-6 py-3.5 text-sm font-bold text-primary-950 shadow-[0_12px_35px_rgba(242,179,199,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f6c5d5] hover:shadow-[0_16px_40px_rgba(242,179,199,0.3)]"
          >
            <Image
              src="/hero/white_bus_icon(1).webp"
              alt=""
              width={50}
              height={50}
              className="h-5 w-5 object-contain"
            />

            <span>Request a Quote</span>

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Small supporting text */}
        <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/40">
          Comfortable group travel • Professional service • Dependable
          scheduling
        </p>
      </Container>
    </section>
  );
}