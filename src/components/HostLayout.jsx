import { Outlet, Link } from "react-router-dom";

export default function HostLayout() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="">Dashboard</Link></li>
                    <li><Link to="reviews">Reviews</Link></li>
                    <li><Link to="income">Income</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}