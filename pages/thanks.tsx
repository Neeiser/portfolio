import { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

import { motion } from "framer-motion";

import Link from "next/link"
import Footer from "../components/Footer";

export default function Thanks() {
	const [vantaEffect, setVantaEffect] = useState(0);
	const vantaRef = useRef(null);
	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				FOG({
				el: vantaRef.current,
				THREE: THREE,
				mouseControls: true,
				touchControls: true,
				gyroControls: false,
				minHeight: 200.00,
				minWidth: 200.00,
				highlightColor: 0xe1994e,
				midtoneColor: 0x913a04,
				lowlightColor: 0xb666fc,
				baseColor: 0x50000,
				blurFactor: 0.70,
				speed: 2.00,
				zoom: 0.80
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

	return (
		<div>
			<div ref={vantaRef} className='z-0'>
				<section className='h-screen'>
					<div className="flex flex-col h-full">
						<div className="w-11/12 lg:w-2/4 p-6 md:p-12 m-auto text-center bg-gray-300/50 rounded-3xl shadow-xl backdrop-blur-sm">
							<h1 className="text-4xl py-8 font-semibold drop-shadow-lg shadow-black">
							<span className=" text-orangeOW drop-shadow-lg shadow-black">Thank you</span> for contacting me.
							</h1>
							<p className="drop-shadow-lg text-lg font-medium shadow-black">
							Your email has been received, I will read it and respond as soon as possible. <br />
							Thank you again for your interest, have a great day!
							</p>
							<p className="italic py-8 drop-shadow-lg shadow-black">Stefano</p>
							<p className="py-8 flex items-center justify-center flex-col">Go Back to the <Link href='/' className="text-orangeOW text-4xl font-semibold drop-shadow-lg shadow-black  md:pl-2">HOMEPAGE</Link></p>
							
						</div>
					</div>
				</section>
				<div className="-mt-10">
					<Footer/>
				</div>
			</div>
		</div>
  	)
}
