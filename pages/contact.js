export default function Contact({ locale }){
  // Replace the LINK with your Google Form or Formspree link
  const formLink = 'https://forms.gle/REPLACE_WITH_YOUR_FORM'
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl">Demander une projection / Request a screening</h1>
      <p className="mt-4">Pour organiser une projection, merci de remplir le formulaire suivant :</p>
      <a className="inline-block mt-4 bg-pink-500 text-black px-4 py-2 rounded" href={formLink} target="_blank">Remplir le formulaire</a>

      <section className="mt-8">
        <h2>Instructions / Instructions</h2>
        <ul className="list-disc ml-6 mt-2">
          <li>Créer un Google Form contenant nom, email, date souhaitée, lieu, message.</li>
          <li>Collez le lien du formulaire dans pages/contact.js (variable formLink).</li>
        </ul>
      </section>
    </main>
  )
}
