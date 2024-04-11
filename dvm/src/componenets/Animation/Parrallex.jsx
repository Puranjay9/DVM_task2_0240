import React from "react";
import AnimationItem from "./AnimationItem";

const ParallaxRow = ({ scrollPos, titles, images }) => {
  const itemCount = titles.length;
  const loopWidth = itemCount * 200; 
  const containerWidth = 3 * loopWidth; 

  const containerPosition = (scrollPos - (window.innerWidth - containerWidth) / 2) % loopWidth;

  return (
    <div className="flex items-center" style={{ width: `${containerWidth}px`, position: 'relative', left: `${-containerPosition}px` }}>
      {titles.map((title, index) => (
        <AnimationItem
          key={index}
          index={index}
          scrollPos={scrollPos}
          title={title}
          image={images[index]}
        />
      ))}
    </div>
  );
};

export default ParallaxRow;
