import { Link } from 'react-router-dom'
import { services } from '../data/services'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#081d2c]/10 bg-[#081d2c] text-[#f3f3f1]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f3f3f1]/30 bg-[#f7ba1c]/10 text-xs font-semibold tracking-[0.18em] text-[#f7ba1c]">
              J&amp;C
            </span>
            <span className="font-display text-xl font-semibold">Justin &amp; Co.</span>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-300">
            Graphic design by Justin. Web development by Myles. Thoughtful digital work for ambitious businesses and founders.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-slate-300">Services</p>
          <ul className="space-y-3 text-sm text-slate-200">
            {services.map((s) => (
              <li key={s.slug}>
                <Link className="transition hover:text-[#f7ba1c]" to={`/services/${s.slug}`}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-slate-300">Get in touch</p>
          <ul className="space-y-3 text-sm text-slate-200">
            <li><Link className="transition hover:text-[#f7ba1c]" to="/contact">Start a project</Link></li>
            <li><a className="transition hover:text-[#f7ba1c]" href="mailto:munroemil6@gmail.com">munroemil6@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#f3f3f1]/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs uppercase tracking-[0.18em] text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} Justin &amp; Co. Studio</span>
          <span>Designed on paper, built in code.</span>
        </div>
      </div>
    </footer>
  )
}
