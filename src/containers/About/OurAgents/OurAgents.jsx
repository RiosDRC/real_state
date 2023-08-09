import React, { useEffect, useRef, useState } from 'react'
import './OurAgents.css'
import agent1 from '../../../assets/agent_1.jpg'
import agent2 from '../../../assets/agent_2.jpg'
import agent3 from '../../../assets/agent_3.jpg'

const agents = [
    {
        name: 'Nick Larson',
        imgUrl: agent1
    },
    {
        name: 'Stella Hudson',
        imgUrl: agent2
    },
    {
        name: 'Paul Perry',
        imgUrl: agent3
    }
]

const OurAgents = () => {
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
            const currentScrollPos = window.pageXOffset;
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
    <div className='app__about-ourAgents'>
        <h2>Our Exclusive Agents</h2>
        <button className='blackButton'>View More</button>

        <div className="app__about-ourAgents_box" ref={elementRef}>
            {agents.map((agent, index) => (
                <div className={`app__about-ourAgents_box-card ${isVisible ? 'scale-in-center' : ''}`} key={agent.name + '-' + index}>
                    <img src={agent.imgUrl} alt={agent.name}/>
                    <h3>{agent.name}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default OurAgents