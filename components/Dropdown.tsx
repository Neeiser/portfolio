import React, { useState } from "react";
import Collapsible from 'react-collapsible';
//FRAMER MOTION
import { motion, useAnimation } from "framer-motion";

const Dropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownClick = (id : any) => {
    setOpenDropdown(id === openDropdown ? null : id);
  };

  return (
    <div className="w-11/12 flex mx-auto">
        <div className="flex flex-col md:flex-row my-auto gap-12 h-1/2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.6 }} variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: -100 } }}>
                <Collapsible
                    trigger={<button className="w-full px-4 py-2 text-lg font-medium rounded-tr-md rounded-tl-md text-white bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600" onClick={() => handleDropdownClick(1)}>About Me</button>}
                    transitionTime={100}
                    open={openDropdown === 1}
                >
                    <p className="flex bg-white p-6 text-white bg-gradient-to-t from-orange-400 via-orange-500 to-orange-600 rounded-br-md rounded-bl-md">
                    My name is Stefano and I am a Web Developer with a strong focus on Front-End. 
                    I first became interested in programming during my career path and since then I kept practicing and improving. 
                    I am strongly oriented towards continuous learning and experimenting with new technologies. 
                    I believe that a good Front-End programmer is someone who can combine artistic flair with a good dose of technical skills, and that is what I strive to achieve.
                    </p>
                </Collapsible>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.8 }} variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: -100 } }}>
                <Collapsible
                    trigger={<button className=" w-full px-4 py-2 text-lg font-medium rounded-tr-md rounded-tl-md text-white bg-gradient-to-b from-indigo-400 via-indigo-500 to-indigo-600" onClick={() => handleDropdownClick(2)}>Hobby</button>}
                    transitionTime={100}
                    open={openDropdown === 2}
                >
                    <p className="flex bg-white p-6 text-white bg-gradient-to-t from-indigo-400 via-indigo-500 to-indigo-600 rounded-br-md rounded-bl-md">
                    My passions revolve around multimedia and artistic content. These activities allow me to express myself and develop my work in a creative and passionate way. 
                    In particular, video games have always fascinated me for their ability to combine art, technology and storytelling. 
                    This passion has a significant impact on my work, inspiring me to experiment with new ideas and always strive to create engaging and immersive experiences for users.
                    </p>
                </Collapsible>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.3, delay: 1.0 }} variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: -100 } }}>
                <Collapsible
                    trigger={<button className=" w-full px-4 py-2 text-lg font-medium rounded-tr-md rounded-tl-md text-white bg-gradient-to-b from-pink-400 via-pink-500 to-pink-600" onClick={() => handleDropdownClick(3)}>Goals</button>}
                    transitionTime={100}
                    open={openDropdown === 3}
                >
                    <p className="flex bg-white p-6 text-white bg-gradient-to-t from-pink-400 via-pink-500 to-pink-600 rounded-br-md rounded-bl-md">
                    In the future, I want to grow as a Front-End Web Developer. 
                    I always love discovering new things and improving my skills, so I will always strive to experiment with innovative technologies. 
                    But it&apos;s not just about technology, it&apos;s also important for me to understand user&apos;s needs and create solutions that meet them. 
                    My main goal is to grow in both skills and knowledge through the use of empathy and curiosity.
                    </p>
                </Collapsible>			
            </motion.div>
        </div>
    </div>
  );
};

export default Dropdown;