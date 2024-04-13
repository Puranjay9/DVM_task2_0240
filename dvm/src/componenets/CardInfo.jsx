import React, { useState } from 'react';
import { useColorMode } from '../ColorModeContextProvider';

const CardInfo = (props) => {
  const { colorMode } = useColorMode();
  const { title, text, image } = props;
  
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = target;

    const centerX = offsetWidth / 2;
    const centerY = offsetHeight / 2;

    const relativeX = offsetX - centerX;
    const relativeY = offsetY - centerY;

    const distanceFromCenter = Math.sqrt(Math.pow(relativeX, 2) + Math.pow(relativeY, 2));
    const distanceFactor = Math.min(distanceFromCenter / (centerX + centerY), 1);

    let angleX, angleY;

    if (relativeX >= 0 && relativeY < 0) { 
      angleX = (relativeY / centerY) * 30 * distanceFactor;
      angleY = -(relativeX / centerX) * 30 * distanceFactor;
    } else if (relativeX < 0 && relativeY < 0) { 
      angleX = (relativeY / centerY) * 30 * distanceFactor;
      angleY = -(relativeX / centerX) * 30 * distanceFactor;
    } else if (relativeX < 0 && relativeY >= 0) { 
      angleX = -(relativeY / centerY) * 30 * distanceFactor;
      angleY = -(relativeX / centerX) * 30 * distanceFactor;
    } else { 
      angleX = -(relativeY / centerY) * 30 * distanceFactor;
      angleY = -(relativeX / centerX) * 30 * distanceFactor;
    }

    setRotateX(angleX);
    setRotateY(angleY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className=" z-10 relative flex flex-col sm:flex-row w-[45vw] bg-inherit m-[60px] hover:cursor-pointer max-sm:ml-0 max-sm:w-full max-sm:m-2 sm:w-[calc(45vw - 1rem)] sm:m-4 trasnition duration-[120ms] ease-linear" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}>
    <div className="w-full sm:w-1/3 sm:order-1 overflow-hidden max-sm:h-1/2">
      <img className={`w-full h-full flex object-cover max-sm:h-1/2 ${image}`} src={image} alt="Card" />
    </div>
    <div className={`w-full sm:w-2/3 sm:order-2  shadow-lg transition-all duration-300${colorMode ? ' bg-[#ceaa53]' : ' bg-white'}`}>
      <div className='flex flex-col p-8'>
        <h1 className='text-2xl'>{title}</h1>
        <p className='text-base'>{text}</p>
      </div>
    </div>
  </div>

  



  );
};

export default CardInfo;
