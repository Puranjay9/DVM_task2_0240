import React, { useState, useEffect } from 'react';

function Navbar() {
    const [show, handleShow] = useState(false);

    const navbarTransition = () => {
        if (window.scrollY > 150) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", navbarTransition);
        return () => window.removeEventListener("scroll", navbarTransition);
    }, []);

    return (
        <div className={`Nav fixed top-0 h-1/6 w-full z-10 transition-all duration-500 z-5 ${show ? '-translate-y-full' : 'translate-y-0'}`}>
            <div className='bg-white '>
                <div className='text-sm bg-slate-100'>
                    <ul className='list-none flex justify-end'>
                        <li className='mr-4 hover:cursor-pointer'>T&C</li>
                        <li className='mr-4 hover:cursor-pointer'>Blog</li>
                        <li className='mr-4 hover:cursor-pointer'>LOG IN</li>
                    </ul>
                </div>
                <div className='flex justify-between items-center ml-16 mt-8 mb-8 '>
                    <div className='bg-white flex text-logo-txt' ml-300px>
                        <img src="./public/logo.jpg" alt="Logo" className="w-4 h-4" />
                        <div className='text-2xl font-bold'>
                            <h1>MANUPORT</h1>
                            <h1>LOGISTICS</h1>
                        </div>
                    </div>
                    
                    <div className='text-slate-600 text-xl flex justify-end mt-8 mb-8'>
                        <ul className='list-none flex font-bold '>
                            <li className='mr-4 hover:cursor-pointer hover:text-web-blue hover:underline hover:decoration-wavy ' >Home</li>
                            <li className='mr-4 hover:cursor-pointer'>Services</li>
                            <li className='mr-4 hover:cursor-pointer'>Commodities</li>
                            <li className='mr-4 hover:cursor-pointer'>Digital</li>
                            <li className='mr-4 hover:cursor-pointer'>Careers</li>
                            <li className='mr-4 hover:cursor-pointer'>About</li>
                            <li className='mr-4 hover:cursor-pointer'>ESG</li>
                            <li className='mr-4 hover:cursor-pointer'>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
