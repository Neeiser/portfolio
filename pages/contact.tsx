//VANTA.JS
import { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

import { motion } from "framer-motion";

import Link from "next/link"
import Footer from "../components/Footer";

import Image from "next/image"
import GitHub from "../public/assets/logos/social/icons8-github-250.png"
import LinkedIn from "../public/assets/logos/social/icons8-linkedin-circled-250.png"

export default function Contact() {
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
        <section ref={vantaRef} className='h-full relative'>
            <div className="flex flex-col h-full w-full justify-center pt-40">
                <form action="https://formsubmit.co/stortini.work@gmail.com" method="POST">
                    <div className="flex flex-col w-2/4 p-12 mx-auto bg-gray-300/50 rounded-3xl shadow-xl backdrop-blur-sm">

                        <motion.div animate={{ x: 0, opacity: 1}} initial={{ x: 200, opacity: 0}} transition={{ delay: 0.2}}  className=" w-full py-6">
                            <h1 className="text-2xl text-blackOW font-semibold pl-4">Name</h1>
                            <input className="w-full focus:outline-none bg-transparent p-4 text-blackOW italic" type="text" name="name" placeholder="Your Name" required/>
                            <div className=" w-4 h-1 border-b-2 ml-4 border-blue-100">

                            </div>
                        </motion.div>

                        <motion.div animate={{ x: 0, opacity: 1}} initial={{ x: 200, opacity: 0}} transition={{ delay: 0.4}} className=" w-full py-6">
                            <h1 className="text-2xl text-blackOW font-semibold pl-4">Email</h1>
                            <input className="w-full focus:outline-none bg-transparent p-4 text-blackOW italic" type="email" name="email" placeholder="Your Email" required/>
                            <div className=" w-4 h-1 border-b-2 ml-4 border-blue-100">

                            </div>
                        </motion.div>

                        <motion.div animate={{ x: 0, opacity: 1}} initial={{ x: 200, opacity: 0}} transition={{ delay: 0.6}}  className=" w-full py-6">
                            <h1 className="text-2xl text-blackOW font-semibold pl-4">Message</h1>
                            <textarea className="w-full focus:outline-none bg-transparent p-4 text-blackOW italic" name="message" placeholder="Leave a message..." required/>
                            
                            <div className=" w-4 h-1 border-b-2 ml-4 border-blue-100">

                            </div>
                        </motion.div>

                        <input type="hidden" name="_captcha" value="false"></input>

                        <input type="hidden" name="_next" value="http://localhost:3000/"></input>

                        <motion.div animate={{ x: 0, opacity: 1}} initial={{ x: 200, opacity: 0}} transition={{ delay: 0.8}}  className="flex mx-auto py-6">
                            <motion.button whileHover={{ scale: 1.1}} whileTap={{ scale: 0.8}} className=" w-full focus:outline-none text-white bg-gradient-to-r hover:bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 shadow-md hover:shadow-orange-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">
                                Send
                            </motion.button>
                        </motion.div>

                    </div>
                </form>

                <div className=" flex flex-col w-2/4 p-12 mx-auto">

                    <motion.h1 animate={{ x: 0, opacity: 1}} initial={{ x: 200, opacity: 0}} transition={{ delay: 1}} className="text-2xl text-orangeOW py-6">Social & More...</motion.h1>
                    <motion.div animate={{ x: 0, opacity: 1}} initial={{ x: 200, opacity: 0}} transition={{ delay: 1.1}} className="flex gap-4">
                        
                        <Link className="w-12" href={"https://github.com/Neeiser"}>
                            <motion.div whileHover={{ rotate: 360}}>
                                <Image src={GitHub} alt="GitHub Logo"></Image>
                            </motion.div>
                        </Link>
                    
                    
                        <Link className="w-12" href={"https://www.linkedin.com/in/stefano-stortini-ss/"}>
                            <motion.div whileHover={{ rotate: 360}}>
                                <Image src={LinkedIn} alt="LinkedIn Logo"></Image>
                            </motion.div>
                        </Link>
                        
                    </motion.div>
                </div>
                <Footer/>

            </div>
        </section>
    )
}