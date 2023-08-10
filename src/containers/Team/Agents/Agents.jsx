import React, { useEffect, useRef, useState } from 'react'
import './Agents.css'
import { agents } from '../../../constants/constants'

const Agents = () => {
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
    <div className='app__team-agents'>
        <h2>Our Esclusive Agents</h2>
        <button className="blackButton">View More</button>

        <div className="app__team-agents_box" ref={elementRef}>
            {agents.map((agent, index) => (
                <div className={`app__team-agents_box-card ${isVisible ? 'scale-in-center' : ''}`} key={agent.name + '-' + index}>
                    <img src={agent.imgUrl} alt={agent.name}/>
                    <h3>{agent.name}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Agents