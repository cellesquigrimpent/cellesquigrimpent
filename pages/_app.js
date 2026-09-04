import '../styles/globals.css'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }){
  const { locale } = useRouter()
  return <Component {...pageProps} locale={locale} />
}
