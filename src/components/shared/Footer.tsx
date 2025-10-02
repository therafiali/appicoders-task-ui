import logo from '../../assets/Logo-Footer.png'
import facebookImg from '../../assets/facebook.png'
import twitterImg from '../../assets/twitter.png'
import linkedinImg from '../../assets/linkedin.png'

const Footer = () => {
  return (
    <footer className="w-full text-gray-300 text-base md:text-lg">
      <div className="w-full h-[3px]" />

      <div className="bg-gradient-to-b from-[#20222D] to-[#262835]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <img src={logo} alt="Appicoders Inc." className="w-72 h-auto mb-6" />
              <h3 className="text-white text-3xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-1 text-base md:text-lg">
                <p>Tel: +1 (800) 826-8018</p>
                <p>Email: info@appicoders.com</p>
              </div>
              <div className="flex items-center gap-4 mt-5">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-[#1d1f2a] hover:bg-[#2b2e3e] flex items-center justify-center transition-colors"
                >
                  <img src={facebookImg} alt="Facebook" className="w-10 h-10" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-10 h-10 rounded-full bg-[#1d1f2a] hover:bg-[#2b2e3e] flex items-center justify-center transition-colors"
                >
                  <img src={twitterImg} alt="Twitter" className="w-10 h-10" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-[#1d1f2a] hover:bg-[#2b2e3e] flex items-center justify-center transition-colors"
                >
                  <img src={linkedinImg} alt="LinkedIn" className="w-10 h-10" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white text-3xl font-semibold mb-4">About</h3>
              <ul className="space-y-3 text-base md:text-lg">
                <li><a href="#" className="hover:text-white transition-colors">HOME</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ABOUT US</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CONTACT US</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-3xl font-semibold mb-4">Appicoders Services</h3>
              <ul className="space-y-3 text-base md:text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">»</span>
                  <span>iPhone Application Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">»</span>
                  <span>Android Application Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">»</span>
                  <span>Enterprise App Development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
            <p className="text-center text-xs tracking-wide text-gray-400">
              © 2025 APPICODERS. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer