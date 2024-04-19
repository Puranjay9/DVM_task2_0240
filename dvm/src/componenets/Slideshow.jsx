import React, { useEffect, useState } from 'react';
import { useColorMode } from '../ColorModeContextProvider';

const content = [
  {
    title: "We Believe in People",
    text: "We believe in our people because they are our greatest asset. At MPL, we are not just a company; we are a family. Each and every one of us shares our unique MPL culture, in which everyone is valued, supported, and empowered to reach their full potential.",
    image: "/img/img1.jpg",
    position: "130"
  },
  {
    title: "We Solve Each and Any Shipping Problem",
    text: "We work with teams per commodity, each with specific domain expertise, to provide high-quality solutions or knowledge for any product or request. With offices around the world, we have excellent knowledge of local markets, laws, and customs.",
    image: "/img/img2.jpg",
    position: "160"
  },
  {
    title: "Single Point of Contact",
    text: "Our colleagues assist and guide customers from end to end in all logistics processes, including customs clearance and tender and procurement services.",
    image: "/img/img3.jpg",
    position: "190"
  },
  {
    title: "Flexible & Fast Decision-Making",
    text: "Our flexibility and desire to help customers in any way possible really sets us apart. Our fast decision-making comes from the open internal communication strategy we follow.",
    image: "/img/img4.jpg",
    position: "240"
  },
];

const Slideshow = () => {
  const { colorMode } = useColorMode();
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading((prevProgress) => {
        if (prevProgress >= 100) {
          setActiveIndex((prevIndex) => (prevIndex === content.length - 1 ? 0 : prevIndex + 1));
          return 0;
        } else {
          return prevProgress + 1;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setLoading(0);
  }, [activeIndex]);

  return (
    <div className={`flex flex-row max-md:flex-col p-8 overflow-hidden h-[100vh] max-2xl:h-auto rounded-t-xl shadow-t-3xl transition-all duration-300 ${colorMode ? 'bg-[#ceaa53] text-[#1f1c16]' : 'bg-blue-900 text-white'}`} style={{ width: '100%', overflowX: 'hidden' }}>
      <div className="flex-1 ml-6 mr-0">
        <div className='flex text-7xl flex-col max-sm:text-4xl'>
          <h1>We’re Different</h1>
          <h1>Because</h1>
          <img
            src={content[activeIndex].image}
            alt="Associated content"
            className={`rounded-lg shadow-lg w-2/3 h-2/3 ml-1/5 max-sm:mt-[5vh] transition-all`}
            style={{ marginTop: `${content[activeIndex].position}px` }}
          />
        </div>
      </div>

      <div className='flex-1 flex-col p-2 ml-0 mt-11 mr-11 max-sm:h-[120vh] max-sm:mt-[10vh] '>
        {content.map((section, index) => (
          <div key={index} className="relative mb-6 transition-all ">
            <h1
              className="text-4xl cursor-pointer mb-8 max-sm:text-2xl transition-all"
              onClick={() => setActiveIndex(index)}
            >
              {section.title}
            </h1>
            {activeIndex === index ? (
              <p className="text-2xl m-11 ml-0 max-sm:text-sm transition-all">{section.text}</p>
            ) : null}
            <div className="h-[1.5px] bg-slate-500 w-full overflow-hidden">
              <div
                className={`h-[1.5px] bg-white transition-all duration-500 ease-in-out`}
                style={{ width: `${activeIndex === index ? loading : 0}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
