import Wrap from "../../../ui/Wrap";
import CustomerSlider from "./CustomerSlider";
import SliderContent from "./SliderContent";
import { SwiperSlide } from 'swiper/react';
import reviews from "./slider.json";

const CustomerReviews = () => {

    return (
        <section id="customer-reviews">
            <Wrap className="py-12 md:py-32">
                <div className="flex justify-center items-center">
                    <h2 className="pb-2 font-bold text-2xl border-b-2 border-primary sm:text-4xl">Recenzije</h2>
                </div>
                <div className="flex flex-col justify-center items-center pt-8 text-center font-bold sm:text-lg lg:pt-12">
                    <p>Pogledajte šta naši klijenti kažu o nama i o uslugama koje smo im pružili.</p>
                </div>
                <CustomerSlider>
                    {Object.keys(reviews).map((reviewKey, index) => (
                        <SwiperSlide key={index}>
                            <SliderContent src={reviews[reviewKey].src} alt={reviews[reviewKey].alt} name={reviews[reviewKey].name} text={reviews[reviewKey].text} />
                        </SwiperSlide>
                    ))}
                </CustomerSlider>
            </Wrap>
        </section>
    )
}

export default CustomerReviews;

