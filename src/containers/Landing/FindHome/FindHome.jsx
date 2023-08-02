import React, { useEffect, useRef, useState } from 'react';
import './FindHome.css';
import { TbBulb, TbUsers } from 'react-icons/tb';
import { FiSettings } from 'react-icons/fi';

const FindHome = () => {
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
      rootMargin: '50px',
      threshold: 0.3,
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
    <div className='app__landing-findHome' ref={elementRef}>
        <div className="app__landing-findHome_left">
            <div className={`app__landing-findHome_left-img ${isVisible ? 'scale-in-center' : ''}`}/>
        </div>
      <div className="app__landing-findHome_right">
        <h2>Let's Find The Right Selling Option</h2>
        <div className='app__landing-findHome_right-content'>
          <div className={`app__landing-findHome_svg ${isVisible ? 'scale-in-center' : ''}`}>
            <TbBulb />
          </div>
          <h4>Property Management
            <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span>
          </h4>
        </div>
        <div className='app__landing-findHome_right-content'>
          <div className={`app__landing-findHome_svg ${isVisible ? 'scale-in-center' : ''}`}>
            <FiSettings />
          </div>
          <h4>Mortgage Services
            <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span>
          </h4>
        </div>
        <div className='app__landing-findHome_right-content'>
          <div className={`app__landing-findHome_svg ${isVisible ? 'scale-in-center' : ''}`}>
            <TbUsers />
          </div>
          <h4>Currency Services
            <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span>
          </h4>
        </div>
      </div>
    </div>
  )
}

export default FindHome