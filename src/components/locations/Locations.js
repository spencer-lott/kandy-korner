import { useEffect, useState } from "react"
import "./Locations.css"

export const LocationList = () => {
    const [locations, setLocations] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/locations`)
            .then(response => response.json())
            .then((locationsArray) => {
                setLocations(locationsArray)
})
        },
        [] 
    )
    return <>
    <h2>List of Locations</h2>
    <article className="locations">
        {
        locations.map(
            (location) => {
                return <section className="location" key={`location--${location.id}`}>
                    <div className="place">
                    <header>{location.name}</header>
                    <p>{location.address}</p>
                    <p>{location.sqFootage} square feet</p>
                    </div>
                </section>
            }
        )}
    
    
    
    
    </article>
    </>
    
}