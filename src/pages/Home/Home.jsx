import React from 'react'
import "./Home.css"
import { Achievements, ApartmentTypes, ForRent, Info, Introduction, Properties } from '../../containers/Home'

const Home = () => {
  return (
    <div>
      <Introduction />
      <Properties />
      <ForRent />
      <Info />
      <Achievements />
      <ApartmentTypes />
    </div>
  )
}

export default Home