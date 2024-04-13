import React , {useState} from 'react'

function NewCard({title ,text , color , textcolor}) {

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
    <div className={`z-10 relative shadow-lg bg-[${color}] flex flex-col sm:flex-row w-[40vw] p-[90px] m-[60px] rounded-bl-[50px] hover:cursor-pointer max-sm:ml-0 max-sm:w-full max-sm:m-2 sm:w-[calc(45vw - 1rem)] sm:m-4 trasnition duration-[120ms] ease-linear `} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}>
    <div className={`text-${textcolor}`}>
        <h1 className='text-base font-semibold mb-5'>{title}</h1>
        <h1 className='text-3xl'>{text}</h1>
    </div>
    </div>
  )
}

export default NewCard