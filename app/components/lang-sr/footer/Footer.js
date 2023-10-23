import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Bar from "../../ui/Bar";
import Wrap from "../../ui/Wrap";

const srFooter = () => {
  return (
    <footer>
      <Bar bgColor="primary" textColor="white">
        <Wrap className="flex flex-col text-center gap-y-12 items-center justify-between pt-12 pb-12 md:pt-16 md:pb-16 lg:flex-row lg:items-start lg:text-left lg:gap-y-0">

          <div className="flex flex-1 items-center flex-col gap-y-6 lg:items-start lg:max-w-[25%]">
            <Link className="w-64" href="/">
              <img className="w-full h-full" src="../../assets/header/logo-white.png" alt="logo"></img>
            </Link>
            <p>Mi se bavimo prodajom i montažom PVC i Alu stolarije za Vaše domove i Vaše poslovne prostore.</p>
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
                <p>Ponedeljak - Subota | 08:00 - 16:00</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-6">
            <h4 className="text-2xl font-bold">Navigacija</h4>
            <ul className="flex flex-col gap-y-2">
              <li><Link className="hover:underline" href="/">Početna</Link></li>
              <li><Link className="hover:underline" href="/o-nama">O nama</Link></li>
              <li><Link className="hover:underline" href="/galerija">Galerija</Link></li>
              <li><Link className="hover:underline" href="/kontakt">Kontakt</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-6">
            <h4 className="text-2xl font-bold">Dokumenti</h4>
            <ul className="flex flex-col gap-y-2">
              <li><Link className="hover:underline" href="/ispitivanja-ift-rosenheim.pdf">Ispitivanja Ift Rosenheim</Link></li>
              <li><Link className="hover:underline" href="/ispitivanja-ims-beograd.pdf">Ispitivanja Ims Beograd</Link></li>
              <li><Link className="hover:underline" href="/katalog-ukrasnih-panela-i-vrata-vesplast.pdf">Katalog</Link></li>
              <li><p>PIB: 111339405</p></li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-6">
            <h4 className="text-2xl font-bold">Proizvodi</h4>
            <ul className="flex flex-col gap-y-2">
              <li><Link className="hover:underline" href="/proizvodi/vrata">Vrata</Link></li>
              <li><Link className="hover:underline" href="/proizvodi/prozori">Prozori</Link></li>
              <li><Link className="hover:underline" href="/proizvodi/roletne">Roletne</Link></li>
              <li><Link className="hover:underline" href="/proizvodi/zavese">Zavese</Link></li>
              <li><Link className="hover:underline" href="/proizvodi/komarnici">Komarnici</Link></li>
              <li><Link className="hover:underline" href="/proizvodi/ostalo">Ostalo</Link></li>
            </ul>
          </div>

        </Wrap>
      </Bar>

      <Bar style={{ backgroundColor: '#1F2937' }} textColor="white">
        <Wrap className="flex flex-col-reverse justify-between text-center gap-y-2 pb-4 pt-4 lg:flex-row lg:text-left">
          <p>Sva prava zadržava &copy; 2023 Šticko Plast. Kreirao <Link target="_blank" className="hover:underline" href="https://www.linkedin.com/in/andrej-stjepanovic/">Andrej Stjepanović</Link></p>
          <ul className="flex gap-x-4 justify-center items-center lg:justify-between">
            <li><Link aria-label="Open Facebook page in new tab" target="_blank" href="https://www.facebook.com/profile.php?id=100064276594775"><FontAwesomeIcon icon={faFacebook} /></Link></li>
            <li><Link aria-label="Open Instagram page in new tab" target="_blank" href="https://www.instagram.com/sticko_plast/"><FontAwesomeIcon icon={faInstagram} /></Link></li>
            <li><Link aria-label="Open Youtube page in new tab" target="_blank" href="https://www.youtube.com/@StickoPlast"><FontAwesomeIcon icon={faYoutube} /></Link></li>
          </ul>
        </Wrap>
      </Bar>
    </footer>
  )
}

export default srFooter;