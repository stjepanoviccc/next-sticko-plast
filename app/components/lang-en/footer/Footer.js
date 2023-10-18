import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Bar from '../../ui/Bar';
import Wrap from '../../ui/Wrap';

const enFooter = () => {
  return (
    <footer>
      <Bar bgColor="primary" textColor="white">
        <Wrap className="flex flex-col text-center gap-y-12 items-center justify-between pt-12 pb-12 md:pt-16 md:pb-16 lg:flex-row lg:items-start lg:text-left lg:gap-y-0">

          <div className="flex flex-1 items-center flex-col gap-y-6 lg:items-start lg:max-w-[25%]">
            <Link className="w-64" href="/en/home">
              <img className="full" src="../../assets/header/logo-white.png" alt="logo"></img>
            </Link>
            <p>We sell and install PVC and aluminum joinery for your homes and business premises.</p>
          </div>

          <div className="flex flex-col gap-y-6">
            <h4 className="text-2xl font-bold">Informations</h4>
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
                <p>Masarikova 37, Kisač, Serbia</p>
              </div>
              <div className="flex flex-col gap-x-4 gap-y-1 items-center lg:flex-row lg:gap-y-0">
                <FontAwesomeIcon className="w-4" icon={faClock} />
                <p>Mon - Sat | 08:00 - 16:00</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-6">
            <h4 className="text-2xl font-bold">Navigation</h4>
            <ul className="flex flex-col gap-y-2">
              <li><Link className="hover:underline" href="/en/home">Home</Link></li>
              <li><Link className="hover:underline" href="/en/about-us">About us</Link></li>
              <li><Link className="hover:underline" href="/en/gallery">Gallery</Link></li>
              <li><Link className="hover:underline" href="/en/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-6">
            <h4 className="text-2xl font-bold">Documents</h4>
            <ul className="flex flex-col gap-y-2">
              <li><Link className="hover:underline" href="/ispitivanja-ift-rosenheim.pdf">Evidence Ift Rosenheim</Link></li>
              <li><Link className="hover:underline" href="/ispitivanja-ims-beograd.pdf">Evidence Ims Beograd</Link></li>
              <li><Link className="hover:underline" href="/">Document</Link></li>
              <li><p>PIB: 111339405</p></li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-6">
            <h4 className="text-2xl font-bold">Products</h4>
            <ul className="flex flex-col gap-y-2">
              <li><Link className="hover:underline" href="/en/products/doors">Doors</Link></li>
              <li><Link className="hover:underline" href="/en/products/windows">Windows</Link></li>
              <li><Link className="hover:underline" href="/en/products/blinds">Blinds</Link></li>
              <li><Link className="hover:underline" href="/en/products/curtains">Curtains</Link></li>
              <li><Link className="hover:underline" href="/en/products/mosquito-nets">Mosquito Nets</Link></li>
              <li><Link className="hover:underline" href="/en/products/venetians">Venetians</Link></li>
              <li><Link className="hover:underline" href="/en/products/fences">Fences</Link></li>
            </ul>
          </div>

        </Wrap>
      </Bar>

      <Bar style={{ backgroundColor: '#1F2937' }} textColor="white">
        <Wrap className="flex flex-col-reverse justify-between text-center gap-y-2 pb-4 pt-4 lg:flex-row lg:text-left">
          <p>All rights reserved &copy; 2023 Šticko Plast. Created by <Link className="hover:underline" href="/">Andrej Stjepanović</Link></p>
          <ul className="flex gap-x-4 justify-center items-center lg:justify-between">
            <li><Link target="_blank" href="https://www.facebook.com/profile.php?id=100064276594775"><FontAwesomeIcon icon={faFacebook} /></Link></li>
            <li><Link target="_blank" href="https://www.facebook.com/profile.php?id=100064276594775"><FontAwesomeIcon icon={faInstagram} /></Link></li>
            <li><Link target="_blank" href="https://www.facebook.com/profile.php?id=100064276594775"><FontAwesomeIcon icon={faTiktok} /></Link></li>
          </ul>
        </Wrap>
      </Bar>
    </footer>
  )
}

export default enFooter;