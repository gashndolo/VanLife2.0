import React from "react"
import { Link } from "react-router-dom"

export default function HostVans() {
    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        <Link to={van.id}>
            <div className="hostvan">
                <img src={van.imageUrl} alt="Picture of a van"/>
                <div className="hostvan-info">
                    <h1>{van.name}</h1>
                    <p>${van.price}/day</p>
                    <p>{van.description}</p>
                </div>
            </div>
        </Link>
    ))
    return (
        <div className="hostvan-container">
            <h1>Your listed vans</h1>
            {vans ? 
                vanElements :
                <h3>Loading...</h3>
            }
        </div>
    )
}