import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Navbar.css"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

export const Navbar = () => {
  const location = useLocation().pathname
  const [toggle, setToggle] = useState(false)

  const Links = () => (
    <>
      <Link to="/real_state/" style={location === "/real_state/" ? {color: "#6f66ee"} : {color: null}}>Home</Link>
      <Link to="/real_state/landing" style={location === "/real_state/landing" ? {color: "#6f66ee"} : {color: null}}>Landing</Link>
      <Link to="/real_state/about" style={location === "/real_state/about" ? {color: "#6f66ee"} : {color: null}}>About</Link>
      <Link to="/real_state/team" style={location === "/real_state/team" ? {color: "#6f66ee"} : {color: null}}>Team</Link>
      <Link to="/real_state/gallery" style={location === "/real_state/gallery" ? {color: "#6f66ee"} : {color: null}}>Gallery</Link>
      <Link to="/real_state/contact" style={location === "/real_state/contact" ? {color: "#6f66ee"} : {color: null}}>Contact</Link>
    </>
  )

  return (
    <div className='app__navbar'>
      <div className="app__navbar-links">
        <Links />
      </div>
      <div className="app__navbar-toggle">
        {toggle
        ? <div className="app__navbar-toggle_screen">
            <div className="app__navbar-toggle_screen-links slide-in-blurred-left">
              <AiOutlineClose id='toggleCloseIcon' onClick={()=>setToggle(prev=>!prev)}/>
              <Links />
            </div>
            <div className="toggle_screen-bg slide-in-fwd-center"/>
          </div>
        : <AiOutlineMenu onClick={()=>setToggle(prev=>!prev)}/>
        }
      </div>
    </div>
  )
}