import Wrap from "../../ui/Wrap";

const ContactHeader = () => {

    return (
        <section id="contact-header" className="bg-cover lg:bg-fixed" style={{ backgroundImage: `url('../../assets/header/contact-min.jpg')` }}>
                <Wrap className="flex flex-col justify-center text-center text-white font-bold sm:text-left">
                    <h1 className="pt-16 text-4xl sm:text-[60px] md:pt-32 lg:pt-52 lg:text-[80px]">Contact</h1>
                    <h2 className="max-w-2xl pt-2 pb-16 sm:text-xl sm:pt-8 md:pb-32 lg:pb-52">All the information you need to get in touch with us can be found on this page.
                        Do not hesitate and feel free to call us if you need anything.</h2>
                </Wrap>
        </section>
    )
}

export default ContactHeader;