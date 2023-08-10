import React from 'react'
import './locations.css'
import { properties } from '../../../constants/constants'

const Locations = () => {
  return (
    <div className='app__gallery-locations'>
        {properties.slice(0, 6).map((location, index) => (
            <div className="app__gallery-locations_boxCard" key={`gallery-location_${index}`}>
                <img src={location.imgUrl} alt={location.city} />
                <h4>{location.city}</h4>
                <p>{location.Number} properties</p>
            </div>
        ))}
    </div>
  )
}

export default Locations