import { ArrowUpRight, Quote, Star, Verified } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { reviews } from "@/data/reviews";

export function CustomerReviews() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f7] py-20 sm:py-24 lg:py-28">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#f2b3c7]/10 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#f2b3c7]/10 blur-[120px]" />
      </div>

      <Container className="relative">
        {/* =======================================================
            HEADER
        ======================================================= */}
  
<div className="flex flex-col items-center text-center">
  {/* Eyebrow */}
  <div className="inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-white px-4 py-2 shadow-sm">
    <span className="h-2 w-2 rounded-full bg-primary-800" />

    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-900">
      Customer reviews
    </span>
  </div>

  {/* Heading */}
  <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-primary-950 sm:text-5xl lg:text-6xl">
    Real journeys.
    <span className="block text-primary-800">
      Real experiences.
    </span>
  </h2>

  {/* Description */}
  <p className="mt-6 max-w-2xl text-base leading-7 text-primary-950/55 sm:text-lg">
    See why groups choose us for comfortable rides, professional
    service, and dependable transportation from start to finish.
  </p>
</div>
   

         

         

        {/* =======================================================
            REVIEWS
        ======================================================= */}
        <div className="mt-14 grid gap-5 sm:mt-16 lg:grid-cols-3">
          {reviews.map((review, index) => {
            const isFeatured = index === 0;

            return (
              <figure
                key={review.id}
                className={`
                  group relative flex min-h-[410px] flex-col overflow-hidden
                  rounded-[30px]
                  border
                  p-7
                  transition-all duration-500
                  hover:-translate-y-1
                  sm:p-8
                  ${
                    isFeatured
                      ? "border-[#e8ccd5] bg-[#fff1f5] shadow-[0_15px_50px_rgba(91,49,65,0.08)] lg:col-span-2"
                      : "border-primary-200/60 bg-white shadow-[0_10px_40px_rgba(31,20,27,0.045)] hover:shadow-[0_18px_50px_rgba(31,20,27,0.08)]"
                  }
                `}
              >
                {/* =================================================
                    DECORATIVE QUOTE
                ================================================= */}
                <div
                  className={`
                    pointer-events-none absolute right-7 top-5
                    text-[100px] font-serif leading-none
                    ${
                      isFeatured
                        ? "text-[#e8c8d3]/70"
                        : "text-primary-100"
                    }
                  `}
                >
                  “
                </div>

                {/* =================================================
                    TOP ROW
                ================================================= */}
                <div className="relative flex items-center justify-between">
                  <div
                    className={`
                      flex h-11 w-11 items-center justify-center rounded-full
                      ${
                        isFeatured
                          ? "bg-white text-primary-800 shadow-sm"
                          : "bg-[#fff4f7] text-primary-800"
                      }
                    `}
                  >
                    <Quote className="h-5 w-5" />
                  </div>

                  <span
                    className={`
                      rounded-full px-3 py-1.5 text-[10px] font-bold
                      uppercase tracking-[0.16em]
                      ${
                        isFeatured
                          ? "bg-white/70 text-primary-900/45"
                          : "bg-[#faf8f7] text-primary-950/35"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* =================================================
                    QUOTE
                ================================================= */}
                <blockquote
                  className={`
                    relative z-10 mt-8 flex-1
                    ${
                      isFeatured
                        ? "max-w-3xl text-xl font-semibold leading-8 tracking-[-0.02em] text-primary-950 sm:text-2xl sm:leading-9"
                        : "text-base font-medium leading-7 text-primary-950/65"
                    }
                  `}
                >
                  &ldquo;{review.quote}&rdquo;
                </blockquote>

                {/* =================================================
                    RATING
                ================================================= */}
                <div className="relative mt-7 flex items-center justify-between">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className={`
                          h-4 w-4
                          ${
                            starIndex < Math.round(review.rating)
                              ? "fill-[#d98ca7] text-[#d98ca7]"
                              : "text-primary-200"
                          }
                        `}
                      />
                    ))}
                  </div>

                  {isFeatured && (
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-primary-950/35">
                      <Verified className="h-3.5 w-3.5" />
                      Verified experience
                    </div>
                  )}
                </div>

                {/* =================================================
                    AUTHOR
                ================================================= */}
                <figcaption
                  className={`
                    relative mt-6 flex items-center justify-between
                    border-t pt-6
                    ${
                      isFeatured
                        ? "border-primary-950/10"
                        : "border-primary-950/8"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`
                        flex h-11 w-11 shrink-0 items-center justify-center
                        rounded-full text-sm font-bold
                        ${
                          isFeatured
                            ? "bg-white text-primary-800 shadow-sm"
                            : "bg-[#fff4f7] text-primary-800"
                        }
                      `}
                    >
                      {review.initials}
                    </span>

                    <div>
                      <p className="text-sm font-bold text-primary-950">
                        {review.name}
                      </p>

                      <p className="mt-0.5 text-xs text-primary-950/40">
                        {review.role}, {review.location}
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      flex h-9 w-9 items-center justify-center rounded-full
                      bg-white text-primary-950/25
                      shadow-sm
                      transition-all duration-300
                      group-hover:rotate-45
                    "
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </figcaption>

                {/* Bottom pink line */}
                <div
                  className="
                    absolute bottom-0 left-7 right-7 h-px
                    origin-left scale-x-0
                    bg-primary-200
                    transition-transform duration-500
                    group-hover:scale-x-100
                  "
                />
              </figure>
            );
          })}
        </div>

        {/* =======================================================
            BOTTOM TRUST AREA
        ======================================================= */}
        <div className="mt-6 grid overflow-hidden rounded-[28px] border border-primary-200/60 bg-white sm:grid-cols-3">
          <div className="flex items-center gap-4 px-6 py-5 sm:px-7">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff1f5]">
              <Star className="h-4 w-4 fill-primary-800 text-primary-800" />
            </span>

            <div>
              <p className="text-sm font-bold text-primary-950">
                4.9 / 5 rating
              </p>

              <p className="mt-0.5 text-xs text-primary-950/40">
                Highly rated service
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-t border-primary-950/8 px-6 py-5 sm:border-l sm:border-t-0 sm:px-7">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff1f5]">
              <Verified className="h-4 w-4 text-primary-800" />
            </span>

            <div>
              <p className="text-sm font-bold text-primary-950">
                Professional service
              </p>

              <p className="mt-0.5 text-xs text-primary-950/40">
                Built around your group
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-t border-primary-950/8 px-6 py-5 sm:border-l sm:border-t-0 sm:px-7">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff1f5]">
              <Quote className="h-4 w-4 text-primary-800" />
            </span>

            <div>
              <p className="text-sm font-bold text-primary-950">
                500+ groups served
              </p>

              <p className="mt-0.5 text-xs text-primary-950/40">
                Trusted group travel
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}