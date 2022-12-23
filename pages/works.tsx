
import Link from "next/link";

import Image from "next/image";
import certo from "../public/assets/photos/certo.png";
import Logo from "../public/assets/logos/brand/ghost.png"

//VANTA.JS
import { useEffect, useRef, useState,  } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";

//FRAMER MOTION
import { motion } from "framer-motion";

export default function Works() {
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
        <div className="h-screen z-0" ref={vantaRef}>
          <div className="flex flex-col h-full mx-auto my-auto">
            <div className="flex h-4/5 justify-center flex-col w-6/12 mx-auto my-auto gap-12">
              
              <motion.div animate={{ x: 0, opacity: 1}} initial={{ x: -100, opacity: 0}} transition={{ delay: 0.7}} className=" py-6 flex backdrop-blur-sm bg-gray-300/30 w-full rounded-md">
                <div className="px-6 flex my-auto">
                  <Image height={110} width={110} className=" rounded-md" src={certo} alt="Certo Logo"/>
                </div>
                <div className=" gap-2 flex flex-col">
                  <h1 className="text-3xl font-semibold text-gray-300/95">Certo</h1>
                  <p className=" italic font-semibold">Landing page realizzata con WordPress(CMS).</p>
                  <p>HTML, CSS, SCSS, Bootstrap, Javascript, PHP</p>
                  <div>
                    <a target="_blank" href="https://www.certoentertainment.com/" rel="noopener noreferrer" className="text-orangeOW">Link al sito</a>
                  </div>
                </div>
              </motion.div>

              <motion.div animate={{ x: 0, opacity: 1}} initial={{ x: 100, opacity: 0}} transition={{ delay: 0.9}} className=" py-6 flex backdrop-blur-sm bg-gray-300/30 w-full rounded-md">
                <div className="px-6 flex my-auto justify-center">
                  <Image height={110} width={110} className=" rounded-md" src={Logo} alt="Portfolio Logo"/>
                </div>
                <div className=" gap-2 flex flex-col">
                  <h1 className="text-3xl font-semibold text-gray-300/95">Portfolio Personale</h1>
                  <p className=" italic font-semibold">Poco da dire, è il sito che state visionando in questo memento.</p>
                  <p>HTML, CSS, TailWindCSS, Framer Motion, Three.js, Javascript, Typescript, React, Next.js</p>
                  <div>
                    <Link className="text-orangeOW" href={"/"}>Link al sito</Link>
                  </div>
                </div>
              </motion.div>

            </div>
            <footer className=' z-10 h-10 bg-black'>
                <div className='flex h-full justify-center items-center text-gray-500'>
                  <p>Designed & Built by Stefano Stortini (Neeiser)</p>
                  <p> © 2022</p>
                </div>
            </footer>
          </div>
        </div>
    );
}