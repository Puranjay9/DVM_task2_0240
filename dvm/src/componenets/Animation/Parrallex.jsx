// ParallaxRow.js
import React from "react";
import AnimationItem from "./AnimationItem";

const ParallaxRow = ({ scrollPos }) => {
  const itemCount = 5; // Adjust as needed
  const items = Array.from({ length: itemCount }, (_, index) => index);

  return (
    <div className="flex items-center">
      {items.map((index) => (
        <AnimationItem key={index} index={index} scrollPos={scrollPos} />
      ))}
    </div>
  );
};

export default ParallaxRow;
