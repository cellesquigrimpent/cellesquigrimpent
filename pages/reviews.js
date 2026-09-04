import { useState, useEffect } from 'react'
import { translations } from '../lib/translations'

export default function Reviews({ locale }){
  const t = translations[locale || 'fr']
  const [reviews, setReviews] = useState([])
  const [form, setForm] = useState({name: '', rating: 5, text: ''})

  useEffect(()=>{
    const saved = localStorage.getItem('celles-reviews')
    if(saved) setReviews(JSON.parse(saved))
  }, [])

  function submit(e){
    e.preventDefault()
    const r = { ...form, date: new Date().toISOString() }
    const next = [r, ...reviews]
    setReviews(next)
    localStorage.setItem('celles-reviews', JSON.stringify(next))
    setForm({name: '', rating: 5, text: ''})
  }

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl">{t.reviews_title}</h1>

      <form onSubmit={submit} className="mt-4 space-y-3">
        <input placeholder="Nom (optionnel)" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="w-full p-2 rounded bg-white/5" />
        <select value={form.rating} onChange={e=>setForm({...form, rating: e.target.value})} className="p-2 rounded bg-white/5">
          <option value={5}>5</option>
          <option value={4}>4</option>
          <option value={3}>3</option>
          <option value={2}>2</option>
          <option value={1}>1</option>
        </select>
        <textarea placeholder="Ton avis" value={form.text} onChange={e=>setForm({...form, text:e.target.value})} className="w-full p-2 rounded bg-white/5" required />
        <div className="flex gap-3">
          <button className="bg-pink-500 text-black px-4 py-2 rounded">Envoyer</button>
          <p className="text-sm self-center opacity-80">Affichage immédiat (stocké localement). Pour une solution en ligne, configure Supabase — voir README.</p>
        </div>
      </form>

      <section className="mt-8 space-y-4">
        {reviews.length === 0 && <p>Aucun avis pour le moment.</p>}
        {reviews.map((r,i)=> (
          <div key={i} className="p-3 border rounded bg-white/5">
            <strong>{r.name || 'Anonyme'}</strong> — <em>{r.rating}★</em>
            <p className="mt-2">{r.text}</p>
            <small className="opacity-70">{new Date(r.date).toLocaleString()}</small>
          </div>
        ))}
      </section>
    </main>
  )
}
