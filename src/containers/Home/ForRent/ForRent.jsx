import React, { useEffect, useRef, useState } from 'react'
import "./ForRent.css"
import { forRent } from '../../../constants/constants'

const ForRent = () => {
    const [ isVisible, setIsVisible ] = useState(false);
    const elementRef = useRef(null);
    const scrollDirectionRef = useRef(0);

    const handleVisibilityChange = (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      };
    
      useEffect(() => {
        const observerOptions = {
          root: null,
          rootMargin: '100px',
          threshold: 0.2,
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
    <div className="app__home-forRent">
        <div className="app__home-forRent_heading">
            <h2>Properties For Rent</h2>
            <h4>Lorem ipsum <span>dolor</span></h4>
            <button className='blackButton'>View More</button>
        </div>
        <div className="app__home-forRent_boxcard" ref={elementRef}>
            {forRent.map((item, index) => (
                <div className={`app__home-forRent_boxcard-card ${isVisible ? 'scale-in-center' : ''}`}
                key={"forRent-" + index} style={{backgroundImage: `url(${item.imgUrl})`}}>
                    <div>
                        <h5>$ {item.price}</h5>
                        <p>{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ForRent