import React from 'react'
import "./Home.css"
import { ForRent, Introduction, Properties } from '../../containers/Home'

const Home = () => {
  return (
    <div>
      <Introduction />
      <Properties />
      <ForRent />
    </div>
  )
}

export default Home