import { motion } from "framer-motion";

import Navbar from "./Navbar"

export default function Layout({ children }:{children:any}) {
    return (
        <div>
            <motion.div animate={{ y: 0, opacity: 1}} initial={{ y: -200, opacity: 0}} transition={{ delay: 0.2}}>
                <Navbar />
            </motion.div>
            <div> {children} </div>
        </div>
    )
}