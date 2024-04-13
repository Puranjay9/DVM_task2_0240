import React from "react";
import AnimationItem from "./AnimationItem";

const ParallaxRow = ({ scrollPos, titles, images ,sign }) => {
  const itemCount = titles.length;
  const loopWidth = itemCount * 200; 
  const containerWidth = 3 * loopWidth; 

  const containerPosition = (scrollPos - (window.innerWidth - containerWidth) / 2) % loopWidth;

  return (
    <div className="flex items-center pr-9" style={{ width: `${containerWidth}px`, position: 'relative', left: `${sign}${containerPosition}px` }}>
      {titles.map((title, index) => (
        <AnimationItem
          key={index}
          index={index}
          scrollPos={scrollPos}
          title={title}
          image={images[index]}
          sign ={sign}
        />
      ))}
    </div>
  );
};

export default ParallaxRow;
