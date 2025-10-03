import brain from "../../assets/brain.png";
import team from "../../assets/creative-team.png";
import creditCard from "../../assets/credit-card.png";
import { whyChooseUsItems } from "../../data/why-choose-us";

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-gray-100 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            Why Choose Us?
          </h2>
          <p className="mt-3 text-sm md:text-base font-medium text-gray-600 max-w-3xl mx-auto">
            With our unique approach and cost-effective solutions, your business
            will prosper because quality is the top priority for us.
          </p>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center">
          {whyChooseUsItems.map((item) => {
            const iconMap = { brain, team, creditCard } as const;
            const iconSrc = iconMap[item.icon];

            return (
              <div key={item.id} className="relative mx-auto group">
                <div className="h-64 w-64 lg:h-72 lg:w-72  xl:h-96 xl:w-96 gap-4  rounded-full bg-gray-100 shadow-sm ring-1 ring-gray-200/70 flex flex-col items-center justify-center text-center px-7 transition-colors duration-300 group-hover:bg-white group-hover:shadow-xl group-hover:ring-gray-200">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-md bg-gray-300 flex items-center justify-center shadow-sm transition-colors duration-300 group-hover:bg-red-600 group-hover:shadow-md">
                    <img
                      src={iconSrc}
                      alt={`${item.title} icon`}
                      className="h-6 w-6 md:h-7 md:w-7 object-contain transition group-hover:invert group-hover:brightness-0 group-hover:mix-blend-screen"
                    />
                  </div>
                  <h3 className="mt-4 text-sm md:text-base font-semibold text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs md:text-sm leading-snug text-gray-500 transition-colors duration-300 group-hover:text-gray-600">
                    {item.description}
                  </p>
                </div>
                <div className="absolute inset-0 -z-10 m-auto h-72 w-72 md:h-80 md:w-80 rounded-full bg-gray-200/40" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
