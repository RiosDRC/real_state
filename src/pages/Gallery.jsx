import React from 'react'
import Layout from '../hocs/Layout'
import {
  ImageSection,
  Introduction,
  Locations,
  Register,
  Selection,
  WhyChooseUS
} from '../containers/Gallery'

const Gallery = () => {
  return (
    <Layout>
        <Introduction title='Gallery' color='white' bgImage='https://images.pexels.com/photos/2387674/pexels-photo-2387674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <Locations/>
        <ImageSection />
        <Selection />
        <WhyChooseUS />
        <ImageSection title='Exclusive apartments' imgUrl='https://images.pexels.com/photos/16755352/pexels-photo-16755352/free-photo-of-edificio-en-perspectiva.jpeg'/>
        <Register bg='#fbeced'/>
    </Layout>
  )
}

export default Gallery