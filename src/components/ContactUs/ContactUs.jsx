import React from 'react'
import "./ContactUs.css"
import { BsPhoneVibrate } from 'react-icons/bs'

const ContactUs = ({bg}) => {
  return (
    <div className='app__contactUs'>
        <div className="app__contactUs-left" style={{background: bg}}>
            <h3>Need Help?</h3>
            <h3>Talk To Our Expert</h3>
        </div>
        <div className="app__contactUs-right" style={{background: bg}}>
            <button>CONTACT US</button>
            <button><BsPhoneVibrate />1 111 234 5566</button>
        </div>
    </div>
  )
}

export default ContactUs