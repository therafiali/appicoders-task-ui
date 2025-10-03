import { ArrowLeft, ArrowRight } from "lucide-react";
import mobile from "../../assets/mobile-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#1E232D] text-white">
      {/* Red layered shapes (right side) */}
      <div className="pointer-events-none absolute hero-layer-1 z-0 mt-8" />
      <div className="pointer-events-none absolute hero-layer-2 z-0 mt-8" />

      <div className="mx-auto flex max-w-[1500px]  gap-10  py-16 lg:py-24 ">
        <div className=" relative z-[1]">
          <img src={mobile} alt="Mobile app mockup" className="" />
        </div>

        {/* Right: Content */}
        <div className="relative z-[2] max-w-[800px]  ">
          <h1 className="mb-4 text-white font-segoe hero-heading">
            Leading the Way in App
            <br />
            Development Innovation
          </h1>

          <p className="mb-8 text-white/90 font-segoe hero-desc my-6">
            We build Android & iOS Mobile Apps that cater all your business
            needs and take it on the next level.
          </p>

          <div className="flex items-center gap-6 ">
            <button className="btn-cta inline-flex items-center justify-center rounded-md btn-cta-bg px-10 py-6 text-white shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition-colors tracking-wide">
              GET A FREE QUOTE
            </button>

            {/* Carousel controls (visual only) */}
            <div className="ml-auto hidden items-center gap-3 md:flex">
              <button
                aria-label="Previous"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-white/10 text-white transition hover:bg-white/20"
              >
                <span className="text-lg">
                  <ArrowLeft />
                </span>
              </button>
              <button
                aria-label="Next"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-white/10 text-white transition hover:bg-white/20"
              >
                <span className="text-lg">
                  <ArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
