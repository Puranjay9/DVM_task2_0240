import React from 'react'
import Carouselslider from './Carouselslider'
import AnimaButton from './AnimaButton'

const slides = [
    {
        tag : "Company",
        title : "The Journey of Manuport Logistics Spain: Growth, Challenges, and Successes",
        text : "Manuport Logistics has just completed a year of consolidation in Spain, during which the teams were integrated. It is now about to open new offices in Valencia and plans to open offices in Alicante and Algeciras.",
        image : "/slider/bluegroup.webp"
    },
    {
        tag : "Company",
        title : "The Journey of Manuport Logistics Spain: Growth, Challenges, and Successes",
        text : "Manuport Logistics has just completed a year of consolidation in Spain, during which the teams were integrated. It is now about to open new offices in Valencia and plans to open offices in Alicante and Algeciras.",
        image : "/slider/bluegroup.webp"
    },
    {
        tag : "Company",
        title : "The Journey of Manuport Logistics Spain: Growth, Challenges, and Successes",
        text : "Manuport Logistics has just completed a year of consolidation in Spain, during which the teams were integrated. It is now about to open new offices in Valencia and plans to open offices in Alicante and Algeciras.",
        image : "/slider/bluegroup.webp"
    },
    {
        tag : "Company",
        title : "The Journey of Manuport Logistics Spain: Growth, Challenges, and Successes",
        text : "Manuport Logistics has just completed a year of consolidation in Spain, during which the teams were integrated. It is now about to open new offices in Valencia and plans to open offices in Alicante and Algeciras.",
        image : "/slider/bluegroup.webp"
    },
    {
        tag : "Company",
        title : "The Journey of Manuport Logistics Spain: Growth, Challenges, and Successes",
        text : "Manuport Logistics has just completed a year of consolidation in Spain, during which the teams were integrated. It is now about to open new offices in Valencia and plans to open offices in Alicante and Algeciras.",
        image : "/slider/bluegroup.webp"
    },
    {
        tag : "Company",
        title : "The Journey of Manuport Logistics Spain: Growth, Challenges, and Successes",
        text : "Manuport Logistics has just completed a year of consolidation in Spain, during which the teams were integrated. It is now about to open new offices in Valencia and plans to open offices in Alicante and Algeciras.",
        image : "/slider/bluegroup.webp"
    },
    
]

function Blog() {
  return (
    <div className='relative'>
        <div className=' left-0 z-[0] rounded-tr-[40px]  rounded-br-[60px] bg-blue-950 w-3/4 h-[140vh] max-sm:h-[100vh]'>
        <div className='ml-11 '>
            <h1 className='text-base text-white '>BLOG</h1>
            <h1 className=' text-5xl text-white mb-14'>What’s New at MPL</h1>
                <div>
                <AnimaButton text={"All Articles "}/>
                </div>
            </div>

            <div className='absolute max-sm:left-0 max-sm:p-0 max-sm:m-0'>
        <Carouselslider slides ={slides} />
        </div>
        </div>
        
    </div>
  )
}

export default Blog