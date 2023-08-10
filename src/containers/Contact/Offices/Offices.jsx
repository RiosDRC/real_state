import React from 'react'
import './Offices.css'
import paris from '../../../assets/paris.png'
import london from '../../../assets/london.png'
import newYork from '../../../assets/new_york.png'

const Card = ({ imgUrl, city, location }) => (
    <div className="app__contact-offices_box-card">
        <img src={imgUrl} alt="" />
        <h4>{city}</h4>
        <p>{location}</p>
    </div>
)

const Offices = () => {
  return (
    <div className="app__contact-offices">
        <h2>Visit Our Office</h2>
        <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h3>
        <div className="app__contact-offices_box">
            <Card city="Paris" location="5656 21nd Ave, Seattle, WA 98456 (315) 905-4567" imgUrl={paris}/>
            <Card city="London" location="5656 21nd Ave, Seattle, WA 98456 (315) 905-4567" imgUrl={london}/>
            <Card city="New York" location="5656 21nd Ave, Seattle, WA 98456 (315) 905-4567" imgUrl={newYork}/>
        </div>
    </div>
  )
}

export default Offices