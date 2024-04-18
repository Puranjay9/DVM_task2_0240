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

    const angleA = (relativeX + relativeY) / Math.sqrt(centerX * centerX + centerY * centerY) * 15;
    const angleB = (relativeX - relativeY) / Math.sqrt(centerX * centerX + centerY * centerY) * 15;

    setRotateX(angleA);
    setRotateY(angleB);
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
