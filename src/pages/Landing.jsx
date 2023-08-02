import React from 'react'
import Layout from '../hocs/Layout'
import {
  Achievements,
  FindHome,
  Introduction,
  Testimonial,
  WhyChooseUs,
} from '../containers/Landing'
import {
  ForRent, Register, Sponsored,
}
from '../containers/Home'
import ApartmentTypes from '../components/ApartmentTypes/ApartmentTypes'

const Landing = () => {
  return (
    <Layout>
        <Introduction />
        <FindHome />
        <ForRent />
        <ApartmentTypes bg='#fd6703' title='white' boxBg='white'/>
        <Achievements />
        <WhyChooseUs />
        <Sponsored bg='#fd6703' />
        <Testimonial />
        <Register bg='#1a1a1a' color='white' buttonBg='#fd6703'/>
    </Layout>
  )
}

export default Landing