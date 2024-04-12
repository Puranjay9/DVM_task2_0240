import React from "react";

const AnimationItem = ({ index, scrollPos , title , images }) => {
  
  const movement = scrollPos * 0.1 * (index + 1);

  return (
    <div
      className="w-[300px] h-24 bg-white-300 m-4"
      style={{ transform: `translateX(${movement}px)` }}
    >   
        <img
        src={images}
        className="rounded-3xl"
        ></img>
        <h1>{title}</h1>
    </div>
  );
};

export default AnimationItem;
