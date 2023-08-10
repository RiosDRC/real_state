import React, { useEffect, useRef, useState } from 'react'
import './Testimonial.css'
import { BiSolidQuoteAltRight } from 'react-icons/bi'

const Testimonial = () => {
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
    <div className='app__team-testimonial' ref={elementRef}>
      <div className={`app__team-testimonial_left ${isVisible ? 'scale-in-center' : ''}`}/>
      <div className="app__team-testimonial_right">
        <div>
          <BiSolidQuoteAltRight />
          <p>Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.
            Ut sem nulla pharetra diam sit amet nisl. Enim nunc</p>
          <h5>Celia Almeda</h5>
        </div>
        <div>
          <BiSolidQuoteAltRight />
          <p>Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.
            Ut sem nulla pharetra diam sit amet nisl. Enim nunc</p>
          <h5>Frank Kinney</h5>
        </div>
      </div>
    </div>
  )
}

export default Testimonial