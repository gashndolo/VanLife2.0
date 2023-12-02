import {NavLink, Link} from "react-router-dom"
import IMAGES from "../images/images"

export default function Header() {
    return (
        <header>
            <Link to="/"><img src={IMAGES.logo} alt="Van Life Logo" className="logo"/></Link>
            <nav>
                <ul>
                    <li>
                        <NavLink 
                            to="/host"
                            className={({isActive}) => isActive ? "active" : ""}
                        >
                        Host
                        </NavLink></li>
                    <li>
                        <NavLink 
                            to="/about"
                            className={({isActive}) => isActive ? "active" : ""}
                        >
                        About
                        </NavLink></li>
                    <li>
                        <NavLink 
                            to="/vans"
                            className={({isActive}) => isActive ? "active" : ""}
                        >
                        Vans
                        </NavLink></li>
                </ul>
            </nav>
        </header>
    )
}