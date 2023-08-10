import React from 'react'
import Layout from '../hocs/Layout'
import {
  Comment,
  Introduction,
  Offices
} from '../containers/Contact'

const Contact = () => {
  return (
    <Layout>
        <Introduction title='Contact' color='white' bgImage='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <Comment />
        <Offices />
    </Layout>
  )
}

export default Contact