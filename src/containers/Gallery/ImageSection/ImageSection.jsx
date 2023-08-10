import React, { useEffect, useRef, useState } from 'react'
import './ImageSection.css'
import { properties } from '../../../constants/constants'

const ImageSection = ({title, imgUrl}) => {
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
    <div className='app__gallery-imageSection'>
        <h2>{title || properties[1].city}</h2>
        <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h5>
        <img src={imgUrl || properties[1].imgUrl} alt={'ImgSec-' + properties[1].city} ref={elementRef} className={`${isVisible ? 'scale-in-center' : ''}`}/>
    </div>
  )
}

export default ImageSection