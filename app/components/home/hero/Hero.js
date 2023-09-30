import { useState, useEffect } from 'react';
import useCheckDevice from '../../../custom-hooks/CheckDevice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import SliderContent from './SliderContent';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  const deviceWidth = useCheckDevice();
  const [height, setHeight] = useState('85vh');
  const [navigationState, setNavigationState] = useState(false);

  useEffect(() => {
    deviceWidth >= 640 ? setHeight(prev => '85vh') : setHeight(prev => '75vh');
    deviceWidth >= 1024 ? setNavigationState(true) : setNavigationState(false);
  }, [deviceWidth])

  return (
    <section id="hero">
      <Swiper spaceBetween={30} slidesPerView={1} effect={'fade'} navigation={navigationState} pagination={{ clickable: true, draggable: true }}
        modules={[EffectFade, Navigation, Pagination]} className="mySwiper" style={{ height: height }} loop={true} initialSlide={1}>
        <SwiperSlide className="relative">
          <SliderContent src="../../assets/hero/slider-1-min.jpg" alt="hero-slider-img-1" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <SliderContent src="../../assets/hero/slider-2-min.jpg" alt="hero-slider-img-2" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <SliderContent src="../../assets/hero/slider-3-min.jpg" alt="hero-slider-img-3" />
        </SwiperSlide>
      </Swiper >
    </section>
  );
};

export default Hero;
