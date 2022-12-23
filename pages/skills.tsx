import Image from "next/image";
import html5 from "../public/assets/logos/tek/html5.png";
import css from "../public/assets/logos/tek/css3.png";
import javascript from "../public/assets/logos/tek/javascript.png";
import sass from "../public/assets/logos/tek/sass.png";
import typescript from "../public/assets/logos/tek/typescript.png";
import vuejs from "../public/assets/logos/tek/vuejs.png";
import tailwindcss from "../public/assets/logos/tek/tailwindcss.png";
import framermotion from "../public/assets/logos/tek/framer-motion.png";
import three from "../public/assets/logos/tek/threejs.png";
import bootstrap from "../public/assets/logos/tek/bootstrap.png";
import git from "../public/assets/logos/tek/git.png";
import laravel from "../public/assets/logos/tek/laravel.png";
import mysql from "../public/assets/logos/tek/mysql.png";
import nextjs from "../public/assets/logos/tek/nextjs.png";
import nodejs from "../public/assets/logos/tek/nodejs.png";
import php from "../public/assets/logos/tek/php.png";
import react from "../public/assets/logos/tek/react.png";
import visualstudiocode from "../public/assets/logos/tek/visual-studio-code.png";
import woocommerce from "../public/assets/logos/tek/woocommerce.png";
import wordpress from "../public/assets/logos/tek/wordpress.png";

//VANTA.JS
import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

//FRAMER MOTION
import { motion } from "framer-motion";

export default function Skills() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
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
            backgroundColor: 0x121214,
            points: 10.00,
            maxDistance: 17.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
      <div className="h-screen z-0" ref={vantaRef}>
        <div className="w-11/12 h-full flex justify-between mx-auto gap-8">
          <div className=" p-6 my-auto backdrop-blur-lg w-1/3 rounded-xl">
            <h1 className=" pb-8 text-center text-3xl font-semibold text-gray-300/95">Front End</h1>
            <div className="flex gap-4 flex-wrap justify-center">

              <motion.div className="group flex relative" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 0.7}}>
                <Image width={110} height={110} src={html5} alt="html5 Icon"/>
                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-md text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">HTML</span>
              </motion.div>

              <motion.div className="group flex relative" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 0.8}}>
                <Image width={110} height={110} src={css} alt="css3 Icon"/>
                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-md text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">CSS</span>
              </motion.div>

              <motion.div className="group flex relative" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 0.9}}>
                <Image width={110} height={110} src={sass} alt="sass Icon"/>
                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-md text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">SASS</span>
              </motion.div>

              <motion.div className="group flex relative" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 1}}>
                <Image width={110} height={110} src={bootstrap} alt="bootstrap Icon"/>
                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-md text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">Bootstrap</span>
              </motion.div>

              <motion.div className="group flex relative" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 1.1}}>
                <Image width={110} height={110} src={tailwindcss} alt="tailwindcss Icon"/>
                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-md text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">TailwindCSS</span>
              </motion.div>

              <motion.div className="group flex relative" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 1.2}}>
                <Image width={110} height={110} src={three} alt="threejs Icon"/>
                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-md text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">Three.js</span>
              </motion.div>

              <motion.div className="group flex relative" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 1.3}}>
                <Image width={110} height={110} src={framermotion} alt="framer-motion Icon"/>
                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-md text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">Framer Motion</span>
              </motion.div>

              <motion.div className="group flex relative" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 1.4}}>
                <Image width={110} height={110} src={javascript} alt="javascript Icon"/>
                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-md text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">Javascript</span>
              </motion.div>

              <motion.div className="group flex relative" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 1.5}}>
                <Image width={110} height={110} src={typescript} alt="typescript Icon"/>
                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-md text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">Typescript</span>
              </motion.div>

              <motion.div className="group flex relative" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 1.6}}>
                <Image width={110} height={110} src={vuejs} alt="vuejs Icon"/>
                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-md text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">Vue.js</span>
              </motion.div>

              <motion.div className="group flex relative" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 1.7}}>
                <Image width={110} height={110} src={react} alt="react Icon"/>
                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-md text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">React</span>
              </motion.div>

              <motion.div className="group flex relative" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 1.8}}>
                <Image width={110} height={110} src={nextjs} alt="nextjs Icon"/>
                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-md text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">Next.js</span>
              </motion.div>

            </div>
          </div>
          <div className=" p-6 my-auto backdrop-blur-lg w-1/3 rounded-xl">
            <h1 className="pb-8 text-center text-3xl font-semibold text-gray-300/95">Back End</h1>
            <div className="flex gap-4 flex-wrap justify-center">

              <motion.div className="group flex relative" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 1.9}}>
                <Image width={110} height={110} src={php} alt="php Icon"/>
                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-md text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">PHP</span>
              </motion.div>

              <motion.div className="group flex relative" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 2}}>
                <Image width={110} height={110} src={laravel} alt="laravel Icon"/>
                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-md text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">Laravel</span>
              </motion.div>

              <motion.div className="group flex relative" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 2.1}}>
                <Image width={110} height={110} src={nodejs} alt="nodejs Icon"/>
                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-md text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">Node.js</span>
              </motion.div>

              <motion.div className="group flex relative" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 2.2}}>
                <Image width={110} height={110} src={mysql} alt="mysql Icon"/>
                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-md text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">MySQL</span>
              </motion.div>

            </div>
          </div>
          <div className=" p-6 my-auto backdrop-blur-lg w-1/3 rounded-xl">
            <h1 className="pb-8 text-center text-3xl font-semibold text-gray-300/95">Management</h1>
            <div className="flex gap-4 flex-wrap justify-center">

              <motion.div className="group flex relative" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 2.3}}>
                <Image width={110} height={110} src={visualstudiocode} alt="visual studio code Icon"/>
                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-md text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">Visual Studio Code</span>
              </motion.div>

              <motion.div className="group flex relative" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 2.4}}>
                <Image width={110} height={110} src={git} alt="git Icon"/>
                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-md text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">Git/GitHub</span>
              </motion.div>

              <motion.div className="group flex relative" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 2.5}}>
                <Image width={110} height={110} src={wordpress} alt="wordpress Icon"/>
                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-md text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">WordPress</span>
              </motion.div>

              <motion.div className="group flex relative" animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 2.6}}>
                <Image width={110} height={110} src={woocommerce} alt="woocommerce Icon"/>
                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-md text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">WooCommerce</span>
              </motion.div>

            </div>
          </div>
        </div>
        <footer className=' -mt-10 h-10 bg-black'>
          <div className='flex h-full justify-center items-center text-gray-500'>
            <p>Designed & Built by Stefano Stortini (Neeiser)</p>
            <p> © 2022</p>
          </div>
        </footer>
      </div>
    );
}