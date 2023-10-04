import { useState, useEffect } from 'react';
import useCheckDevice from '../../custom-hooks/CheckDevice';
import { Swiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AutoplaySlider = ({ swiperClasses, sliderPadding, children }) => {
    const [sliderPerViewValue, setSliderPerViewValue] = useState(1);
    const checkDevice = useCheckDevice();

    useEffect(() => {
        const mobile = checkDevice < 576;
        const smallTablet = checkDevice >= 576 && checkDevice < 720;
        const bigTablet = checkDevice >= 720 && checkDevice < 1024;
        const smallDesktop = checkDevice >= 1024 && checkDevice < 1280;
        const mediumDesktop = checkDevice >= 1280 && checkDevice < 1500;
        const bigDesktop = checkDevice >= 1500;

        const calculatedSliderValue = bigDesktop || mediumDesktop ? 3 : smallDesktop || bigTablet ? 2 : smallTablet || mobile ? 1 : 0;

        setSliderPerViewValue(calculatedSliderValue);
    }, [checkDevice])

    return (
        <Swiper className={swiperClasses} style={{ padding:sliderPadding }} slidesPerView={sliderPerViewValue} spaceBetween={30} modules={[Autoplay, Pagination]}
            loop={true} grabCursor={true} pagination={{ clickable: true, draggable: true }} autoplay={{ delay: 5000, disableOnInteraction: false }} >
            {children}
        </Swiper>
    );
};

export default AutoplaySlider;