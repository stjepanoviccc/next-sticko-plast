import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Wrap from "../../ui/Wrap";
import Card from '../../ui/Card';

const Info = () => {
    const phoneNumber = "+381 64 1284447";
    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <section id="contact-info">
            <Wrap className="py-12 md:py-32">
                <div className="flex justify-center items-center">
                    <h2 className="pb-2 font-bold text-2xl border-b-2 border-primary sm:text-4xl">Informations</h2>
                </div>
                <div className="flex flex-col justify-center items-center pt-8 pb-4 text-center font-bold sm:text-lg lg:pt-12 lg:pb-8">
                    <p>Want to get in touch with us? You can do it in the way that suits you best.</p>
                    <p>We will do our best to answer you as soon as possible, whether you wrote via e-mail or called us by phone.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 pt-8 lg:flex lg:justify-between lg:gap-x-8 lg:pt-12 text-secondary font-bold">
                    <Link onClick={handleCall} href={`tel:${phoneNumber}`}
                        className="flex-1 flex flex-col items-center gap-y-4 py-8 lg:py-14 rounded-2xl border-2 hover:border-primary transition duration-300">
                        <FontAwesomeIcon className="text-3xl sm:text-5xl" icon={faPhone} />
                        <h4 className="text-lg sm:text-xl pb-2 border-b-2 border-primary">Phone</h4>
                        <p>+381 64 1284447</p>
                    </Link>
                    <Card className="items-center gap-y-4 py-8 lg:py-14 rounded-2xl border-2 hover:border-primary transition duration-300">
                        <FontAwesomeIcon className="text-3xl sm:text-5xl" icon={faEnvelope} />
                        <h4 className="text-lg sm:text-xl pb-2 border-b-2 border-primary">E-Mail</h4>
                        <p>info@sticko-plast.com</p>
                    </Card>
                    <Card className="items-center gap-y-4 py-8 lg:py-14 rounded-2xl border-2 hover:border-primary transition duration-300">
                        <FontAwesomeIcon className="text-3xl sm:text-5xl" icon={faLocationDot} />
                        <h4 className="text-lg sm:text-xl pb-2 border-b-2 border-primary">Address</h4>
                        <p>Masarikova 37, Kisač, Serbia</p>
                    </Card>
                    <Card className="items-center gap-y-4 py-8 lg:py-14 rounded-2xl border-2 hover:border-primary transition duration-300">
                        <FontAwesomeIcon className="text-3xl sm:text-5xl" icon={faClock} />
                        <h4 className="text-lg sm:text-xl pb-2 border-b-2 border-primary">Work hour</h4>
                        <p>Mon - Sat / 08:00 - 16:00</p>
                    </Card>
                </div>
            </Wrap>
        </section>
    )
}

export default Info;
