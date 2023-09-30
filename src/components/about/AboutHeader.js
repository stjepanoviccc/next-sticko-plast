import { useState, useEffect } from 'react';
import Wrap from '../ui/Wrap';
import TextAppear from '../ui/animations/TextAppear';

const AboutHeader = () => {
    const [showWrap, setShowWrap] = useState(false);

    useEffect(() => {
        setShowWrap(true);
    }, [])

    return (
        <section id="about-header" className="bg-cover bg-bottom lg:bg-fixed" style={{ backgroundImage: `url('../../assets/header/about-min.jpg')` }}>
            <TextAppear showWrap={showWrap}>
                <Wrap className="flex flex-col justify-center text-center text-white font-bold sm:text-left">
                    <h1 className="pt-16 text-4xl sm:text-[60px] md:pt-32 lg:pt-52 lg:text-[80px]">O nama</h1>
                    <h2 className="max-w-2xl pt-2 pb-16 sm:text-xl sm:pt-8 md:pb-32 lg:pb-52">Sve informacije koje su vezane za našu firmu, počevši od naših prvih koraka pa sve do
                        naše vizije koja se odnosi na budućnost, možete pronaći na ovoj stranici.</h2>
                </Wrap>
            </TextAppear>
        </section>
    )
}

export default AboutHeader;