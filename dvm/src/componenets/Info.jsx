import React from 'react'
import ImagesShow from './ImagesShow'

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
      <ImagesShow images={slider1}/>
    </div>
  )
}

export default Info