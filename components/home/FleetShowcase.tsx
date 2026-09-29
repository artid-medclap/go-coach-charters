import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/shared/Container";
import { fleet } from "@/data/fleet";

export function FleetShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#fff8fa] py-20 sm:py-24 lg:py-28">
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-52
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#f2b3c7]/25
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-52
          bottom-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-white
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-[#f2b3c7]/10
          blur-3xl
        "
      />

      <Container className="relative">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#f2b3c7]/60
              bg-white
              px-4
              py-2
              shadow-sm
            "
          >
            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-[#f2b3c7]/30
              "
            >
              <Sparkles className="h-3.5 w-3.5 text-primary-900" />
            </span>

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-primary-900
              "
            >
              Our Fleet
            </span>
          </div>

          <h2
            className="
              mt-6
              text-4xl
              font-bold
              leading-[1.02]
              tracking-[-0.045em]
              text-slate-950
              sm:text-5xl
              lg:text-6xl
            "
          >
            Choose the right ride
            <span className="block text-primary-800">
              for your group.
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
            From small group trips to large events, choose a comfortable
            charter bus designed around your group and journey.
          </p>
        </div>

        {/* =========================================================
            FLEET GRID (UNIFIED 3D FLIP CARDS)
        ========================================================= */}

        <div className="relative mt-12 sm:mt-16 lg:mt-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {fleet.map((vehicle, index) => (
              <div
                key={vehicle.id}
                className="flip-card h-[480px] w-full"
              >
                {/* 3D Flip Inner Container */}
                <div className="flip-card-inner">
                  {/* =================================================
                      FRONT FACE
                  ================================================= */}
                  <article
                    className="
                      flip-card-front
                      flex
                      flex-col
                      overflow-hidden
                      border
                      border-white
                      bg-white
                      shadow-[0_18px_60px_rgba(60,20,40,0.09)]
                    "
                  >
                    {/* Image Container */}
                    <div className="relative h-[235px] w-full shrink-0 overflow-hidden bg-primary-950/5">
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="
                          object-cover
                          object-center
                          transition-transform
                          duration-700
                          ease-out
                        "
                      />

                      {/* Image overlay */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black/65
                          via-black/10
                          to-black/5
                        "
                      />

                      {/* Number badge */}
                      <div
                        className="
                          absolute
                          left-5
                          top-5
                          flex
                          h-9
                          min-w-9
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/30
                          bg-black/30
                          px-2.5
                          text-xs
                          font-bold
                          tracking-wider
                          text-white
                          shadow-lg
                          backdrop-blur-md
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Capacity badge */}
                      <div
                        className="
                          absolute
                          bottom-4
                          left-5
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-white/20
                          bg-black/40
                          px-3.5
                          py-1.5
                          text-xs
                          font-semibold
                          text-white
                          shadow-lg
                          backdrop-blur-md
                        "
                      >
                        <Users className="h-3.5 w-3.5 text-[#f2b3c7]" />
                        <span>
                          {vehicle.capacityMin}–{vehicle.capacityMax} passengers
                        </span>
                      </div>

                      {/* Flip Hint Icon */}
                      <div
                        className="
                          absolute
                          bottom-4
                          right-5
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/20
                          bg-black/35
                          text-white
                          backdrop-blur-md
                        "
                      >
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>

                    {/* Front Body Content */}
                    <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                      <div>
                        <p
                          className="
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.18em]
                            text-primary-700
                          "
                        >
                          Charter vehicle
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
                          {vehicle.name}
                        </h3>

                        <p
                          className="
                            mt-2
                            min-h-[44px]
                            line-clamp-2
                            text-sm
                            leading-6
                            text-slate-500
                          "
                        >
                          {vehicle.idealFor}
                        </p>
                      </div>

                      {/* Front Bottom Bar */}
                      <div
                        className="
                          mt-4
                          flex
                          items-center
                          justify-between
                          border-t
                          border-slate-100
                          pt-4
                        "
                      >
                        <span
                          className="
                            text-xs
                            font-semibold
                            text-slate-400
                          "
                        >
                          Hover to view onboard features
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
                            border-[#f2b3c7]
                            bg-[#f2b3c7]/20
                            text-primary-800
                          "
                        >
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </article>

                  {/* =================================================
                      BACK FACE
                  ================================================= */}
                  <article
                    className="
                      flip-card-back
                      flex
                      flex-col
                      justify-between
                      overflow-hidden
                      border
                      border-primary-700
                      bg-primary-900
                      p-6
                      text-white
                      shadow-[0_20px_70px_rgba(60,20,40,0.18)]
                      sm:p-7
                    "
                  >
                    {/* Decorative ambient glows */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-24
                        -top-24
                        h-64
                        w-64
                        rounded-full
                        border
                        border-white/10
                      "
                    />

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -bottom-28
                        -left-28
                        h-64
                        w-64
                        rounded-full
                        bg-[#f2b3c7]/10
                        blur-3xl
                      "
                    />

                    {/* Back Top Content */}
                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <span
                          className="
                            rounded-full
                            bg-white/10
                            px-3
                            py-1
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.18em]
                            text-[#f2b3c7]
                            backdrop-blur-md
                          "
                        >
                          {vehicle.name}
                        </span>

                        <span
                          className="
                            text-3xl
                            font-black
                            tracking-[-0.05em]
                            text-white/20
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3
                        className="
                          mt-3
                          text-2xl
                          font-bold
                          tracking-tight
                          text-white
                        "
                      >
                        What's onboard
                      </h3>

                      <p
                        className="
                          mt-1
                          text-xs
                          leading-5
                          text-white/60
                        "
                      >
                        Everything your group needs for a comfortable journey.
                      </p>

                      {/* Features List with Uniform Spacing */}
                      <ul className="mt-5 space-y-2.5">
                        {vehicle.features.map((feature) => (
                          <li
                            key={feature}
                            className="
                              flex
                              items-center
                              gap-3
                              text-xs
                              text-white/90
                              sm:text-sm
                            "
                          >
                            <span
                              className="
                                flex
                                h-6
                                w-6
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[#f2b3c7]/15
                                text-[#f2b3c7]
                              "
                            >
                              <CheckCircle2 className="h-3.5 w-3.5" />
                            </span>

                            <span className="truncate">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Back Bottom CTA */}
                    <div className="relative pt-4">
                      <Link
                        href="/buses"
                        className="
                          group/cta
                          flex
                          w-full
                          items-center
                          justify-center
                          gap-3
                          rounded-2xl
                          bg-white
                          py-3
                          text-sm
                          font-bold
                          text-primary-900
                          shadow-lg
                          transition-all
                          duration-200
                          hover:-translate-y-0.5
                          hover:bg-slate-50
                        "
                      >
                        <span>View vehicle details</span>

                        <span
                          className="
                            flex
                            h-6
                            w-6
                            items-center
                            justify-center
                            rounded-full
                            bg-[#f2b3c7]
                            text-primary-900
                          "
                        >
                          <ArrowRight
                            className="
                              h-3.5
                              w-3.5
                              transition-transform
                              duration-200
                              group-hover/cta:translate-x-0.5
                            "
                          />
                        </span>
                      </Link>
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}

        <div className="mt-12 flex justify-center sm:mt-14">
          <Link
            href="/buses"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-primary-900
              px-7
              py-3.5
              text-sm
              font-bold
              text-white
              shadow-[0_10px_30px_rgba(60,20,40,0.15)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-primary-950
            "
          >
            <span>Explore Our Fleet</span>

            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-[#f2b3c7]
                text-primary-900
              "
            >
              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-200
                  group-hover:translate-x-0.5
                "
              />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}