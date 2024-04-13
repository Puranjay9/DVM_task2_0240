import React, { useState, useEffect } from 'react';
import { useColorMode } from '../ColorModeContextProvider';

function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const { colorMode } = useColorMode();

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
        setPrevScrollPos(currentScrollPos);
    };

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        if (window.innerWidth >= 1024) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [prevScrollPos, visible]);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className={`Nav fixed top-0 left-0 h-[30px] w-full z-10 align-middle  max-lg:opacity-90 z-5 ${windowWidth > 1024 ? `${visible ? 'translate-y-0 duration-1000' : '-translate-y-[100vh] duration-500'}` : ''} `}>
            <div className={` ${colorMode ? 'bg-[#2c2713] text-white' : 'bg-white text-slate-600'}`}>
                <div className={`text-sm bg-slate-100 ${colorMode ? 'bg-[#86742e] text-[#ceaa53]' : 'bg-slate-100 text-blue-500'}`}>
                    <div className="flex justify-between items-center">
                        <div>
                            <button className="block lg:hidden" onClick={toggleMenu}>
                                <svg className={`w-6 h-6 ${showMenu ? 'hidden' : 'block'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                                <svg className={`w-6 h-6 ${showMenu ? 'block' : 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        {windowWidth >=1024 &&(
                            <ul className={`list-none flex justify-end mr-[70px] lg:flex`}>
                            <li className='mr-4 hover:cursor-pointer'>T&C</li>
                            <li className='mr-4 hover:cursor-pointer'>Blog</li>
                            <li className='mr-4 hover:cursor-pointer'>LOG IN</li>
                        </ul>
                        )}
                    </div>
                </div>

                <div className='flex justify-between items-center ml-16 mt-2 '>
                    <div className=' flex text-logo-txt' >
                        <img src="logo.jpg" alt="Logo" className=" h-full mt-2" />
                        <div className='text-2xl font-extrabold p-0'>
                            <h1 className='m-0'>MANUPORT</h1>
                            <h1 className='m-0'>LOGISTICS</h1>
                        </div>
                    </div>
                

                {windowWidth >= 1024 && (
                                <div className=' text-base flex mr-[70px]'>
                                <ul className='list-no10e flex font-bold '>
                                    <li className='ml-10 hover:cursor-pointer hover:text-web-blue hover:underline hover:decoration-wavy ' >Home</li>
                                    <li className='ml-10 hover:cursor-pointer'>Services</li>
                                    <li className='ml-10 hover:cursor-pointer'>Commodities</li>
                                    <li className='ml-10 hover:cursor-pointer'>Digital</li>
                                    <li className='ml-10 hover:cursor-pointer'>Careers</li>
                                    <li className='ml-10 hover:cursor-pointer'>About</li>
                                    <li className='ml-10 hover:cursor-pointer'>ESG</li>
                                    <li className='ml-10 hover:cursor-pointer'>Contact</li>
                                </ul>
                            </div>
                            )}
                </div>
            </div>
            {showMenu && (
                <div className="fixed top-0 left-0 h-screen w-full bg-gray-800 bg-opacity-50 z-20">
                    <div className="absolute top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform ease-in-out duration-300">
                        <button className="absolute top-2 right-2" onClick={toggleMenu}>
                            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <ul className="py-4 px-8">
                            <li className="my-2 hover:text-blue-500 cursor-pointer">Home</li>
                            <li className="my-2 hover:text-blue-500 cursor-pointer">Services</li>
                            <li className="my-2 hover:text-blue-500 cursor-pointer">Commodities</li>
                            <li className="my-2 hover:text-blue-500 cursor-pointer">Digital</li>
                            <li className="my-2 hover:text-blue-500 cursor-pointer">Careers</li>
                            <li className="my-2 hover:text-blue-500 cursor-pointer">About</li>
                            <li className="my-2 hover:text-blue-500 cursor-pointer">ESG</li>
                            <li className="my-2 hover:text-blue-500 cursor-pointer">Contact</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
