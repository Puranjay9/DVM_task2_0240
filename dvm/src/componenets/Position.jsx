import React from 'react'
import CardInfo from './CardInfo'

const card1 = 
  {
  title : "Pricing & Operations Associate",
  text : "MPL is a fast-growing logistic partner, where ability to change, customer focus, flexibility and innovation are always in top of mind. We try to actively stimulate entrepreneurship and ownership to develop the best logistics engineers for our customers. Together we face all challenges within a 'BE Different - BE MPL' team. For our MPL Office in Philippines we are currently looking for a Pricing & Operations Associate.",
  image : "/cards/card1.jpg"
}


function Position() {
  return (
    <div className='justify-center items-center'>
      <CardInfo title={card1.title} text={card1.text} image={card1.image}/>
    </div>
  )
}

export default Position