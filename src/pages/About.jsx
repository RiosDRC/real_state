import React from 'react'
import Layout from '../hocs/Layout'
import introImg from '../assets/low-angle-shot-facade-white-modern-building-blue-clear-sky.jpg'
import {
  ImageSection,
  Introduction, OurMission,
  Achievements,
  OurAgents,
  Info,
  Sponsored,
  ContactUs
} from '../containers/About'

const About = () => {
  return (
    <Layout>
        <Introduction bgImage={introImg} title='About'/>
        <OurMission />
        <ImageSection />
        <Achievements bg='#fbeced' />
        <OurAgents />
        <Info bgUrl='https://ychef.files.bbci.co.uk/976x549/p0202jwh.jpg'/>
        <Sponsored />
        <ContactUs />
    </Layout>
  )
}

export default About