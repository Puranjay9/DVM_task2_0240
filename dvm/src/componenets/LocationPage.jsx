import React , {useState} from 'react';
import './LocationPage.css'
import CountryAni from './CountryAni';

const LocationsPage = () => {
  
  return (
    <div className="bg-white text-black mt-[170px]">
      <div className="container mx-auto ml-[100px] relative">
        <div className=''>
            <h2 className="text-base font-bold mb-2 text-blue-500">OUR LOCATIONS</h2>
            <div className="absolute top-1 left-[11.25rem]  w-7/12 h-full border-t border-r border-solid border-[#00112e] rounded-tr-[6rem] z-[1] box-border visible" ></div>
        </div>
        <div className='w-6/12  mt-11'>
        <p className="mb-4 p-1 text-4xl">
          Around the world, our teams are dedicated to meeting your logistics needs. As part of the
          <span className=" text-blue decoration underline"> Euroports Group</span>, we can leverage group assets to support our solutions and add financial stability and flexibility, which is all to your benefit. Spin the globe and find your location.
        </p>
        <button className="bg-white text-[#00358d] flex flex-row font-semibold rounded-[30px] items-center border-[1px] border-[#99aed1]  text-xl ml-0 p-3 b-[65px] " >
          <h1 className='ml-2'>All Locations</h1>
          <div className='p-2 bg-[#00358d] h-full overflow-hidden min-h-10 min-w-10 rounded-full flex items-center ml-4 self-center justify-center hover:scale-105'>
           
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className='arrow'><path fill="#fff" fillRule="evenodd" d="M.15 12a.6.6 0 0 1 .6-.6h22.5a.6.6 0 0 1 0 1.2H.75a.6.6 0 0 1-.6-.6Z" clipRule="evenodd"></path><path fill="#fff" fillRule="evenodd" d="M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z" clipRule="evenodd"></path></svg>
             
          </div>
        </button>
        </div>
      </div>
      <CountryAni/>
    </div>
  );
};

export default LocationsPage;
