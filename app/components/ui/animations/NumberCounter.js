import React, { useState, useEffect, useRef } from 'react';

const NumberCounter = ({ target, children }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const numberRef = useRef(null);

    useEffect(() => {
        const duration = 3000;
        const interval = 70;
        const increment = Math.ceil(target / (duration / interval));

        let timer = null;

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated) {
                    timer = setInterval(() => {
                        setCount(prevCount => {
                            let newCount = prevCount + increment;
                            return newCount >= target ? target : newCount;
                        });
                    }, interval);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.2,
        });

        if (numberRef.current) {
            observer.observe(numberRef.current);
        }

        return () => {
            clearInterval(timer);
            observer.disconnect();
        };
    }, [target, hasAnimated]);

    return (
        <p ref={numberRef} className="text-3xl font-bold pt-2 sm:text-5xl">
            {count}
            {children}
        </p>
    );
};

export default NumberCounter;