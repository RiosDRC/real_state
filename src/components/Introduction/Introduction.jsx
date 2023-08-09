import React from 'react'
import "./Introduction.css"

const Introduction = ({bgImage}) => {
  const handleSubmit = e => {
    e.preventDefault()
    
    const formData = new FormData(e.target);
    console.log({'email': formData.get('email')})
  }

  return (
    <div className='app__intro scale-in-center'>
      <div className="app__intro_main" style={bgImage?{backgroundImage: `url(${bgImage})`}:null}>
        <h1>Easy Way to Find a Perfect Property</h1>
        <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing</h4>
        <h4>Lorem ipsum <span>dolor</span></h4>
        <form onSubmit={handleSubmit}>
          <input type="email" name='email' required placeholder='Enter a valid email address'/>
          <button type='submit'>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default Introduction