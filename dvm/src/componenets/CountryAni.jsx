import React, { useState } from 'react';
import ParallaxRow from './Animation/Parrallex';

const Row1 = [
  {
    title: "Belgium",
    image: "",
  },
  {
    title: "Portugal",
    image: "",
  },
  {
    title: "Greece",
    image: "",
  },
  {
    title: "France",
    image: "",
  },
  {
    title: "United Kingdom",
    image: "",
  },
  {
    title: "Turkey",
    image: "",
  },
  {
    title: "Spain",
    image: "",
  },
  {
    title: "Germany",
    image: "",
  },
];

function CountryAni() {
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setScrollPos(currentPosition);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div
      className="h-1/6 overflow-y-scroll "
      onScroll={handleScroll}
      style={{
        scrollbarWidth: "none",
        WebkitOverflowScrolling: "none",
      }}
    >
      <div className="container mx-auto py-10">
        <ParallaxRow scrollPos={scrollPos} titles={Row1.map(item => item.title)} images={Row1.map(item => item.image)} />
      </div>
    </div>
  );
}

export default CountryAni;
