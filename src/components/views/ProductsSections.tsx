import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'
import p5 from '../../assets/p5.png'
import p6 from '../../assets/p6.png'

const TABS: string[] = [
  'ALL',
  'Health Supreme',
  'CRM 365',
  'OSDA',
  'Marketplace E-Commerce Platform',
  'Sports Training App',
  'Fitness',
]

const PRODUCTS: { title: string; description: string; image: string }[] = [
  { title: 'Health Supreme', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et in condimentum', image: p1 },
  { title: 'E‑Commerce', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et in condimentum', image: p2 },
  { title: 'Mobile Suite', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et in condimentum', image: p3 },
  { title: 'Training Portal', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et in condimentum', image: p4 },
  { title: 'Health Supreme', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et in condimentum', image: p5 },
  { title: 'Media Dashboard', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et in condimentum', image: p6 },
]

const ProductsSections = () => {
  return (
    <section
      className="relative w-full"
      style={{
        backgroundColor: '#E01923',
      }}
    >
      <div className="">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Heading */}
          <h2 className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Products
          </h2>

          {/* Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm md:text-lg font-semibold">
            {TABS.map((tab, idx) => (
              <div key={tab} className="relative cursor-default select-none text-white">
                <span>{tab}</span>
                {idx === 0 && (
                  <span className="absolute -bottom-2 left-1/2 h-[3px] w-10 -translate-x-1/2 rounded bg-white" />
                )}
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((item, idx) => (
              <article
                key={idx}
                className="group relative overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black/10"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-60 lg:h-72"
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="grid h-12 w-12 place-items-center rounded-md border-2 border-white/70 text-white">
                    <div className="h-5 w-5 border-2 border-white/80" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white sm:text-2xl">{item.title}</h3>
                  <p className="max-w-xs text-xs leading-relaxed text-white/85 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsSections