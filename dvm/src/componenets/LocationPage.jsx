import React from 'react';

const LocationsPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="container mx-auto p-6">
        <div className='flex flex-row'>
        <h2 className="text-base font-bold mb-2">OUR LOCATIONS</h2>
        <div className="border-b-2 border-black mb-4 w-3/4" ></div>
        </div>
        <div className='w-3/5 text-2xl p-8'>
        <p className="mb-4">
          Around the world, our teams are dedicated to meeting your logistics needs. As part of the
          <span className="text-blue-500"> Euroports Group</span>, we can leverage group assets to support our solutions and add financial stability and flexibility, which is all to your benefit. Spin the globe and find your location.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded inline-block">
          All Locations
        </button>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
