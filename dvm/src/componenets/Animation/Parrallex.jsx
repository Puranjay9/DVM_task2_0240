import React, { useState, useEffect } from "react";
import AnimationItem from "./AnimationItem";

const ParallaxRow = ({ scrollPos, titles, images, sign }) => {
  const extendedTitles = [...titles, ...titles];
  const extendedImages = [...images, ...images];

  const itemCount = extendedTitles.length;
  const loopWidth = itemCount * 200;
  const containerWidth = 3 * loopWidth;
  const scrollSpeedFactor = 0.9;

  const [containerPosition, setContainerPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newPosition = (scrollPos - (window.innerWidth - containerWidth) / 2) * scrollSpeedFactor;
      setContainerPosition(newPosition);
    };

    handleScroll(); 

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos, containerWidth, scrollSpeedFactor]);

  const initialPosition = sign === "" ? -6500 : 3000;
  const inertiaDuration = 2500; 

  return (
    <div className="overflow-hidden pr-9 w-full">
      <div className="flex" style={{ 
        width: `${containerWidth}px`, 
        transform: `translateX(${sign}${containerPosition}px)`, 
        animation: '35s slide infinite linear',
        marginLeft: `${initialPosition}px`,
        transition: `transform ${inertiaDuration / 1000}s ease-out`
      }}>
        {extendedTitles.map((title, index) => (
          <AnimationItem
            key={index}
            index={index}
            title={title}
            image={extendedImages[index]}
            sign={sign}
          />
        ))}
      </div>
    </div>
  );
};

export default ParallaxRow;