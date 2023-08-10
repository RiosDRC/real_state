import React from 'react'
import './Introduction.css'

const Introduction = () => {
  return (
    <div className='app__landing-intro scale-in-center'>
        <h2>Find the perfect place to live with your family</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        <form onSubmit={e=>e.preventDefault()}>
            <input type="email" placeholder='Enter a valid email address' required/>
            <button type='submit' className='blackButton'>SUBMIT</button>
        </form>
    </div>
  )
}

export default Introduction