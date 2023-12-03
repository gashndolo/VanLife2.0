import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {

    const isActiveStyle =  {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    }

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to=""
                            end
                            style={({isActive}) => isActive ? isActiveStyle : null}
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="reviews"
                            style={({isActive}) => isActive ? isActiveStyle : null}
                        >
                            Reviews
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="vans"
                            style={({isActive}) => isActive ? isActiveStyle : null}
                        >
                            Vans
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="income"
                            style={({isActive}) => isActive ? isActiveStyle : null}
                        >
                            Income
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}