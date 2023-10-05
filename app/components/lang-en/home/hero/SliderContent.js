import { useState, useEffect } from "react";
import Link from "next/link";
import TextAppear from "../../../ui/animations/TextAppear";
import useCheckDevice from "../../../../custom-hooks/CheckDevice";
import Wrap from "../../../ui/Wrap";
import ButtonHolder from "../../../ui/ButtonHolder";


const SliderContent = ({ src, alt }) => {
    const [showWrap, setShowWrap] = useState(false);
    const [height, setHeight] = useState('86vh');
    const deviceWidth = useCheckDevice();

    useEffect(() => {
        deviceWidth >= 640 ? setHeight(prev => '86vh') : setHeight(prev => '75vh');
        setShowWrap(true);
    }, [deviceWidth])

    return (
        <>
            <div className="relative">
                <img style={{ height: height, width: '100vw', objectFit: 'cover' }} src={src} alt={alt} />
                <div className="absolute inset-0 bg-primary bg-opacity-50"></div>
            </div>
            <TextAppear showWrap={showWrap}>
                <Wrap className="absolute inset-0 flex flex-col gap-2 justify-center items-center text-center">
                    <h2 className="text-white text-2xl text-center font-bold sm:text-4xl">Šticko Plast</h2>
                    <h1 className="text-white text-4xl text-center font-bold sm:text-6xl">Sale and installation of PVC and aluminum joinery</h1>
                    <div className="flex gap-5">
                        <ButtonHolder className="pt-12">
                            <button type="button">
                                <Link href="/en/about-us" className="uppercase px-6 py-4 font-bold leading-6 bg-white border-2 border-white rounded-xl
                        transition duration-300 hover:text-primary hover:bg-white hover:border-white">More information
                                </Link>
                            </button>
                        </ButtonHolder>
                        {deviceWidth >= 920 && (
                            <ButtonHolder className="pt-12">
                                <button type="button">
                                    <Link href="/en/gallery" className="uppercase px-6 py-4 font-bold leading-6 text-white bg-transparent border-2 border-white rounded-xl
                    transition duration-300 hover:text-primary hover:bg-white">View the gallery
                                    </Link>
                                </button>
                            </ButtonHolder>
                        )}
                    </div>
                </Wrap>
            </TextAppear>
        </>
    )
};

export default SliderContent;