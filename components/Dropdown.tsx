﻿import React, { useState } from "react";
import Collapsible from 'react-collapsible';

const Dropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownClick = (id : any) => {
    setOpenDropdown(id === openDropdown ? null : id);
  };

  return (
    <div className="w-11/12 flex mx-auto">
        <div className="flex flex-col md:flex-row my-auto gap-12 h-1/2">
            <Collapsible
                trigger={<button className="w-full px-4 py-2 text-lg font-medium rounded-tr-md rounded-tl-md text-white bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600" onClick={() => handleDropdownClick(1)}>About Me</button>}
                transitionTime={100}
                open={openDropdown === 1}
            >
                <p className="flex bg-white p-6 text-white bg-gradient-to-t from-orange-400 via-orange-500 to-orange-600 rounded-br-md rounded-bl-md">
                My name is Stefano and I am a Web Developer with a strong focus on Front-End. 
                I first became interested in programming during my career path and since then I have never stopped. 
                I am strongly oriented towards continuous learning and experimenting with new technologies. 
                I believe that a good Front-End programmer is someone who can combine artistic flair with a good dose of technical skills, and that is what I strive to achieve.
                </p>
            </Collapsible>

            <Collapsible
                trigger={<button className=" w-full px-4 py-2 text-lg font-medium rounded-tr-md rounded-tl-md text-white bg-gradient-to-b from-indigo-400 via-indigo-500 to-indigo-600" onClick={() => handleDropdownClick(2)}>Hobby</button>}
                transitionTime={100}
                open={openDropdown === 2}
            >
                <p className="flex bg-white p-6 text-white bg-gradient-to-t from-indigo-400 via-indigo-500 to-indigo-600 rounded-br-md rounded-bl-md">
                My passions revolve around all multimedia and artistic content. These activities allow me to express myself and develop my work in a creative and passionate way. 
                In particular, video games have always fascinated me for their ability to combine art, technology and storytelling. 
                This passion has had a significant impact on my work, inspiring me to experiment with new ideas and always strive to create engaging and immersive experiences for users.
                </p>
            </Collapsible>

            <Collapsible
                trigger={<button className=" w-full px-4 py-2 text-lg font-medium rounded-tr-md rounded-tl-md text-white bg-gradient-to-b from-pink-400 via-pink-500 to-pink-600" onClick={() => handleDropdownClick(3)}>Goals</button>}
                transitionTime={100}
                open={openDropdown === 3}
            >
                <p className="flex bg-white p-6 text-white bg-gradient-to-t from-pink-400 via-pink-500 to-pink-600 rounded-br-md rounded-bl-md">
                In the future, I want to grow as a Front-End Web Developer. 
                I always love discovering new things and improving my skills, so I will always strive to experiment with innovative technologies. 
                But it's not just about technology, it's also important for me to understand user needs and create solutions that meet them. 
                My main goal is to grow in both skills and knowledge, through the use of empathy and curiosity.
                </p>
            </Collapsible>			
        </div>
    </div>
  );
};

export default Dropdown;