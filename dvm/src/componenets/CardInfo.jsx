import React, { useState } from 'react';

const CardInfo = (props) => {
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
      angleY = (-relativeX / centerX) * 30 * distanceFactor;
    } else if (relativeX < 0 && relativeY < 0) { 
      angleX = (relativeY / centerY) * 30 * distanceFactor;
      angleY = (-relativeX / centerX) * 30 * distanceFactor;
    } else if (relativeX < 0 && relativeY >= 0) { 
      angleX = (-relativeY / centerY) * 30 * distanceFactor;
      angleY = (-relativeX / centerX) * 30 * distanceFactor;
    } else { 
      angleX = (-relativeY / centerY) * 30 * distanceFactor;
      angleY = (-relativeX / centerX) * 30 * distanceFactor;
    }

    setRotateX(angleX);
    setRotateY(angleY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="relative w-[45vw] h-[40vh] bg-inherit m-[60px] hover:cursor-pointer max-sm:w-full max-sm:m-2" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="absolute top-0 left-0 w-full h-full max-sm:h-auto bg-white shadow-lg transform rotate-x-0 rotate-y-0 transition-transform duration-300"
        style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}>

            <div className='flex flex-row max-sm:flex-col'>
               <div>
               <img className='justify-end h-full w-[11.5rem] flex object-cover max-sm:w-full max-sm:h-1/3'
                src={image}
                alt="Card"
                />
               </div>
                <div className='flex flex-col ml-8 p-8 max-sm:ml-0 max-sm:p-2 '>
              <h1 className='text-2xl'>{title}</h1>
              <p  className='text-base'>{text}</p>
               </div>
  
            </div>

        </div>
      
    </div>
  );
};

export default CardInfo;
