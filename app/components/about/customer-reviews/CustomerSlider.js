import { useState, useEffect } from 'react';
import useCheckDevice from '../../../custom-hooks/CheckDevice';
import { Swiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const CustomersSlider = (props) => {
  const deviceWidth = useCheckDevice();
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [paddingTop, setPaddingTop] = useState('4rem');

  useEffect(() => {
    let viewValue = deviceWidth >= 1024 ? 3 : deviceWidth >= 576 && deviceWidth < 1024 ? 2 : 1
    let paddingValue = deviceWidth >= 1024 ? '6rem' : '4rem'
    setSlidesPerView(viewValue);
    setPaddingTop(paddingValue);
  }, [deviceWidth]);

  return (
    <Swiper className="mySwiper overflow-hidden pt-16 pb-10 text-center sm:text-lg lg:pt-24" style={{ paddingTop: paddingTop, paddingBottom: '2.5rem' }} slidesPerView={slidesPerView}
      spaceBetween={30} modules={[Autoplay, Pagination]} loop={true} grabCursor={true}
      pagination={{ clickable: true, draggable: true }} autoplay={{ delay: 5000, disableOnInteraction: false }} >
      {props.children}
    </Swiper>
  )
}

export default CustomersSlider;
