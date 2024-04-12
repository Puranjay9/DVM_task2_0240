import React, { useEffect, useState } from 'react';

const content = [
  {
    title: "We Believe in People",
    text: "We believe in our people because they are our greatest asset. At MPL, we are not just a company; we are a family. Each and every one of us shares our unique MPL culture, in which everyone is valued, supported, and empowered to reach their full potential.",
    image: "/img/img1.jpg",
    position :"mt"
  },
  {
    title: "We Solve Each and Any Shipping Problem",
    text: "We work with teams per commodity, each with specific domain expertise, to provide high-quality solutions or knowledge for any product or request. With offices around the world, we have excellent knowledge of local markets, laws, and customs.",
    image: "/img/img2.jpg"
  },
  {
    title: "Single Point of Contact",
    text: "Our colleagues assist and guide customers from end to end in all logistics processes, including customs clearance and tender and procurement services.",
    image: "/img/img3.jpg"
  },
  {
    title: "Flexible & Fast Decision-Making",
    text: "Our flexibility and desire to help customers in any way possible really sets us apart. Our fast decision-making comes from the open internal communication strategy we follow.",
    image: "/img/img4.jpg"
  },
];

const Slideshow = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [loading , setLoading ] = useState(0);

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
      <div className="flex flex-row bg-blue-900 text-white p-8 overflow-hidden h-[900px] rounded-t-xl shadow-t-3xl">
        
        <div className="flex-1 ml-6 mr-0">
          <div className='flex text-7xl flex-col'>
            <h1>We’re Different</h1>
            <h1>Because</h1>

            <img
              src={content[activeIndex].image}
              alt="Associated content"
              className="rounded-lg shadow-lg w-2/3 h-2/3 ml-1/5 mt-[230px]"
            />
          </div>
        </div>

        <div className='flex-1 flex-col p-2 text-white ml-0 mt-11 mr-11 '>
          {content.map((section, index) => (
            <div key={index} className="relative mb-6">
              <h1 
                className="text-4xl cursor-pointer mb-8"
                onClick={() => setActiveIndex(index)}
              >
                {section.title}
              </h1>
              {activeIndex === index ? (
                <p className="text-2xl text-blue-200 m-11 ml-0">{section.text}</p>
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
