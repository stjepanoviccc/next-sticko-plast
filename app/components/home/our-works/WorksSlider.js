import useCheckDevice from '../../../custom-hooks/CheckDevice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const WorksSlider = () => {
    const checkDevice = useCheckDevice();
    const mobile = checkDevice < 576;
    const smallTablet = checkDevice >= 576 && checkDevice < 720;
    const bigTablet = checkDevice >= 720 && checkDevice < 1024;
    const smallDesktop = checkDevice >= 1024 && checkDevice < 1280;
    const mediumDesktop = checkDevice >= 1280 && checkDevice < 1500;
    const bigDesktop = checkDevice >= 1500;
    const imgHeight = bigDesktop ? 550 : mediumDesktop || smallDesktop ? 500 : bigTablet ? 450 : smallTablet ? 400 : mobile ? 350 : '';
    const sliderPerViewValue = bigDesktop || mediumDesktop ? 3 : smallDesktop || bigTablet ? 2 : smallTablet || mobile ? 1 : '';

    return (
        <Swiper className="mySwiper" style={{paddingBottom: '2.5rem'}} slidesPerView={sliderPerViewValue} spaceBetween={30} modules={[Autoplay, Pagination]} loop={true} grabCursor={true}
            pagination={{ clickable: true, draggable: true }} autoplay={{ delay: 5000, disableOnInteraction: false }} >
            <SwiperSlide className="rounded-tl-xl rounded-tr-xl">
                <Image style={{ minHeight: imgHeight }} className="w-full rounded-xl" src="../../../assets/works/work-min.jpg" alt="slider-work-img"></Image>
            </SwiperSlide>
            <SwiperSlide className="rounded-tl-xl rounded-tr-xl">
                <Image style={{ minHeight: imgHeight }} className="w-full rounded-xl" src="../../../assets/works/work2-min.jpg" alt="slider-work2-img"></Image>
            </SwiperSlide>
            <SwiperSlide className="rounded-tl-xl rounded-tr-xl">
                <Image style={{ minHeight: imgHeight }} className="w-full rounded-xl" src="../../../assets/works/work3-min.jpg" alt="slider-work3-img"></Image>
            </SwiperSlide>
            <SwiperSlide className="rounded-tl-xl rounded-tr-xl">
                <Image style={{ minHeight: imgHeight }} className="w-full rounded-xl" src="../../../assets/works/work4-min.jpg" alt="slider-work4-img"></Image>
            </SwiperSlide>
            <SwiperSlide className="rounded-tl-xl rounded-tr-xl">
                <Image style={{ minHeight: imgHeight }} className="w-full rounded-xl" src="../../../assets/works/work5-min.jpg" alt="slider-work5-img"></Image>
            </SwiperSlide>
            <SwiperSlide className="rounded-tl-xl rounded-tr-xl">
                <Image style={{ minHeight: imgHeight }} className="w-full rounded-xl" src="../../../assets/works/work6-min.jpg" alt="slider-work6-img"></Image>
            </SwiperSlide>
            <SwiperSlide className="rounded-tl-xl rounded-tr-xl">
                <Image style={{ minHeight: imgHeight }} className="w-full rounded-xl" src="../../../assets/works/work7-min.jpg" alt="slider-work7-img"></Image>
            </SwiperSlide>
        </Swiper>
    )
}

export default WorksSlider;
