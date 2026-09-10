import Image from "next/image";
import React from "react";

const ReviewSection = () => {
  const testimonials = [
    {
      quote:
        "Managing our multi-cloud architecture used to keep three full-time DevOps engineers tied up. Since deploying AuraSync, cross-region replication latency dropped by over 80%.",
      name: "Tanvir Ahmed",
      role: "Lead Architect, Pathao Labs",
      avatar: "https://i.pravatar.cc/100?Image=12",
    },
    {
      quote:
        "The Zero-Knowledge encryption engine is sensational. We operate in strict fintech compliance, and AuraSync passed our external audit effortlessly.",
      name: "Sarah Jenkins",
      role: "VP Engineering, PayVortex Global",
      avatar: "https://i.pravatar.cc/100?Image=47",
    },
    {
      quote:
        "The live AI self-healing pipelines are extraordinary. Midnight database disconnects resolve autonomously without alerting on-call engineers.",
      name: "Mahmudul Hasan",
      role: "CTO, HyperStream Cloud",
      avatar: "https://i.pravatar.cc/100?Image=11",
    },
  ];
  return (
    <div>
      {" "}
      <main className=" bg-[#080d19] px-6 py-20 text-white">
        <section className="mx-auto w-11/12">
          {/* Header */}
          <div className="mb-14 text-center">
            <div className="mb-4 inline-flex rounded-full border border-purple-500/20 bg-[#211433] px-3 py-1">
              <span className="text-[11px] font-bold uppercase tracking-wide text-[#bd8af4]">
                Customer Stories
              </span>
            </div>

            <h1 className="max-sm:text-xl text-3xl font-bold tracking-[-0.03em] text-[#e5ebf5] md:text-[34px]">
              Trusted by Developers &amp; CTOs Worldwide
            </h1>

            <p className="mt-3 text-sm text-[#91a0b5] md:text-[15px]">
              See how engineering leaders transformed their multi-cloud
              operational backbone with AuraSync.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="flex h-full flex-col rounded-[15px] border border-white/[0.025] bg-[#111827] p-7 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
              >
                {/* Stars */}
                <div
                  className="mb-4 flex gap-1 text-lg leading-none text-[#55c8f5]"
                  aria-label="5 out of 5 stars"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[13px] font-medium italic leading-[1.6] text-[#d5dce7]">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Person */}
                <div className="mt-auto flex items-center gap-3 pt-8">
                  <Image
                    loading="eager"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10"
                  />

                  <div>
                    <h2 className="text-[13px] font-bold text-[#dce3ed]">
                      {testimonial.name}
                    </h2>

                    <p className="mt-[2px] text-[11px] text-[#8996a9]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ReviewSection;
