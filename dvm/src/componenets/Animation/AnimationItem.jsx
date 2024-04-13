import React, { useState } from "react";
import { useColorMode } from '../../ColorModeContextProvider';

const AnimationItem = ({ index, scrollPos, title, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { colorMode } = useColorMode();

  const movement = scrollPos * 0.1 * (index + 1);

  const textColor = colorMode ? '#ceaa53' : '#00112e';

  return (
    <div
      className="w-auto h-24 bg-white-300 m-4 flex flex-row items-center justify-center translation-all"
      style={{ transform: `translateX(${movement}px)` }}
    >
      <img src={image} className="rounded-3xl w-1/2 h-3/4" alt="Image" />
      <h1
        className="text-[40px] m-5 font-bold"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          WebkitTextStroke: isHovered ? `1px ${textColor}` : 'none',
          color: isHovered ? 'transparent' : textColor
        }}
      >
        {title}
      </h1>
    </div>
  );
};

export default AnimationItem;
