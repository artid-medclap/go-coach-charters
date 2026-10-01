import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bus,
  Compass,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Container } from "@/components/shared/Container";
import { HomeSection } from "@/components/shared/HomeSection";
import {
  SectionHeading,
  SectionTitleAccent,
} from "@/components/shared/SectionHeading";
import { homeSections } from "@/data/navigation";
import { charterRoutes, routeStats } from "@/data/charterRoutes";
import { formatCurrency } from "@/lib/formatters";

export function FeaturedRoutes() {
  return (
    <HomeSection id="featured-routes" tone="white" className="overflow-hidden">
      {/* Subtle geometric backdrop (reference-style) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(115deg, transparent 42%, rgb(242 179 199 / 0.12) 42%, rgb(242 179 199 / 0.12) 44%, transparent 44%),
            linear-gradient(115deg, transparent 58%, rgb(242 179 199 / 0.08) 58%, rgb(242 179 199 / 0.08) 60%, transparent 60%)
          `,
          backgroundSize: "100% 480px, 100% 640px",
          backgroundPosition: "top right, center left",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="pointer-events-none absolute -left-40 top-10 h-[400px] w-[400px] rounded-full bg-primary-200/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-primary-200/10 blur-[110px]" />

      <Container className="relative">
        <SectionHeading
          align="center"
          wide
          eyebrow="We serve Western Canada & beyond"
          title={
            <>
              Our featured
              <SectionTitleAccent>charter routes</SectionTitleAccent>
            </>
          }
          description="Reliable charter transportation connecting major cities, mountain destinations, regional hubs, and popular group travel destinations across Western Canada."
        />

        {/* Destination-style route grid */}
        <div className="mx-auto mt-10 max-w-6xl sm:mt-14">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
            {charterRoutes.map((route) => (
              <Link
                key={route.id}
                  href={homeSections.getStarted}
                className="group relative block overflow-hidden rounded-2xl bg-primary-950 shadow-[0_10px_40px_rgba(53,0,20,0.1)] ring-1 ring-black/[0.04] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_24px_56px_rgba(53,0,20,0.16)] sm:rounded-[20px]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  {route.image ? (
                    <Image
                      src={route.image}
                      alt={`${route.from} to ${route.to} charter bus`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-primary-100 text-primary-800">
                      <Bus className="h-10 w-10" />
                    </div>
                  )}

                  {/* Legibility overlay */}
                  <div className="absolute inset-0 bg-primary-950/35 transition-colors duration-500 group-hover:bg-primary-950/45" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-primary-950/20 to-primary-950/25" />

                  {/* Centered route title (reference-style) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                    <p className="text-base font-extrabold uppercase tracking-[0.1em] text-white sm:text-xl md:text-2xl">
                      {route.from}
                    </p>
                    <span
                      className="my-2 block h-px w-8 bg-white/50 transition-all duration-500 group-hover:w-12"
                      aria-hidden
                    />
                    <p className="text-base font-extrabold uppercase tracking-[0.1em] text-white sm:text-xl md:text-2xl">
                      {route.to}
                    </p>
                  </div>

                  {/* Meta — visible on hover / focus */}
                  <div className="absolute inset-x-0 bottom-0 bg-primary-950/85 px-3 py-2.5 backdrop-blur-sm sm:translate-y-full sm:py-3 sm:transition-transform sm:duration-500 sm:group-hover:translate-y-0 sm:group-focus-visible:translate-y-0">
                    <div className="flex items-center justify-between gap-3 text-white">
                      <div className="text-left text-[11px] font-medium text-white/75">
                        <span>{route.distance}</span>
                        <span className="mx-1.5 text-white/40">·</span>
                        <span>{route.duration}</span>
                      </div>
                      <span className="shrink-0 text-xs font-bold text-primary-200">
                        From {formatCurrency(route.priceFrom)}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Stats band */}
        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[28px] bg-primary-900 p-2 shadow-[0_20px_56px_rgba(53,0,20,0.2)] ring-1 ring-primary-800 sm:mt-14 sm:p-2.5">
          <div className="grid grid-cols-2 divide-y divide-white/10 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {routeStats.map((stat, index) => (
              <div
                key={stat.id}
                className="group relative px-5 py-6 text-center sm:px-6 sm:py-7"
              >
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-primary-200 ring-1 ring-white/10">
                  {index === 0 && <Compass className="h-4 w-4" />}
                  {index === 1 && <Bus className="h-4 w-4" />}
                  {index === 2 && <Users className="h-4 w-4" />}
                  {index === 3 && <ShieldCheck className="h-4 w-4" />}
                </div>
                <p className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-bold text-primary-100">
                  {stat.label}
                </p>
                <p className="mt-1 text-[10px] leading-4 text-white/45">
                  {stat.description}
                </p>
                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-primary-300/70 transition-all duration-500 group-hover:w-3/4" />
              </div>
            ))}
          </div>
        </div>

        {/* Custom route */}
        <div className="mx-auto mt-6 max-w-5xl rounded-[28px] border border-primary-200/45 bg-white px-5 py-6 shadow-[0_10px_36px_rgba(53,0,20,0.06)] ring-1 ring-inset ring-primary-100 sm:px-8 sm:py-7">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-base font-bold text-primary-950 sm:text-lg">
                Need a custom route?
              </h3>
              <p className="mt-1 text-xs leading-5 text-primary-950/55 sm:text-sm">
                We can build a charter itinerary around your group&apos;s
                destinations and schedule.
              </p>
            </div>
            <Link
              href={homeSections.getStarted}
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-primary-800 px-6 py-3 text-xs font-bold text-white shadow-[0_10px_28px_rgba(53,0,20,0.15)] transition-all hover:bg-primary-900 hover:shadow-[0_14px_36px_rgba(53,0,20,0.2)]"
            >
              Plan Your Route
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Container>
    </HomeSection>
  );
}

export const OurFeaturedRoutes = FeaturedRoutes;
