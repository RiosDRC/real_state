import React from 'react'
import "./ContactUs.css"
import { BsPhoneVibrate } from 'react-icons/bs'

const ContactUs = () => {
  return (
    <div className='app__contactUs'>
        <div className="app__contactUs-left">
            <h3>Need Help?</h3>
            <h3>Talk To Our Expert</h3>
        </div>
        <div className="app__contactUs-right">
            <button>CONTACT US</button>
            <button><BsPhoneVibrate />1 111 234 5566</button>
        </div>
    </div>
  )
}

export default ContactUs