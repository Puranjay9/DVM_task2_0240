import React , {useState} from 'react';

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
        <button className="bg-blue-500 text-white px-4 py-2 rounded inline-block text-2xl m-6 mb-[65px]">
          All Locations
        </button>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;