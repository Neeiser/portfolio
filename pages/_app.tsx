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
			"https://cdnjs.cloudflare.com/ajax/libs/three.js/0.147.0/three.min.js"
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
				<title>Neeiser&apos;s Portfolio</title>
				<meta name="description" content="A humble portfolio from a humble Frontend Developer" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
		
			<Layout>
				<Component {...pageProps} />
			</Layout>

		</div>
	)
}
