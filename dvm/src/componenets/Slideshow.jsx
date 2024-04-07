import React, { useState } from 'react';

const content = [
  {
    title: "We Believe in People",
    text: "We believe in our people because they are our greatest asset. At MPL, we are not just a company; we are a family. Each and every one of us shares our unique MPL culture, in which everyone is valued, supported, and empowered to reach their full potential.",
    image: "/img/img1.jpg"
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

    return (
      <div className="flex flex-col h-screen">
        <div className="flex-1 bg-blue-900 text-white p-8 overflow-hidden">
          {content.map((section, index) => (
            <div key={index} className="relative mb-4">
              <h1 
                className="text-2xl font-bold cursor-pointer"
                onClick={() => setActiveIndex(index)}
              >
                {section.title}
              </h1>
              {activeIndex === index && (
                <>
                  <p className=" text-sm text-blue-200 ">{section.text}</p>
                  <div className="h-1 bg-white transition-all duration-500 ease-in-out w-full"></div>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="flex-1">
          <img
            src={content[activeIndex].image}
            alt="Associated content"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    );
  };
  

export default Slideshow;
