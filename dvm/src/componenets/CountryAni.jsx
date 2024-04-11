import React , { useState }from 'react'
import ParallaxRow from './Animation/Parrallex';

function CountryAni() {
    const [scrollPos, setScrollPos] = useState(0);

    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPos(currentPosition);
    };
  
    
    window.addEventListener("scroll", handleScroll);
  
    return (
      <div className="h-screen overflow-y-scroll " onScroll={handleScroll}
      style={
        { scrollbarWidth: "none", 
        WebkitOverflowScrolling: "none",}
      }
      >
        <div className="container mx-auto py-10">
          <ParallaxRow scrollPos={scrollPos} />
          
        </div>
      </div>
    );
  };

export default CountryAni