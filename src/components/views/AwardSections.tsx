import a1 from "../../assets/a1.png";
import a2 from "../../assets/a2.png";
import a3 from "../../assets/a3.png";
import a4 from "../../assets/a4.png";

const AwardSections = () => {
  const awards = [
    { src: a1, alt: "Award 1", title: "Top Mobile App", subtitle: "Development Company" },
    { src: a2, alt: "Award 2", title: "Top Developers", subtitle: "2020 USA" },
    { src: a3, alt: "Award 3", title: "React Native", subtitle: "Developers 2019" },
    { src: a4, alt: "Award 4", title: "Top AppFutura", subtitle: "Companies" },
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full  px-4 py-10 sm:py-12 md:py-16">
        <h2 className="text-center text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl lg:text-6xl md:font-extrabold my-8">
          Awards and Recognitions
        </h2>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 my-32">
          {awards.map((award) => (
            <div
              key={award.alt}
              className="relative group flex items-center justify-center rounded-full shadow-sm transition-shadow duration-300 hover:shadow-lg w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 "
            >
              <img
                src={award.src}
                alt={award.alt}
                className="h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center rounded-full bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="px-4 text-center">
                  <p className="text-sm font-semibold text-white sm:text-base">{award.title}</p>
                  <p className="mt-1 text-xs text-gray-200 sm:text-sm">{award.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardSections;
