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
        <Link className="w-64 h-full mb-1.5" href="/">
          <img className="h-full w-full" src="../../assets/header/logo-colored.png" alt="logo"></img>
        </Link>
        <button type="button" onClick={toggleMenu} aria-label="Toggle menu">
          <FontAwesomeIcon className="text-3xl pt-0.5" icon={faBars} />
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
            <button type="button" aria-label="Toggle menu" onClick={toggleMenu} className="-m-2.5 rounded-md p-2.5 text-white">
              <FontAwesomeIcon className="h-5 w-5" icon={faClose} />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link onClick={toggleMenu} href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white" aria-label="Početna">Početna</Link>
                <Link onClick={toggleMenu} href="/o-nama" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white" aria-label="O nama">O nama</Link>

                <div className="-mx-3">
                  <button type="button" aria-label="Toggle products" onClick={toggleProductsDropdown}
                    className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white" aria-expanded="false">
                    Proizvodi
                    <FontAwesomeIcon className="h-3 w-3" icon={faChevronDown} />
                  </button>
                  <div className={`${productsDropdownIsActive ? 'mt-2 space-y-2 max-h-96 transition-max-h duration-100 ease-in opacity-1 pointer-events-auto' :
                    'max-h-0 transition-max-h duration-100 ease-out opacity-0 pointer-events-none'}`}>
                    <Link onClick={toggleMenu} href="/proizvodi/vrata" className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-white" aria-label="Vrata">Vrata</Link>
                    <Link onClick={toggleMenu} href="/proizvodi/prozori" className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-white" aria-label="Prozori">Prozori</Link>
                    <Link onClick={toggleMenu} href="/proizvodi/roletne" className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-white" aria-label="Roletne">Roletne</Link>
                    <Link onClick={toggleMenu} href="/proizvodi/zavese" className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-white" aria-label="Zavese">Zavese</Link>
                    <Link onClick={toggleMenu} href="/proizvodi/komarnici" className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-white" aria-label="Komarnici">Komarnici</Link>
                    <Link onClick={toggleMenu} href="/proizvodi/ostalo" className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-white" aria-label="Ostalo">Ostalo</Link>
                    
                  </div>
                </div>

                <div className="-mx-3">
                  <button type="button" aria-label="Toggle documents" onClick={toggleDocumentationDropdown}
                    className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white" aria-expanded="false">
                    Dokumenti
                    <FontAwesomeIcon className="h-3 w-3" icon={faChevronDown} />
                  </button>
                  <div className={`${documentationDropdownIsActive ? 'mt-2 space-y-2 max-h-96 transition-max-h duration-100 ease-in opacity-1 pointer-events-auto' :
                    'max-h-0 transition-max-h duration-100 ease-out opacity-0 pointer-events-none'}`}>
                    <Link onClick={toggleMenu} href="/ispitivanja-ift-rosenheim.pdf" className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-white">Ispitivanja Ift Rosenheim</Link>
                    <Link onClick={toggleMenu} href="/ispitivanja-ims-beograd.pdf" className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-white">Ispitivanja Ims Beograd</Link>
                    <Link onClick={toggleMenu} href="/katalog-ukrasnih-panela-i-vrata-vesplast.pdf" className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-white">Katalog</Link>
                  </div>
                </div>

                <Link onClick={toggleMenu} href="/galerija" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white" aria-label="Galerija">Galerija</Link>
                <Link onClick={toggleMenu} href="/kontakt" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white" aria-label="Kontakt">Kontakt</Link>

                <div className="-mx-3">
                  <button type="button" aria-label="Toggle languages" onClick={toggleLanguageDropdown}
                    className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white" aria-expanded="false">
                    Jezik
                    <FontAwesomeIcon className="h-3 w-3" icon={faChevronDown} />
                  </button>
                  <div className={`${languageDropdownIsActive ? 'mt-2 space-y-2 max-h-96 transition-max-h duration-100 ease-in opacity-1 pointer-events-auto' :
                    'max-h-0 transition-max-h duration-100 ease-out opacity-0 pointer-events-none'}`}>
                    <Link onClick={toggleMenu} href="/" className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-white">Srpski</Link>
                    <Link onClick={toggleMenu} href="/en/home" className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-white">Engleski</Link>
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
                  <p className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7">info@sticko-plast.com</p>
                </div>
                <div className="flex items-center gap-x-4 text-white">
                  <FontAwesomeIcon className="w-4" icon={faLocationDot} />
                  <p className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7">Masarikova 37, Kisač, Srbija</p>
                </div>
                <div className="flex items-center gap-x-4 text-white">
                  <FontAwesomeIcon className="w-4" icon={faClock} />
                  <p className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7">Ponedeljak - Subota | 08:00 - 16:00</p>
                </div>
              </div>
              <div className="py-6 flex justify-center items-center gap-x-12 text-white">
                <Link aria-label="Open Facebook page in new tab"onClick={toggleMenu} target="_blank" href="https://www.facebook.com/profile.php?id=100064276594775"><FontAwesomeIcon size="xl" icon={faFacebook} /></Link>
                <Link aria-label="Open Instagram page in new tab"onClick={toggleMenu} target="_blank" href="https://www.instagram.com/sticko_plast/"><FontAwesomeIcon size="xl" icon={faInstagram} /></Link>
                <Link aria-label="Open Youtube page in new tab"onClick={toggleMenu} target="_blank" href="https://www.youtube.com/@StickoPlast"><FontAwesomeIcon size="xl" icon={faYoutube} /></Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default HamburgerMenu;