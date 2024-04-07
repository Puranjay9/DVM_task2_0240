import React from 'react'
import Slideshow from './Slideshow'

function Page() {
  return (
   <div className='mt-[145px]'>
    <div className='flex h-screen z-1'> {/*text and the video */}
        <div className='flex-1 flex  bg-white text-txt-clr p-8'>
            <div className='absolute text-9xl font-bold'>
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

            <div className="flex-1 flex items-center justify-center p-8">
                <video className="rounded-lg shadow-lg" autoPlay={true}>
                    <source src='Manuport_Logistics.mp4' type="video/mp4"></source>
                </video>
            </div>
        </div>
    </div>
    <Slideshow/>
   </div>
  )
}

export default Page