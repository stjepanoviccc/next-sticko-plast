import Link from "next/link";
import Wrap from "../../ui/Wrap";
import Bar from "../../ui/Bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";

const TopBar = () => {

    return (
        <Bar bgColor="primary" textColor="white">
            <Wrap className="flex justify-between items-center py-3">
                <ul className="flex gap-x-10 justify-between items-center">
                    <li className="flex gap-x-2 justify-between items-center">
                        <FontAwesomeIcon icon={faPhone} />
                        <p className="text-sm">+381 64 1284447</p>
                    </li>
                    <li className="flex gap-x-2 justify-between items-center">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p className="text-sm">info@sticko-plast.com</p>
                    </li>
                    <li className="flex gap-x-2 justify-between items-center">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <p className="text-sm">Masarikova 37, Kisač, Serbia</p>
                    </li>
                    <li className="flex gap-x-2 justify-between items-center">
                        <FontAwesomeIcon icon={faClock} />
                        <p className="text-sm"> Monday - Saturday | 08:00 - 16:00
                        </p>
                    </li>
                </ul>
                <ul className="flex gap-x-4 justify-between items-center">
                    <li><Link target="_blank" href="https://www.facebook.com/profile.php?id=100064276594775"><FontAwesomeIcon icon={faFacebook} /></Link></li>
                    <li><Link target="_blank" href="https://www.facebook.com/profile.php?id=100064276594775"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                    <li><Link target="_blank" href="https://www.facebook.com/profile.php?id=100064276594775"><FontAwesomeIcon icon={faTiktok} /></Link></li>
                </ul>
            </Wrap>
        </Bar>
    );
}

export default TopBar;