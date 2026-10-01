import Image from "next/image";
import Link from "next/link";
import { Award, ArrowRight, ShieldCheck, Users, CalendarCheck, UserCheck, Star, Phone } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { homeSections } from "@/data/navigation";

const highlights = [
  {
    icon: CalendarCheck,
    label: "13+ Years of Experience",
  },
  {
    icon: ShieldCheck,
    label: "Licensed and Insured Fleet",
  },
  {
    icon: UserCheck,
    label: "Professional Drivers",
  },
  {
    icon: Users,
    label: "5,000 Groups Served",
  },
  {
    icon: Star,
    label: "4.9/5 Average Rating",
  },
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[580px] overflow-hidden sm:min-h-[660px] lg:min-h-[780px]"
    >
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
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-primary-600/15 blur-[120px]" />

      {/* =======================================================
          CONTENT
      ======================================================= */}
      <Container className="relative z-10 flex min-h-[580px] flex-col items-center justify-center py-16 text-center sm:min-h-[660px] sm:py-20 lg:min-h-[780px] lg:py-28">
        {/* Highlights */}
        {/* <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {highlights.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[11px] font-semibold text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md sm:px-4 sm:text-xs"
            >
              <Icon className="h-4 w-4 text-primary-200" />
              {label}
            </span>
          ))}
        </div> */}

        {/* Heading */}
        <h1 className="mx-auto mt-5 max-w-5xl text-balance text-3xl font-bold leading-[1.05] tracking-[-0.045em] text-white drop-shadow-[0_3px_20px_rgba(0,0,0,0.45)] sm:mt-7 sm:text-5xl md:text-6xl lg:text-7xl">
          Charter Bus Rental
          <span className="block text-primary-200">
            in Alberta
          </span>
        </h1>

        {/* Accent divider */}
        <div className="mt-7 flex items-center gap-3">
          <span className="h-px w-10 bg-primary-200/60 sm:w-14" />

          <span className="h-2 w-2 rotate-45 bg-primary-200" />

          <span className="h-px w-10 bg-primary-200/60 sm:w-14" />
        </div>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base lg:text-lg lg:leading-8">
        Reliable group transportation for corporate events, school trips, 
        sports teams, weddings, private tours, 
        and long-distance travel across Alberta and Western Canada. 
        </p>

        {/* CTA */}
        <div className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:mt-9 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
          <Link
            href={homeSections.getStarted}
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-primary-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_35px_rgba(158,0,56,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-[0_16px_40px_rgba(158,0,56,0.32)] sm:w-auto"
          >
    <Image
      src="/hero/white_bus_icon(1).webp"
      alt=""
      width={50}
      height={50}
      className="h-5 w-5 object-contain"
    />

    <span>Get a Free Quote</span>

    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
  </Link>

  {/* Phone CTA */}
          <a
            href="tel:+17802383866"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/20 sm:w-auto"
          >
            <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
            <span>Call 780-238-3866</span>
          </a>
        </div>



        {/* Small supporting text */}
        <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/40">
          Comfortable group travel • Professional service • Dependable
          scheduling
        </p>


         <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-5">
          {highlights.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[11px] font-semibold text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md sm:px-4 sm:text-xs"
            >
              <Icon className="h-4 w-4 text-primary-200" />
              {label}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}