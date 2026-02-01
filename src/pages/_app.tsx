import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Trestle Retreat - Luxury 4BR Mountain Home in Fraser, CO | 5 Min to Winter Park</title>
        <meta name="description" content="Luxurious 4-bedroom mountain retreat in Fraser, Colorado. Sleeps 10, private hot tub, heated garage, 5 minutes to Winter Park Resort. Perfect for families and ski trips." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Trestle Retreat - Luxury 4BR Mountain Home in Fraser, CO" />
        <meta property="og:description" content="Luxurious 4-bedroom mountain retreat in Fraser, Colorado. Sleeps 10, private hot tub, heated garage, 5 minutes to Winter Park Resort." />
        <meta property="og:image" content="/images/Front.jpeg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trestle Retreat - Luxury 4BR Mountain Home in Fraser, CO" />
        <meta name="twitter:description" content="Luxurious 4-bedroom mountain retreat in Fraser, Colorado. Sleeps 10, private hot tub, heated garage, 5 minutes to Winter Park Resort." />
        <meta name="twitter:image" content="/images/Front.jpeg" />

        {/* Additional SEO */}
        <meta name="keywords" content="Fraser Colorado vacation rental, Winter Park ski house, mountain retreat Colorado, Fraser cabin rental, Winter Park lodging, Colorado ski vacation" />
        <link rel="canonical" href="https://trestleretreat.com" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}