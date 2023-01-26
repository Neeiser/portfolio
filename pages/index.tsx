//VANTA.JS
import { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

//FRAMER MOTION
import { motion } from "framer-motion";

//COMPONENTS
import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
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
			<main ref={vantaRef} className='z-0'>
				<section className='h-screen relative'>
					<div className='h-screen w-full flex flex-col justify-center items-center text-gray-200'>
						<motion.h1 animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 0.6}} className='py-5 text-8xl flex cursor-pointer'>
							<motion.div className=" hover:text-orange-500 transition-colors" whileHover={{ y: -10 }}>H</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" whileHover={{ y: -10 }}>i</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" whileHover={{ y: -10 }}>,</motion.div>
							<motion.div>&nbsp;</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" whileHover={{ y: -10 }}>I</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" whileHover={{ y: -10 }}>&apos;</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" whileHover={{ y: -10 }}>m</motion.div>
							<motion.div>&nbsp;</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" whileHover={{ y: -10 }}>S</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" whileHover={{ y: -10 }}>t</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" whileHover={{ y: -10 }}>e</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" whileHover={{ y: -10 }}>f</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" whileHover={{ y: -10 }}>a</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" whileHover={{ y: -10 }}>n</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" whileHover={{ y: -10 }}>o</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" whileHover={{ y: -10 }}>!</motion.div>
						</motion.h1>
						<motion.p animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 0.7}} className='py-3 text-gray-400 text-xl font-semibold cursor-default'>Web Developer Full Stack Jr.</motion.p>
						<motion.div animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 0.8}}>
							<Link href='/contact'>
								<motion.button whileHover={{ scale: 1.1}} whileTap={{ scale: 0.8}} type="button" className="my-8 text-white bg-gradient-to-r hover:bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 shadow-md hover:shadow-orange-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
									Contact me
								</motion.button>
							</Link>
						</motion.div>
						<motion.div animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 0.9}} className="absolute bottom-1/4 animate-bounce">
							<Link href={"#about"} scroll={false}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
								</svg>
							</Link>
						</motion.div>
					</div>
				</section>

				<section className='h-screen z-10' id="about">
					<div className="w-11/12 h-full flex justify-between mx-auto gap-8">
						<div className=" my-auto backdrop-blur-sm bg-gray-300/30 h-1/3 w-4/12 rounded-xl hover:h-2/3 transition-all overflow-hidden"></div>
						<div className=" my-auto backdrop-blur-sm bg-gray-300/30 h-1/3 w-4/12 rounded-xl hover:h-2/3 transition-all overflow-hidden"></div>
						<div className=" my-auto backdrop-blur-sm bg-gray-300/30 h-1/3 w-4/12 rounded-xl hover:h-2/3 transition-all overflow-hidden"></div>
					</div>
				</section>

			</main>
			<Footer/>
    	</div>
  	)
}
