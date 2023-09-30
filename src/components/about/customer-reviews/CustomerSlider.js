import useCheckDevice from '../../../custom-hooks/CheckDevice';
import { Swiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const CustomersSlider = (props) => {
  const windowWidth = useCheckDevice();
  const slidesPerView = windowWidth >= 1024 ? 3 : windowWidth >= 576 && windowWidth < 1024 ? 2 : 1;

  return (
    <Swiper className="mySwiper overflow-hidden pt-16 pb-10 text-center sm:text-lg lg:pt-24" slidesPerView={slidesPerView} spaceBetween={30} modules={[Autoplay, Pagination]} loop={true} grabCursor={true}
      pagination={{ clickable: true, draggable: true }} autoplay={{ delay: 5000, disableOnInteraction: false }} >
      {props.children}
    </Swiper>
  )
}

export default CustomersSlider;
