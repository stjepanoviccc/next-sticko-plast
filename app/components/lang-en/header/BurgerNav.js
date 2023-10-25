import { useState, useEffect } from 'react';
import Link from 'next/link';
import Wrap from '../../ui/Wrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faClose, faBars, faClock, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

const HamburgerMenu = () => {
  const [menuIsActive, setIsMenuActive] = useState(false);
  const [productsDropdownIsActive, setIsProductsDropdownActive] = useState(false);
  const [documentationDropdownIsActive, setIsDocumentationDropdownActive] = useState(false);
  const [languageDropdownIsActive, setIsLanguageDropdownActive] = useState(false);

  // make whole app unscrollable
  useEffect(() => {
    menuIsActive ? document.querySelector('body').style.overflow = 'hidden' : document.querySelector('body').style.overflow = 'auto'
  }, [menuIsActive])

  const toggleMenu = () => {
    setIsMenuActive(prev => !prev);
  }

  const toggleDocumentationDropdown = () => {
    setIsDocumentationDropdownActive(prev => !prev);
  }

  const toggleProductsDropdown = () => {
    setIsProductsDropdownActive(prev => !prev);
  }

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownActive(prev => !prev);
  }

  const phoneNumber = "+381 64 1284447";
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      <Wrap className="flex items-center justify-between bg-white py-6">
        <Link className="w-64 h-full mb-1.5" href="/en/home">
          <img className="w-full h-full" src="../../assets/header/logo-colored.png" alt="logo"></img>
        </Link>
        <button type="button" onClick={toggleMenu} aria-label="Toggle menu">
          <FontAwesomeIcon className="h-8 w-8 pt-0.5" icon={faBars} />
        </button>
      </Wrap>
      <nav className={`fixed inset-y-0 right-0 w-full sm:w-96 transform 
      ${menuIsActive ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out bg-primary text-white`}
        role="dialog" aria-modal="true" style={{ zIndex: menuIsActive ? 1000 : -1 }}>
        <div className="fixed inset-0 z-10"></div>
        <div className="fixed inset-y-0 right-0 z-10 px-6 py-6  w-full overflow-y-auto bg-primary sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link onClick={toggleMenu} href="/" className="-m-1.5 p-1.5">
              <img className="w-64 mb-1.5" src="../../assets/header/logo-white.png" alt="nav-logo"></img>
            </Link>
            <button type="button" aria-label="Toggle" onClick={toggleMenu} className="-m-2.5 rounded-md p-2.5 text-white">
              <FontAwesomeIcon className="h-5 w-5" icon={faClose} />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link onClick={toggleMenu} href="/en/home" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white" aria-label="Home">Home</Link>
                <Link onClick={toggleMenu} href="/en/about-us" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white" aria-label="About us">About us</Link>

                <div className="-mx-3">
                  <button type="button" aria-label="Toggle products dropdown" onClick={toggleProductsDropdown}
                    className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white" aria-expanded="false">
                    Products
                    <FontAwesomeIcon className="h-3 w-3" icon={faChevronDown} />
                  </button>
                  <div className={`${productsDropdownIsActive ? 'mt-2 space-y-2 max-h-96 transition-max-h duration-100 ease-in opacity-1 pointer-events-auto' :
                    'max-h-0 transition-max-h duration-100 ease-out opacity-0 pointer-events-none'}`}>
                    <Link onClick={toggleMenu} href="/en/products/doors" className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-white" aria-label="Doors">Doors</Link>
                    <Link onClick={toggleMenu} href="/en/products/windows" className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-white" aria-label="Windows">Windows</Link>
                    <Link onClick={toggleMenu} href="/en/products/blinds" className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-white" aria-label="Blinds">Blinds</Link>
                    <Link onClick={toggleMenu} href="/en/products/curtains" className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-white" aria-label="Curtains">Curtains</Link>
                    <Link onClick={toggleMenu} href="/en/products/mosquito-nets" className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-white" aria-label="Mosquito Nets">Mosquito nets</Link>
                    <Link onClick={toggleMenu} href="/en/products/other" className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-white" aria-label="Other">Other</Link>
                  </div>
                </div>

                <div className="-mx-3">
                  <button type="button" aria-label="Toggle document dropdown" onClick={toggleDocumentationDropdown}
                    className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white" aria-expanded="false">
                    Documents
                    <FontAwesomeIcon className="h-3 w-3" icon={faChevronDown} />
                  </button>
                  <div className={`${documentationDropdownIsActive ? 'mt-2 space-y-2 max-h-96 transition-max-h duration-100 ease-in opacity-1 pointer-events-auto' :
                    'max-h-0 transition-max-h duration-100 ease-out opacity-0 pointer-events-none'}`}>
                    <Link onClick={toggleMenu} href="/ispitivanja-ift-rosenheim.pdf" className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-white">Evidence Ift Rosenheim</Link>
                    <Link onClick={toggleMenu} href="/ispitivanja-ims-beograd.pdf" className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-white">Evidence Ims Beograd</Link>
                    <Link onClick={toggleMenu} href="/katalog-ukrasnih-panela-i-vrata-vesplast.pdf" className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-white">Catalog</Link>
                  </div>
                </div>

                <Link onClick={toggleMenu} href="/en/gallery" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white" aria-label="Gallery">Gallery</Link>
                <Link onClick={toggleMenu} href="/en/contact" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white" aria-label="Contact">Contact</Link>

                <div className="-mx-3">
                  <button type="button" onClick={toggleLanguageDropdown}
                    className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white" aria-expanded="false">
                    Language
                    <FontAwesomeIcon className="h-3 w-3" icon={faChevronDown} />
                  </button>
                  <div className={`${languageDropdownIsActive ? 'mt-2 space-y-2 max-h-96 transition-max-h duration-100 ease-in opacity-1 pointer-events-auto' :
                    'max-h-0 transition-max-h duration-100 ease-out opacity-0 pointer-events-none'}`}>
                    <Link onClick={toggleMenu} href="/" className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-white">Serbian</Link>
                    <Link onClick={toggleMenu} href="/en/home" className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-white">English</Link>
                  </div>
                </div>

              </div>
              <div className="py-6">
                <button type="button" aria-label="Call us" onClick={handleCall} className="flex items-center gap-x-4 text-white">
                  <FontAwesomeIcon className="w-4" icon={faPhone} />
                  <Link href={`tel:${phoneNumber}`} className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7">{phoneNumber}</Link>
                </button>
                <div className="flex items-center gap-x-4 text-white">
                  <FontAwesomeIcon className="w-4" icon={faEnvelope} />
                  <p className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7">stickoplast@gmail.com</p>
                </div>
                <div className="flex items-center gap-x-4 text-white">
                  <FontAwesomeIcon className="w-4" icon={faLocationDot} />
                  <p className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7">Masarikova 37, Kisač, Serbia</p>
                </div>
                <div className="flex items-center gap-x-4 text-white">
                  <FontAwesomeIcon className="w-4" icon={faClock} />
                  <p className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7">Mon - Sat | 08:00 - 16:00</p>
                </div>
              </div>
              <div className="py-6 flex justify-center items-center gap-x-12 text-white">
                <Link aria-label="Open Facebook page in new tab" onClick={toggleMenu} target="_blank" href="https://www.facebook.com/profile.php?id=100064276594775"><FontAwesomeIcon className="h-8 w-8" icon={faFacebook} /></Link>
                <Link aria-label="Open Instagram page in new tab" onClick={toggleMenu} target="_blank" href="https://www.instagram.com/sticko_plast/"><FontAwesomeIcon className="h-8 w-8" icon={faInstagram} /></Link>
                <Link aria-label="Open Youtube page in new tab" onClick={toggleMenu} target="_blank" href="https://www.youtube.com/@StickoPlast"><FontAwesomeIcon className="h-8 w-8" icon={faYoutube} /></Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default HamburgerMenu;