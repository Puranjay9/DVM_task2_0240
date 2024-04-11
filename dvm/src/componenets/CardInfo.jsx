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

    let angleX, angleY;

    if (relativeX >= 0 && relativeY < 0) { 
      angleX = (relativeY / centerY) * 25;
      angleY = (-relativeX / centerX) * 25;
    } else if (relativeX < 0 && relativeY < 0) { 
      angleX = (relativeY / centerY) * 25;
      angleY = (-relativeX / centerX) * 25;
    } else if (relativeX < 0 && relativeY >= 0) { 
      angleX = (-relativeY / centerY) * 25;
      angleY = (-relativeX / centerX) * 25;
    } else { 
      angleX = (-relativeY / centerY) * 25;
      angleY = (-relativeX / centerX) * 25;
    }

    setRotateX(angleX);
    setRotateY(angleY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="relative w-[750px] h-[350px] bg-inherit m-[60px] hover:cursor-pointer" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="absolute top-0 left-0 w-full h-full bg-white shadow-lg transform rotate-x-0 rotate-y-0 transition-transform duration-300"
        style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}>

            <div className='flex flex-row'>
               <img className='justify-end h-full w-[11.5rem] object-cover object-center'
                src={image}
                alt="Card"
                />
                <div className='flex flex-col ml-8 p-8'>
              <h1 className='text-2xl'>{title}</h1>
              <p  className='text-base'>{text}</p>
               </div>
  
            </div>

        </div>
      
    </div>
  );
};

export default CardInfo;
