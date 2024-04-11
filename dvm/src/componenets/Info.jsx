import React from 'react';
import ImagesShow from './ImagesShow';
import AnimaButton from './AnimaButton';

const slider1 = [
   '/slider_images/slider1/image1.png', 
   '/slider_images/slider1/image2.png',
   '/slider_images/slider1/image3.png',
   '/slider_images/slider1/image4.png',
   '/slider_images/slider1/image5.png',
   '/slider_images/slider1/image6.png',        
];

function Info() {
  return (
    <div>
      <div className='flex flex-row m-[80px] p-[60px]'>
        <div className='flex flex-col items-start justify-center w-6/12 h-6/12'>
          <h1 className='text-[#00235d] text-[56px] text-left'>How we Move</h1>
          <p className='text-[#00235d] text-[20px] mb-7 mt-7 text-left'>Manuport Logistics offers a different approach to shipping, guided by creative thinking. Ship, barge, plane, train, truck, or a combination. For you, we move mountains.</p>
          <div className='text-[#00235d]'>
          <AnimaButton text={"Discover Our Services"} />
          </div>
        </div>
        <div className='flex justify-center items-center w-1/2 h-1/2'>
          <div className='shadow-lg rounded-tl-[60px] w-11/12 h-full'>
            <ImagesShow images={slider1} letter={"x"}/>
          </div>
        </div>
      </div>

      <div className='relative flex flex-row'>
  <div className='flex justify-center items-center w-1/2 h-1/2 absolute left-[50px] top-[150px]'>
    <ImagesShow images={slider1} letter={"y"}/>
  </div>

    <div className='w-4/12'></div>
  <div className='  right-0 flex flex-col justify-center  w-8/12 h-screen bg-blue-900 rounded-tl-[60px] rounded-bl-[60px] items-center'>
   <div className='ml-[250px] w-3/5'>
   <h1 className='text-[#fff] text-[56px] text-left'>What we Move</h1>
    <p className='text-[#fff] text-[20px] mb-7 mt-7 text-left'>Behind every shipment lies a world of possibilities. Whether it's raw materials, chemicals, consumer goods, or anything else. What we ship isn’t just cargo, we carry your dreams.</p>
    <div className='text-white'>
    <AnimaButton text={"About our Commodities"} />
    </div>
   </div>
  </div>
        </div>


        <div className='flex flex-row m-[80px] p-[60px]'>
        <div className='flex flex-col items-start justify-center w-6/12 h-6/12'>
          <h1 className='text-[#00235d] text-[56px] text-left'>A Fully Transparent Logistics Flow at your Fingertips</h1>
          <p className='text-[#00235d] text-[20px] mb-7 mt-7 text-left'>We map out your entire logistics flow, so you always know the whereabouts of your cargo. With our user-friendly tool, you have full control and can make quick adjustments when necessary.</p>
          <div className='text-[#00235d]'>
          <AnimaButton text={"Discover our Customer Portal"} />
          </div>
        </div>
        <div className='flex justify-center items-center w-1/2 h-1/2'>
          <div className=' w-11/12 h-full'>
            <img className='rounded-bl-[60px]'
            src='/img/desktop.png'
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
