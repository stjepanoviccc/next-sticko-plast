import { useState } from 'react';
import Link from 'next/link';
import Wrap from '../ui/Wrap';
import TopBar from './TopBar';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavMenu = () => {
    const [documentationDropdownIsActive, setIsDocumentationDropdownActive] = useState(false);

    const handleMouseEnter = () => {
        setIsDocumentationDropdownActive(true);
    };

    const handleMouseLeave = () => {
        setIsDocumentationDropdownActive(false);
    };

    return (
        <>
            <TopBar />
            <nav aria-label="Navigation" >
                <Wrap className="flex items-center justify-between py-5">
                    <div className="flex flex-1">
                        <Link href="/" className="-m-1.5 p-1.5 font-bold text-3xl">ŠTICKO PLAST</Link>
                    </div>
                    <div className="flex gap-x-12">
                        <Link href="/" className="py-4 text-base font-semibold transition duration-300 border-b-4 border-transparent hover:border-primary"
                            aria-label="Početna">Početna</Link>
                        <Link href="/o-nama" className="py-4 text-base font-semibold transition duration-300 border-b-4 border-transparent hover:border-primary"
                            aria-label="O nama">O nama</Link>
                        <Link href="/proizvodi" className="py-4 text-base font-semibold transition duration-300 border-b-4 border-transparent hover:border-primary"
                            aria-label="Proizvodi">Proizvodi</Link>
                        <div className="relative cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                            <button type="button" className="relative py-4 flex items-center gap-x-1 text-base font-semibold" aria-expanded="false" >Dokumentacija
                                <FontAwesomeIcon className="h-3 w-3 pb-0.5" icon={faChevronDown} />
                            </button>
                            <div className={`absolute -left-8 top-full z-10 w-64 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg
                                ${documentationDropdownIsActive ? 'ring-1 ring-gray-900/5 max-h-96 transition-max-h duration-300 ease-in' : 'max-h-0 transition-max-h duration-300 ease-out'}`} >
                                <div className="py-4">
                                    <Link href="/" className="block p-4 text-sm font-semibold transition duration-200 hover:bg-primary hover:text-white" aria-label="Dokument">Dokument</Link>
                                    <Link href="/" className="block p-4 text-sm font-semibold transition duration-200 hover:bg-primary hover:text-white" aria-label="Dokument">Dokument 2</Link>
                                    <Link href="/" className="block p-4 text-sm font-semibold transition duration-200 hover:bg-primary hover:text-white" aria-label="Dokument">Dokument 3</Link>
                                </div>
                            </div>
                        </div>
                        <Link href="/galerija" className="py-4 text-base font-semibold transition duration-300 border-b-4 border-transparent hover:border-primary" aria-label="Galerija">Galerija</Link>
                        <Link href="/kontakt" className="py-4 text-base font-semibold transition duration-300 border-b-4 border-transparent hover:border-primary" aria-label="Kontakt">Kontakt</Link>
                    </div>
                </Wrap>
            </nav>
        </>
    )
}

export default NavMenu;
