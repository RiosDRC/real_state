import React from 'react'
import Layout from '../hocs/Layout'
import {
  Agents,
  ContactUs,
  Introduction,
  Testimonial,
} from '../containers/Team'

const Team = () => {
  return (
    <Layout>
        <Introduction bgImage='https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title='Team' color='white'/>
        <Agents />
        <Testimonial />
        <ContactUs bg='#f2f2f2'/>
    </Layout>
  )
}

export default Team