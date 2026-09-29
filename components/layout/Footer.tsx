import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { mainNav } from "@/data/navigation";
import { CONTACT_EMAIL, CONTACT_PHONE, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

const explore = mainNav.filter((item) => !item.children);
const locations = mainNav.find((item) => item.children)?.children ?? [];

const company = [
  { label: "About us", href: "/about" },
  { label: "Our Fleet", href: "/buses" },
  { label: "Tours", href: "/tours" },
  { label: "Offers", href: "/offers" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white/70">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <Container className="flex flex-col items-center justify-between gap-5 py-8 sm:flex-row">
          <div>
            <p className="text-lg font-bold text-white">Ready to book your charter?</p>
            <p className="mt-1 text-sm text-white/60">Get a free, no-obligation quote in minutes.</p>
          </div>
          <Link
            href="/booking"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-primary-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get a free quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Container>
      </div>

      <Container className="grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <span className="inline-flex items-center rounded-xl bg-white p-2 shadow-sm">
            <Logo className="h-8 w-auto" />
          </span>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">{SITE_TAGLINE}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Explore</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <Link href="/" className="text-sm text-white/60 transition-colors hover:text-white">
                Home
              </Link>
            </li>
            {explore.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/60 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            {locations.slice(0, 2).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/60 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Company</h3>
          <ul className="mt-4 space-y-3">
            {company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/60 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li>
              <a href={`tel:${CONTACT_PHONE}`} className="flex items-center gap-2 transition-colors hover:text-white">
                <Phone className="h-4 w-4 shrink-0" /> {CONTACT_PHONE}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0" /> {CONTACT_EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" /> Serving Calgary, Edmonton &amp; Alberta
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>&copy; {year} {SITE_NAME} Charters. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/about" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
