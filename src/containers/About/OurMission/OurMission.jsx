import React, { useEffect, useRef, useState } from 'react'
import './OurMission.css'
import { BiSupport } from 'react-icons/bi'
import { RiTeamFill } from 'react-icons/ri'

const OurMission = () => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
    const scrollDirectionRef = useRef(0);
  
    
    const handleVisibilityChange = (entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    };
  
    useEffect(() => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };
  
      const observer = new IntersectionObserver(handleVisibilityChange, observerOptions);
  
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
      
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        if (currentScrollPos > scrollDirectionRef.current) {
          scrollDirectionRef.current = currentScrollPos;
          observer.observe(elementRef.current);
        } else if (currentScrollPos < scrollDirectionRef.current) {
          scrollDirectionRef.current = currentScrollPos;
          observer.unobserve(elementRef.current);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className="app__about">
        <div className="app__about-left">
            <h2>We're on a Mission to Change View of Real Estate Field</h2>
            <img src="https://media.angi.com/s3fs-public/shaking-hands-with-agent.jpeg?impolicy=leadImage" alt="making a deal" />
        </div>
        <div className={`app__about-right ${isVisible ? 'scale-in-center' : ''}`} ref={elementRef}>
            <p>Sample text. Click to Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate.
                Pharetra magna ac placerat vestibulum. Quam lacus suspendisse faucibus interdum posuere lorem.
                Egestas tellus rutrum tellus pellentesque eu tincidunt. Neque vitae tempus quam pellentesque nec.</p>
            <div className='app__about-right_box'>
                <div>
                    <BiSupport />
                    <h5>24/7 Support</h5>
                </div>
                <div>
                    <RiTeamFill />
                    <h5>Top Team</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurMission