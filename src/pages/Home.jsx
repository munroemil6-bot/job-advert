import { Link } from 'react-router-dom'
import { services } from '../data/services'
import graphicDesignFeature from '../components/graphicdesign1.jpeg'

const webDevelopmentFeature = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'

const highlights = ['Responsive websites', 'Full-stack experiences', 'Business growth tools']

export default function Home() {

  return (
    <div className="bg-[#fffaf5] text-[#1d1b1a]">
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pb-12 lg:pt-12">
        <div className="overflow-hidden rounded-[32px] border border-[#f2e2d4] bg-[linear-gradient(135deg,#fffaf5_0%,#fff1e5_100%)] p-5 shadow-[0_30px_80px_rgba(29,27,26,0.06)] sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d8752d]">Creative studio + web developer</p>
              <h1 className="mt-4 max-w-xl font-display text-5xl leading-[0.9] tracking-[-0.05em] text-[#1d1b1a] sm:text-6xl lg:text-[5.1rem]">
                Premium design and modern websites for brands that want to look unmistakably sharp.
              </h1>

              <p className="mt-5 max-w-lg text-base leading-7 text-[#504b46] sm:text-lg">
                Justin &amp; Co. brings together thoughtful brand direction and polished digital experiences, while Myles builds clean, conversion-focused websites for businesses, schools, e-commerce brands, and service providers who want a stronger online presence.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-[#d8752d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#bf6322]">
                  Book a project call
                </Link>
                <Link to="/services/web-development" className="inline-flex items-center justify-center rounded-full bg-[#1d1b1a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3a322f]">
                  View services
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#504b46]">
                {highlights.map((item) => (
                  <span key={item} className="rounded-full border border-[#1d1b1a]/10 bg-white px-3 py-2 shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[28px] border border-[#1d1b1a]/10 bg-white p-3 shadow-[0_30px_70px_rgba(29,27,26,0.09)]">
                <div className="overflow-hidden rounded-[22px] bg-[#f5efe8]">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                    alt="Web development portfolio presentation"
                    className="h-[500px] w-full object-cover"
                  />
                </div>

                <div className="absolute inset-x-8 bottom-8 rounded-[20px] border border-white/80 bg-white/90 p-4 shadow-[0_20px_40px_rgba(29,27,26,0.08)] backdrop-blur-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.24em] text-[#8a8078]">Recent focus</p>
                      <p className="mt-2 font-display text-2xl text-[#1d1b1a]">Modern, fast websites</p>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d8752d] text-lg font-semibold text-white">
                      ✓
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-3 top-8 rounded-2xl border border-[#d8752d]/20 bg-[#fffaf5] px-3 py-2 shadow-[0_20px_40px_rgba(29,27,26,0.08)]">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#8a8078]">Launch</p>
                <p className="mt-1 font-display text-2xl text-[#1d1b1a]">Fast</p>
              </div>

              <div className="absolute -right-2 bottom-14 rounded-2xl border border-[#1d1b1a]/10 bg-white px-3 py-2 shadow-[0_20px_40px_rgba(29,27,26,0.08)]">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#8a8078]">Projects</p>
                <p className="mt-1 font-display text-2xl text-[#1d1b1a]">7+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a8078]">What I offer</p>
            <h2 className="mt-3 font-display text-4xl leading-none tracking-[-0.04em] text-[#1d1b1a] sm:text-5xl">
              Web solutions designed to look sharp and work smoothly.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#504b46]">
            From landing pages to multi-page business sites and full-stack platforms, each build is practical, responsive, and tailored to real-world goals.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              to={`/services/${s.slug}`}
              key={s.slug}
              className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#1d1b1a]/8 bg-[#fffdfb] p-6 shadow-[0_20px_35px_rgba(29,27,26,0.04)] transition duration-200 hover:-translate-y-1 hover:border-[#d8752d]/30 hover:shadow-[0_22px_45px_rgba(29,27,26,0.08)]"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a8078]">{s.index}</span>
                <span className="rounded-full border border-[#d8752d]/20 bg-[#fff1e7] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b95d18]">
                  {s.lead}
                </span>
              </div>

              {s.slug === 'graphic-design' ? (
                <div className="mb-5 overflow-hidden rounded-[22px] border border-[#1d1b1a]/10 bg-[#f7f1ea]">
                  <img src={graphicDesignFeature} alt="Graphic design sample" className="h-32 w-full object-cover" />
                </div>
              ) : s.slug === 'web-development' ? (
                <div className="mb-5 overflow-hidden rounded-[22px] border border-[#1d1b1a]/10 bg-[#f7f1ea]">
                  <img src={webDevelopmentFeature} alt="Web development sample" className="h-32 w-full object-cover" />
                </div>
              ) : (
                <div className="mb-5 flex h-32 items-end justify-between rounded-[22px] border border-[#1d1b1a]/10 bg-[linear-gradient(135deg,#1d1b1a_0%,#463d37_50%,#f7dcbc_100%)] p-4 text-[#fffaf5]">
                  <span className="font-display text-4xl leading-none">{s.name === 'Graphic Design' ? 'A' : s.name === 'Web Development' ? 'W' : 'B'}</span>
                  <div className="h-10 w-10 rounded-full border border-[#fffaf5]/30 bg-white/10" />
                </div>
              )}

              <h3 className="font-display text-3xl leading-none text-[#1d1b1a]">{s.name}</h3>
              <p className="mt-3 text-sm leading-6 text-[#504b46]">{s.tagline}</p>
              <div className="mt-6 flex items-center justify-between border-t border-[#1d1b1a]/10 pt-4 text-sm font-medium text-[#1d1b1a]">
                <span>View details</span>
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[#1d1b1a]/10 bg-[#f5efe8]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[28px] border border-[#1d1b1a]/10 bg-[#fffaf5] p-6 shadow-[0_18px_42px_rgba(29,27,26,0.05)]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a8078]">Justin</p>
            <h3 className="mt-3 font-display text-3xl text-[#1d1b1a]">Graphic Design</h3>
            <p className="mt-4 text-sm leading-7 text-[#504b46]">
              Visual identities shaped with clarity, refinement, and heart — built to feel premium from the first glance.
            </p>
          </div>

          <div className="rounded-[28px] bg-[#1d1b1a] p-6 text-[#fffaf5] shadow-[0_18px_42px_rgba(29,27,26,0.12)]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d8c7b8]">Myles</p>
            <h3 className="mt-3 font-display text-3xl text-[#fffaf5]">Web Development</h3>
            <p className="mt-4 text-sm leading-7 text-[#d8c7b8]">
              Responsive websites and custom digital systems built for speed, clarity, and conversion — without unnecessary complexity.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[30px] border border-[#1d1b1a]/10 bg-[#fffdfb] p-6 shadow-[0_20px_40px_rgba(29,27,26,0.04)] md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a8078]">Overview</p>
              <h2 className="mt-3 font-display text-4xl leading-none tracking-[-0.04em] text-[#1d1b1a] sm:text-5xl">
                Brand-first thinking and web builds that feel premium, practical, and easy to trust.
              </h2>
            </div>
            <a
              href="https://munroemil6-bot.github.io/personal-portfolio/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#1d1b1a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3a322f]"
            >
              Open full portfolio
            </a>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-7 text-[#504b46]">
            From visual identity and brand direction to responsive websites and full-stack digital experiences, the focus stays the same: clear messaging, strong aesthetics, and smooth user journeys. Whether it’s a service business, educational platform, e-commerce storefront, or a custom online tool, the work is built to feel premium, practical, and commercially useful.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 rounded-[30px] border border-[#1d1b1a]/10 bg-[#fffdfb] p-6 shadow-[0_20px_40px_rgba(29,27,26,0.04)] md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a8078]">Ready to begin</p>
            <h2 className="mt-3 font-display text-4xl leading-none tracking-[-0.04em] text-[#1d1b1a]">Let’s build your next project.</h2>
          </div>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-[#1d1b1a] px-6 py-3 text-sm font-semibold text-[#fffaf5] transition hover:bg-[#3a322f]">
            Send project details
          </Link>
        </div>
      </section>
    </div>
  )
}
