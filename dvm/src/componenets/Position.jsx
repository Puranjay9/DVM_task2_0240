import React from 'react'
import CardInfo from './CardInfo'
import AnimaButton from './AnimaButton'

const card1 = 
  {
  title : "Pricing & Operations Associate",
  text : "MPL is a fast-growing logistic partner, where ability to change, customer focus, flexibility and innovation are always in top of mind. We try to actively stimulate entrepreneurship and ownership to develop the best logistics engineers for our customers. Together we face all challenges within a 'BE Different - BE MPL' team. For our MPL Office in Philippines we are currently looking for a Pricing & Operations Associate.",
  image : "/cards/card1.jpg"
}


function Position() {
  return (
    <div className='flex flex-row m-11 p-11 text-[#00235d]'>
      <div className='flex flex-col mr-[200px] '>
        <h1 className='text-[#00358d] text-base font-bold'>VACANCIES</h1>
        <h1 >Join</h1>
        <h1>our Team</h1>
        <div className='mt-5'>
          <AnimaButton text={"Discover our Customer Portal"} />
          </div>
      </div>

      <div>   {/* cards */}
        <div className='justify-center items-center w-1/2'>
        <CardInfo title={card1.title} text={card1.text} image={card1.image}/>
        <CardInfo title={card1.title} text={card1.text} image={card1.image}/>
        <CardInfo title={card1.title} text={card1.text} image={card1.image}/>
         </div>
      </div>

    </div>
  )
}

export default Position