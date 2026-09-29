import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Container } from "@/components/shared/Container";

export function CommitmentSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-primary-200/35
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-primary-200/20
          blur-3xl
        "
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">

          {/* Content */}
          
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2">
              

              {/* <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-primary-800
                "
              >
                Our commitment
              </span> */}
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-xl
                text-4xl
                font-bold
                leading-[1.08]
                tracking-tight
                text-foreground
                sm:text-5xl
                lg:text-[54px]
                xl:text-[60px]
              "
            >
              Your journey deserves
              <span className="block text-primary-800">
                more than a ride.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-7
                text-muted-foreground
                sm:text-lg
                sm:leading-8
              "
            >
              We believe group transportation should feel simple from the
              moment you start planning. From comfortable vehicles and
              professional drivers to dependable schedules and thoughtful
              service, every detail is designed around your journey.
            </p>

            {/* Highlights */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-700" />
                <span className="text-sm font-medium text-foreground">
                  Comfortable group travel
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-700" />
                <span className="text-sm font-medium text-foreground">
                  Professional service
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-700" />
                <span className="text-sm font-medium text-foreground">
                  Reliable scheduling
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-700" />
                <span className="text-sm font-medium text-foreground">
                  Support when you need it
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-9">
              <a
                href="/about"
                className="
                  group
                  inline-flex
                  h-12
                  items-center
                  gap-3
                  rounded-full
                  bg-primary-800
                  px-6
                  text-sm
                  font-bold
                  text-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:bg-primary-900
                "
              >
                Learn more about us

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-white/15
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
           
          
            {/* Image container */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                bg-primary-900
                shadow-2xl
              "
            >
              <Image
                src="/hero/commitment.webp"
                alt="Charter bus ready for group travel"
                width={4900}
                height={4700}
                className="
                  aspect-[4/3]
                  object-cover
                  object-center
                "
              />

              {/* Image overlay */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/20
                  via-transparent
                  to-transparent
                "
              />
            </div>

            {/* Floating trust badge */}
            <div
              className="
                absolute
                -bottom-6
                right-5
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/70
                bg-white
                px-4
                py-3
                shadow-xl
                sm:right-8
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary-200
                  text-primary-900
                "
              >
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-bold text-foreground">
                  Travel with confidence
                </p>

                <p className="mt-0.5 text-xs text-muted-foreground">
                  Service built around your group
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}