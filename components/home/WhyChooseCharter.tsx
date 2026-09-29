import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Clock3,
  Headphones,
  MapPinned,
  ShieldCheck,
  Wallet,
} from "lucide-react";

import { Container } from "@/components/shared/Container";

const FEATURES = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Safety comes first",
    description:
      "Travel with a professionally maintained fleet designed with group safety and comfort in mind.",
  },
  {
    icon: BadgeCheck,
    number: "02",
    title: "Experienced drivers",
    description:
      "Professional drivers focused on safe, comfortable, and dependable group transportation.",
  },
  {
    icon: Wallet,
    number: "03",
    title: "Simple group pricing",
    description:
      "One charter, one vehicle, and one straightforward quote for your entire group.",
  },
  {
    icon: MapPinned,
    number: "04",
    title: "Flexible travel plans",
    description:
      "Choose pickup locations, stops, schedules, and routes that work for your group.",
  },
  {
    icon: Clock3,
    number: "05",
    title: "Reliable scheduling",
    description:
      "Keep your trip organized with dependable pickups and drop-offs built around your itinerary.",
  },
  {
    icon: Headphones,
    number: "06",
    title: "Dedicated support",
    description:
      "Get help before and during your trip from a team that keeps your journey moving smoothly.",
  },
];

export function WhyChooseCharter() {
  return (
    <section className="relative overflow-hidden bg-[#fff8fa] py-20 sm:py-24 lg:py-32">
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-48
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#f2b3c7]/30
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-48
          bottom-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-white
          blur-3xl
        "
      />

      <Container className="relative">
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#f2b3c7]
              bg-white/80
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.18em]
              text-primary-800
              shadow-sm
            "
          >
            Why travel with us
          </span>

          <h2
            className="
              mt-5
              text-4xl
              font-bold
              leading-[1.08]
              tracking-tight
              text-slate-950
              sm:text-5xl
              lg:text-6xl
            "
          >
            A better way to move
            <span className="block text-primary-800">
              your group.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
            "
          >
            From planning to arrival, we make group transportation
            comfortable, organized, and stress-free.
          </p>
        </div>

        {/* =========================================================
            FEATURE CARDS
        ========================================================= */}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {FEATURES.map(
            ({ icon: Icon, number, title, description }) => (
              <article
                key={number}
                className="
                  group
                  relative
                  flex
                  min-h-[330px]
                  flex-col
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#f2b3c7]/45
                  bg-gradient-to-b
                  from-white
                  via-white
                  to-[#f2b3c7]/15
                  p-7
                  shadow-[0_12px_45px_rgba(80,30,50,0.06)]
                  sm:p-8
                "
              >
                {/* Top accent */}
                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-[3px]
                    bg-gradient-to-r
                    from-[#f2b3c7]
                    via-primary-700
                    to-[#f2b3c7]
                  "
                />

                {/* Soft decorative glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-[#f2b3c7]/20
                    blur-3xl
                  "
                />

                {/* =================================================
                    TOP
                ================================================= */}

                <div className="relative flex items-start justify-between">
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-[#f2b3c7]/60
                      bg-[#f2b3c7]/30
                      text-primary-800
                    "
                  >
                    <Icon
                      className="h-6 w-6"
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* Number */}
                  <span
                    className="
                      select-none
                      text-5xl
                      font-black
                      leading-none
                      tracking-[-0.08em]
                      text-[#f2b3c7]/80
                    "
                  >
                    {number}
                  </span>
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="relative mt-8">
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-primary-700
                    "
                  >
                    Why choose us
                  </p>

                  <h3
                    className="
                      mt-2
                      text-xl
                      font-bold
                      tracking-tight
                      text-slate-950
                      sm:text-2xl
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-slate-500
                    "
                  >
                    {description}
                  </p>
                </div>

                {/* =================================================
                    FOOTER
                ================================================= */}

                <div className="mt-auto pt-7">
                  <div
                    className="
                      h-px
                      w-full
                      bg-gradient-to-r
                      from-[#f2b3c7]/60
                      via-slate-200
                      to-transparent
                    "
                  />

                  <div className="flex items-center justify-between pt-5">
                    <span
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-slate-400
                      "
                    >
                      Group transportation
                    </span>

                    <span
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#f2b3c7]/70
                        bg-white
                        text-primary-700
                      "
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>

  
      </Container>
    </section>
  );
}