import Image from "next/image";

import { Container } from "@/components/shared/Container";

const TRUST_LOGOS = [
  { src: "/images/x.webp", alt: "X" },
  { src: "/images/safty.webp", alt: "Safety" },
  { src: "/images/rocky mountain.webp", alt: "Rocky Mountain Seniors Ski Club" },
  { src: "/images/circle.webp", alt: "Circle" },
  { src: "/images/qti.webp", alt: "QTI" },
  { src: "/images/angels.webp", alt: "Angels Scottish" },
  { src: "/images/atm.webp", alt: "ATB" },
];

function LogoSet({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12 lg:gap-14 lg:pr-14">
      {TRUST_LOGOS.map((logo, index) => (
        <div
          key={`${duplicate ? "duplicate" : "original"}-${logo.src}-${index}`}
          className="flex h-14 w-[130px] shrink-0 items-center justify-center sm:h-16 sm:w-[150px] lg:h-[4.25rem] lg:w-[165px]"
        >
          <Image
            src={logo.src}
            alt={duplicate ? "" : logo.alt}
            aria-hidden={duplicate}
            width={240}
            height={130}
            className="h-auto max-h-14 w-auto max-w-[130px] object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 sm:max-h-16 sm:max-w-[150px] lg:max-h-[4.25rem] lg:max-w-[165px]"
          />
        </div>
      ))}
    </div>
  );
}

export function TrustBar() {
  return (
    <section
      className="relative w-full overflow-hidden border-y border-primary-200/45 bg-gradient-to-b from-accent-50/90 via-primary-50/40 to-accent-50/90 py-4 sm:py-5"
      aria-label="Organizations that trust Go Coach Charters"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-300/35 to-transparent"
        aria-hidden
      />

      <Container className="relative mb-3 flex items-center justify-center gap-2.5 sm:mb-3.5">
        <span className="hidden h-px w-6 bg-primary-200/80 sm:block" aria-hidden />
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-800/65">
          Trusted by groups across Alberta
        </p>
        <span className="hidden h-px w-6 bg-primary-200/80 sm:block" aria-hidden />
      </Container>

      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-accent-50/95 to-transparent sm:w-20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-accent-50/95 to-transparent sm:w-20"
          aria-hidden
        />

        <div className="flex w-max animate-trust-marquee items-center">
          <LogoSet />
          <LogoSet duplicate />
        </div>
      </div>
    </section>
  );
}
