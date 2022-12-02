
import Navbar from "./Navbar"

export default function Layout({ children }:{children:any}) {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div> {children} </div>
        </div>
    )
}