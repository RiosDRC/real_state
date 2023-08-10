import React, { useEffect, useRef, useState } from 'react'

const ImageSection = () => {
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
    <div className={`${isVisible ? 'scale-in-center' : ''}`}
    style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem'}}
    ref={elementRef}>
        <img style={{maxHeight: '600px', minWidth: '300px', borderRadius: '30px'}}
        src="https://www.bankrate.com/2022/12/06100436/buying-a-house-with-no-money-down.jpg" alt="happy family" />
    </div>
  )
}

export default ImageSection;