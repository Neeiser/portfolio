﻿import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex sticky w-full top-0 items-center justify-between flex-wrap p-6 z-10 bg-orange-200">
            <Link href='/'>
                <h1 className=' text-4xl italic font-bold text-orange-500'>Stefano Stortini</h1>
            </Link>
            <ul className="flex  font-semibold text-gray-600">
                <li className='mx-8 hover:text-orange-500 border-b-4 border-t-4 border-transparent hover:border-b-orange-500 transition-colors'>
                    <Link href='/skills'>Skills</Link>
                </li>
                <li className='mx-8 hover:text-orange-500 border-b-4 border-t-4 border-transparent hover:border-b-orange-500 transition-colors'>
                    <Link href='/works'>Works</Link>
                </li>
                <li className='mx-8 hover:text-orange-500 border-b-4 border-t-4 border-transparent hover:border-b-orange-500 transition-colors'>
                    <Link href='/cv'>Timeline</Link>
                </li>
            </ul>
            <button type="button" className=" text-white bg-gradient-to-r hover:bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 shadow-md hover:shadow-orange-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                <Link href='/contact'>Contact me</Link>
            </button>
        </nav>
    )
}