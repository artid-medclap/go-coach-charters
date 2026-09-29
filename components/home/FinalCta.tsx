import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/shared/Container";

export function FinalCta() {
  return (
    <section className="relative w-full overflow-hidden bg-primary-900 py-20 sm:py-24 lg:py-28">
      {/* =========================================================
          FULL-WIDTH BACKGROUND IMAGE & OVERLAYS
      ========================================================= */}
      <div className="absolute inset-0">
        <Image
          src="/images/why-section-cta.webp"
          alt="Go Coach charter trip"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r from-primary-950 via-primary-900/90 to-primary-800/75
        "
      />

      {/* Decorative ambient glows */}
      <div className="pointer-events-none absolute -right-20 -top-40 h-[450px] w-[450px] rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-[400px] w-[400px] rounded-full bg-primary-300/20 blur-3xl" />

      {/* =========================================================
          CONTENT CONTAINER
      ========================================================= */}
      <Container className="relative z-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center lg:gap-12">
          {/* Left Text */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary-200" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                Ready to get started?
              </span>
            </div>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s get your journey moving.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
              Start your quote today and one of our group travel experts will get back to you with custom options and transparent pricing.
            </p>
          </div>

          {/* Right Button */}
          <div className="shrink-0">
            <Link
              href="/booking"
              className="
                group inline-flex h-14 items-center justify-center gap-4
                rounded-full bg-white px-8 text-sm font-bold text-slate-950
                shadow-xl transition-all duration-300
                hover:-translate-y-0.5 hover:bg-white hover:shadow-2xl sm:px-10
              "
            >
              <span>Start your quote</span>
              <span
                className="
                  flex h-8 w-8 items-center justify-center rounded-full
                  bg-primary-100 text-primary-700 transition-transform
                  duration-300 group-hover:translate-x-1
                "
              >
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
