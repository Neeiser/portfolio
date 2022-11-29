import '../styles/globals.css'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

//COMPONENTS
import Head from 'next/head';
import Layout from '../components/Layout';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Head>
        <title>Stefano Stortini Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <footer className='h-10 bg-black'>
        <div className='flex h-full justify-center items-center text-gray-500'>
          <p>Designed & Built by Stefano Stortini (Neeiser)</p>
          <p> © 2022</p>
        </div>
      </footer>
    </div>
  )
}
