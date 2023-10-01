import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Wrap from "../ui/Wrap";
import images from './images.json';

const Gallery = () => {
    const [sliderIsOpened, setSliderIsOpened] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const swiperRef = useRef();

    const toggleSlider = () => {
        setSliderIsOpened(prev => !prev);
    }

    useEffect(() => {
        // for slide count ( fixed slider )
    }, [selectedImageIndex])

    const handleNext = () => {
        if (sliderIsOpened && selectedImageIndex < Object.keys(images).length - 1) {
            setSelectedImageIndex(selectedImageIndex + 1);
            swiperRef.current.slideNext();
        }
    };

    const handlePrev = () => {
        if (sliderIsOpened && selectedImageIndex > 0) {
            setSelectedImageIndex(selectedImageIndex - 1);
            swiperRef.current.slidePrev();
        }
    };

    const openImage = (imageIndex) => {
        setSelectedImageIndex(imageIndex);
        if (!sliderIsOpened) {
            toggleSlider();
        }
    };

    return (
        <section id="gallery" className="flex flex-col justify-center items-center">
            <Wrap className="pt-12 md:pt-32">
                <div className="flex justify-center items-center">
                    <h2 className="pb-2 font-bold text-2xl border-b-2 border-primary sm:text-4xl">Naši radovi</h2>
                </div>
                <div className="flex flex-col justify-center items-center pt-8 pb-4 text-center font-bold sm:text-lg lg:pt-12 lg:pb-8">
                    <p className="">Kako bismo Vam vizuelno prikazali našu ponudu, pripremili smo za Vas prelepu galeriju sa velikim brojem radova koji su montirani od strane naše firme.</p>
                    <p>Želite li nešto slično za Vaš dom ili poslovni prostor? <Link href="/kontakt" className="underline">Kontaktirajte nas</Link>.</p>
                </div>
            </Wrap>

            {sliderIsOpened && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center">
                    <div className="max-w-screen-md w-full">
                        <button className="absolute top-4 right-4 text-white text-xl font-bold" onClick={toggleSlider} >
                            <FontAwesomeIcon size={"xl"} icon={faClose} />
                        </button>
                        <Swiper className="mySwiper mt-6" initialSlide={selectedImageIndex} onSwiper={(swiper) => (swiperRef.current = swiper)} allowTouchMove={false}>
                            {Object.keys(images).map((imageKey) => (
                                <SwiperSlide key={imageKey}>
                                    <img className="w-full h-full" src={images[imageKey].src} alt={images[imageKey].alt} />
                                </SwiperSlide >
                            ))}
                            <div className="text-center text-white">
                                <button className="swiper-button-prev pb-8" onClick={handlePrev}></button>
                                <p className="pt-2">{selectedImageIndex + 1} od {Object.keys(images).length}</p>
                                <button className="swiper-button-next pb-8" onClick={handleNext}></button>
                            </div>
                        </Swiper>
                    </div>
                </div>
            )}

            <div className="max-w-[1920px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center items-center pr-4 pl-4 pt-8 pb-12 text-center font-bold sm:text-lg md:pb-32 lg:pt-12">
                {Object.keys(images).map((imageKey, index) => (
                    <button key={imageKey} onClick={() => openImage(index)} className="group relative border-4 rounded-[4px] cursor-pointer transition duration-300 hover:border-primary" >
                        <div className="absolute w-full py-5 bg-primary bottom-0 left-0 opacity-0 text-white transition duration-300 group-hover:opacity-100">
                            Otvorite fotografiju
                        </div>
                        <img src={images[imageKey].src} alt={images[imageKey].alt} className="cursor-pointer"></img>
                    </button>
                ))}
            </div>
        </section>
    )
}

export default Gallery;