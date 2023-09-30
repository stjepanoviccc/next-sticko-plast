import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Bar from '../ui/Bar';
import Wrap from '../ui/Wrap';

const Footer = () => {
  return (
    <footer>
      <Bar bgColor="primary" textColor="white">
        <Wrap className="flex flex-col text-center gap-y-12 items-center justify-between pt-12 pb-12 md:pt-16 md:pb-16 lg:flex-row lg:items-start lg:text-left lg:gap-y-0">

          <div className="flex flex-1 flex-col gap-y-6 lg:max-w-[30%]">
            <p className="text-4xl font-bold">ŠTICKO PLAST</p>
            <p>Mi se bavimo proizvodnjom i montiranjem PVC i Alu stolarije za Vaše domove i Vaše poslovne prostore.</p>
          </div>

          <div className="flex flex-col gap-y-6">
            <h4 className="text-2xl font-bold">Informacije</h4>
            <div className="flex flex-col gap-y-4 lg:gap-y-2">
              <div className="flex flex-col gap-x-4 gap-y-1 items-center lg:flex-row lg:gap-y-0">
                <FontAwesomeIcon className="w-4" icon={faPhone} />
                <p>+381 64 1284447</p>
              </div>
              <div className="flex flex-col gap-x-4 gap-y-1 items-center lg:flex-row lg:gap-y-0">
                <FontAwesomeIcon className="w-4" icon={faEnvelope} />
                <p>info@sticko-plast.com</p>
              </div>
              <div className="flex flex-col gap-x-4 gap-y-1 items-center lg:flex-row lg:gap-y-0">
                <FontAwesomeIcon className="w-4" icon={faLocationDot} />
                <p>Masarikova 37, Kisac, Srbija</p>
              </div>
              <div className="flex flex-col gap-x-4 gap-y-1 items-center lg:flex-row lg:gap-y-0">
                <FontAwesomeIcon className="w-4" icon={faClock} />
                <p>Ponedeljak - Subota | 07:00 - 16:00</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-6">
            <h4 className="text-2xl font-bold">Dokumentacija</h4>
            <div className="flex flex-col gap-y-2">
              <Link className="hover:underline" href="/">Dokument</Link>
              <Link className="hover:underline" href="/">Dokument</Link>
              <Link className="hover:underline" href="/">Dokument</Link>
              <p>PIB: 123456789</p>
            </div>
          </div>

          <div className="flex flex-col gap-y-6">
            <h4 className="text-2xl font-bold">Navigacija</h4>
            <div className="flex flex-col gap-y-2">
              <Link className="hover:underline" href="/">Početna</Link>
              <Link className="hover:underline" href="/o-nama">O nama</Link>
              <Link className="hover:underline" href="/proizvodi">Proizvodi</Link>
              <Link className="hover:underline" href="/galerija">Galerija</Link>
              <Link className="hover:underline" href="/kontakt">Kontakt</Link>
            </div>
          </div>
        </Wrap>
      </Bar>

      <Bar style={{backgroundColor: '#1F2937'}} textColor="white">
        <Wrap className="flex flex-col-reverse justify-between text-center gap-y-2 pb-4 pt-4 lg:flex-row lg:text-left">
          <p>Sva prava zadržava &copy; 2023 Šticko Plast. Kreirao <Link className="hover:underline" href="/">Andrej Stjepanović</Link></p>
          <div className="flex gap-x-4 justify-center items-center lg:justify-between">
            <Link target="_blank" href="https://www.facebook.com/profile.php?id=100064276594775"><FontAwesomeIcon icon={faFacebook} /></Link>
            <Link target="_blank" href="https://www.facebook.com/profile.php?id=100064276594775"><FontAwesomeIcon icon={faInstagram} /></Link>
            <Link target="_blank" href="https://www.facebook.com/profile.php?id=100064276594775"><FontAwesomeIcon icon={faLinkedin} /></Link>
          </div>
        </Wrap>
      </Bar>
    </footer>
  )
}

export default Footer;