import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Users } from "lucide-react";

import {
  SectionHeading,
  SectionTitleAccent,
} from "@/components/shared/SectionHeading";
import { homeSections } from "@/data/navigation";

export function FinalCta() {
  return (
    <section
      id="get-started"
      className="relative w-full scroll-mt-[4.75rem] overflow-hidden border-t border-primary-800 bg-primary-950 sm:scroll-mt-24 mb-15"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 flex flex-col items-center gap-2 pt-5"
        aria-hidden
      >
        <span className="h-1 w-14 rounded-full bg-primary-200/40" />
        <span className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-primary-400/30 to-transparent" />
      </div>

      <div className="grid min-h-[520px] w-full lg:grid-cols-2">
        <div className="group relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-[560px]">
          <Image
            src="/images/why-section-cta.webp"
            alt="Go Coach charter bus"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/85 via-primary-950/20 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-primary-600/5" />

          <div className="absolute left-6 top-6 sm:left-10 sm:top-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-primary-950/35 px-4 py-2.5 backdrop-blur-md">
              <ShieldCheck className="h-4 w-4 text-primary-200" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                Safe & Reliable
              </span>
            </div>
          </div>

          <div className="absolute bottom-8 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary-200">
              Go Coach Charters
            </p>

            <h3 className="mt-3 max-w-xl text-2xl font-bold leading-[1.14] tracking-[-0.028em] text-white sm:text-3xl sm:leading-[1.12] lg:text-4xl xl:text-5xl">
              Comfortable Travel.
              <SectionTitleAccent inverted>
                Built Around Your Group.
              </SectionTitleAccent>
            </h3>
          </div>
        </div>

        <div className="relative flex items-center overflow-hidden bg-primary-950 px-6 py-14 sm:px-10 sm:py-16 lg:px-14 xl:px-20">
          <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-primary-600/10 blur-[110px]" />

          <div className="relative z-10 w-full max-w-xl">
            <SectionHeading
              tone="inverted"
              eyebrow="Ready to Get Started?"
              title={
                <>
                  Let&apos;s Get Your
                  <SectionTitleAccent inverted>Journey Moving.</SectionTitleAccent>
                </>
              }
              description="Start your quote today and our group travel team will help you find the right coach, schedule, and transportation solution for your group."
              className="max-w-none"
              headingClassName="max-w-lg text-3xl sm:text-4xl lg:text-5xl lg:leading-[1.1]"
            />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={homeSections.getStarted}
                className="group inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-primary-600 px-6 text-sm font-bold text-white shadow-[0_12px_35px_rgba(158,0,56,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-700 sm:w-auto"
              >
                <span>Get a Free Quote</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <a
                href="tel:+17802383866"
                className="group inline-flex h-12 w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.04] px-6 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-200/50 hover:bg-white/[0.08] sm:w-auto"
              >
                <Phone className="h-4 w-4 text-primary-200 transition-transform duration-300 group-hover:rotate-12" />
                <span>780-238-3866</span>
              </a>
            </div>

            <div className="my-8 h-px w-full bg-white/10" />

            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-200/10">
                  <ShieldCheck className="h-4 w-4 text-primary-200" />
                </span>
                <span className="text-xs font-semibold text-white/65">
                  Licensed & insured
                </span>
              </div>

              <span className="hidden h-5 w-px bg-white/15 sm:block" />

              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-200/10">
                  <Users className="h-4 w-4 text-primary-200" />
                </span>
                <span className="text-xs font-semibold text-white/65">
                  Professional group transportation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
