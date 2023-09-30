import Link from "next/link";
import Wrap from "../ui/Wrap";
import Bar from "../ui/Bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const TopBar = () => {

    return (
        <Bar bgColor="primary" textColor="white">
            <Wrap className="flex justify-between items-center py-3">
                <div className="flex gap-x-10 justify-between items-center">
                    <div className="flex gap-x-2 justify-between items-center">
                        <FontAwesomeIcon icon={faPhone} />
                        <p className="text-sm">+381 64 1284447</p>
                    </div>
                    <div className="flex gap-x-2 justify-between items-center">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p className="text-sm">info@sticko-plast.com</p>
                    </div>
                    <div className="flex gap-x-2 justify-between items-center">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <p className="text-sm">Masarikova 37, Kisac, Srbija</p>
                    </div>
                    <div className="flex gap-x-2 justify-between items-center">
                        <FontAwesomeIcon icon={faClock} />
                        <p className="text-sm">Ponedeljak - Subota | 07:00 - 16:00</p>
                    </div>
                </div>
                <div className="flex gap-x-4 justify-between items-center">
                    <Link target="_blank" href="https://www.facebook.com/profile.php?id=100064276594775"><FontAwesomeIcon icon={faFacebook} /></Link>
                    <Link target="_blank" href="https://www.facebook.com/profile.php?id=100064276594775"><FontAwesomeIcon icon={faInstagram} /></Link>
                    <Link target="_blank" href="https://www.facebook.com/profile.php?id=100064276594775"><FontAwesomeIcon icon={faLinkedin} /></Link>
                </div>
            </Wrap>
        </Bar>
    );
}

export default TopBar;