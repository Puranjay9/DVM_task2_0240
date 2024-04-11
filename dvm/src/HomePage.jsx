import React from 'react'
import Navbar from './componenets/Navbar'
import Page from './componenets/page'
import LocationsPage from './componenets/LocationPage'
import Info from './componenets/Info'
import Position from './componenets/Position'

function HomePage() {
  return (
    <div className="text-6xl">
        <div className='nav'>
            <Navbar/>
            <Page/>
            <LocationsPage/>
            <Info/>
            <Position/>
        </div>
    </div>
  )
}

export default HomePage