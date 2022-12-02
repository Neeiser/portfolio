import '../styles/globals.css'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

//COMPONENTS
import Head from 'next/head';
import Layout from '../components/Layout';
import { useEffect } from "react";

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r122/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);
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
