import React from 'react'
import Navbar from './componenets/Navbar'
import Page from './componenets/page'
import LocationsPage from './componenets/LocationPage'

function HomePage() {
  return (
    <div className="text-6xl bg-gray-800">
        <div className='nav'>
            <Navbar/>
            <Page/>
            <LocationsPage/>
        </div>
    </div>
  )
}

export default HomePage