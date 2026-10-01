import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import {
  contactPhone,
  footerCompany,
  footerExplore,
  homeSections,
} from "@/data/navigation";
import { CONTACT_EMAIL, CONTACT_PHONE, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-primary-950 text-white/70">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 flex flex-col items-center gap-2 pt-5"
        aria-hidden
      >
        <span className="h-1 w-14 rounded-full bg-primary-200/35" />
        <span className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-primary-400/25 to-transparent" />
      </div>

      {/* CTA band */}
      <div className="border-b border-white/10">
        <Container className="flex flex-col items-center justify-between gap-5 py-10 sm:flex-row sm:py-12">
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold tracking-tight text-white sm:text-xl">
              Ready to book your charter?
            </p>
            <p className="mt-1 text-sm text-white/55">
              Get a free, no-obligation quote — we&apos;ll help plan your group trip.
            </p>
          </div>
          <Link
            href={homeSections.getStarted}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-bold text-white shadow-[0_12px_32px_rgba(158,0,56,0.35)] transition-all hover:bg-primary-700 hover:shadow-[0_16px_40px_rgba(158,0,56,0.4)]"
          >
            Get a free quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Container>
      </div>

      <Container className="grid gap-10 py-12 sm:py-14 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.15fr] lg:gap-12">
        <div>
          <span className="inline-flex rounded-2xl bg-white px-3 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.2)] ring-1 ring-white/10">
            <Logo className="h-9 w-auto" />
          </span>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">
            {SITE_TAGLINE}
          </p>
          <Link
            href={homeSections.getStarted}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-200 transition-colors hover:text-white"
          >
            Start your quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-200">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5">
            {footerExplore.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-200">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5">
            {footerCompany.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-200">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={contactPhone.href}
                className="flex items-center gap-2.5 text-white/55 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-primary-200 ring-1 ring-white/10">
                  <Phone className="h-4 w-4" />
                </span>
                {CONTACT_PHONE}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2.5 text-white/55 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-primary-200 ring-1 ring-white/10">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="break-all">{CONTACT_EMAIL}</span>
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-white/55">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-primary-200 ring-1 ring-white/10">
                <MapPin className="h-4 w-4" />
              </span>
              <span className="pt-1.5">Serving Calgary, Edmonton &amp; Alberta</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-4 text-xs text-white/45 sm:flex-row">
          <p>
            &copy; {year} {SITE_NAME} Charters. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href={homeSections.commitment}
              className="transition-colors hover:text-white/80"
            >
              Privacy Policy
            </Link>
            <Link
              href={homeSections.commitment}
              className="transition-colors hover:text-white/80"
            >
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
