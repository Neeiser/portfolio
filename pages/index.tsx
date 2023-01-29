//VANTA.JS
import { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

//FRAMER MOTION
import { motion } from "framer-motion";

//COMPONENTS
import Link from "next/link";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import Collapsible from 'react-collapsible';


const Home = () => {
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
			<main ref={vantaRef} className='z-0 relative'>
				<section className='h-screen'>
					<div className='h-full w-full flex flex-col justify-center items-center text-gray-200'>
						<motion.h1 className='py-5 text-5xl md:text-8xl flex cursor-pointer'>
							<motion.div className=" hover:text-orange-500 transition-colors" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 0.5}} >
								<motion.p whileHover={{ y: -10 }}>H</motion.p> 
							</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 0.6}} whileHover={{ y: -10 }}>
								<motion.p whileHover={{ y: -10 }}>i</motion.p> 
							</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 0.7}} whileHover={{ y: -10 }}>
								<motion.p whileHover={{ y: -10 }}>,</motion.p> 
							</motion.div>
							<motion.div>&nbsp;</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 0.8}} whileHover={{ y: -10 }}>
								<motion.p whileHover={{ y: -10 }}>I</motion.p> 
							</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 0.9}} whileHover={{ y: -10 }}>&apos;</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 1.0}} whileHover={{ y: -10 }}>
								<motion.p whileHover={{ y: -10 }}>m</motion.p> 
							</motion.div>
							<motion.div>&nbsp;</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 1.1}} whileHover={{ y: -10 }}>
								<motion.p whileHover={{ y: -10 }}>S</motion.p> 
							</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 1.2}} whileHover={{ y: -10 }}>
								<motion.p whileHover={{ y: -10 }}>t</motion.p> 
							</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 1.3}} whileHover={{ y: -10 }}>
								<motion.p whileHover={{ y: -10 }}>e</motion.p> 
							</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 1.4}} whileHover={{ y: -10 }}>
								<motion.p whileHover={{ y: -10 }}>f</motion.p> 
							</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 1.5}} whileHover={{ y: -10 }}>
								<motion.p whileHover={{ y: -10 }}>a</motion.p> 
							</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 1.6}} whileHover={{ y: -10 }}>
								<motion.p whileHover={{ y: -10 }}>n</motion.p> 
							</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 1.7}} whileHover={{ y: -10 }}>
								<motion.p whileHover={{ y: -10 }}>o</motion.p> 
							</motion.div>
							<motion.div className=" hover:text-orange-500 transition-colors" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 1.8}} whileHover={{ y: -10 }}>
								<motion.p whileHover={{ y: -10 }}>!</motion.p> 
							</motion.div>
						</motion.h1>
						<motion.p animate={{ x: 0, opacity: 1}} initial={{ x: 100, opacity: 0}} transition={{ delay: 2.0}} className='py-3 text-gray-400 text-base md:text-xl font-semibold cursor-default'>Web Developer Full Stack Jr.</motion.p>
						<motion.div animate={{ x: 0, opacity: 1}} initial={{ x: -100, opacity: 0}} transition={{ delay: 2.1}}>
							<Link href='/contact'>
								<motion.button whileHover={{ scale: 1.1}} whileTap={{ scale: 0.8}} type="button" className="my-8 text-white bg-gradient-to-r hover:bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 shadow-md hover:shadow-orange-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
									Contact me
								</motion.button>
							</Link>
						</motion.div>
						<motion.div animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 2.2}} className="absolute bottom-1/4 animate-bounce">
							<Link href={"#about"} scroll={false}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
								</svg>
							</Link>
						</motion.div>
					</div>
				</section>

				<section className='h-screen z-10 relative' id="about">
					<div className="h-full flex">
						<Dropdown></Dropdown>
					</div>
				</section>

			</main>
			<Footer/>
    	</div>
  	)
}
export default Home;