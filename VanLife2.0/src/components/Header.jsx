import {Link} from "react-router-dom"
import IMAGES from "../images/images"

export default function Header() {
    return (
        <nav>
            <Link to="/"><img src={IMAGES.logo} alt="Van Life Logo" className="logo"/></Link>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/vans">Vans</Link></li>
            </ul>
        </nav>
    )
}