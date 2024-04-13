import React from 'react';
import Navbar from './componenets/Navbar';
import Page from './componenets/page';
import LocationsPage from './componenets/LocationPage';
import Info from './componenets/Info';
import Position from './componenets/Position';
import Blog from './componenets/Blog';
import { useColorMode } from './ColorModeContextProvider';
import Footer from './componenets/Footer';

function HomePage() {
  const { colorMode } = useColorMode();
  return (
    <div className={`w-full `}>
      <Navbar />
      <Page />
      <LocationsPage />
      <Info />
      <Position />
      <Blog />
      <Footer/>
    </div>
  );
}

export default HomePage;
