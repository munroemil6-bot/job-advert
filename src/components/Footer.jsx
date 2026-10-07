import { Link } from 'react-router-dom'
import { services } from '../data/services'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#1d1b1a]/10 bg-[linear-gradient(180deg,#fffaf5_0%,#f5efe8_100%)] text-[#1d1b1a]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1d1b1a]/10 bg-[#fff1e7] text-xs font-semibold tracking-[0.18em] text-[#b95d18]">
              JM
            </span>
            <span className="font-display text-xl font-semibold">JM Studio</span>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#504b46]">
            Brand direction and web development for founders, businesses, and growing brands that want a clearer online presence.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-[#8a8078]">Services</p>
          <ul className="space-y-3 text-sm text-[#1d1b1a]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link className="transition hover:text-[#b95d18]" to={`/services/${s.slug}`}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-[#8a8078]">Get in touch</p>
          <ul className="space-y-3 text-sm text-[#1d1b1a]">
            <li><Link className="transition hover:text-[#b95d18]" to="/contact">Start a project</Link></li>
            <li><a className="transition hover:text-[#b95d18]" href="mailto:munroemil6@gmail.com">munroemil6@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#1d1b1a]/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs uppercase tracking-[0.18em] text-[#8a8078] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} JM Studio</span>
          <span>Designed for clarity. Built to convert.</span>
        </div>
      </div>
    </footer>
  )
}
