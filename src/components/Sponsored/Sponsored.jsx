import React, { useEffect, useRef, useState } from 'react'
import './Sponsored.css'
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"
import { companies } from '../../constants/constants';


const Sponsored = ({bg}) => {
    const elementRef = useRef(null);
    const [ arrow, setArrow ] = useState('left')

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
    <div className='app__sponsored' style={{background: bg}}>
        <div className='app__sponsored-boxcard' ref={elementRef}>
        {companies.map((item, index) => (
            <div className='app__sponsored-boxcard_card' key={'Company_logo-' + index}>
            <img src={item} alt="" />
            </div>
        ))}
        </div>
        <div className="app__sponsored_arrows">
            <BsChevronLeft onClick={()=>scroll("left")} style={arrow === 'left' ? {opacity: 0.2, PointerEvent: 'none', cursor: 'default'} : null}/>
            <BsChevronRight onClick={()=>scroll("right")} style={arrow === 'right' ? {opacity: 0.2, PointerEvent: 'none', cursor: 'default'} : null}/>
        </div>
    </div>
    );
};
export default Sponsored