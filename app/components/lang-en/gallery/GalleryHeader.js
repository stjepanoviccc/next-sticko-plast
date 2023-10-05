import Wrap from "../../ui/Wrap";

const GalleryHeader = () => {

    return (
        <section id="gallery-header" className="bg-cover bg-center lg:bg-fixed" style={{ backgroundImage: `url('../../assets/header/gallery-min.jpg')` }}>
            <Wrap className="flex flex-col justify-center text-center text-white font-bold sm:text-left">
                <h1 className="pt-16 text-4xl sm:text-[60px] md:pt-32 lg:pt-52 lg:text-[80px]">Gallery</h1>
                <h2 className="max-w-2xl pt-2 pb-16 sm:text-xl sm:pt-8 md:pb-32 lg:pb-52">All the photos on this page were created after providing the services of our company.
                    If you haven't decided yet, the photos on this page will prove to you that we are the right choice for you.</h2>
            </Wrap>
        </section>
    )
}

export default GalleryHeader;

