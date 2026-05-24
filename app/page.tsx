export default function Home() {
  const faqs = [
    {
      q: 'How does the AI similarity detection work?',
      a: 'We generate vector embeddings of your content and compare them against web pages found via search APIs. Pages with a cosine similarity above your chosen threshold are flagged as potential violations.'
    },
    {
      q: 'What types of content can I protect?',
      a: 'Blog posts, course lessons, landing page copy, email sequences, and any other text-based marketing or educational material you own.'
    },
    {
      q: 'How often does the scanner run?',
      a: 'Scans run automatically every 24 hours. You receive an email digest whenever new potential violations are detected.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Copyright Protection
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Detect unauthorized use of{' '}
          <span className="text-[#58a6ff]">your content</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          CopyGuard crawls the web for copies of your blog posts, course lessons, and marketing materials — then flags violations with AI similarity scores before they hurt your rankings or revenue.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Protecting My Content
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">$12/mo · Cancel anytime · No credit card required to try</p>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Up to 50 protected content pieces',
              'Daily automated web scans',
              'AI similarity scoring (0–100%)',
              'Email alerts for new violations',
              'DMCA takedown letter generator',
              'Google & Bing search coverage'
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started — $12/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} CopyGuard. All rights reserved.
      </footer>
    </main>
  )
}
