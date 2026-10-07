import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { services } from '../data/services'

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [])

  const links = [
    { to: '/', label: 'Overview', end: true },
    ...services.map((s) => ({ to: `/services/${s.slug}`, label: s.name })),
    { to: '/contact', label: 'Start a project' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-[#1d1b1a]/10 bg-[#fffaf5]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d8752d] font-display text-[10px] font-semibold tracking-[0.18em] text-white shadow-[0_8px_20px_rgba(216,117,45,0.28)] sm:h-10 sm:w-10 sm:text-xs">
            JM
          </span>
          <div className="flex min-w-0 flex-col leading-none">
            <span className="font-display text-base font-semibold tracking-tight text-[#1d1b1a] sm:text-lg">JM Studio</span>
            <span className="text-[9px] uppercase tracking-[0.26em] text-[#6d625d] sm:text-[10px]">Brand &amp; web</span>
          </div>
        </NavLink>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-[#1d1b1a]/15 bg-white md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-0.5 w-4 rounded-full bg-[#1d1b1a] transition ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-4 rounded-full bg-[#1d1b1a] transition ${open ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block h-0.5 w-4 rounded-full bg-[#1d1b1a] transition ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
        </button>

        <nav className={`${open ? 'flex' : 'hidden'} absolute left-3 right-3 top-full mt-2 flex-col gap-2 rounded-2xl border border-[#1d1b1a]/10 bg-[#fffaf5] p-3 shadow-[0_18px_40px_rgba(29,27,26,0.08)] md:static md:mt-0 md:flex md:flex-row md:items-center md:gap-2 md:bg-transparent md:p-0 md:shadow-none`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium text-center transition ${
                  isActive ? 'contrast-button bg-[#d8752d] shadow-[0_8px_20px_rgba(216,117,45,0.2)]' : 'text-[#1d1b1a] hover:bg-[#f8efe6]'
                }`
              }
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
