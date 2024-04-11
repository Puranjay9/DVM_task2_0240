// ParallaxItem.js
import React from "react";

const AnimationItem = ({ index, scrollPos }) => {
  // Adjust the speed of movement by changing the multiplier (e.g., 0.5)
  const movement = scrollPos * 0.5 * (index + 1);

  return (
    <div
      className="w-24 h-24 bg-gray-300 m-4"
      style={{ transform: `translateX(${movement}px)` }}
    ></div>
  );
};

export default AnimationItem;
