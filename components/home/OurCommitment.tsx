import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Bus,
  CalendarRange,
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
          eyebrow="Our Commitment"
          title={
            <>
              Your Reliable Partner for
              <SectionTitleAccent>Group Transportation</SectionTitleAccent>
            </>
          }
          description="Reliable group transportation for corporate events, school trips, sports teams, weddings, private tours, and long-distance travel across Alberta and Western Canada."
        />

        <div className="mt-10 space-y-8 sm:mt-12 sm:space-y-10 lg:mt-16 lg:space-y-12">
          {/* Image + story only — avoids empty left column below */}
          <div className="grid items-stretch gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
            <div className="lg:col-span-5">
              <div className="relative h-full min-h-[360px] overflow-hidden rounded-[28px] bg-primary-900 shadow-[0_24px_64px_rgba(53,0,20,0.16)] ring-1 ring-primary-200/30 sm:min-h-[420px] lg:min-h-0 lg:rounded-[32px]">
                <div className="relative aspect-[4/5] h-full w-full sm:aspect-[3/4] lg:absolute lg:inset-0 lg:aspect-auto">
                  <Image
                    src="/hero/commitment.webp"
                    alt="Charter bus ready for group travel"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-[center_42%] sm:object-[center_40%] lg:object-[center_38%]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-950/70 via-primary-950/10 to-transparent" />
                  <div className="absolute left-5 top-5 sm:left-6 sm:top-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 backdrop-blur-md">
                      <ShieldCheck className="h-3.5 w-3.5 text-primary-200" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                        Since 2013
                      </span>
                    </span>
                  </div>
                  <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-6">
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
            </div>

            <div className="lg:col-span-7">
              <div
                className={premiumCard(
                  "flex h-full flex-col p-6 sm:p-8 lg:p-9",
                  "light"
                )}
              >
                <div className="space-y-4 sm:space-y-5">
                  <p className="text-base leading-7 text-primary-950/60 sm:text-lg sm:leading-8">
                    Go Coach Charters has been providing group transportation
                    across Alberta and Western Canada since 2013. We offer
                    charter bus rental for school trips, corporate travel, sports
                    teams, family outings, events, and long-distance journeys.
                  </p>
                  <p className="text-base leading-7 text-primary-950/60 sm:text-lg sm:leading-8">
                    With years of experience in group travel, our team
                    understands the importance of reliable service and safety.
                    Our professional drivers and well-maintained coaches help
                    groups travel comfortably and with confidence.
                  </p>
                  <p className="text-base leading-7 text-primary-950/60 sm:text-lg sm:leading-8">
                    For larger groups, our 56-passenger charter bus offers
                    comfortable seating, luggage space, and select onboard
                    amenities, including Wi-Fi and washrooms. Whether you are
                    planning a local trip or travelling across Western Canada,
                    Go Coach Charters provides a comfortable and practical way
                    to keep your group together.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-primary-200/40 pt-6">
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
            </div>
          </div>

          {/* Full-width detail + CTAs — no orphaned left gutter */}
          <div
            className={premiumCard(
              "overflow-hidden p-6 sm:p-8 lg:p-9",
              "soft"
            )}
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-primary-800 ring-1 ring-primary-200/50">
                  <Bus className="h-4 w-4" />
                </span>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-900">
                  Groups we serve
                </p>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5">
                {GROUP_TYPES.map((item) => (
                  <li
                    key={item}
                    className={premiumCard(
                      "flex items-start gap-3 p-4 sm:p-5",
                      "light"
                    )}
                  >
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-primary-800 ring-1 ring-primary-200/45">
                      <Bus className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <p className="text-sm font-semibold leading-snug text-primary-950/75">
                      {item}
                    </p>
                    <div className={premiumCardAccentBar} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-primary-200/40 pt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:mt-10 lg:pt-10">
              <Link
                href={homeSections.whyGoCoach}
                className="group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-full bg-primary-800 px-8 text-sm font-bold text-white shadow-[0_12px_32px_rgba(53,0,20,0.18)] transition-all hover:bg-primary-900 hover:shadow-[0_16px_40px_rgba(53,0,20,0.22)] sm:w-auto sm:min-w-[220px]"
              >
                Learn more about us
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
              <Link
                href={homeSections.getStarted}
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-primary-200/80 bg-white px-8 text-sm font-bold text-primary-900 transition-colors hover:border-primary-300 hover:bg-accent-50 sm:w-auto sm:min-w-[220px]"
              >
                Get a free quote
              </Link>
            </div>
            <div className={premiumCardAccentBar} />
          </div>

          {/* —— Stats —— */}
          <div className="overflow-hidden rounded-[28px] bg-primary-900 p-2.5 shadow-[0_20px_56px_rgba(53,0,20,0.22)] ring-1 ring-primary-800 sm:p-3">
            <div className="grid grid-cols-2 divide-y divide-white/10 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
              {STATS.map(({ value, label, icon: Icon }, index) => (
                <div
                  key={label}
                  className={cn(
                    "group relative flex flex-col gap-2 px-5 py-6 sm:gap-3 sm:px-6 sm:py-7",
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

          {/* —— Pillars —— */}
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
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
                <p className="mt-3 text-sm leading-6 text-primary-950/55">
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
