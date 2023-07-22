import React, { useEffect, useRef, useState } from 'react';
import './Properties.css';
import { properties } from '../../../constants/constants';
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"

const Properties = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const [ arrow, setArrow ] = useState('left')
  const [started, setStarted] = useState(false);

  const handleVisibilityChange = (entries) => {
    const entry = entries[0];
    setIsVisible(entry.isIntersecting)
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

  useEffect(() => {
    if (isVisible) {
      setStarted(true)
    }
  }, [isVisible])

  const scroll = (direction) => {
    const { current } = elementRef;

    if (direction === 'left') {
        current.scrollTo({
          left: current.scrollLeft - current.clientWidth,
          behavior: 'smooth',
        });
      } else {
        current.scrollTo({
          left: current.scrollLeft + current.clientWidth,
          behavior: 'smooth',
        });
      }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        if (elementRef.current.scrollLeft < 100) {
            setArrow('left')
        } else if (elementRef.current.scrollLeft >= elementRef.current.scrollWidth - elementRef.current.clientWidth - 150) {
            setArrow('right')
        } else {
            setArrow('')
        }
      }
    };

    elementRef.current.addEventListener('scroll', handleScroll);

    return () => {
        elementRef.current.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className='app__home-properties' >
        <div className='app__home-properties_boxcard' ref={elementRef}>
        {properties.map((property, index) => (
            <div className={`app__home-properties_boxcard-card ${started ? 'scale-in-center' : ''}`} key={property.city + index}>
            <img src={property.imgUrl} alt="" />
            <h3>{property.city}</h3>
            <h4>{property.Number} properties</h4>
            </div>
        ))}
        </div>
        <div className="app__home-properties_arrows">
            <BsChevronLeft onClick={()=>scroll("left")} style={arrow === 'left' ? {opacity: 0.2, PointerEvent: 'none', cursor: 'default'} : null}/>
            <BsChevronRight onClick={()=>scroll("right")} style={arrow === 'right' ? {opacity: 0.2, PointerEvent: 'none', cursor: 'default'} : null}/>
        </div>
    </div>
  );
};

export default Properties;
