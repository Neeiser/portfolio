
import Navbar from "./Navbar"

export default function Layout({ children }:{children:any}) {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div> {children} </div>
            <footer className=' h-10 bg-black'>
                <div className='flex h-full justify-center items-center text-gray-500'>
                <p>Designed & Built by Stefano Stortini (Neeiser)</p>
                <p> © 2022</p>
                </div>
            </footer>
        </div>
    )
}