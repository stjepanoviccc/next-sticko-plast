import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        showButton && (
            <button
                className="fixed bottom-10 right-6 bg-white text-primary border-2 border-primary text-xl rounded-2xl py-3 px-4 cursor-pointer transition duration-300
                 hover:bg-primary hover:text-white hover:border-white hover:scale-125"
                onClick={scrollToTop}>
                <FontAwesomeIcon icon={faChevronUp} className="w-4 h-6" style={{paddingTop: '1px'}}/>
            </button>
        )
    );
};

export default BackToTop;