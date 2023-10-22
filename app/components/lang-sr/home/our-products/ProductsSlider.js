import useCheckDevice from '../../../../custom-hooks/CheckDevice';
import SliderContent from './SliderContent';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductsSlider = () => {
    const checkDevice = useCheckDevice();
    const mobile = checkDevice < 576;
    const tablet = checkDevice >= 576 && checkDevice < 1024;
    const desktop = checkDevice >= 1024;
    const rotateValue = desktop ? 60 : tablet ? 40 : mobile ? 70 : '';
    const sliderPerViewValue = desktop ? 3 : tablet ? 2 : mobile ? 1 : '';

    return (
        <Swiper className="mySwiper" style={{ paddingBottom: '2.5rem' }} effect={'coverflow'} grabCursor={true} centeredSlides={true} initialSlide={3} pagination={{ clickable: true, draggable: true }} modules={[EffectCoverflow, Pagination]}
            slidesPerView={sliderPerViewValue} coverflowEffect={{ rotate: rotateValue, stretch: 0, depth: 100, modifier: 1, slideShadows: true, }}>
            <SwiperSlide className="rounded-tl-xl rounded-tr-xl">
                <SliderContent src="../../../assets/products/curtains/zebra-curtain.jpg" alt="the-curtains-img" title="Zavese" href="/proizvodi/zavese" />
            </SwiperSlide>
            <SwiperSlide className="rounded-tl-xl rounded-tr-xl">
                <SliderContent src="../../../assets/products/mosquitoNets/pvc-mosquito-net.jpg" alt="mosquitoNets-img" title="Komarnici" href="/proizvodi/komarnici" />
            </SwiperSlide>
            <SwiperSlide className="rounded-tl-xl rounded-tr-xl">
                <SliderContent src="../../../assets/products/windows/pvc-window.jpg" alt="windows-img" title="Prozori" href="/proizvodi/prozori" />
            </SwiperSlide>
            <SwiperSlide className="rounded-tl-xl rounded-tr-xl">
                <SliderContent src="../../../assets/products/doors/double-winged-door.jpg" alt="doors-img" title="Vrata" href="/proizvodi/vrata" />
            </SwiperSlide>
            <SwiperSlide className="rounded-tl-xl rounded-tr-xl">
                <SliderContent src="../../../assets/products/blinds/pvc-blinds.jpg" alt="blinds-img" title="Roletne" href="/proizvodi/roletne" />
            </SwiperSlide>
            <SwiperSlide className="rounded-tl-xl rounded-tr-xl">
                <SliderContent src="../../../assets/products/other/rollo-garage-door.jpg" alt="other-img" title="Ostalo" href="/proizvodi/ostalo" />
            </SwiperSlide>
        </Swiper>
    )
}

export default ProductsSlider;
