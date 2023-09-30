import { useState, useEffect } from "react";
import Wrap from "../ui/Wrap";
import TextAppear from "../ui/animations/TextAppear";

const GalleryHeader = () => {
    const [showWrap, setShowWrap] = useState(false);

    useEffect(() => {
        setShowWrap(true);
    }, [])

    return (
        <section id="contact-header" className="bg-cover bg-center lg:bg-fixed" style={{ backgroundImage: `url('../../assets/header/gallery-min.jpg')` }}>
            <TextAppear showWrap={showWrap}>
                <Wrap className="flex flex-col justify-center text-center text-white font-bold sm:text-left">
                    <h1 className="pt-16 text-4xl sm:text-[60px] md:pt-32 lg:pt-52 lg:text-[80px]">Galerija</h1>
                    <h2 className="max-w-2xl pt-2 pb-16 sm:text-xl sm:pt-8 md:pb-32 lg:pb-52">Sve fotografije koje se nalaze na ovoj stranici su nastale nakon pružanja usluga naše firme.
                        Ukoliko se još niste odlučili, fotografije sa ove stranice će vam dokazati da smo mi pravi izbor za Vas.</h2>
                </Wrap>
            </TextAppear>
        </section>
    )
}

export default GalleryHeader;

