
import Link from "next/link";
import Footer from "../components/Footer";

import Image from "next/image";
import certo from "../public/assets/photos/certo.png";
import Logo from "../public/assets/logos/brand/ghost.png"

//VANTA.JS
import { useEffect, useRef, useState,  } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";

//FRAMER MOTION
import { motion } from "framer-motion";

const Works = () => {
	const [vantaEffect, setVantaEffect] = useState(0);
	const vantaRef = useRef(null);
	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				GLOBE({
					el: vantaRef.current,
					THREE: THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.00,
					minWidth: 200.00,
					scale: 1.00,
					scaleMobile: 1.00,
					color: 0xe1994e,
					color2: 0xe1994e,
					size: 2.00,
					backgroundColor: 0x121214
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);
 	return (
        <div className=" z-0" ref={vantaRef}>
          	<div className="flex flex-col h-full mx-auto my-auto">
            	<div className="flex md:h-4/5 justify-center flex-col w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto gap-12 my-48">
              
					<motion.div animate={{ x: 0, opacity: 1}} initial={{ x: -100, opacity: 0}} transition={{ delay: 0.7}} className=" p-6 flex flex-col md:flex-row backdrop-blur-sm bg-gray-300/30 w-full rounded-md">
						<div className="p-6 flex my-auto justify-center">
							<Image height={110} width={110} className=" rounded-md" src={certo} alt="Certo Logo"/>
						</div>
						<div className=" gap-4 flex flex-col py-6 basis-2/3">
							<h1 className="text-3xl font-semibold text-gray-300/95">Certo</h1>
							<p className=" italic font-semibold">Landing page realizzata con WordPress(CMS).</p>
							<p>HTML, CSS, SCSS, Bootstrap, Javascript, PHP</p>
							<a target="_blank" href="https://www.certoentertainment.com/" rel="noopener noreferrer" className="py-2 px-4 bg-gradient-to-r  from-orange-500 via-orange-600 to-orange-700 shadow-md backdrop-blur-sm flex rounded-2xl justify-center">
								<p  className="text-whiteOW drop-shadow-lg shadow-black">Link al sito</p>
							</a>
						</div>
					</motion.div>

					<motion.div animate={{ x: 0, opacity: 1}} initial={{ x: 100, opacity: 0}} transition={{ delay: 0.9}} className=" p-6 flex flex-col md:flex-row backdrop-blur-sm bg-gray-300/30 w-full rounded-md">
						<div className="p-6 flex my-auto justify-center">
							<Image height={110} width={110} className=" rounded-md" src={Logo} alt="Portfolio Logo"/>
						</div>
						<div className=" gap-4 flex flex-col py-6 basis-2/3">
							<h1 className="text-3xl font-semibold text-gray-300/95">Portfolio Personale</h1>
							<p className=" italic font-semibold">Poco da dire, è il sito che state visionando in questo momento.</p>
							<p>HTML, CSS, TailWindCSS, Framer Motion, Three.js, Javascript, Typescript, React, Next.js</p>
							<Link href={"/"} className="py-2 px-4 bg-gradient-to-r  from-orange-500 via-orange-600 to-orange-700 shadow-md backdrop-blur-sm flex rounded-2xl justify-center">
								<p className="text-whiteOW drop-shadow-lg shadow-black" >Link al sito</p>
							</Link>
							<div>
								
							</div>
						</div>
					</motion.div>

            	</div>
            	<Footer/>
			</div>
		</div>
    );
}

export default Works;