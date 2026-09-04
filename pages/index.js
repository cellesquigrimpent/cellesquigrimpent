import Head from 'next/head'
import { translations } from '../lib/translations'
import Link from 'next/link'

export default function Home({ locale }){
  const t = translations[locale || 'fr']
  return (
    <>
      <Head>
        <title>{t.title} — {t.subtitle}</title>
        <meta name="description" content={t.synopsis.slice(0, 160)} />
      </Head>

      <main className="relative min-h-screen bg-black text-white">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline poster="/poster.jpg">
          <source src="/trailer.mp4" type="video/mp4" />
          {/* If you prefer a hosted Vimeo/YouTube trailer, replace this block with an embed or a clickable fallback */}
        </video>

        <div className="relative z-10 backdrop-brightness-75 p-8 md:p-16">
          <header className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-4xl md:text-7xl leading-tight tracking-tight">{t.title}</h1>
            <p className="mt-4 text-xl">{t.subtitle}</p>
            <div className="mt-6 flex justify-center gap-4">
              <Link href="/projections"><a className="bg-pink-500 text-black px-4 py-2 rounded">{t.projections_title}</a></Link>
              <Link href="/contact"><a className="border border-white px-4 py-2 rounded">{t.contact_cta}</a></Link>
            </div>
          </header>

          <section className="mt-12 max-w-3xl mx-auto bg-white/10 p-6 rounded">
            <h2 className="text-2xl">{t.synopsis_title}</h2>
            <p className="mt-3 text-base">{t.synopsis}</p>
          </section>

          <section className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl">{t.projections_title}</h3>
            <ul className="mt-4 space-y-2 text-left">
              <li>11/09 — Brest, FR — La PAM</li>
              <li>23/09 — Liège, BE — Isatis</li>
              <li>22/10 — Marseille, FR — Cime Sardine</li>
              <li>03/11 — Watermael, BE — CAB Brabant</li>
              <li>19/11 — Namur, BE — BeBloc</li>
              <li>21/11 — Martigny, CH — Venga Escalade</li>
            </ul>
          </section>

          <section className="mt-12 max-w-3xl mx-auto">
            <h3 className="text-2xl">{t.reviews_title}</h3>
            <p className="mt-2">Les avis apparaissent sur la page dédiée — <a href="/reviews" className="underline">{t.reviews_title}</a></p>
          </section>

          <footer className="mt-16 text-sm opacity-90">
            <p>Site officiel — {t.subtitle}</p>
          </footer>
        </div>
      </main>
    </>
  )
}
