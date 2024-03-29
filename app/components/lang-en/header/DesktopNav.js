import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Wrap from '../../ui/Wrap';
import TopBar from './TopBar';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavMenu = () => {
    const currentRoute = useRouter().pathname;
    const [activePage, setActivePage] = useState(currentRoute);
    const [productDropdownIsActive, setIsProductDropdownActive] = useState(false);
    const [documentationDropdownIsActive, setIsDocumentationDropdownActive] = useState(false);
    const [languageDropdownIsActive, setIsLanguageDropdownActive] = useState(false);

    useEffect(() => {
        setActivePage(currentRoute);
    }, [currentRoute])

    const handleProductDropdownEnter = () => {
        setIsProductDropdownActive(true);
    };

    const handleProductDropdownLeave = () => {
        setIsProductDropdownActive(false);
    };

    const handleDocumentationDropdownEnter = () => {
        setIsDocumentationDropdownActive(true);
    };

    const handleDocumentationDropdownLeave = () => {
        setIsDocumentationDropdownActive(false);
    };

    const handleLanguageDropdownEnter = () => {
        setIsLanguageDropdownActive(true);
    };

    const handleLanguageDropdownLeave = () => {
        setIsLanguageDropdownActive(false);
    };

    return (
        <>
            <TopBar />
            <nav aria-label="Navigation" >
                <Wrap className="flex items-center justify-between py-5">
                    <Link href="/en/home">
                        <img className="h-full w-64 cursor-pointer" src="../../assets/header/logo-colored.png" alt="logo"></img>
                    </Link>
                    <ul className="flex gap-x-12">
                        <li className={`relative py-4 text-base font-semibold ${activePage === '/en/home' ? 'navLinkActiveEffect' : 'navLinkBorderEffect'}`}>
                            <Link href="/en/home" aria-label="Home">Home</Link>
                        </li>
                        <li className={`relative py-4 text-base font-semibold ${activePage === '/en/about-us' ? 'navLinkActiveEffect' : 'navLinkBorderEffect'}`}>
                            <Link href="/en/about-us" aria-label="About us">About us</Link>
                        </li>

                        <li className="relative cursor-pointer" onMouseEnter={handleProductDropdownEnter} onMouseLeave={handleProductDropdownLeave} >
                            <div className="relative py-4 text-base font-semibold" >
                                <button type="button" className="flex items-center gap-x-1 " aria-expanded="false">Products
                                    <FontAwesomeIcon className="h-3 w-3 pb-0.5" icon={faChevronDown} />
                                </button>
                            </div>
                            <ul className={`absolute -left-8 top-full z-10 w-60 max-w-md rounded-3xl overflow-y-hidden bg-white shadow-lg
                                ${productDropdownIsActive ? 'ring-1 ring-gray-900/5 max-h-[450px] transition-max-h duration-300 ease-in py-4' : 'max-h-0 transition-max-h duration-300 ease-out'}`}>
                                <li>
                                    <Link className="block py-3 px-4 font-semibold transition duration-200 hover:bg-primary hover:text-white"
                                        onClick={handleProductDropdownLeave} href="/en/products/doors" aria-label="Doors">Doors</Link>
                                </li>
                                <li>
                                    <Link className="block py-3 px-4 font-semibold transition duration-200 hover:bg-primary hover:text-white"
                                        onClick={handleProductDropdownLeave} href="/en/products/windows" aria-label="Windows">Windows</Link>
                                </li>
                                <li>
                                    <Link className="block py-3 px-4 font-semibold transition duration-200 hover:bg-primary hover:text-white"
                                        onClick={handleProductDropdownLeave} href="/en/products/blinds" aria-label="Blinds">Blinds</Link>
                                </li>
                                <li>
                                    <Link className="block py-3 px-4 font-semibold transition duration-200 hover:bg-primary hover:text-white"
                                        onClick={handleProductDropdownLeave} href="/en/products/curtains" aria-label="Curtains">Curtains</Link>
                                </li>
                                <li>
                                    <Link className="block py-3 px-4 font-semibold transition duration-200 hover:bg-primary hover:text-white"
                                        onClick={handleProductDropdownLeave} href="/en/products/mosquito-nets" aria-label="Mosquito Nets">Mosquito nets</Link>
                                </li>
                                <li>
                                    <Link className="block py-3 px-4 font-semibold transition duration-200 hover:bg-primary hover:text-white"
                                        onClick={handleProductDropdownLeave} href="/en/products/other" aria-label="Other">Other</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="relative cursor-pointer" onMouseEnter={handleDocumentationDropdownEnter} onMouseLeave={handleDocumentationDropdownLeave} >
                            <button type="button" className="relative py-4 flex items-center gap-x-1 text-base font-semibold" aria-expanded="false" >Documents
                                <FontAwesomeIcon className="h-3 w-3 pb-0.5" icon={faChevronDown} />
                            </button>
                            <ul className={`absolute -left-8 top-full z-10 w-60 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg
                                ${documentationDropdownIsActive ? 'ring-1 ring-gray-900/5 max-h-96 transition-max-h duration-300 ease-in py-4' : 'max-h-0 transition-max-h duration-300 ease-out'}`} >
                                <li>
                                    <Link className="block py-3 px-4 font-semibold transition duration-200 hover:bg-primary hover:text-white"
                                        onClick={handleDocumentationDropdownLeave} href="/ispitivanja-ift-rosenheim.pdf" aria-label="Dokument">Evidence Ift Rosenheim</Link>
                                </li>
                                <li>
                                    <Link className="block py-3 px-4 font-semibold transition duration-200 hover:bg-primary hover:text-white"
                                        onClick={handleDocumentationDropdownLeave} href="/ispitivanja-ims-beograd.pdf" aria-label="Dokument">Evidence Ims Beograd</Link>
                                </li>
                                <li>
                                    <Link className="block py-3 px-4 font-semibold transition duration-200 hover:bg-primary hover:text-white"
                                        onClick={handleDocumentationDropdownLeave} href="/katalog-ukrasnih-panela-i-vrata-vesplast.pdf" aria-label="Dokument">Catalog</Link>
                                </li>
                            </ul>
                        </li>

                        <li className={`relative py-4 text-base font-semibold ${activePage === '/en/gallery' ? 'navLinkActiveEffect' : 'navLinkBorderEffect'}`}>
                            <Link href="/en/gallery" aria-label="Gallery">Gallery</Link>
                        </li>
                        <li className={`relative py-4 text-base font-semibold ${activePage === '/en/contact' ? 'navLinkActiveEffect' : 'navLinkBorderEffect'}`}>
                            <Link href="/en/contact" aria-label="Contact">Contact</Link>
                        </li>

                        <li className="relative cursor-pointer" onMouseEnter={handleLanguageDropdownEnter} onMouseLeave={handleLanguageDropdownLeave} >
                            <button type="button" className="relative py-4 flex items-center gap-x-1 text-base font-semibold" aria-expanded="false" >EN
                                <FontAwesomeIcon className="h-3 w-3 pb-0.5" icon={faChevronDown} />
                            </button>
                            <ul className={`absolute -left-4 top-full z-10 w-16 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg
                                ${languageDropdownIsActive ? 'ring-1 ring-gray-900/5 max-h-96 transition-max-h duration-300 ease-in py-4' : 'max-h-0 transition-max-h duration-300 ease-out'}`} >
                                <li>
                                    <Link onClick={() => {
                                        handleLanguageDropdownLeave();
                                    }} className="block py-3 px-4 font-semibold transition duration-200 hover:bg-primary hover:text-white" href="/" aria-label="Serbian">SR</Link>
                                </li>
                                <li>
                                    <Link onClick={() => {
                                        handleLanguageDropdownLeave();
                                    }} className="block py-3 px-4 font-semibold transition duration-200 hover:bg-primary hover:text-white" href="/en/home" aria-label="English">EN</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </Wrap>
            </nav>
        </>
    )
}

export default NavMenu;