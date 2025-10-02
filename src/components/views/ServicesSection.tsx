import { BrainCircuit, Boxes, Code2, Rocket, ScanFace, Smartphone } from 'lucide-react'
import laptop from '../../assets/laptop.png'

const services = [
  {
    icon: Smartphone,
    title: 'Custom Mobile Applications',
    desc: 'iOS, Android and Wearable Apps',
  },
  {
    icon: BrainCircuit,
    title: 'Artificial Intelligence',
    desc: 'Innovative AI & ML Solutions',
  },
  {
    icon: Code2,
    title: 'Custom Web Development',
    desc: 'Robust Webs, Progressive Web Apps',
  },
  {
    icon: Boxes,
    title: 'Blockchain Development',
    desc: 'Custom Blockchain Solutions',
  },
  {
    icon: ScanFace,
    title: 'Augmented Reality',
    desc: 'Futuristic AR Apps',
  },
  {
    icon: Rocket,
    title: 'MVP Development',
    desc: 'For Startups & Entrepreneurs',
  },
]

const ServicesSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#E81626] text-white">
      {/* Layered background to mimic mockup curvature and depth (contained to this section) */}
      <div className="pointer-events-none absolute right-[-12%] top-[-28%] h-[160%] w-[72%] rotate-[16deg] rounded-[64px] bg-[#E81626] opacity-90" />
      <div className="pointer-events-none absolute right-[-20%] top-[2%] h-[130%] w-[70%] rotate-[16deg] rounded-[64px] bg-[linear-gradient(180deg,#FF3846_0%,#C10F1C_100%)] shadow-[0_40px_120px_rgba(0,0,0,.35)]" />

      <div className="relative z-[1] mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 lg:py-24">
        {/* Left: Heading + Services */}
        <div>
          <h2 className="mb-2 text-4xl font-extrabold leading-tight md:text-5xl">Our Services</h2>
          <p className="mb-10 text-white/90 text-lg md:text-xl">Get to know about what we’re good at.</p>

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-[#E81626] shadow-[0_10px_24px_rgba(0,0,0,0.25)]">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-extrabold leading-tight md:text-[17px]">{title}</h3>
                  <p className="text-sm text-white/80">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Illustration */}
        <div className="relative hidden md:block">
          <img
            src={laptop}
            alt="Laptop with development graphics"
            className="relative z-[2] ml-auto w-[560px] max-w-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  )
}

export default ServicesSection