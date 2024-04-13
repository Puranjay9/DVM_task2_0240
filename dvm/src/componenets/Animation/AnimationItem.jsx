import React from "react";

const AnimationItem = ({ index, scrollPos , title , image }) => {
  
  const movement = scrollPos * 0.1 * (index + 1);

  return (
    <div
      className="w-auto h-24 bg-white-300 m-4 flex flex-row items-center justify-center translation-all "
      style={{ transform: `translateX(${movement}px)` }}
    >   
        <img
        src={image}
        className="rounded-3xl w-1/2 h-3/4"
        ></img>
        <h1 className="text-[40px] m-5 font-bold">{title}</h1>

    </div>
  );
};

export default AnimationItem;
