import React, { useEffect, useState } from 'react'
import './Comment.css'

const Comment = () => {
    const [ info, setInfo ] = useState({name: '', email: '', message: ''})

    const handleChange = e => {
        setInfo(prev => ({ ...prev, [e.target.name]: e.target.value}));
    }

  return (
    <div className="app__contact-comment">
        <div className="app__contact-comment_left">
            <h2>We'd love to hear from you</h2>
            <p>Sample text. Click to Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate.
                Pharetra magna ac placerat vestibulum. Quam lacus suspendisse faucibus interdum posuere lorem. Egestas tellus
                rutrum tellus pellentesque eu tincidunt. Neque vitae tempus quam pellentesque nec.</p>
        </div>

        <form className="app__contact-comment_right" onSubmit={e=>(e.preventDefault(), console.log(info))}>
            <label>Name</label>
            <input type="text"
            value={info.name}
            name='name'
            required
            placeholder='Enter your name'
            onChange={e=>handleChange(e)}/>
            <label>Email</label>
            <input type="email"
            value={info.email}
            name='email'
            required
            placeholder='Enter a valid email address'
            onChange={e=>handleChange(e)}/>
            <label>Message</label>
            <textarea name="message"
            rows="8" value={info.message}
            onChange={e=>handleChange(e)}
            required
            placeholder='Enter your message'/>
            <button type='submit' className='blackButton'>Submit</button>
        </form>
    </div>
  )
}

export default Comment