
import { motion } from "framer-motion";

import Image from "next/image";
import Logo from "../public/assets/logos/brand/ghost.png"

import Link from "next/link";
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 640 && isOpen) {
            setIsOpen(false);
          }
        };
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, [isOpen]);


    return (
        <div className=" w-full bg-transparent fixed top-5 z-10">
            <div className="flex flex-col w-11/12 px-8 mx-auto py-4 z-10 bg-gray-300/95 backdrop-blur-sm rounded-2xl">
                <nav className="flex w-full items-center justify-between">
                    <div>
                        <motion.div whileHover={{ scaleY: [1, 1.2, 1]}} transition={{duration:0.4}}>
                            <Link href='/'>
                                <Image src={Logo} alt="Logo Neeiser" width={64} height={64}/>
                            </Link>
                        </motion.div>
                    </div>
                    <ul className="w-full hidden sm:flex justify-end items-center font-semibold text-blackOW tracking-wider gap-2">
                        <motion.li whileHover={{ scale: 1.2}} className='mx-8 hover:text-orange-500 border-b-4 border-t-4 border-transparent hover:border-b-orange-500 transition-colors'>
                            <Link href='/skills'>Skills</Link>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2}} className='mx-8 hover:text-orange-500 border-b-4 border-t-4 border-transparent hover:border-b-orange-500 transition-colors'>
                            <Link href='/works'>Works</Link>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2}} className='mx-8 hover:text-orange-500 border-b-4 border-t-4 border-transparent hover:border-b-orange-500 transition-colors'>
                            <Link href='/timeline'>Timeline</Link>
                        </motion.li>
                        <div className="flex justify-end">
                            <Link href='/contact'>
                                <motion.button whileHover={{ scale: 1.1}} whileTap={{ scale: 0.8}} type="button" className=" text-white bg-gradient-to-r hover:bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 shadow-md hover:shadow-orange-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center tracking-wider">
                                    Contact me
                                </motion.button>
                            </Link>
                        </div>
                    </ul>
                    <div className="block sm:hidden">
                        <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white" onClick={() => setIsOpen(!isOpen)}>
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>
                </nav>
                <ul className={`${isOpen ? 'flex' : 'hidden'} flex-col justify-center items-center font-semibold text-blackOW pt-6`}>
                    <motion.li whileHover={{ scale: 1.2 }} className='py-2 hover:text-orange-500 border-b-4 border-t-4 border-transparent hover:border-b-orange-500 transition-colors'>
                        <Link href='/skills'>Skills</Link>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.2 }} className='py-2 hover:text-orange-500 border-b-4 border-t-4 border-transparent hover:border-b-orange-500 transition-colors'>
                        <Link href='/works'>Works</Link>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.2 }} className='py-2 hover:text-orange-500 border-b-4 border-t-4 border-transparent hover:border-b-orange-500 transition-colors'>
                        <Link href='/timeline'>Timeline</Link>
                    </motion.li>
                    <div className="flex my-6">
                        <Link href='/contact'>
                            <motion.button whileHover={{ scale: 1.1}} whileTap={{ scale: 0.8}} type="button" className=" text-white bg-gradient-to-r hover:bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 shadow-md hover:shadow-orange-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Contact me
                            </motion.button>
                        </Link>
                    </div>
                </ul>
            </div>
        </div>
    )
}