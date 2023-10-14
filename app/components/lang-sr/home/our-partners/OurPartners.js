import Wrap from "../../../ui/Wrap"
import Link from "next/link";
import AppearOnScroll from "@/app/components/ui/animations/AppearOnScroll";
import images from "./slider.json";

const OurPartners = () => {

    return (
        <section id="our-partners" className="bg-light2">
            <Wrap className="py-12 md:py-32 overflow-hidden">
                <AppearOnScroll fromRight threshold={0.2}>
                    <div className="flex justify-center items-center">
                        <h2 className="pb-2 font-bold text-2xl border-b-2 border-primary sm:text-4xl">Naši poslovni partneri</h2>
                    </div>
                    <div className="flex flex-col md:flex-row justify-around items-center gap-x-8 gap-y-12 pt-8 lg:pt-12">
                        {Object.keys(images).map((imgKey, index) => (
                            <Link key={index} href={images[imgKey].link} target="_blank" className="w-64 transition duration-300 hover:scale-110">
                                <img loading="eager" style={{ minHeight: '100px', maxHeight: '130px', margin: '0px auto' }} className="w-full rounded-xl"
                                    src={images[imgKey].src} alt={images[imgKey].alt}></img>
                            </Link>
                        ))}
                    </div>
                </AppearOnScroll>
            </Wrap>
        </section>
    )
}

export default OurPartners;
