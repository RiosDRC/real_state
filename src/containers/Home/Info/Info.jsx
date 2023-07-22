import React, { useEffect, useRef, useState } from 'react'
import './Info.css'
import { TbBulb, TbUsers } from 'react-icons/tb'
import { FiSettings } from 'react-icons/fi'

const Info = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  
  const handleVisibilityChange = (entries) => {
    const entry = entries[0];
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleVisibilityChange, observerOptions);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div className='app__home-info' ref={elementRef}>
      <div className="app__home-info_left">
        <h2>Let's Find The Right Selling Option</h2>
        <div className='app__home-info_left-content'>
          <div className={`app__home-info_svg ${isVisible ? 'scale-in-center' : ''}`}>
            <TbBulb />
          </div>
          <h4>Property Management
            <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span>
          </h4>
        </div>
        <div className='app__home-info_left-content'>
          <div className={`app__home-info_svg ${isVisible ? 'scale-in-center' : ''}`}>
            <FiSettings />
          </div>
          <h4>Mortgage Services
            <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span>
          </h4>
        </div>
        <div className='app__home-info_left-content'>
          <div className={`app__home-info_svg ${isVisible ? 'scale-in-center' : ''}`}>
            <TbUsers />
          </div>
          <h4>Currency Services
            <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span>
          </h4>
        </div>
      </div>
      <div className={`app__home-info_right ${isVisible ? 'scale-in-center' : ''}`}/>
    </div>
  )
}

export default Info