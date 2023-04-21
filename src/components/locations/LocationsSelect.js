
import { useState, useEffect } from "react"

export const LocationSelect = ({getId}) => {

    const [locations, setLocations] = useState([])


    useEffect(() => {
    fetch(`http://localhost:8088/locations`)
    .then(response => response.json())
    .then( locationArray => setLocations(locationArray))
    }, [])

    return(

            <select name="locationId" className="locationSelect"  required onChange={getId}>
                <option  value="">Select a location</option>
                {locations.map(location => <option key={location.id} value={location.id}>{location.name}</option>)}
            </select>
    )
}