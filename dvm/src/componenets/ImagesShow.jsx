import React, { useEffect, useState } from 'react'

function ImagesShow({ images, delay = 3000 }) {
  const [currIndex, setCurrIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(false); 
      setCurrIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsTransitioning(true), delay+200); 
    }, delay);

    return () => clearInterval(intervalId);
  }, [images, delay]);

  return (
    <div>
      <div className="overflow-hidden">
        <img
          className={`slideshow-image transition-all ease-out duration-300 ${
            isTransitioning ? 'translate-x-0 opacity-1' : 'translate-x-full opacity-0'
          }`}
          src={images[currIndex]}
          alt={`Slide ${currIndex + 1}`}
        />
      </div>
    </div>
  );
}

export default ImagesShow;
