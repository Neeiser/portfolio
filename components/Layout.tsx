
import Navbar from "./Navbar"

export default function Layout({ children }:{children:any}) {
    return (
        <div>
            <Navbar />
            <div> {children} </div>
        </div>
    )
}