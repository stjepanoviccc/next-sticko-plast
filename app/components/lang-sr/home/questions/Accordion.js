import { useState, useRef } from 'react';
import { Transition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Accordion = ({ title, text }) => {
    const [isActive, setIsActive] = useState(false);
    const nodeRef = useRef(null);

    const toggleAccordion = () => {
        setIsActive(prevIsActive => !prevIsActive)
    }

    return (
        <div className="flex flex-col w-[90%] border-b-[1px] border-primary">
            <button className="flex justify-between text-lg pt-8 pl-4 pr-4 pb-4" onClick={toggleAccordion}>
                <h4 className="font-bold">{title}</h4>
                {!isActive ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}
            </button>
            <Transition nodeRef={nodeRef} in={isActive} timeout={0}>
                {state => (
                    <div ref={nodeRef} className={`overflow-hidden max-h-0 transition-max-h duration-500 ease-in-out `} style={{ maxHeight: isActive ? `${nodeRef.current.scrollHeight}px` : '0px' }}>
                        <p className="pb-10 pl-5 pr-2">{text}</p>
                    </div>
                )}
            </Transition>
        </div>
    )
};

export default Accordion;