import React from "react";
import { useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderItems = [
    {
      id: 1,
      caption: "All the Latest Products In One Place",
    
    },
    {
      id: 2,
      caption: "Grab the Latest Products",
    
    },
    {
      id: 3,
      caption: "Find All Your Needs In One Place",
    
    },
  ];

  const nextSlide = () => {
    setCurrentSlide(currentSlide === sliderItems.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? sliderItems.length - 1 : currentSlide - 1);
  };

  return (
    <div className="relative">
      {sliderItems.map((item, index) => (
        <div key={item.id} className={`slide ${index === currentSlide ? 'block' : 'hidden'}`}>
          <img className="w-full" src={item.img} alt={`Slide ${item.id}`} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl">{item.caption}</h1>
            <p className="mt-2">A single place for all your products. Discover more products on our products section</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              <a href="#product-list">Discover More</a>
            </button>
          </div>
        </div>
      ))}
      <button className="absolute top-1/2 transform -translate-y-1/2 left-0" onClick={prevSlide}>Prev</button>
      <button className="absolute top-1/2 transform -translate-y-1/2 right-0" onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slider;
