import React, { useState } from 'react';
import ParallaxRow from './Animation/Parrallex';

const Row1 = [
  {
    title: "Belgium",
    image: "/countries/img1.png",
  },
  {
    title: "Portugal",
    image: "/countries/img2.png",
  },
  {
    title: "Greece",
    image: "/countries/img3.png",
  },
  {
    title: "France",
    image: "/countries/img4.png",
  },
  {
    title: "United Kingdom",
    image: "/countries/img5.png",
  },
  {
    title: "Turkey",
    image: "/countries/img6.png",
  },
  {
    title: "Spain",
    image: "/countries/img7.png",
  },
  {
    title: "Germany",
    image: "/countries/img8.png",
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
      className="h-1/6 overflow-hidden "
      onScroll={handleScroll}
      style={{
        scrollbarWidth: "none",
        WebkitOverflowScrolling: "none",
      }}
    >
      <div className="container mx-auto py-10">
        <ParallaxRow scrollPos={scrollPos} titles={Row1.map(item => item.title)} images={Row1.map(item => item.image)} sign={"-"}/>
      </div>
    </div>
  );
}

export default CountryAni;
