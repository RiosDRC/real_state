import React from 'react'
import './Register.css'

const Register = ({bg, color, buttonBg}) => {
  return (
    <div className='app__home-register' style={{background: bg, color: color}}>
        <h2>Get Your Dream House</h2>
        <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h5>
        <form onSubmit={(e)=>e.preventDefault()}>
            <div>
                <label>Name</label>
                <input type="text" required placeholder='Enter your Name'/>
            </div>
            <div>                
                <label>Email</label>
                <input type="email" required placeholder='Enter your Email'/>
            </div>
            <button type="submit" className='blackButton' style={{background: buttonBg}}>SUBMIT</button>
        </form>
    </div>
  )
}

export default Register