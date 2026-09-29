import Image from "next/image";
import {
  Armchair,
  Bath,
  CheckCircle2,
  Luggage,
  Mic2,
  Snowflake,
  Tv,
  Wifi,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/shared/Container";
import { amenities } from "@/data/amenities";

const ICONS: Record<string, LucideIcon> = {
  "Free onboard Wi-Fi": Wifi,
  "Reclining, cushioned seats": Armchair,
  "Onboard restroom": Bath,
  "Climate control (AC & heat)": Snowflake,
  "Power outlets & USB charging": Zap,
  "PA system & microphone": Mic2,
  "Ample luggage storage": Luggage,
  "TV & entertainment system": Tv,
};

export function Amenities() {
  return (
    <section className="relative overflow-hidden bg-[#fff8fa] py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#f2b3c7]/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#f2b3c7]/10 blur-[120px]" />
      </div>

      <Container className="relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f2b3c7]/50 bg-white px-4 py-2 shadow-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f2b3c7]/30">
              <span className="h-2 w-2 rounded-full bg-primary-900" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-900">
              Onboard experience
            </span>
          </div>

          <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-primary-950 sm:text-5xl lg:text-6xl">
            Comfort comes
            <span className="text-primary-800"> standard.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-primary-950/55 sm:text-lg">
            Every charter is equipped to keep your group comfortable,
            connected, and relaxed for the whole journey.
          </p>
        </div>

        {/* Main content */}
        <div className="mt-12 grid gap-5 sm:mt-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Image panel */}
          <div className="group relative min-h-[460px] overflow-hidden rounded-[30px] shadow-[0_20px_60px_rgba(31,20,27,0.12)] lg:min-h-[620px]">
            <Image
              src="/images/bus4.webp"
              alt="Inside a GoCoach charter bus"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />

            {/* Image overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                Onboard, every trip
              </div>

              <h3 className="mt-5 max-w-md text-2xl font-bold leading-tight tracking-[-0.025em] text-white sm:text-3xl">
                Built for comfort on every mile of the road.
              </h3>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-12 bg-[#f2b3c7]" />

                <span className="text-xs font-medium text-white/55">
                  Designed around your group
                </span>
              </div>
            </div>

            {/* Floating count */}
            <div className="absolute right-5 top-5 rounded-2xl border border-white/15 bg-primary-950/30 px-4 py-3 text-white backdrop-blur-md">
              <p className="text-2xl font-bold leading-none">
                {String(amenities.length).padStart(2, "0")}
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white/50">
                Amenities
              </p>
            </div>
          </div>

          {/* Amenities */}
          <div className="grid gap-3 sm:grid-cols-2">
            {amenities.map((amenity, index) => {
              const Icon = ICONS[amenity.title] ?? Wifi;

              return (
                <div
                  key={amenity.id}
                  className="group relative flex min-h-[145px] flex-col justify-between overflow-hidden rounded-[24px] border border-primary-200/60 bg-white p-5 shadow-[0_8px_30px_rgba(31,20,27,0.035)] transition-all duration-300 hover:border-[#e8ccd5] hover:shadow-[0_15px_40px_rgba(91,49,65,0.07)] sm:p-6"
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff1f5] text-primary-800 transition-colors duration-300 group-hover:bg-[#f2b3c7]/40">
                      <Icon className="h-5 w-5" />
                    </span>

                    <span className="text-[10px] font-bold tracking-[0.15em] text-primary-950/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-6 flex items-end justify-between gap-3">
                    <p className="max-w-[190px] text-sm font-bold leading-5 text-primary-950 sm:text-[15px]">
                      {amenity.title}
                    </p>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fff8fa]">
                      <CheckCircle2 className="h-4 w-4 text-primary-800" />
                    </span>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-[#f2b3c7] transition-transform duration-300 group-hover:scale-x-100" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom trust strip */}
        <div className="mt-5 grid overflow-hidden rounded-[24px] border border-primary-200/60 bg-white sm:grid-cols-3">
          <div className="px-6 py-5 sm:px-7">
            <p className="text-sm font-bold text-primary-950">
              Comfortable seating
            </p>
            <p className="mt-1 text-xs text-primary-950/40">
              Relax throughout the journey
            </p>
          </div>

          <div className="border-t border-primary-950/8 px-6 py-5 sm:border-l sm:border-t-0 sm:px-7">
            <p className="text-sm font-bold text-primary-950">
              Connected travel
            </p>
            <p className="mt-1 text-xs text-primary-950/40">
              Wi-Fi and charging onboard
            </p>
          </div>

          <div className="border-t border-primary-950/8 px-6 py-5 sm:border-l sm:border-t-0 sm:px-7">
            <p className="text-sm font-bold text-primary-950">
              Group-ready amenities
            </p>
            <p className="mt-1 text-xs text-primary-950/40">
              Designed for longer trips
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}