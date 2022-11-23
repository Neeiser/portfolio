//COMPONENTS
import Head from 'next/head';
import Link from 'next/link';

//ASSETS
import Image from 'next/image';
import imgJumbo from '../public/assets/img/img-jumbo.png';

export default function Home() {
  return (
    <div>
      <main className=' font-InterRegular bg-fixed bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-800 to-black'>
        
        <section className='h-screen'>
          <div className='h-screen flex'>
            <div className='w-3/5 flex flex-col justify-center'>
              <Image src={imgJumbo} alt="Image Jumbo"/>
            </div>
            <div className='w-2/5 flex flex-col justify-center text-gray-200'>
              <h1 className='py-3 text-7xl'>Hi, I'm Stefano!</h1>
              <p className='py-2 text-gray-400 text-xl font-semibold'>Web Developer Full Stack Jr.</p>
              <div>
                <button type="button" className="my-8 text-white bg-gradient-to-r hover:bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 shadow-md hover:shadow-orange-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                CONTACT ME
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className=' h-screen z-0'>
          <div className=' h-screen w-4/5 mx-auto rounded-3xl bg-gray-700/50'>
            <h1 className=' text-center text-gray-200'>Examples</h1>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
      </main>
      <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></script>
    </div>
  )
}
