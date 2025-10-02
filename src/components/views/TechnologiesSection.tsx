import cloudImg from '../../assets/cloud.png'

const TechnologiesSection = () => {
  return (
    <section id="technologies" className="relative overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 py-16 sm:py-20">
      {/* subtle background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(60rem 30rem at 10% -20%, rgba(255,255,255,0.35) 0%, transparent 60%), radial-gradient(50rem 30rem at 110% 120%, rgba(255,255,255,0.35) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Technologies
        </h2>

        <div className="mt-10 grid items-center gap-6 md:mt-14 md:grid-cols-2">
          {/* Left content card */}
          <div className="relative -mb-8 md:mb-0 md:-mr-12">
            <div className="rounded-xl bg-white p-7 shadow-2xl ring-1 ring-black/5 sm:rounded-2xl sm:p-10 h-[34rem] mx-auto my-auto flex flex-col items- justify-center">
              <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl md:text-5xl   ">Cloud Solutions</h3>
              <p className="mt-4 text-sm leading-6 text-black font-semibold sm:text-base md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                nisl libero, sollicitudin vel tempor sed, ullamcorper quis
                diam. Ut eros elit, luctus eu pulvinar a, lacinia a justo. Sed
                felis sapien, rutrum ut tempus quis, elementum eu du.
              </p>

              {/* decorative accent */}
              <div className="mt-10 flex items-center gap-2">
                <span className="h-1 w-8 rounded-full bg-rose-500" />
                <span className="h-1 w-4 rounded-full bg-rose-400" />
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative z-10">
            <div className="overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10 sm:rounded-2xl md:ml-0">
              <img
                src={cloudImg}
                alt="Cloud technology visualization"
                className="h-[260px] w-full object-cover sm:h-[320px] md:h-[380px] lg:h-[420px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologiesSection