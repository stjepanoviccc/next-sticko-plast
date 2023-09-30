import { useState, useEffect, useRef } from 'react';

function AppearOnScroll(props) {
    const [isVisible, setIsVisible] = useState(false);
    const targetRef = useRef();

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: props.threshold || 0.3,
        };
        const current = targetRef.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        }, options);

        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        <div ref={targetRef}
            className={`transform transition duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' :
                props.fromLeft ? 'opacity-0 -translate-x-[100px]' : props.fromRight ? 'opacity-0 -translate-x-[-100px]' : 'opacity-0'}`} >
            {props.children}
        </div>
    );
}

export default AppearOnScroll;