import React, { useEffect, useState , useRef } from 'react'
import CardInfo from './CardInfo'
import AnimaButton from './AnimaButton'
import { useColorMode } from '../ColorModeContextProvider';

const card1 = 
  {
  title : "Pricing & Operations Associate",
  text : "MPL is a fast-growing logistic partner, where ability to change, customer focus, flexibility and innovation are always in top of mind. We try to actively stimulate entrepreneurship and ownership to develop the best logistics engineers for our customers. Together we face all challenges within a 'BE Different - BE MPL' team. For our MPL Office in Philippines we are currently looking for a Pricing & Operations Associate.",
  image : "/cards/card1.jpg"
}


function Position() {

  const [opacity , setOpacity] = useState(0);
  const [trans , setTrans] = useState("translateY(100%)")

  

  useEffect(() =>{
        setOpacity(1);
        setTrans("translateY(0)")
        console.log("print")
      
      },[])

  const { colorMode } = useColorMode();
  return (
    <div className={`flex flex-row m-11 p-11 text-[#00235d] max-sm:flex-col max-sm:m-2 max-sm:p-2 `}>
      <div className={`flex flex-col mr-[200px] max-sm:mr-0 transition-all duration-300 ${colorMode ? ' text-[#ceaa53]' : ' text-[#00235d]'}`}
      
      style={{
        opacity: opacity,
        transform: trans,
        transition: 'opacity 1s ease-out, transform 1s ease-out',
      }}

      >
        <h1 className=' text-base font-bold '>VACANCIES</h1>
        <h1 className='text-7xl'>Join</h1>
        <h1 className='text-6xl'>our Team</h1>
        <div className='mt-5'>
          <AnimaButton text={"Discover our Customer Portal"} />
          </div>
      </div>

      <div>   {/* cards */}
        <div className='justify-center items-center w-1/2 max-sm:w-full'>
        <CardInfo title={card1.title} text={card1.text} image={card1.image}/>
        <CardInfo title={card1.title} text={card1.text} image={card1.image}/>
        <CardInfo title={card1.title} text={card1.text} image={card1.image}/>
         </div>
      </div>

    </div>
  )
}

export default Position