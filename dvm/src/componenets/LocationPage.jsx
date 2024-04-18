import React , {useState} from 'react';
import CountryAni from './CountryAni';
import AnimaButton from './AnimaButton';
import { useColorMode } from '../ColorModeContextProvider';

const LocationsPage = () => {

  const { colorMode } = useColorMode();
  
  return (
    <div className={`bg-inherit transition-all duration-300 ${colorMode ? ' text-[#ceaa53]' : ' text-blue-950'} mt-[170px] `}>
      <div className="container mx-auto ml-[5vw] max-sm:ml-2 relative">
        <div className=''>
            <h2 className={`text-base font-bold mb-2 transition-all duration-300  ${colorMode ? ' text-[#ceaa53]' : ' text-blue-600'}`}>OUR LOCATIONS</h2>
            <div className={`absolute top-1 left-[11.25rem] max-sm:left-2  w-7/12 h-full border-t border-r border-solid transition-all duration-300  ${colorMode ? ' border-[#ceaa53]' : ' border-[#00112e]'} rounded-tr-[6rem] z-[1] box-border visible max-sm:hidden`} ></div>
        </div>
        <div className='w-6/12  mt-11 max-sm:w-11/12'>
        <p className="mb-4 p-1 text-4xl max-sm:text-xl">
          Around the world, our teams are dedicated to meeting your logistics needs. As part of the
          <span className=" text-blue decoration underline"> Euroports Group</span>, we can leverage group assets to support our solutions and add financial stability and flexibility, which is all to your benefit. Spin the globe and find your location.
        </p>
        <div className={`transition-all duration-300 ${colorMode ? ' text-[#ceaa53]' : ' text-blue-950'}`}>
       <AnimaButton text={"All location"}/>
       </div>
        </div>
      </div>
      <CountryAni/>
    </div>
  );
};

export default LocationsPage;
