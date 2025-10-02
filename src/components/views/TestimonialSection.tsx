import quoteLeft from "../../assets/quote-left-1.png";
import girl from "../../assets/girl.png";
import bgImage from "../../assets/testimonial-image-bg.png";

const TestimonialSection = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat border border-[#666666]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* dark overlay for background readability */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative mx-4 my-10 md:mx-12 md:my-32">
        {/* 🔴 red panel background */}
        <div className="testimonial-bg-custom absolute inset-0 rounded-xl z-0" />

        {/* content sits above red bg */}
        <div className="relative z-10">
          {/* quote badge top-left */}
          <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-white shadow-lg grid place-items-center">
            <img src={quoteLeft} alt="quote" className="h-16 w-16 rotate-180" />
          </div>

          {/* grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 px-6 sm:px-10 md:px-12 lg:px-16 py-12">
            {/* left copy */}
            <div className="text-white mt-20">
              <p className="uppercase tracking-[0.2em] text-xs sm:text-sm md:text-2xl font-semibold/relaxed opacity-90">
                Client Testimonials
              </p>
              <h2 className="mt-3 font-extrabold leading-[1.05] text-3xl sm:text-4xl md:text-6xl tracking-wider py-8">
                What our clients
                <br className="hidden sm:block" /> are Saying.
              </h2>
            </div>

            {/* right card */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-2xl rounded-xl bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4 my-12">
                    <div className="relative">
                      <img
                        src={girl}
                        alt="client"
                        className="h-14 w-14 sm:h-16 sm:w-16 md:h-32 md:w-32 rounded-full object-cover"
                      />
                      <span className="absolute -bottom-5 left-5 grid h-10 w-10 place-items-center rounded-full bg-[#E01923]">
                        <img
                          src={quoteLeft}
                          alt="quote mark"
                          className="h-6 w-6 invert-[1] brightness-0 rotate-180"
                        />
                      </span>
                    </div>
                    <div>
                      <p className="text-sm md:text-2xl text-black font-extrabold">
                        Scarlett Lawrence
                      </p>
                      <span className="inline-block h-1.5 w-32 rounded-full bg-[#E01923]" />
                    </div>
                  </div>

                  <p className="mt-5 text-[13px] sm:text-sm md:text-lg font-semibold leading-6 text-gray-700 my-12">
                    Thank you Team Appignite you guys have a great understanding
                    of what’s current, and get things done very quickly compared
                    to others. Reliable communication and qualitative
                    suggestions on useful functionality during the planning
                    stage made for a final product that surpassed initial
                    expectations. Their Project management is amazing. Tight
                    deadlines were reliably met without issue. Our strong
                    recommendation if you’re looking for quality work.
                  </p>

                  {/* indicators */}
                  <div className="mt-6 flex items-center justify-end gap-2">
                    <span className="inline-block h-1.5 w-6 rounded-full bg-[#E01923]" />
                    <span className="inline-block h-1.5 w-3 rounded-full bg-gray-300" />
                    <span className="inline-block h-1.5 w-3 rounded-full bg-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default TestimonialSection;
