import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Wrap from '../ui/Wrap';
import TopBar from './TopBar';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavMenu = () => {
    const currentRoute = useRouter().pathname;
    const [activePage, setActivePage] = useState(currentRoute);
    const [productDropdownIsActive, setIsProductDropdownActive] = useState(false);
    const [documentationDropdownIsActive, setIsDocumentationDropdownActive] = useState(false);

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

    return (
        <>
            <TopBar />
            <nav aria-label="Navigation" >
                <Wrap className="flex items-center justify-between py-5">
                    <Link href="/">
                        <img className="w-64 cursor-pointer" src="../../assets/header/logo-colored.png" alt="logo"></img>
                    </Link>
                    <ul className="flex gap-x-12">
                        <li className={`relative py-4 text-base font-semibold ${activePage === '/' ? 'navLinkActiveEffect' : 'navLinkBorderEffect'}`}>
                            <Link href="/" aria-label="Početna">Početna</Link>
                        </li>
                        <li className={`relative py-4 text-base font-semibold ${activePage === '/o-nama' ? 'navLinkActiveEffect' : 'navLinkBorderEffect'}`}>
                            <Link href="/o-nama" aria-label="O nama">O nama</Link>
                        </li>

                        <li className="relative cursor-pointer" onMouseEnter={handleProductDropdownEnter} onMouseLeave={handleProductDropdownLeave} >
                            <div className="relative py-4 text-base font-semibold" >
                                <button type="button" className="flex items-center gap-x-1 " aria-expanded="false" >Proizvodi
                                    <FontAwesomeIcon className="h-3 w-3 pb-0.5" icon={faChevronDown} />
                                </button>
                            </div>
                            <ul className={`absolute -left-8 top-full z-10 w-64 max-w-md rounded-3xl overflow-y-hidden bg-white shadow-lg
                                ${productDropdownIsActive ? 'ring-1 ring-gray-900/5 max-h-[450px] transition-max-h duration-300 ease-in py-4' : 'max-h-0 transition-max-h duration-300 ease-out'}`}>
                                <li>
                                    <Link className="block py-3 px-4 font-semibold transition duration-200 hover:bg-primary hover:text-white" href="/proizvodi/vrata" aria-label="Vrata">Vrata</Link>
                                </li>
                                <li>
                                    <Link className="block py-3 px-4 font-semibold transition duration-200 hover:bg-primary hover:text-white" href="/proizvodi/prozori" aria-label="Prozori">Prozori</Link>
                                </li>
                                <li>
                                    <Link className="block py-3 px-4 font-semibold transition duration-200 hover:bg-primary hover:text-white" href="/proizvodi/roletne" aria-label="Roletne">Roletne</Link>
                                </li>
                                <li>
                                    <Link className="block py-3 px-4 font-semibold transition duration-200 hover:bg-primary hover:text-white" href="/proizvodi/zavese" aria-label="Zavese">Zavese</Link>
                                </li>
                                <li>
                                    <Link className="block py-3 px-4 font-semibold transition duration-200 hover:bg-primary hover:text-white" href="/proizvodi/komarnici" aria-label="Komarnici">Komarnici</Link>
                                </li>
                                <li>
                                    <Link className="block py-3 px-4 font-semibold transition duration-200 hover:bg-primary hover:text-white" href="/proizvodi/venecijaneri" aria-label="Venecijaneri">Venecijaneri</Link>
                                </li>
                                <li>
                                    <Link className="block py-3 px-4 font-semibold transition duration-200 hover:bg-primary hover:text-white" href="/proizvodi/ograde" aria-label="Ograde">Ograde</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="relative cursor-pointer" onMouseEnter={handleDocumentationDropdownEnter} onMouseLeave={handleDocumentationDropdownLeave} >
                            <button type="button" className="relative py-4 flex items-center gap-x-1 text-base font-semibold" aria-expanded="false" >Dokumentacija
                                <FontAwesomeIcon className="h-3 w-3 pb-0.5" icon={faChevronDown} />
                            </button>
                            <ul className={`absolute -left-8 top-full z-10 w-64 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg
                                ${documentationDropdownIsActive ? 'ring-1 ring-gray-900/5 max-h-96 transition-max-h duration-300 ease-in py-4' : 'max-h-0 transition-max-h duration-300 ease-out'}`} >
                                <li>
                                    <Link className="block py-3 px-4 font-semibold transition duration-200 hover:bg-primary hover:text-white" href="/" aria-label="Dokument">Dokument</Link>
                                </li>
                                <li>
                                    <Link className="block py-3 px-4 font-semibold transition duration-200 hover:bg-primary hover:text-white" href="/" aria-label="Dokument">Dokument 2</Link>
                                </li>
                                <li>
                                    <Link className="block py-3 px-4 font-semibold transition duration-200 hover:bg-primary hover:text-white" href="/" aria-label="Dokument">Dokument 3</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={`relative py-4 text-base font-semibold ${activePage === '/galerija' ? 'navLinkActiveEffect' : 'navLinkBorderEffect'}`}>
                            <Link href="/galerija" aria-label="Galerija">Galerija</Link>
                        </li>
                        <li className={`relative py-4 text-base font-semibold ${activePage === '/kontakt' ? 'navLinkActiveEffect' : 'navLinkBorderEffect'}`}>
                            <Link href="/kontakt" aria-label="Kontakt">Kontakt</Link>
                        </li>
                    </ul>
                </Wrap>
            </nav>
        </>
    )
}

export default NavMenu;