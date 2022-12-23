
import { motion } from "framer-motion";

import Image from "next/image";
import Logo from "../public/assets/logos/brand/ghost.png"

import Link from "next/link";

export default function Navbar() {
    return (
        <div className=" w-screen bg-transparent fixed top-5 z-10">
            <nav className="flex w-11/12  items-center justify-between flex-wrap px-6 mx-auto py-2 z-10 bg-gray-300/95 backdrop-blur-sm rounded-2xl">
                    <div className=" w-1/3 flex">
                        <motion.div whileHover={{ scaleY: [1, 1.2, 1]}} transition={{duration:0.4}}>
                            <Link href='/'>
                                <Image src={Logo} alt="Logo Neeiser" width={64} height={64}/>
                            </Link>
                        </motion.div>
                    </div>
                <ul className="w-1/3 justify-center flex font-semibold text-blackOW">
                    <motion.li whileHover={{ scale: 1.2}} className='mx-8 hover:text-orange-500 border-b-4 border-t-4 border-transparent hover:border-b-orange-500 transition-colors'>
                        <Link href='/skills'>Skills</Link>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.2}} className='mx-8 hover:text-orange-500 border-b-4 border-t-4 border-transparent hover:border-b-orange-500 transition-colors'>
                        <Link href='/works'>Works</Link>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.2}} className='mx-8 hover:text-orange-500 border-b-4 border-t-4 border-transparent hover:border-b-orange-500 transition-colors'>
                        <Link href='/timeline'>Timeline</Link>
                    </motion.li>
                </ul>
                <div className="w-1/3 flex  justify-end">
                    <Link href='/contact'>
                        <motion.button whileHover={{ scale: 1.1}} whileTap={{ scale: 0.8}} type="button" className=" text-white bg-gradient-to-r hover:bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 shadow-md hover:shadow-orange-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Contact me
                        </motion.button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}