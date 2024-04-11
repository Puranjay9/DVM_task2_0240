import React from 'react'
import Slideshow from './Slideshow'

function Page() {
  return (
   <div className='mt-[145px] border-black border-solid'>
    <div className='flex h-screen z-1 w-11/12 border-t border-r border-solid border-[#00112e] rounded-tr-[6rem] z-[1] '> {/*text and the video */}
        <div className='flex-1 flex  bg-white text-txt-clr '>
            <div className="flex-1 flex items-center justify-end">
                <video className=" justify-end w-6/12 h-full mr-0 z-0 object-cover text-white" autoPlay loop>
                    <source src='Manuport_Logistics.mp4' type="video/mp4"></source>
                </video>
            </div>


            <div className='absolute text-9xl left-11 font-bold'>
                <h1>Freight</h1>
                <h1>forwarding.</h1>
                <div className='flex'>
                    <h1>Done</h1>
                    <span 
                    className=" italic text-transparent" 
                    style={{ WebkitTextStroke: '1px black' }}
                    >
                      different.
                    </span>
                </div>
            </div>
        </div>
    </div>
    <Slideshow/>
   </div>
  )
}

export default Page