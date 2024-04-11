import React from "react";

const AnimationItem = ({ index, scrollPos , title , images }) => {
  
  const movement = scrollPos * 0.1 * (index + 1);

  return (
    <div
      className="w-24 h-24 bg-gray-300 m-4"
      style={{ transform: `translateX(${movement}px)` }}
    >
        <h1>{title}</h1>
    </div>
  );
};

export default AnimationItem;
