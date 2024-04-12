import React from 'react'
import Carouselslider from './Carouselslider'

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
    <div>
        <Carouselslider slides ={slides} slidesToSeen={"2"}/>
    </div>
  )
}

export default Blog