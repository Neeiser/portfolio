import { motion } from "framer-motion";

//COMPONENTS
import Link from "next/link";

//ASSETS
import Image from 'next/image';
import neeiserLogo from '../public/assets/img/neeiser-logo.png';

export default function Home() {
  return (
    <div>
      <main className=' bg-fixed bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-800 to-black'>
        <section className='h-screen relative'>
          <div className='h-screen flex'>
            <div className='w-full flex flex-col justify-center items-center text-gray-200'>
              <motion.h1 animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 0.6}} className='py-5 text-8xl flex cursor-pointer'>
                <motion.div whileHover={{ y: -10 }}>H</motion.div>
                <motion.div whileHover={{ y: -10 }}>i</motion.div>
                <motion.div whileHover={{ y: -10 }}>,</motion.div>
                <motion.div>&nbsp;</motion.div>
                <motion.div whileHover={{ y: -10 }}>I</motion.div>
                <motion.div whileHover={{ y: -10 }}>'</motion.div>
                <motion.div whileHover={{ y: -10 }}>m</motion.div>
                <motion.div>&nbsp;</motion.div>
                <motion.div whileHover={{ y: -10 }}>S</motion.div>
                <motion.div whileHover={{ y: -10 }}>t</motion.div>
                <motion.div whileHover={{ y: -10 }}>e</motion.div>
                <motion.div whileHover={{ y: -10 }}>f</motion.div>
                <motion.div whileHover={{ y: -10 }}>a</motion.div>
                <motion.div whileHover={{ y: -10 }}>n</motion.div>
                <motion.div whileHover={{ y: -10 }}>o</motion.div>
                <motion.div whileHover={{ y: -10 }}>!</motion.div>
              </motion.h1>
              <motion.p animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 0.7}} className='py-3 text-gray-400 text-xl font-semibold cursor-default'>Web Developer Full Stack Jr.</motion.p>
              <motion.div animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 0.8}}>
                <Link href='/contact'>
                  <motion.button whileHover={{ scale: 1.1}} whileTap={{ scale: 0.8}} type="button" className="my-8 text-white bg-gradient-to-r hover:bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 shadow-md hover:shadow-orange-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Contact me
                  </motion.button>
                </Link>
              </motion.div>
              <motion.div animate={{ y: 0, opacity: 1}} initial={{ y: -100, opacity: 0}} transition={{ delay: 0.9}} className="absolute bottom-1/4">
                <Link href={"#about"} scroll={false}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <section className='h-screen z-0 flex relative overflow-hidden' id="about">
          <motion.h1 animate={{ x: 0, opacity: 1}} initial={{ x: -100, opacity: 0}} transition={{ delay: 0.9, duration: 1}} className=" text-bg absolute text-blackOW">ABOUT</motion.h1>
          <div className="w-5/6 h-full flex justify-around items-center my-auto mx-auto">
            <motion.div whileHover={{ scale: 1}} initial={{ scale: 0.5}} className="text-center h-2/4 w-1/3 p-6 rounded-lg border-black bg-white bg-opacity-10 backdrop-blur-lg drop-shadow-lg">
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-orangeOW py-8">Chi sono</h1>
              <p className="mx-8 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat natus obcaecati aspernatur, nulla maxime necessitatibus officiis, dicta quam nihil error saepe! Minus non perferendis atque, eligendi nemo id mollitia?</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1}} initial={{ scale: 0.5}} className="text-center h-2/4 w-1/3 p-6 rounded-lg border-black bg-white bg-opacity-10 backdrop-blur-lg drop-shadow-lg">
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-orangeOW py-8">Le mie aspirazioni</h1>
              <p className="mx-8 text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fuga illum. Ea, reiciendis ipsam molestias dicta quaerat delectus facilis in architecto illum consectetur nobis ipsum cumque quod voluptatum impedit quisquam?</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1}} initial={{ scale: 0.5}} className="text-center h-2/4 w-1/3 p-6 rounded-lg border-black bg-white bg-opacity-10 backdrop-blur-lg drop-shadow-lg">
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-orangeOW py-8">I miei hobby</h1>
              <p className="mx-8 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sunt corrupti nisi beatae eum accusamus sequi delectus, sapiente soluta. Alias a magni totam modi eveniet eaque rem ipsa quisquam libero!</p>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  )
}
