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
              <h1 className='py-5 text-7xl'>Hi, I'm Stefano!</h1>
              <p className='py-3 text-gray-400 text-xl font-semibold'>Web Developer Full Stack Jr.</p>
              <div>
                <button type="button" className="my-8 text-white bg-gradient-to-r hover:bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 shadow-md hover:shadow-orange-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  <Link href='/contact'>Contact me</Link>
                </button>
              </div>
              <div className="absolute bottom-1/4">
                <Link href={"#about"} scroll={false}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className='h-screen z-0' id="about">
          <div className='h-screen w-4/6 mx-auto rounded-3xl bg-gray-700/50 px-16 flex flex-col justify-evenly py-10'>
            <h1 className='text-center text-4xl font-bold text-orange-500'>About Me</h1>
            <div className='relative w-1/2 h-1/4 bg-gray-800 rounded-xl group shadow-2xl overflow-hidden'>
              <div className='absolute flex w-full h-full items-center justify-center group-hover:translate-x-full transition duration-1000 ease-in-out rounded-xl'>
                <h2 className='font-bold text-2xl text-orange-500'>Chi sono</h2>
              </div>
              <div className='absolute flex w-full h-full items-center justify-center opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out rounded-xl'>
                <p>Grande appassionato del mondo digitale...</p>
              </div>
            </div>
            <div className='relative w-1/2 h-1/4 bg-gray-800 rounded-xl group shadow-2xl self-end overflow-hidden'>
              <div className='absolute flex w-full h-full items-center justify-center group-hover:-translate-x-full transition duration-1000 ease-in-out rounded-xl'>
                <h2 className='font-bold text-2xl text-orange-500'>I miei hobby</h2>
              </div>
              <div className='absolute flex w-full h-full items-center justify-center opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out rounded-xl'>
                <p>CIAO A TUTTI</p>
              </div>
            </div>
            <div className='relative w-1/2 h-1/4 bg-gray-800 rounded-xl group shadow-2xl overflow-hidden'>
              <div className='absolute flex w-full h-full items-center justify-center group-hover:translate-x-full transition duration-1000 ease-in-out rounded-xl'>
                <h2 className='font-bold text-2xl text-orange-500'>i miei hobby</h2>
              </div>
              <div className='absolute flex w-full h-full items-center justify-center opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out rounded-xl'>
                <p>CIAO A TUTTI</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
