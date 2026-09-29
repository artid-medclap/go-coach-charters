import Image from "next/image";

const TRUST_LOGOS = [
  {
    src: "/images/x.webp",
    alt: "X",
  },
  {
    src: "/images/safty.webp",
    alt: "Safety",
  },
  {
    src: "/images/rocky mountain.webp",
    alt: "Rocky Mountain Seniors Ski Club",
  },
  {
    src: "/images/circle.webp",
    alt: "Circle",
  },
  {
    src: "/images/qti.webp",
    alt: "QTI",
  },
  {
    src: "/images/angels.webp",
    alt: "Angels Scottish",
  },
  {
    src: "/images/atm.webp",
    alt: "ATB",
  },
];

function LogoSet({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      className="
        flex shrink-0 items-center
        gap-10 pr-10
        sm:gap-16 sm:pr-16  
        p-5
        lg:gap-20 lg:pr-20
      "
    >
      {TRUST_LOGOS.map((logo, index) => (
        <div
          key={`${duplicate ? "duplicate" : "original"}-${logo.src}-${index}`}
          className="
            flex h-24 w-[180px]
            shrink-0 items-center justify-center
            sm:h-28 sm:w-[210px]
            lg:h-32 lg:w-[240px]
          "
        >
          <Image
            src={logo.src}
            alt={duplicate ? "" : logo.alt}
            aria-hidden={duplicate}
            width={240}
            height={130}
            className="
              h-auto
              max-h-24
              w-auto
              max-w-[180px]
              object-contain
              sm:max-h-28
              sm:max-w-[210px]
              lg:max-h-32
              lg:max-w-[240px]
            "
          />
        </div>
      ))}
    </div>
  );
}

export function TrustBar() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        border-y border-border/50
        bg-white
        py-8
        sm:py-10
        lg:py-12
      "
    >
      {/* Horizontal marquee */}
      <div className="flex w-max animate-trust-marquee">
        <LogoSet />
        <LogoSet duplicate />
      </div>
    </section>
  );
}