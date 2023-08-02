import React from 'react'
import Layout from '../hocs/Layout'
import { Achievements,
  ForRent,
  Info,
  Introduction,
  Properties,
  Register,
  Sponsored,
  Testimonial,
  WhyChooseUS,
} from '../containers/Home'
import ApartmentTypes from '../components/ApartmentTypes/ApartmentTypes'

const Home = () => {
  return (
    <Layout>
      <Introduction />
      <Properties />
      <ForRent />
      <Info />
      <Achievements />
      <ApartmentTypes />
      <WhyChooseUS />
      <Sponsored />
      <Testimonial />
      <Register />
    </Layout>
  )
}

export default Home