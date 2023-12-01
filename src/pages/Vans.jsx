import React  from "react"


export default function Vans() {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vans.map(van => (
                    <div className="van-tile">
                        <img src={van.imageUrl} alt="van picture" />
                        <div className="van--info">
                            <h3>{van.name}</h3>
                            <h3>${van.price} <br /><span>/day</span></h3>
                        </div>
                        <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    </div>
                ))}
                
            </div>
            
        </div>
    )
}