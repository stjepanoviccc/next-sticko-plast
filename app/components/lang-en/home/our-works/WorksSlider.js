import { SwiperSlide } from "swiper/react";
import AutoplaySlider from "../../../ui/AutoplaySlider";
import images from "./slider.json";

const WorksSlider = () => {
    const imgHeight = "300px";

    return (
        <AutoplaySlider swiperClasses="mySwiper" sliderPadding="0 0 2.5rem 0">
            {Object.keys(images).map((imgKey, index) => (
                <SwiperSlide key={index} className="rounded-tl-xl rounded-tr-xl">
                    <img style={{ minHeight: imgHeight }} className="w-full h-full rounded-xl" src={images[imgKey].src} alt={images[imgKey].alt}></img>
                </SwiperSlide>
            ))}
        </AutoplaySlider>
    );
};

export default WorksSlider;