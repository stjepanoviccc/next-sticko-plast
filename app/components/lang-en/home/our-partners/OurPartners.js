import Wrap from "../../../ui/Wrap"
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import AutoplaySlider from "../../../ui/AutoplaySlider";
import images from "./slider.json";

const OurPartners = () => {
    const imgHeight = "100px";

    return (
        <section id="our-partners" className="bg-light2">
            <Wrap className="py-12 md:py-32">
                <div className="flex justify-center items-center">
                    <h2 className="pb-2 font-bold text-2xl border-b-2 border-primary sm:text-4xl">Our business partners</h2>
                </div>
                <AutoplaySlider swiperClasses="mySwiper" sliderPadding="0">
                    {Object.keys(images).map((imgKey, index) => (
                        <SwiperSlide key={index} className="rounded-tl-xl rounded-tr-xl pl-10 pr-10 py-8 lg:py-12">
                            <Link href="/kontakt">
                                <img loading="eager" style={{ minHeight: imgHeight, maxWidth: "300px", margin: '0px auto' }} className="w-full rounded-xl" src={images[imgKey].src} alt={images[imgKey].alt}></img>
                            </Link>
                        </SwiperSlide>
                    ))}
                </AutoplaySlider>
            </Wrap>
        </section>
    )
}

export default OurPartners;
