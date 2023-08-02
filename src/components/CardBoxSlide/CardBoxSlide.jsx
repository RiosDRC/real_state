import React, { useEffect, useRef, useState } from 'react';
import './CardBoxSlide.css';
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"

const CardBoxSlide = ({data}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const [ arrow, setArrow ] = useState('left')
  const scrollDirectionRef = useRef(0);

  // const handleVisibilityChange = (entries) => {
  //   const entry = entries[0];
  //   setIsVisible(entry.isIntersecting)
  // };

  // useEffect(() => {
  //   const observerOptions = {
  //     root: null,
  //     rootMargin: '50px',
  //     threshold: 0.5,
  //   };

  //   const observer = new IntersectionObserver(handleVisibilityChange, observerOptions);

  //   if (elementRef.current) {
  //     observer.observe(elementRef.current);
  //   }

  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     if (currentScrollPos > scrollDirectionRef.current) {
  //       scrollDirectionRef.current = currentScrollPos;
  //       observer.observe(elementRef.current);
  //     } else if (currentScrollPos < scrollDirectionRef.current) {
  //       scrollDirectionRef.current = currentScrollPos;
  //       observer.unobserve(elementRef.current);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     observer.disconnect();
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);


  //Visibility of arrows

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
          setArrow('left');
        } else if (
          elementRef.current.scrollLeft >=
          elementRef.current.scrollWidth - elementRef.current.clientWidth - 150
        ) {
          setArrow('right');
        } else {
          setArrow('');
        }
      }
    };
  
    if (elementRef.current) {
      elementRef.current.addEventListener('scroll', handleScroll);
    }
  
    return () => {
      if (elementRef.current) {
        elementRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  

  return (
    <div className='app__cardBoxSlide' >
        <div className='app__cardBoxSlide_boxcard' ref={elementRef}>
        {data.map((item, index) => (
            <div className={`app__cardBoxSlide_boxcard-card ${isVisible ? 'scale-in-center' : ''}`} key={'CardBoxItem-' + index}>
            <img src={item.imgUrl} alt="" />
            <h3>{item.city}</h3>
            <h4>{item.Number} properties</h4>
            </div>
        ))}
        </div>
        <div className="app__cardBoxSlide_arrows">
            <BsChevronLeft onClick={()=>scroll("left")} style={arrow === 'left' ? {opacity: 0.2, PointerEvent: 'none', cursor: 'default'} : null}/>
            <BsChevronRight onClick={()=>scroll("right")} style={arrow === 'right' ? {opacity: 0.2, PointerEvent: 'none', cursor: 'default'} : null}/>
        </div>
    </div>
  );
};

export default CardBoxSlide;
