import {Link} from "react-router-dom"
import IMAGES from "../images/images"

export default function Header() {
    return (
        <header>
            <Link to="/"><img src={IMAGES.logo} alt="Van Life Logo" className="logo"/></Link>
            <nav>
            <ul>
                <li><Link to="/host">Host</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/vans">Vans</Link></li>
            </ul>
            </nav>
        </header>
    )
}