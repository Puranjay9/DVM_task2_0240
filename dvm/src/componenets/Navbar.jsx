import React, { useState, useEffect } from 'react';

function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    return (
        <div className={`Nav fixed top-0 h-[20px] w-full z-10 align-middle transition-all  z-5 ${visible? 'translate-y-0 duration-1000' : '-translate-y-[100vh] duration-500'}`}>
            <div className='bg-white '>
                <div className='text-sm bg-slate-100'>
                    <ul className='list-none flex justify-end mr-[70px]'>
                        <li className='mr-4 hover:cursor-pointer'>T&C</li>
                        <li className='mr-4 hover:cursor-pointer'>Blog</li>
                        <li className='mr-4 hover:cursor-pointer'>LOG IN</li>
                    </ul>
                </div>
                <div className='flex justify-between items-center ml-16 mt-2  '>
                    <div className='bg-white flex text-logo-txt' >
                        <img src="logo.jpg" alt="Logo" className=" h-full" />
                        <div className='text-2xl font-extrabold p-0'>
                            <h1 className='m-0'>MANUPORT</h1>
                            <h1 className='m-0'>LOGISTICS</h1>
                        </div>
                    </div>
                    
                    <div className='text-slate-600 text-base flex mr-[70px]'>
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
                </div>
            </div>
        </div>
    );
}

export default Navbar;
