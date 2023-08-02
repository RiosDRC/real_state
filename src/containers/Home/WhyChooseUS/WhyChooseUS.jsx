import React, { useEffect, useRef, useState } from 'react'
import './WhyChooseUS.css'

const WhyChooseUS = () => {
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
    <div className='app__home-wcu' ref={elementRef}>
      <div className={`app__home-wcu_left ${isVisible ? 'scale-in-center' : ''}`}/>
      <div className="app__home-wcu_right">
        <h2>Trusted By Best Exclusive Agents</h2>
        <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h5>
        <ul>
            <li>Find excellent deals</li>
            <li>Friendly host & Fast support</li>
            <li>List your own property</li>
        </ul>
      </div>
    </div>
  )
}

export default WhyChooseUS