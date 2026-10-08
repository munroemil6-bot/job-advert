export default function Contact() {
  const contactMethods = [
    {
      label: 'Justin WhatsApp',
      type: 'WhatsApp',
      description: 'Start a quick chat about your project details.',
      action: 'https://wa.me/254757131197?text=Hi%20Justin%2C%20I%27d%20like%20to%20start%20a%20project.',
      accent: 'contrast-button bg-[#25d366]',
    },
    {
      label: 'Call Justin',
      type: 'Phone',
      description: '0757 131 197',
      action: 'tel:+254757131197',
      accent: 'contrast-button bg-[#1d1b1a]',
    },
    {
      label: 'Myles WhatsApp',
      type: 'WhatsApp',
      description: 'Message the creator directly.',
      action: 'https://wa.me/254723274962?text=Hi%20Myles%2C%20I%27d%20like%20to%20start%20a%20project.',
      accent: 'contrast-button bg-[#d8752d]',
    },
    {
      label: 'Call Myles',
      type: 'Phone',
      description: '0723 274 962',
      action: 'tel:+254723274962',
      accent: 'contrast-button bg-[#1d1b1a]',
    },
    {
      label: 'Justin’s Portfolio',
      type: 'Work',
      description: 'See Justin’s portfolio and design work.',
      action: 'https://lucky-lily-572a74.netlify.app',
      accent: 'bg-white text-[#1d1b1a] border border-[#1d1b1a]/10',
    },
    {
      label: 'Myles Portfolio',
      type: 'Work',
      description: 'See my live portfolio and project work.',
      action: 'https://munroemil6-bot.github.io/personal-portfolio/',
      accent: 'bg-[#f5efe8] text-[#1d1b1a] border border-[#1d1b1a]/10',
    },
  ]

  return (
    <div>
      <section className="contact-visual text-[#f0f2f5]">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#f7d7b9]">Start a project</p>
          <h1 className="mt-4 font-display text-5xl leading-none tracking-[-0.04em] text-[#f0f2f5] sm:text-6xl">Let’s build something good.</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
            Reach out directly through WhatsApp, phone, or the portfolio links below. We’ll take it from there and keep the process simple.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {contactMethods.map((item) => (
            <a
              key={item.label}
              href={item.action}
              target={item.action.startsWith('http') ? '_blank' : undefined}
              rel={item.action.startsWith('http') ? 'noreferrer' : undefined}
              className={`group flex min-h-[210px] flex-col justify-between rounded-[28px] p-6 shadow-[0_18px_42px_rgba(29,27,26,0.06)] transition hover:-translate-y-1 ${item.accent}`}
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] opacity-75">{item.type}</p>
                <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.04em]">{item.label}</h2>
              </div>

              <div>
                <p className="text-sm leading-6 opacity-80">{item.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 group-hover:underline">
                  Contact now
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 rounded-[30px] border border-[#1d1b1a]/10 bg-[#fffaf5] p-6 shadow-[0_20px_40px_rgba(29,27,26,0.04)]">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#8a8078]">Quick note</p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#504b46]">
            Share your goal, target audience, timeline, and any references you love. That helps us respond with the right recommendation immediately.
          </p>
        </div>
      </section>
    </div>
  )
}
