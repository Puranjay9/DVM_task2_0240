import React, { useEffect, useState } from 'react';
import ImagesShow from './ImagesShow';
import AnimaButton from './AnimaButton';
import { useColorMode } from '../ColorModeContextProvider';

const slider1 = [
   '/slider_images/slider1/image1.png', 
   '/slider_images/slider1/image2.png',
   '/slider_images/slider1/image3.png',
   '/slider_images/slider1/image4.png',
   '/slider_images/slider1/image5.png',
   '/slider_images/slider1/image6.png',        
];

function Info() {

  const [scrollPos , setScrollPos] = useState(0);

  const handleScroll =() =>{
    setScrollPos(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])

  const { colorMode } = useColorMode();
  
  return (
    <div>
      <div className='flex flex-row m-[80px] p-[60px] max-sm:flex-col max-sm:m-2 max-sm:p-2'>
        <div className={`flex flex-col items-start justify-center w-6/12 h-6/12 max-sm:w-full  ${colorMode ? ' text-[#ceaa53]' : ' text-blue-950'}`}>
          <h1 className=' text-[56px] text-left'>How we Move</h1>
          <p className=' text-[20px] mb-7 mt-7 text-left'>Manuport Logistics offers a different approach to shipping, guided by creative thinking. Ship, barge, plane, train, truck, or a combination. For you, we move mountains.</p>
          <div className=''>
          <AnimaButton text={"Discover Our Services"} />
          </div>
        </div>
        <div className='flex justify-center items-center w-1/2 h-1/2 max-sm:w-full'>
          <div className={`shadow-lg rounded-tl-[60px] w-11/12 h-full `} >
            <ImagesShow images={slider1}/>
          </div>
        </div>
      </div>



      <div className='relative flex flex-row max-sm:flex-col max-sm:h-auto'>
  <div className='flex justify-center items-center w-1/2 h-1/2 z-[7] absolute left-[50px] top-[150px] max-sm:top-0 max-sm:h-11/12 max-sm:items-start max-sm:left max-sm:w-full transition-all ' style={{ transform: `translateY(-${(scrollPos * 0.2)-700}px)` }}>
    <ImagesShow images={slider1}/>
  </div>

    
  <div className={` translate-x-1/2 max-sm:translate-x-0 right-0 flex flex-col justify-center  w-8/12 h-screen rounded-tl-[60px] rounded-bl-[60px] items-center max-sm:w-full transition-all duration-300 ${colorMode ? ' bg-[#ceaa53]' : ' bg-blue-900'}`}>
   <div className='ml-[250px] w-3/5 max-sm:ml-5 max-sm:mt-56'>
   <h1 className='text-[#fff] text-[56px] text-left'>What we Move</h1>
    <p className='text-[#fff] text-[20px] mb-7 mt-7 text-left'>Behind every shipment lies a world of possibilities. Whether it's raw materials, chemicals, consumer goods, or anything else. What we ship isn’t just cargo, we carry your dreams.</p>
    <div className='text-white'>
    <AnimaButton text={"About our Commodities"} />
    </div>
   </div>
  </div>
        </div>


        <div className='flex flex-row m-[80px] p-[60px] max-sm:flex-col max-sm:m-2 max-sm:p-2'>
        <div className={`flex flex-col items-start justify-center w-6/12 h-6/12 max-sm:w-full max-sm:mt-[10vh] transition-all duration-300  ${colorMode ? ' text-[#ceaa53]' : ' text-blue-950'}`}>
          <h1 className=' text-[56px] text-left max-sm:text-5xl'>A Fully Transparent Logistics Flow at your Fingertips</h1>
          <p className=' text-[20px] mb-7 mt-7 text-left'>We map out your entire logistics flow, so you always know the whereabouts of your cargo. With our user-friendly tool, you have full control and can make quick adjustments when necessary.</p>
          <div className=''>
          <AnimaButton text={"Discover our Customer Portal"} />
          </div>
        </div>
        <div className='flex justify-center items-center w-1/2 h-1/2 max-sm:w-full max-sm:mt-[10vh]'>
          <div className=' w-11/12 h-full'>
            <img className='rounded-bl-[60px]'
            src='/img/desktop.png'
            ></img>
          </div>
        </div>
      </div>

      <div className='relative h-[200vh] mt-[10vh] mb-[20vh] '>
        <div className='h-1/2'></div>
    <div className=' absolute top-[26.7vh] left-0 w-11/12 rounded-tr-[70px] rounded-br-[70px] h-[110vh]  overflow-hidden border-white border-[1px] border-l-0'>
        <div className='h-2/3 w-full relative'>
            <video className="justify-end w-full h-full object-cover text-white absolute inset-0" autoPlay loop>
                <source src='Manuport_Logistics.mp4' type="video/mp4"></source>
            </video>
            <div className='absolute bottom-7 left-7 text-white text-9xl font-bold  max-sm:text-4xl'>
                <h1>A Unique</h1>
                <h1>Company Culture</h1>
            </div>
        </div>
            <div className={` h-1/3 transition-all duration-300 ${colorMode ? ' bg-[#1f1c16]' : ' bg-[#00112e]'}`}>
                  <h1 className='w-2/3 text-7xl ml-10 mt-7 max-sm:text-4xl' style={{
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    backgroundImage: 'linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'
                  }}>
                  With a heart for logistics and great teamwork
                  </h1>
            </div>
          </div>

          <div className={`bottom-0 w-full h-1/2 transition-all duration-300 ${colorMode ? ' bg-[#1f1c16]' : ' bg-[#00112e]'} z-[-1] flex items-center justify-center`}>
    <div className='text-white w-[1/2]'>
        <div className="w-2/5  ml-[40vw] mt-[100px] text-left text-2xl max-sm:w-full max-sm:ml-4">
          <p className='mb-6'> The MPL family: a team that consists of more than 700 differentiators, spread across the globe. They all have one thing in common: a passion for logistics! They're highly skilled and hands-on, driven by the goal of making logistics more efficient and reliable, and with a commitment to putting our customers first. We do this by using our creative solutions to gain customers' trust, and deliver satisfaction.</p> 
        
        <AnimaButton text={'Join Our Team'}/>
        </div>
    </div>
</div>


        </div>
        
    </div>
  );
}

export default Info;
