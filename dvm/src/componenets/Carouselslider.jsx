import React, { useState, useEffect } from 'react';

const CarouselSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 768) {
        setSlidesToShow(3); 
      } else if (screenWidth >= 576) {
        setSlidesToShow(2); 
        setSlidesToShow(1);
      }
    };

    updateSlidesToShow();

    window.addEventListener('resize', updateSlidesToShow);

    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevIndex) => Math.min(prevIndex + 1, slides.length - slidesToShow));
  };

  const slideWidth = 100 / slidesToShow; // Calculate the width of each slide

  return (
    <div className="relative m-11">
      <div className=" flex items-center justify-end px-4">
        <button className="bg-blue-950 text-gray-900 hover:bg-blue-500 focus:outline-none" onClick={goToPrevSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="bg-blue-950 text-gray-900 hover:bg-blue-500 focus:outline-none" onClick={goToNextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="overflow-hidden relative">
        <div className="flex transition-transform ease-in-out duration-300" style={{ transform: `translateX(-${currentSlide * slideWidth}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className={`flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/${slidesToShow} px-2`} style={{ width: `${slideWidth}%` }}>
              <div className="bg-gray-100 rounded-lg shadow-lg p-4">
                <img src={slide.image} alt={slide.title} className="rounded-lg mb-2" />
                <h2 className="text-2xl font-semibold">{slide.title}</h2>
                <p className="text-black text-xl">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default CarouselSlider;
