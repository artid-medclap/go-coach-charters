import Image from "next/image";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

import { Container } from "@/components/shared/Container";

const SERVICES = [
  {
    image: "/services/charters.webp",
    title: "Charter Bus Rentals",
    description:
      "Comfortable group transportation for events, tours, school trips, and private group travel.",
  },
  {
    image: "/services/corporate.webp",
    title: "Corporate Transportation",
    description:
      "Reliable transportation for meetings, conferences, airport transfers, site visits, and corporate events.",
  },
  {
    image: "/services/intercity.webp",
    title: "Intercity Transfers",
    description:
      "Travel between cities across Alberta, British Columbia, Saskatchewan, and beyond with ease.",
  },
  {
    image: "/services/shuttle.webp",
    title: "Shuttle Services",
    description:
      "Flexible shuttle transportation for weddings, events, hotels, venues, and large group gatherings.",
  },
  {
    image: "/services/sports.webp",
    title: "Sports Events",
    description:
      "Keep teams, fans, and groups together with dependable transportation for tournaments and sporting events.",
  },
  {
    image: "/services/private-tours.webp",
    title: "Private Tours",
    description:
      "Explore destinations at your own pace with comfortable private group transportation.",
  },
];

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#fff9fb] py-20 sm:py-24 lg:py-28">
     
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-[#f2b3c7]/20 blur-[120px]" />

        <div className="absolute -right-48 top-[40%] h-[500px] w-[500px] rounded-full bg-[#f2b3c7]/15 blur-[140px]" />

        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-white blur-[100px]" />
      </div>

      <Container className="relative">
  {/* =======================================================
    SECTION HEADER
======================================================= */}
<div className="flex flex-col items-center text-center">
  {/* Label */}
  <div className="inline-flex items-center gap-2 rounded-full border border-[#f2b3c7]/50 bg-white px-4 py-2 shadow-sm">
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f2b3c7]/30">
      <Sparkles className="h-3.5 w-3.5 text-primary-900" />
    </span>

    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-900">
      Our services
    </span>
  </div>

  {/* Heading */}
  <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-primary-950 sm:text-5xl lg:text-6xl xl:text-7xl">
    Built for
    <span className="text-primary-800"> your journey.</span>
  </h2>

  {/* Description */}
  <p className="mt-6 max-w-2xl text-base leading-7 text-primary-950/55 sm:text-lg">
    From corporate travel to private tours, we make group transportation
    comfortable, organized, and dependable.
  </p>
</div>

        {/* =======================================================
            SERVICES GRID
        ======================================================= */}
        <div className="mt-14 grid gap-5 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <article
              key={service.title}
              className="
                group relative flex min-h-[500px] flex-col overflow-hidden
                rounded-[30px]
                border border-primary-200/50
                bg-white
                shadow-[0_12px_45px_rgba(31,20,27,0.06)]
                transition-all duration-500
                hover:-translate-y-1
                hover:shadow-[0_24px_65px_rgba(31,20,27,0.11)]
              "
            >
              {/* =================================================
                  IMAGE
              ================================================= */}
              <div className="relative h-[270px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                  className="
                    object-cover
                    transition-transform duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:scale-[1.06]
                  "
                />

                {/* Image depth overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/65 via-primary-950/5 to-transparent" />

                {/* Top glass row */}
                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-xs font-bold text-white shadow-lg backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="rounded-full border border-white/25 bg-black/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                    Group travel
                  </div>
                </div>

                {/* Image title */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="mb-2 h-px w-10 bg-[#f2b3c7]" />

                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/65">
                    Transportation service
                  </p>
                </div>
              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="max-w-[250px] text-[22px] font-bold leading-tight tracking-[-0.025em] text-primary-950">
                    {service.title}
                  </h3>

                  <div
                    className="
                      flex h-11 w-11 shrink-0 items-center justify-center
                      rounded-full border border-primary-200/60
                      bg-[#fff9fb]
                      text-primary-900
                      transition-all duration-300
                      group-hover:border-primary-200
                      group-hover:bg-primary-200
                    "
                  >
                    <ArrowUpRight className="h-[18px] w-[18px]" />
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-primary-950/60">
                  {service.description}
                </p>

                {/* Bottom information */}
                <div className="mt-auto pt-7">
                  <div className="mb-5 h-px w-full bg-primary-950/8" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f2b3c7]/35">
                        <Check className="h-3.5 w-3.5 text-primary-900" />
                      </span>

                      <span className="text-xs font-semibold text-primary-950/55">
                        Comfortable & dependable
                      </span>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary-950/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Premium bottom accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary-800 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

     
       
      </Container>
    </section>
  );
}