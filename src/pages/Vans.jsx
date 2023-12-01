import React  from "react"
import { Link } from "react-router-dom"

export default function Vans() {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        <Link to={`/vans/${van.id}`}>
            <div key={van.id} className="van-tile">
                <img src={van.imageUrl} alt="van picture" />
                <div className="van--info">
                    <h1>{van.name}</h1>
                    <h2>${van.price} <br /><span>/day</span></h2>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </div>
        </Link>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
                
            </div>
            
        </div>
    )
}