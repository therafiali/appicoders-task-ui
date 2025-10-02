import Button from "../shared/Button";
import VerticalCarousel from "../shared/VerticalCarousel";
import bg from "../../assets/bg-theme.png";
import shot1 from "../../assets/image1.png";
import shot2 from "../../assets/image2.png";
import shot3 from "../../assets/image3.png";
import apple from "../../assets/apple.png";
import google from "../../assets/googleplay.png";

const CaseStudySections = () => {
  // Carousel items data
  const carouselItems = [
    { id: "1", image: shot1, alt: "App screen 1" },
    { id: "2", image: shot2, alt: "App screen 2" },
    { id: "3", image: shot3, alt: "App screen 3" },
  ];

  return (
    <section className="relative isolate overflow-hidden text-white">
      {/* Background image with blur effect */}
      <div
        className="absolute inset-0 -z-[1] bg-center bg-cover blur-sm"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="absolute inset-0 -z-[1] bg-black/50" />

      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] lg:py-24">
        {/* Left: Text content */}
        <div className="max-w-[640px]">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {["iOS Development", "Android Development", "UI/UX Design"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-white/95 px-3 py-1 text-xs font-semibold tracking-wide text-red-500 shadow-[0_6px_18px_rgba(0,0,0,0.25)]"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          <h2 className="mb-3 font-segoe text-[28px] font-bold leading-[34px] sm:text-[32px] sm:leading-[38px] md:text-5xl md:leading-[40px] my-16">
            Caviar - Order Food
            <br />
            Delivery
          </h2>

          <p className="mb-6 max-w-[560px] text-sm leading-6 text-white/85 md:text-xl tracking-wide my-8">
            Get food delivered from curated lists of local restaurants right at
            your fingertips with Caviar. Enjoy quality dining at home and make
            any night a special occasion.
          </p>

          {/* Store badges (lightweight, no extra assets) */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-[12px] font-bold text-[#1E232D] shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
            >
              <img src={apple} alt="apple store" className="w-40" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-[12px] font-bold text-[#1E232D] shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
            >
              <img src={google} alt="google play store" className="w-40" />
            </a>
          </div>

          <Button as="a" href="#case-study" className="text-xl font-semibold tracking-wider w-3/5">
            VIEW CASE STUDY
          </Button>
        </div>

        {/* Right: Vertical carousel phone previews */}
        <VerticalCarousel
          items={carouselItems}
          autoplayDelay={4000}
          showNavigation={true}
          showPagination={true}
        />
      </div>
    </section>
  );
};

export default CaseStudySections;
