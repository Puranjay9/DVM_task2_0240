import React, { useState } from 'react';

const CardInfo = (props) => {
  const { title, text, image } = props;
  
  const [skewX, setSkewX] = useState(0);
  const [skewY, setSkewY] = useState(0);

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = target;

    console.log("X: ", offsetX);
    console.log("Y" ,offsetY);

    let skewXValue = 0;
    let skewYValue = 0;

    if (offsetX < 350 && offsetY < 150) {
      skewXValue = ((offsetX / offsetWidth) - 0.5) * 20;
      skewYValue = ((offsetY / offsetHeight) - 0.5) * 20;
    } else if (offsetX > 350 && offsetY < 150) {
      skewXValue = (((offsetX / offsetWidth) - 0.5) * 20);
      skewYValue = -(((offsetY / offsetHeight) - 0.5) * 20);
    }else if (offsetX > 350 && offsetY > 150) {
      skewXValue = -(((offsetX / offsetWidth) - 0.5) * 20);
      skewYValue = -(((offsetY / offsetHeight) - 0.5) * 20);
    }else if (offsetX < 350 && offsetY > 150) {
      skewXValue = (((offsetX / offsetWidth) - 0.5) * 20);
      skewYValue = -(((offsetY / offsetHeight) - 0.5) * 20);
    }
    
    setSkewX(skewXValue);
    setSkewY(skewYValue);
  };

  const handleMouseLeave = () => {
    setSkewX(0);
    setSkewY(0);
  };

  return (
    <div className="relative w-[750px] h-[350px] bg-white " onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="absolute top-0 left-0 w-full h-full bg-blue-500 transform skew-x-0 skew-y-0 transition-transform duration-300"
        style={{ transform: `skewX(${skewX}deg) skewY(${skewY}deg)` }}>

            <div className=''>
               <img className='w-1/5 h-full object-cover'
            src={image}
            >
               </img>

                <div className='flex flex-col'>
              <h1>{title}</h1>
              <p>{text}</p>
               </div>
   
          </div>

        </div>
      
    </div>
  );
};

export default CardInfo;
