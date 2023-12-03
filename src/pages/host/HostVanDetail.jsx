import React from "react"
import { useParams, NavLink, Link } from "react-router-dom"

export default function HostVanDetail() {
    const [van, setVan] = React.useState(null)

    const params = useParams()

    React.useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans[0]))
    }, [params.id]) 

    const isActiveStyle =  {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    }

    return (
        <>
            
            {van ? 
            <div className="hostvan-container">
                <Link
                    to="../vans"
                    className="back-button"
                >&larr; <span>Back to all vans</span></Link>
                <div className="hostvan">
                    <div className="flex-correction">
                        <img src={van.imageUrl} alt="Picture of a van" className="host-image"/>
                        <div className="hostvan-info">
                            <i className={`van-type ${van.type} selected`}>{van.type}</i>
                            <h1>{van.name}</h1>
                            <p>${van.price}/day</p>
                            <p>{van.description}</p>
                        </div>       
                    </div>
                    <div className="break">   
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to=""
                                        end
                                        style={({isActive}) => isActive ? isActiveStyle : null}
                                    >
                                        Details
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="pricing"
                                        style={({isActive}) => isActive ? isActiveStyle : null}
                                    >
                                        Pricing
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="photos"
                                        style={({isActive}) => isActive ? isActiveStyle : null}
                                    >
                                        Photos
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div> 
            </div>
                : <h1>Loading...</h1>
            }
        </>
    )
}