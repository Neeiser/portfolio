import Footer from "../components/Footer";

//FRAMER MOTION
import { motion, useAnimation } from "framer-motion";

//VANTA.JS
import { useEffect, useRef, useState,  } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";

const Timeline = () => {

	const [vantaEffect, setVantaEffect] = useState(0);
	const vantaRef = useRef(null);
	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				WAVES({
					el: vantaRef.current,
					THREE: THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.00,
					minWidth: 200.00,
					scale: 1.00,
					scaleMobile: 1.00,
					color: 0x121214,
					shininess: 37.00,
					waveHeight: 40.00,
					waveSpeed: 0.30,
					zoom: 0.85
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
				<section className='relative'>
					<div className='py-12 flex'></div>
					<div className=' py-16'>
						<div className="h-1/2 w-full flex items-center justify-center lg:justify-start py-12 lg:py-20">
							{/* Spacing: */}
							<div className="h-3/4 w-0 lg:w-1/5"></div>
								<motion.div animate={{ x: 0, opacity: 1}} initial={{ x: -100, opacity: 0}} transition={{ delay: 0.7}} className="w-11/12 lg:w-2/5 flex flex-col backdrop-blur-sm bg-orange-300/30 rounded-md p-8">
									<div className="flex flex-col-reverse lg:flex-row justify-between">
										<h1 className="text-3xl pt-4 pb-2 font-semibold text-gray-300/95">VRtualize SRL</h1>
										<span className="lg:pl-4 justify-self-end font-semibold">08/2022 - 10/2022</span>
									</div>
									<p className=" italic font-semibold pb-6">Web Developer Full Stack</p>
									<p>...</p>
								</motion.div>
							</div>
							<div className="h-1/2 w-full flex items-center justify-center lg:justify-end py-12 lg:py-20">

								<motion.div animate={{ x: 0, opacity: 1}} initial={{ x: 100, opacity: 0}} transition={{ delay: 0.9}} className="w-11/12 lg:w-2/5 flex flex-col backdrop-blur-sm bg-orange-300/30 rounded-md p-8">
									<div className="flex flex-col-reverse lg:flex-row justify-between">
										<h1 className="text-3xl pt-4 pb-2 font-semibold text-gray-300/95">Boolean</h1>
										<span className="lg:lg:pl-4 justify-self-end font-semibold">01/2022 - 06/2022</span>
									</div>
									<p className=" italic font-semibold pb-6">Full Stack Web Developer Trainee</p>
									<p>Corso Full-time di 6 mesi che spazia da linguaggi e tecnologie di frontend (HTML-CSS-JS-Vue.js) a backend (PHP, Laravel, SQL).</p>
									<p>Lavori in gruppo e utilizzo di Github con merging e gestione repository.</p>
								</motion.div>

								{/* Spacing: */}
							<div className="h-3/4 w-0 lg:w-1/5"></div>

						</div>
					</div>
				</section>

				<section className='relative'>
					<div className='h-4/5'>
						<div className="h-1/2 w-full flex items-center justify-center lg:justify-start py-12 lg:py-20">
							{/* Spacing: */}
							<div className="h-3/4 w-0 lg:w-1/5"></div>
					
							<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.3, delay: 0.6 }}
							variants={{
								visible: { opacity: 1, x: 0 },
								hidden: { opacity: 0, x: 100 }
							}} 
							className="w-11/12 lg:w-2/5 flex flex-col backdrop-blur-sm bg-gray-300/30 rounded-md p-8">
								<div className="flex flex-col-reverse lg:flex-row justify-between">
									<h1 className="text-3xl pt-4 pb-2 font-semibold text-gray-300/95">Impiegato Amministrazione</h1>
									<span className="lg:pl-4 justify-self-end font-semibold">03/2020 - 08/2020</span>
								</div>
								<p className=" italic font-semibold pb-6">Autofficina Peugeot (Varese)</p>
								<ul className="list-disc ml-6">
									<li>Impiegato Amministrativo</li>
									<li>Gestione Informatica</li>
									<li>Lavori di Grafica</li>  
								</ul>
							</motion.div>

						</div>
						<div className="h-1/2 w-full flex items-center justify-center lg:justify-end py-12 lg:py-20">

							<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.3, delay: 0.6 }}
							variants={{
								visible: { opacity: 1, x: 0 },
								hidden: { opacity: 0, x: -100 }
							}} 
							className="w-11/12 lg:w-2/5 flex flex-col backdrop-blur-sm bg-gray-300/30 rounded-md p-8">
								<div className="flex flex-col-reverse lg:flex-row justify-between">
									<h1 className="text-3xl pt-4 pb-2 font-semibold text-gray-300/95">Data Entry - Gestione Dati</h1>
									<span className="lg:pl-4 justify-self-end font-semibold">2014 - 2018</span>
								</div>
								<p className=" italic font-semibold pb-6">Themis - Gorla Maggiore (VA)</p>
								<p>Azienda di recupero materiali plastici e riciclo.</p>
								<ul className="list-disc ml-6">
									<li>Data Entry</li>
									<li>Gestione Dati</li>
									<li>Gestione Documentazione</li>  
								</ul>
							</motion.div>

							{/* Spacing: */}
							<div className="h-3/4 w-0 lg:w-1/5"></div>

						</div>
					</div>

					<div className='py-24 flex'></div>

				<Footer/>
				</section>
			</main>
		</div>
    );
}

export default Timeline;