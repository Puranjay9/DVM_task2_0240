import React from 'react'
import Navbar from './componenets/Navbar'
import Page from './componenets/page'

function HomePage() {
  return (
    <div className="text-6xl bg-gray-800">
        <div className='nav'>
            <Navbar/>
            <Page/>
        </div>
    </div>
  )
}

export default HomePage