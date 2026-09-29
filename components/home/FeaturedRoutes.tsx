import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bus,
  Compass,
  Navigation,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Container } from "@/components/shared/Container";
import { charterRoutes, routeStats } from "@/data/charterRoutes";
import { formatCurrency } from "@/lib/formatters";

export function FeaturedRoutes() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* =========================================================
          BACKGROUND AMBIENT DECORATION
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[460px] w-[460px] rounded-full bg-[#f2b3c7]/20 blur-[130px]" />
        <div className="absolute -right-40 bottom-10 h-[460px] w-[460px] rounded-full bg-[#f2b3c7]/20 blur-[130px]" />
      </div>

      <Container className="relative">
        {/* =======================================================
            HEADER
        ======================================================= */}
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-white px-4 py-2 shadow-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f2b3c7]/30">
              <Navigation className="h-3.5 w-3.5 text-primary-900" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-900">
              Alberta Charter Corridors
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-primary-950 sm:text-5xl lg:text-6xl">
            Our Featured
            <span className="block text-primary-800">Charter Routes.</span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-primary-950/60 sm:text-lg">
            Reliable, point-to-point group travel connecting Alberta’s largest city centers,
            rocky alpine gateways, and regional tournament hubs.
          </p>
        </div>

        {/* =======================================================
            COUNTING BADGES STATS BAR (SUFFICIENT SECTION METRICS)
        ======================================================= */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {routeStats.map((stat, idx) => (
            <div
              key={stat.id}
              className="
                group relative overflow-hidden rounded-2xl sm:rounded-3xl
                border border-primary-200/60 bg-[#fff8fa] p-5 sm:p-6
                transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400 hover:shadow-md
              "
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-xs text-primary-800">
                  {idx === 0 && <Compass className="h-4 w-4" />}
                  {idx === 1 && <Bus className="h-4 w-4" />}
                  {idx === 2 && <Users className="h-4 w-4" />}
                  {idx === 3 && <ShieldCheck className="h-4 w-4" />}
                </span>
                <span className="rounded-full bg-primary-100/80 px-2.5 py-0.5 text-[10px] font-bold text-primary-900">
                  Verified
                </span>
              </div>

              <div className="mt-4">
                <p className="text-3xl font-extrabold tracking-tight text-primary-950 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-bold text-primary-900">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-xs text-primary-950/50">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* =======================================================
            FEATURED ROUTE CARDS (CLEAN & ONE-LINE CONTENT)
        ======================================================= */}
        <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {charterRoutes.map((route, index) => {
            const routeNumber = String(index + 1).padStart(2, "0");

            return (
              <Link
                key={route.id}
                href={`/booking?route=${route.slug}`}
                className="
                  group relative flex flex-col overflow-hidden
                  rounded-[26px] border border-primary-200/60 bg-white
                  shadow-xs transition-all duration-300
                  hover:-translate-y-1.5 hover:border-primary-400 hover:shadow-xl
                "
              >
                {/* Styled Inset Image Frame */}
                <div className="p-3.5 sm:p-4 pb-0">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-primary-950/5 ring-1 ring-black/5">
                    {route.image ? (
                      <Image
                        src={route.image}
                        alt={`${route.from} to ${route.to} charter bus`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="
                          object-cover object-center
                          transition-transform duration-700 ease-out
                          group-hover:scale-108
                        "
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-primary-900/10 text-primary-800">
                        <Bus className="h-10 w-10" />
                      </div>
                    )}

                    {/* Subtle Top & Bottom Gradient Overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25" />

                    {/* Top Left: Route Number Pill */}
                    <div className="absolute left-3 top-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-[11px] font-black text-primary-950 shadow-sm backdrop-blur-md">
                        #{routeNumber}
                      </span>
                    </div>

                    {/* Top Right: Starting Price Pill */}
                    <div className="absolute right-3 top-3">
                      <span className="rounded-full bg-primary-800/90 px-3 py-1 text-xs font-bold text-white shadow-sm backdrop-blur-md">
                        From {formatCurrency(route.priceFrom)}
                      </span>
                    </div>

                    {/* Bottom Left: Distance & Duration Pill */}
                    <div className="absolute bottom-3 left-3">
                      <span className="rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md border border-white/10">
                        {route.distance} • {route.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content: Title + One Line Content */}
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                  <div>
                    {/* Route Cities */}
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="flex items-center gap-2 text-base sm:text-lg font-bold text-primary-950 transition-colors group-hover:text-primary-800">
                        <span>{route.from}</span>
                        <ArrowRight className="h-4 w-4 text-primary-600 transition-transform group-hover:translate-x-1" />
                        <span>{route.to}</span>
                      </h3>
                    </div>

                    {/* One Line Content */}
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground truncate">
                      {route.description}
                    </p>
                  </div>

                  {/* Clean Bottom Action Row */}
                  <div className="mt-4 flex items-center justify-between border-t border-border/40 pt-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-800 group-hover:text-primary-950 transition-colors">
                      Book this route
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <span className="text-[11px] font-medium text-muted-foreground">
                      Direct charter
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* =======================================================
            BOTTOM CUSTOM ROUTE PROMPT
        ======================================================= */}
        <div className="mt-12 rounded-3xl border border-primary-200/60 bg-[#fff8fa] p-6 sm:p-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <h3 className="text-lg font-bold text-primary-950 sm:text-xl">
                Need a custom route or multi-day itinerary?
              </h3>
              <p className="mt-1 text-sm text-primary-950/60">
                We design custom bus charters for destinations across Alberta, British Columbia, and Saskatchewan.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <Link
                href="/booking"
                className="
                  group inline-flex items-center gap-2.5 rounded-full
                  bg-primary-800 px-6 py-3 text-sm font-bold text-white
                  shadow-sm transition-all hover:bg-primary-900
                "
              >
                <span>Plan Custom Route</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// Alias export to support both naming styles
export const OurFeaturedRoutes = FeaturedRoutes;
