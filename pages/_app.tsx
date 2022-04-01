import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Script
        src="https://kit.fontawesome.com/81c88ca9af.js"
        crossOrigin="anonymous"
      ></Script>
      <Header />
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
