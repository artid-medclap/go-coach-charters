import Image from "next/image";
import {
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  Map,
  Trophy,
} from "lucide-react";

import { Container } from "@/components/shared/Container";
import { HomeSection } from "@/components/shared/HomeSection";
import {
  SectionHeading,
  SectionTitleAccent,
} from "@/components/shared/SectionHeading";
import {
  premiumCard,
  premiumCardAccentBar,
  premiumImageOverlay,
} from "@/components/shared/premium-ui";
import { cn } from "@/lib/utils";

const GROUPS = [
  {
    icon: Briefcase,
    image: "/services/corporate-travel.webp",
    title: "Corporate Travel",
    description:
      "Conferences, meetings, employee transportation, and company events.",
  },
  {
    icon: GraduationCap,
    image: "/services/school-trips.webp",
    title: "School Trips",
    description:
      "Transportation for students, teachers, and educational groups.",
  },
  {
    icon: Trophy,
    image: "/services/sports-teams.webp",
    title: "Sports Teams",
    description:
      "Travel to games, tournaments, and sporting events.",
  },
  {
    icon: HeartHandshake,
    image: "/services/weddings-events.webp",
    title: "Weddings & Events",
    description:
      "Keep guests moving between hotels, venues, and event locations.",
  },
  {
    icon: Map,
    image: "/services/private-tours.webp",
    title: "Private Tours",
    description:
      "Group transportation for sightseeing and multi-day trips.",
  },
];

function serviceCardColumnClass(index: number) {
  return cn(
    "lg:col-span-2",
    index === 3 && "lg:col-start-2"
  );
}

export function ServicesSection() {
  return (
    <HomeSection id="services" tone="blush" className="overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-primary-200/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-primary-200/12 blur-[110px]" />

      <Container className="relative">
        <SectionHeading
          align="center"
          wide
          eyebrow="Who we serve"
          title={
            <>
              Transportation for
              <SectionTitleAccent>every kind of group</SectionTitleAccent>
            </>
          }
          description="From business travel and school trips to weddings, sporting events, and private tours, we keep your group moving comfortably together."
        />

        <div className="mx-auto mt-10 grid max-w-7xl gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-6 lg:gap-6">
          {GROUPS.map((group, index) => {
            const Icon = group.icon;
            const number = String(index + 1).padStart(2, "0");

            return (
              <article
                key={group.title}
                className={premiumCard(
                  cn(
                    "flex h-full min-h-0 flex-col sm:min-h-[400px]",
                    serviceCardColumnClass(index)
                  ),
                  "light"
                )}
              >
                <div className="relative aspect-[5/4] shrink-0 overflow-hidden sm:aspect-[4/3]">
                  <Image
                    src={group.image}
                    alt={group.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <div className={premiumImageOverlay} />

                  <span className="absolute left-4 top-4 text-[11px] font-bold tabular-nums text-white/90">
                    {number}
                  </span>

                  <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-primary-200/50 group-hover:bg-primary-200 group-hover:text-primary-950">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-50 text-primary-800 ring-1 ring-primary-200/45 transition-colors duration-300 group-hover:bg-primary-200 group-hover:text-primary-950">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-800/70">
                      Group transportation
                    </p>
                  </div>

                  <h3 className="mt-4 text-lg font-bold tracking-[-0.02em] text-primary-950 sm:text-xl">
                    {group.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-6 text-primary-950/55">
                    {group.description}
                  </p>
                </div>

                <div className={premiumCardAccentBar} />
              </article>
            );
          })}
        </div>
      </Container>
    </HomeSection>
  );
}
