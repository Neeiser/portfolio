import Link from "next/link"

import Image from "next/image"
import GitHub from "../public/assets/logos/social/icons8-github-250.png"
import LinkedIn from "../public/assets/logos/social/icons8-linkedin-circled-250.png"

export default function Contact() {
    return (
        <section className='h-screen relative bg-fixed bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-800 to-black'>
            <div className="flex flex-col h-full w-full justify-center">
                <form action="https://formsubmit.co/stortini.work@gmail.com" method="POST" autoComplete="off">
                    <div className="flex flex-col w-2/3 p-12 mx-auto">

                        <div className=" w-full py-6">
                            <h1 className="text-2xl text-orangeOW pl-4">Name</h1>
                            <input className="w-full focus:outline-none bg-transparent border-b p-4 text-gray-300" type="text" name="name" placeholder="Your Name" required/>
                        </div>

                        <div className=" w-full py-6">
                            <h1 className="text-2xl text-orangeOW pl-4">Email</h1>
                            <input className="w-full focus:outline-none bg-transparent border-b p-4 text-gray-300" type="email" name="email" placeholder="Your Email" required/>
                        </div>

                        <div className=" w-full py-6">
                            <h1 className="text-2xl text-orangeOW pl-4">Message</h1>
                            <input className="w-full focus:outline-none bg-transparent border-b p-4 text-gray-300" type="text" name="message" placeholder="Leave a message..." required/>
                        </div>

                        <div className="flex mx-auto py-6">
                            <button  className=" w-full focus:outline-none text-white bg-gradient-to-r hover:bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 shadow-md hover:shadow-orange-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">
                                Send
                            </button>
                        </div>

                    </div>
                </form>

                <div className=" h-1/3 flex flex-col w-2/3 p-12 mx-auto">

                    <h1 className="text-2xl text-orangeOW py-6">Social & More...</h1>
                    <div className="flex gap-4">
                
                        <Link className="w-12 hover:rotate-180 hover:scale-125 transition-all" href={"https://github.com/Neeiser"}>
                            <Image src={GitHub} alt="GitHub Logo"></Image>
                        </Link>
                    
                    
                        <Link className="w-12 hover:rotate-180 hover:scale-125 transition-all" href={"https://www.linkedin.com/in/stefano-stortini-ss/"}>
                            <Image src={LinkedIn} alt="LinkedIn Logo"></Image>
                        </Link>
                        
                    </div>
                </div>

            </div>
        </section>
    )
}