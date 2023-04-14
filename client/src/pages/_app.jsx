import '@/styles/globals.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: '500' })

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>ABAD</title>
    </Head>
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  </>
}
