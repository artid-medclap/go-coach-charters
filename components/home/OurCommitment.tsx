import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Bus,
  CalendarRange,
  MapPin,
  Route,
  ShieldCheck,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/shared/Container";
import { homeSections } from "@/data/navigation";
import { HomeSection } from "@/components/shared/HomeSection";
import {
  SectionHeading,
  SectionTitleAccent,
} from "@/components/shared/SectionHeading";
import { premiumCard, premiumCardAccentBar } from "@/components/shared/premium-ui";
import { cn } from "@/lib/utils";

const STATS = [
  { value: "13+", label: "Years serving groups", icon: CalendarRange },
  { value: "5,000+", label: "Groups transported", icon: Users },
  { value: "4.9/5", label: "Average guest rating", icon: Star },
  { value: "100%", label: "Licensed & insured", icon: ShieldCheck },
] as const;

const PILLARS: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: ShieldCheck,
    title: "Safety you can count on",
    description:
      "Licensed operators, insured vehicles, and coaches maintained for dependable travel.",
  },
  {
    icon: Route,
    title: "Plans built around you",
    description:
      "Pickups, stops, and return times shaped to your itinerary — day trips or multi-day tours.",
  },
  {
    icon: Users,
    title: "Support at every step",
    description:
      "Real people for quotes, schedule changes, and on-the-road questions when plans shift.",
  },
];

const SERVICE_AREAS = [
  "Calgary",
  "Edmonton",
  "Red Deer",
  "Banff & Jasper",
  "Western Canada",
];

const GROUP_TYPES = [
  "School & educational trips",
  "Corporate meetings & conferences",
  "Sports teams & tournaments",
  "Weddings & private events",
  "Sightseeing & multi-day tours",
];

export function CommitmentSection() {
  return (
    <HomeSection id="commitment" tone="blush" className="overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-primary-200/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-16 h-[400px] w-[400px] rounded-full bg-primary-200/15 blur-[110px]" />

      <Container className="relative">
        <SectionHeading
          align="center"
          wide
          eyebrow="Our commitment"
          title={
            <>
              Your reliable partner for
              <SectionTitleAccent>group transportation</SectionTitleAccent>
            </>
          }
          description="Since 2013, Go Coach Charters has moved groups across Alberta and Western Canada — together, on time, and comfortably from pickup to drop-off."
        />

        <div className="mt-10 space-y-3 sm:mt-12 lg:mt-16">
          {/* —— Row 1: visual + story (balanced 5 / 7) —— */}
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8 xl:gap-10">
            <div className="relative lg:col-span-5">
              <div className="relative h-full min-h-[320px] overflow-hidden rounded-[28px] bg-primary-900 shadow-[0_28px_72px_rgba(53,0,20,0.2)] ring-1 ring-primary-200/25 sm:min-h-[380px] lg:min-h-0 lg:aspect-[4/5]">
                <Image
                  src="/hero/commitment.webp"
                  alt="Charter bus ready for group travel"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/15 to-transparent" />
                <div className="absolute left-5 top-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 backdrop-blur-md">
                    <ShieldCheck className="h-3.5 w-3.5 text-primary-200" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                      Since 2013
                    </span>
                  </span>
                </div>
                <div className="absolute inset-x-5 bottom-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-200">
                    Alberta & Western Canada
                  </p>
                  <p className="mt-2 text-xl font-bold tracking-[-0.03em] text-white sm:text-2xl">
                    One coach.
                    <span className="text-primary-200"> One group.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-7">
              <div
                className={premiumCard(
                  "flex flex-1 flex-col justify-center p-6 sm:p-8 lg:p-9",
                  "light"
                )}
              >
                <p className="text-base leading-7 text-primary-950/60 sm:text-lg sm:leading-8">
                  Whether you are coordinating a school field trip, corporate
                  shuttle, sports road game, or wedding guest loop, we handle
                  logistics so you can focus on the event — not parking, carpools,
                  or late arrivals.
                </p>
                <p className="mt-4 text-base leading-7 text-primary-950/60 sm:text-lg sm:leading-8">
                  Planners, teachers, and administrators work with us every week
                  for clear pricing, flexible routing, and drivers who know group
                  travel across city corridors and long-distance routes.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-primary-200/40 pt-5">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary-950/70">
                    <Star className="h-4 w-4 fill-primary-600 text-primary-600" />
                    Trusted by schools, teams & businesses
                  </span>
                  <span className="hidden h-4 w-px bg-primary-200 sm:block" />
                  <span className="text-xs text-primary-950/45">
                    Professional drivers · Modern fleet
                  </span>
                </div>
                <div className={premiumCardAccentBar} />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div
                  className={premiumCard(
                    "flex h-full flex-col p-5 sm:p-6",
                    "soft"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-primary-800 ring-1 ring-primary-200/50">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-900">
                      Where we operate
                    </p>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {SERVICE_AREAS.map((area) => (
                      <li
                        key={area}
                        className="rounded-full border border-primary-200/55 bg-white px-3 py-1.5 text-xs font-semibold text-primary-900"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                  <div className={premiumCardAccentBar} />
                </div>

                <div
                  className={premiumCard(
                    "flex h-full flex-col p-5 sm:p-6",
                    "soft"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-primary-800 ring-1 ring-primary-200/50">
                      <Bus className="h-4 w-4" />
                    </span>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-900">
                      Groups we serve
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {GROUP_TYPES.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-primary-950/65"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-primary-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className={premiumCardAccentBar} />
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={homeSections.whyGoCoach}
                  className="group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-full bg-primary-800 px-6 text-sm font-bold text-white shadow-[0_12px_32px_rgba(53,0,20,0.18)] transition-all hover:bg-primary-900 hover:shadow-[0_16px_40px_rgba(53,0,20,0.22)] sm:flex-1"
                >
                  Learn more about us
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
                <Link
                  href={homeSections.getStarted}
                  className="inline-flex h-12 w-full items-center justify-center rounded-full border border-primary-200/80 bg-white px-6 text-sm font-bold text-primary-900 transition-colors hover:border-primary-300 hover:bg-accent-50 sm:flex-1"
                >
                  Get a free quote
                </Link>
              </div>
            </div>
          </div>

          {/* —— Row 2: full-width stats band —— */}
          <div className="overflow-hidden rounded-[28px] bg-primary-900 p-2 shadow-[0_20px_56px_rgba(53,0,20,0.22)] ring-1 ring-primary-800 sm:p-2.5">
            <div className="grid grid-cols-2 divide-y divide-white/10 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
              {STATS.map(({ value, label, icon: Icon }, index) => (
                <div
                  key={label}
                  className={cn(
                    "group relative flex flex-col gap-2 px-4 py-5 sm:gap-3 sm:px-6 sm:py-7",
                    index % 2 === 0 && "lg:border-none",
                    index < 2 && "border-b border-white/10 lg:border-b-0"
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-primary-200 ring-1 ring-white/10">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {value}
                    </p>
                  </div>
                  <p className="text-xs font-medium text-white/50 sm:text-sm">
                    {label}
                  </p>
                  <span className="absolute bottom-0 left-5 right-5 h-px origin-left scale-x-0 bg-gradient-to-r from-primary-300/80 to-transparent transition-transform duration-500 group-hover:scale-x-100 sm:left-6 sm:right-6" />
                </div>
              ))}
            </div>
          </div>

          {/* —— Row 3: pillars (equal thirds) —— */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className={premiumCard(
                  "flex flex-col p-6 sm:p-7",
                  "light"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-50 text-primary-800 ring-1 ring-primary-200/45">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <span className="text-[11px] font-bold tabular-nums text-primary-300">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-bold tracking-[-0.02em] text-primary-950 sm:text-lg">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-primary-950/55">
                  {description}
                </p>
                <div className={premiumCardAccentBar} />
              </article>
            ))}
          </div>
        </div>
      </Container>
    </HomeSection>
  );
}
