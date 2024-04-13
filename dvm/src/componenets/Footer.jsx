import React ,{useState} from 'react'
import NewCard from './NewCard'
import NewCard2 from './NewCard2'

function Footer() {


  return (
    <div>
        <div>{/*Two cards */}
            <div className='flex flex-row max-sm:flex-col items-center justify-center mt-[20vh] mb-[20vh]'>
            <NewCard text={"What We Move"} title={"COMMODITIES"} color={"#ccd6e8"} textcolor={"blue-950"}/>
            <NewCard2/>
            </div>
        </div>

        <div>{/*Last part */}

        </div>
    </div>
  )
}

export default Footer