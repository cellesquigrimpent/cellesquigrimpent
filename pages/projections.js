import dynamic from 'next/dynamic'
import { translations } from '../lib/translations'

const Map = dynamic(() => import('../components/Map'), { ssr: false })

export default function Projections({ locale }){
  const t = translations[locale || 'fr']

  const events = [
    { date: '11/09', city: 'Brest, FR', venue: 'La PAM', lat: 48.3904, lng: -4.4861 },
    { date: '23/09', city: 'Liège, BE', venue: 'Isatis', lat: 50.6326, lng: 5.5797 },
    { date: '22/10', city: 'Marseille, FR', venue: 'Cime Sardine', lat: 43.2965, lng: 5.3698 },
    { date: '03/11', city: 'Watermael, BE', venue: 'CAB Brabant', lat: 50.8022, lng: 4.4038 },
    { date: '19/11', city: 'Namur, BE', venue: 'BeBloc', lat: 50.4674, lng: 4.8719 },
    { date: '21/11', city: 'Martigny, CH', venue: 'Venga Escalade', lat: 46.1046, lng: 7.0676 },
  ]

  return (
    <main className="p-8">
      <h1 className="text-3xl">{t.projections_title}</h1>

      <section className="mt-6 grid md:grid-cols-2 gap-6">
        <div>
          <ul className="space-y-4">
            {events.map(e => (
              <li key={e.date} className="p-4 border rounded bg-white/5">
                <strong>{e.date}</strong> — {e.city} — {e.venue}
              </li>
            ))}
          </ul>
        </div>
        <div className="h-96">
          <Map markers={events} />
        </div>
      </section>
    </main>
  )
}
