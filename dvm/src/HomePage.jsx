import React from 'react'
import Navbar from './componenets/Navbar'
import Page from './componenets/page'
import LocationsPage from './componenets/LocationPage'
import Info from './componenets/Info'
import Position from './componenets/Position'
import Blog from './componenets/Blog'
import { useColorMode } from './ColorModeContextProvider';

function HomePage() {
  const { colorMode} = useColorMode();
  return (
    <div className={``}>
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