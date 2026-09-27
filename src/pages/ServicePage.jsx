import { useParams, Link, Navigate } from 'react-router-dom'
import { getService, services } from '../data/services'
import graphicdesign1 from '../components/graphicdesign1.jpeg'
import graphicdesign2 from '../components/graphicdesign2.jpeg'
import graphicdesign3 from '../components/graphicdesign3.jpeg'
import graphicdesign4 from '../components/graphicdesign4.jpeg'
import graphicdesign5 from '../components/graphicdesign5.jpeg'
import graphicdesign6 from '../components/graphicdesign6.jpeg'
import graphicdesign7 from '../components/graphicdesign7.jpeg'
import graphicdesign8 from '../components/graphicdesign8.jpeg'
import graphicdesign9 from '../components/graphicdesign9.jpeg'
import graphicdesign10 from '../components/graphicdesign10.jpeg'
import graphicdesign11 from '../components/graphicdesign11.jpeg'
import graphicdesign12 from '../components/graphicdesign12.jpeg'
import graphicdesign13 from '../components/graphicdesign13.jpeg'
import graphicdesign14 from '../components/graphicdesign14.jpeg'
import graphicdesign15 from '../components/graphicdesign15.jpeg'

const graphicSamples = [
  graphicdesign1,
  graphicdesign2,
  graphicdesign3,
  graphicdesign4,
  graphicdesign5,
  graphicdesign6,
  graphicdesign7,
  graphicdesign8,
  graphicdesign9,
  graphicdesign10,
  graphicdesign11,
  graphicdesign12,
  graphicdesign13,
  graphicdesign14,
  graphicdesign15,
]

export default function ServicePage() {
  const { slug } = useParams()
  const service = getService(slug)

  if (!service) return <Navigate to="/" replace />

  const others = services.filter((s) => s.slug !== slug)

  return (
    <div>
      <section className="service-visual text-[#f0f2f5]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#25d366]">
              {service.index} — {service.lead}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-none tracking-[-0.04em] text-[#f0f2f5] sm:text-6xl">
              {service.name}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-200">{service.tagline}</p>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-300">{service.heroNote}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.5fr_0.9fr] lg:px-8">
        <div>
          <div className="mb-12 rounded-[28px] border border-[#1b2440]/10 bg-[#fffdf9] p-6 shadow-[0_20px_40px_rgba(27,36,64,0.06)]">
            <h2 className="font-display text-3xl text-[#1b2440]">What this covers</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{service.summary}</p>
            <ul className="mt-6 space-y-3">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#1b2440]">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#d7b179]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12 rounded-[28px] border border-[#1b2440]/10 bg-[#fffdf9] p-6 shadow-[0_20px_40px_rgba(27,36,64,0.06)]">
            <h2 className="font-display text-3xl text-[#1b2440]">How it runs</h2>
            <ol className="mt-6 space-y-5">
              {service.process.map((step, i) => (
                <li key={step.title} className="flex gap-4 border-b border-[#1b2440]/10 pb-5 last:border-b-0 last:pb-0">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#1b2440]/10 bg-[#f3eadb] text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="font-display text-2xl text-[#1b2440]">{step.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-[28px] border border-[#1b2440]/10 bg-[#fffdf9] p-6 shadow-[0_20px_40px_rgba(27,36,64,0.06)]">
            <h2 className="font-display text-3xl text-[#1b2440]">Common questions</h2>
            <div className="mt-6 space-y-4">
              {service.faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-[#1b2440]/10 bg-[#f7f1e8] p-4">
                  <summary className="cursor-pointer list-none text-sm font-medium text-[#1b2440] marker:content-none">
                    <span className="flex items-center justify-between gap-3">
                      <span>{f.q}</span>
                      <span className="text-lg text-[#d7b179] transition group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:pt-3">
          <div className="sticky top-24 rounded-[30px] border border-[#1b2440]/10 bg-[#f7f1e8] p-6 shadow-[0_20px_40px_rgba(27,36,64,0.08)]">
            <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">Pricing</p>
            <div className="mt-5 space-y-4">
              {service.pricing.map((p) => (
                <div key={p.tier} className="flex items-start justify-between gap-4 border-b border-[#1b2440]/10 pb-4 last:border-b-0 last:pb-0">
                  <div>
                    <h4 className="font-display text-2xl text-[#1b2440]">{p.tier}</h4>
                    <p className="mt-2 text-xs leading-5 text-slate-600">{p.detail}</p>
                  </div>
                  <div className="text-right">
                    <span className="block font-display text-2xl text-[#1b2440]">{p.price}</span>
                    {p.unit && <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">{p.unit}</span>}
                  </div>
                </div>
              ))}
            </div>
            <Link to="/contact" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#1b2440] px-5 py-3 text-sm font-semibold text-[#f7f1e8] transition hover:bg-[#2b3551]">
              Get a quote for this
            </Link>
            <p className="mt-3 text-xs leading-5 text-slate-500">Rates are a starting point — final pricing depends on project scope and timing.</p>
          </div>
        </aside>
      </section>

      {service.slug === 'graphic-design' && (
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">Portfolio samples</p>
          </div>
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {graphicSamples.map((image, index) => (
              <div key={image} className="overflow-hidden rounded-[22px] border border-[#1b2440]/10 bg-[#fffdf9] shadow-[0_12px_28px_rgba(27,36,64,0.05)]">
                <img
                  src={image}
                  alt={`Justin design sample ${index + 1}`}
                  className="h-64 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">Also available</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {others.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="flex items-center justify-between rounded-[24px] border border-[#1b2440]/10 bg-[#fffdf9] p-5 shadow-[0_12px_28px_rgba(27,36,64,0.05)] transition hover:-translate-y-0.5 hover:border-[#d7b179]">
              <div className="flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.24em] text-slate-500">{s.index}</span>
                <h4 className="font-display text-2xl text-[#1b2440]">{s.name}</h4>
              </div>
              <span className="text-xl text-[#1b2440]">→</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
