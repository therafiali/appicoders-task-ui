import Button from "../shared/Button";

const PromoHero = () => {
  return (
    <section className="relative overflow-hidden bg-white text-[#1E232D]">
      {/* Red layered shapes (bottom-right) */}
      {/* <div className="pointer-events-none absolute right-[-12%] top-[-20%] h-[160%] w-[70%] rotate-[16deg] rounded-[64px] bg-[#E81626]" />
      <div className="pointer-events-none absolute right-[-20%] top-[5%] h-[130%] w-[70%] rotate-[16deg] rounded-[64px] opacity-90 shadow-[0_40px_120px_rgba(0,0,0,0.35)]"
           style={{ background: "linear-gradient(180deg,#FF3846 0%,#C10F1C 100%)" }} /> */}

      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:py-28">
        {/* Left: Big headline like the mock */}
        <div className="max-w-[680px]">
          <h1 className="mb-6 font-segoe text-[56px] leading-[62px] sm:text-[64px] sm:leading-[68px] md:text-[72px] md:leading-[76px] lg:text-5xl lg:leading-[82px] font-bold">
            <span className="text-[#E81626] ">Appicoders</span> – #1. Mobile
            <br />
            App & Web Development
            <br />
            Company in USA
          </h1>
        </div>

        {/* Right: Copy + CTA */}
        <div className="max-w-[620px]">
          <p className="mb-8 font-segoe text-[20px] leading-8 text-[#1E232D]/90 md:text-[22px]">
            Welcome to Appicoders, your trusted partner for expert mobile app and web development. With over 10+ years of experience, we specialize in designing, developing, and marketing cutting-edge solutions for all major mobile platforms, including Android, iOS, and Windows.
          </p>

          <Button as="a" href="#read-more" className="text-[18px]">
            READ MORE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromoHero;


