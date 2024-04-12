import React from 'react'
import Navbar from './componenets/Navbar'
import Page from './componenets/page'
import LocationsPage from './componenets/LocationPage'
import Info from './componenets/Info'
import Position from './componenets/Position'
import Blog from './componenets/Blog'

function HomePage() {
  return (
    <div className="text-6xl bg-inherit">
        <div className='nav'>
            <Navbar/>
            <Page/>
            <LocationsPage/>
            <Info/>
            <Position/>
            <Blog/>
        </div>
    </div>
  )
}

export default HomePage