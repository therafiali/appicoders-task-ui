import HeaderItems from "../../data/navbar-items";
import logo from "../../assets/logo.png";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-red-brand text-white">
      <div className="mx-auto  xl:px-24">
        <div className="flex h-32 items-center justify-between">
          {/* Logo */}
          <a href="#" className="shrink-0 inline-flex items-center">
            <img src={logo} alt="Appicoders Inc." className="h-10 md:h-20 w-auto" />
          </a>

          <div className="md:flex hidden  md:flex-col  items-end justify-end gap-6 flex-wrap ">
            {/* Nav items */}
            <nav aria-label="Primary" className="hidden md:block">
              <ul className="flex items-center gap-6">
                {HeaderItems.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="inline-block px-1 py-2 text-white hover:text-white/90 transition-opacity hover:opacity-80 font-semibold xl:text-xl  tracking-wide"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Phone CTA */}
            <a
              href="tel:+18008268018"
              className="inline-flex items-center gap-2 rounded-full border-[3px] border-white/80 px-4 py-1 text-xs font-semibold text-white hover:bg-white/10"
            >
              <Phone size={24} />
              <span className="xl:text-xl font-semibold">+1 (800) 826-8018</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
