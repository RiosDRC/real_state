import React from 'react'
import './ApartmentTypes.css'

const ApartmentTypes = () => {
  const TypesCard = ({ imgUrl, title }) => (
    <div className="TypesCard">
      <div style={{backgroundImage: `url(${imgUrl})`}} />
      <h4>{title}</h4>
    </div>
  )

  return (
    <div className="app__home-apartmentTypes">
      <h2>Explore Apartment Types</h2>
      <button className="blackButton">View More</button>
      <div className="app__home-apartmentTypes_box">
        <TypesCard imgUrl='https://img.freepik.com/premium-photo/modern-corporate-architecture-can-be-seen-cityscape-office-buildings_410516-276.jpg' title='Office' />
        <TypesCard imgUrl='https://res.cloudinary.com/brickandbatten/images/f_auto,q_auto/v1641000863/wordpress_assets/22826-ModContemporary-Accents_w-GauntletGray-a-ok/22826-ModContemporary-Accents_w-GauntletGray-a-ok.jpg?_i=AA' title='House' />
        <TypesCard imgUrl='https://www.theplancollection.com/Upload/Designers/126/1325/Plan1261325Image_4_12_2019_1029_3_891_593.jpg' title='Apartments' />
      </div>
    </div>
  )
}

export default ApartmentTypes