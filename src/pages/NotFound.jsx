import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-5xl flex-col items-start justify-center gap-6 px-4 py-20 sm:px-6 lg:px-8">
      <span className="rounded-full border border-[#1b2440]/15 bg-white/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-slate-500">
        404
      </span>
      <h1 className="font-display text-4xl font-semibold tracking-tight text-[#1b2440] sm:text-5xl">That page doesn't exist.</h1>
      <Link to="/" className="contrast-button inline-flex items-center justify-center rounded-full bg-[#1b2440] px-6 py-3 text-sm font-medium transition hover:bg-[#2b3551]">
        Back to overview
      </Link>
    </div>
  )
}
