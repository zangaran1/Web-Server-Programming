import Head from 'next/head'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '@/components/nav'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />

        <main className="container">
            <Component {...pageProps} />
        </main>
    </>
    )
}
