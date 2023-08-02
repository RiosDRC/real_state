import React, { useEffect, useRef, useState } from 'react'
import './ApartmentTypes.css'

const ApartmentTypes = ({bg, title, boxBg}) => {
  const TypesCard = ({ imgUrl, title }) => (
    <div className={`TypesCard ${isVisible ? 'scale-in-center' : ''}`} style={{background: boxBg}}>
      <div style={{backgroundImage: `url(${imgUrl})`}} />
      <h4>{title}</h4>
    </div>
  )

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
    <div className="app__apartmentTypes" style={{background: bg}}>
      <h2 style={{color: title}}>Explore Apartment Types</h2>
      <button className="blackButton">View More</button>
      <div className="app__apartmentTypes_box" ref={elementRef}>
        <TypesCard imgUrl='https://img.freepik.com/premium-photo/modern-corporate-architecture-can-be-seen-cityscape-office-buildings_410516-276.jpg' title='Office' />
        <TypesCard imgUrl='https://res.cloudinary.com/brickandbatten/images/f_auto,q_auto/v1641000863/wordpress_assets/22826-ModContemporary-Accents_w-GauntletGray-a-ok/22826-ModContemporary-Accents_w-GauntletGray-a-ok.jpg?_i=AA' title='House' />
        <TypesCard imgUrl='https://www.theplancollection.com/Upload/Designers/126/1325/Plan1261325Image_4_12_2019_1029_3_891_593.jpg' title='Apartments' />
      </div>
    </div>
  )
}

export default ApartmentTypes