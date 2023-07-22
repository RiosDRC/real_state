import React, { useState, useEffect, useRef } from 'react';
import './AchievementCard.css'

const AchievementCard = ({ number, letter, title }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      };

        const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
            setCount(0);
            let startTime;
            const duration = 1500;
            const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const increment = (number * progress) / duration;
            if (increment < number) {
                setCount(Math.ceil(increment));
                requestAnimationFrame(step);
            } else {
                setCount(number);
            }
            };
            requestAnimationFrame(step);
        }
        }, observerOptions);

        if (elementRef.current) {
        observer.observe(elementRef.current);
        }

        return () => {
        setCount(0);
        if (elementRef.current) {
            observer.unobserve(elementRef.current);
        }
        };
    }, [number]);

    return (
        <div className="achievement_card" ref={elementRef}>
            <h2>{count + letter}</h2>
            <h3>{title}</h3>
        </div>
    );
};

export default AchievementCard;